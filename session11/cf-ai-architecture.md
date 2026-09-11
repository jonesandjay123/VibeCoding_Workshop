# Session 11 技術合約與架構指南：Cloudflare Pages Functions + Workers AI

> 本文件定義 SocialPulse 在 Cloudflare 架構下的全端擴充規格，包含 Pages Functions 路由設定、Workers AI 模型選型、JSON Schema 結構化輸出規格，以及前端漸進增強實作。

---

## 1. 系統架構總覽

```text
[瀏覽器客戶端 (React 19 + Vite)]
   │
   ├── 模式 A：手動貼入模式 (現有功能，完全離線/本機)
   │     └── 直接貼入 JSON → parse → validate → 預覽 → localStorage
   │
   └── 模式 B：✨ AI 自動整理模式 (邊緣全端擴充)
         │
         ▼ HTTP POST /api/structure-memory (帶入自然語言敘述)
[Cloudflare Pages Functions (Edge Runtime)]
   │
   ▼ context.env.AI.run("@cf/zai-org/glm-4.7-flash", { schema, ... })
[Cloudflare Workers AI (免費額度：每日 10,000 Neurons)]
   │
   ▼ 回傳嚴格符合 JSON Schema 的結構化 JSON
[前端預覽與人工校正]
   │
   ▼ 經使用者點擊確認
[儲存至瀏覽器 localStorage]
```

---

## 2. Cloudflare Pages Functions 實作規格

在 SocialPulse 專案根目錄下建立 `/functions/api/structure-memory.ts`：

```typescript
// functions/api/structure-memory.ts
interface Env {
  AI: any; // Cloudflare Workers AI Binding
}

// 與 SocialPulse 前端完全一致的 Payload Schema
const STRUCTURED_PAYLOAD_SCHEMA = {
  type: "object",
  properties: {
    schemaVersion: { type: "string", enum: ["1.0"] },
    person: {
      type: "object",
      properties: {
        name: { type: "string" },
        category: { 
          type: "string", 
          enum: ["Japanese Client", "XMU Student/Faculty", "Business/Industry", "Friend/Personal", "Other"] 
        },
        organization: { type: ["string", "null"] },
        role: { type: ["string", "null"] },
        tags: { type: "array", items: { type: "string" } },
        confirmedFacts: { type: "array", items: { type: "string" } }
      },
      required: ["name", "category", "tags", "confirmedFacts"],
      additionalProperties: false
    },
    interaction: {
      type: "object",
      properties: {
        date: { type: "string", description: "YYYY-MM-DD or current date if unstated" },
        type: { 
          type: "string", 
          enum: ["Online Meeting", "Coffee/Meal", "Campus Encounter", "Event/Fair", "Message/Email", "Other"] 
        },
        summary: { type: "string" },
        whatTheySaid: { type: "array", items: { type: "string" } },
        myObservations: { type: "array", items: { type: "string" } },
        agreedActions: { type: "array", items: { type: "string" } },
        followUp: {
          type: ["object", "null"],
          properties: {
            nextAction: { type: "string" },
            targetDate: { type: ["string", "null"] }
          },
          required: ["nextAction"],
          additionalProperties: false
        }
      },
      required: ["date", "type", "summary", "whatTheySaid", "myObservations", "agreedActions"],
      additionalProperties: false
    },
    requiresReview: {
      type: "array",
      items: { type: "string" },
      description: "Any missing or ambiguous information that the user must double-check."
    }
  },
  required: ["schemaVersion", "person", "interaction", "requiresReview"],
  additionalProperties: false
};

const SYSTEM_PROMPT = `
You are a precise relationship data structuring assistant for SocialPulse.
Your job is to convert informal notes or oral dictation into a structured JSON payload.

CRITICAL RULES:
1. Distinguish between what the person actually said ("whatTheySaid") and the user's subjective impression ("myObservations").
2. DO NOT hallucinate, fabricate, or assume names, dates, or sensitive facts. If unsure, mark in "requiresReview" and use null or general descriptions.
3. Keep the language natural and consistent with the input (Chinese or Japanese).
4. Output MUST adhere strictly to the JSON schema.
`;

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const { text } = await context.request.json<{ text: string }>();

    if (!text || text.trim().length === 0) {
      return new Response(JSON.stringify({ error: "Missing text content" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    if (!context.env.AI) {
      return new Response(
        JSON.stringify({ 
          error: "Workers AI binding 'AI' is not configured on Cloudflare Dashboard." 
        }), 
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    // 調用 Cloudflare 內建免費多語言模型
    // @cf/zai-org/glm-4.7-flash: 具備優秀的中文/日文能力與結構化輸出穩定度
    const response = await context.env.AI.run("@cf/zai-org/glm-4.7-flash", {
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `Please structure the following interaction log:\n\n${text}` }
      ],
      response_format: {
        type: "json_schema",
        json_schema: {
          name: "StructuredImportPayload",
          strict: true,
          schema: STRUCTURED_PAYLOAD_SCHEMA
        }
      }
    });

    // 取得結構化結果
    const parsedPayload = typeof response === "string" ? JSON.parse(response) : response;

    return new Response(JSON.stringify({ success: true, payload: parsedPayload }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err: any) {
    return new Response(
      JSON.stringify({ 
        error: "AI structuring failed", 
        details: err.message || String(err) 
      }), 
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
```

---

## 3. 前端漸進增強（Progressive Enhancement）整合

在 `src/components/ImportMemoryModal.tsx`（或對應導入 Modal）中，採用雙 Tab 或摺疊設計：

```tsx
// 概念示意
export function ImportMemoryModal({ isOpen, onClose, onSave }: Props) {
  const [mode, setMode] = useState<"ai" | "manual">("ai");
  const [rawText, setRawText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [jsonPayload, setJsonPayload] = useState("");
  const [previewData, setPreviewData] = useState<StructuredImportPayload | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAiStructure = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/structure-memory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: rawText }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "AI 整理失敗");

      // 將 AI 生成的 payload 填入預覽
      setPreviewData(data.payload);
      setJsonPayload(JSON.stringify(data.payload, null, 2));
    } catch (e: any) {
      setError(`自動整理異常：${e.message}。您可以切換至手動貼入模式。`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex border-b mb-4">
        <button 
          className={`px-4 py-2 ${mode === "ai" ? "border-b-2 border-indigo-600 font-bold" : ""}`}
          onClick={() => setMode("ai")}
        >
          ✨ 自然語言 AI 整理
        </button>
        <button 
          className={`px-4 py-2 ${mode === "manual" ? "border-b-2 border-indigo-600 font-bold" : ""}`}
          onClick={() => setMode("manual")}
        >
          📋 手動 JSON 貼入 (離線備援)
        </button>
      </div>

      {mode === "ai" ? (
        <div>
          <textarea
            placeholder="今天在廈大圖書館遇到張教授，聊到下學期的設計研究專題。他建議我先讀..."
            value={rawText}
            onChange={(e) => setRawText(e.target.value)}
            rows={4}
          />
          <button 
            disabled={isLoading || !rawText.trim()} 
            onClick={handleAiStructure}
          >
            {isLoading ? "邊緣 AI 正在結構化..." : "✨ 整理成結構化紀錄"}
          </button>
        </div>
      ) : (
        <textarea
          placeholder="貼上來自外部 ChatGPT/Kimi/Gemini 的 JSON Payload..."
          value={jsonPayload}
          onChange={(e) => handleManualJsonInput(e.target.value)}
          rows={6}
        />
      )}

      {/* 無論是 AI 整理還是手動 JSON，都必須走相同的預覽與確認流程 */}
      {previewData && (
        <PreviewAndConfirmationSection 
          payload={previewData} 
          onConfirmSave={onSave} 
        />
      )}
    </Modal>
  );
}
```

---

## 4. 驗收案例範例（可在現場進行測試）

### 測試文本 A（廈大生活場景）
```text
今天下午在南光餐廳遇到同系的陳學姐，她目前在大四準備出國留學。
她跟我分享了去日本交換的申請經驗，特別提到日語檢定 N1 的準備技巧。
她喜歡喝五十嵐的四季春微糖微冰。我答應下週把我的履歷草稿寄給她看，請她幫忙提意見。
```

### 預期 AI 產出重點檢核
- `person.name`: `"陳學姐"`
- `person.category`: `"XMU Student/Faculty"`
- `interaction.type`: `"Campus Encounter"`
- `interaction.whatTheySaid`: 包含留學準備與 N1 技巧
- `interaction.myObservations`: 喜歡喝五十嵐四季春微糖微冰
- `interaction.agreedActions`: 下週把履歷草稿寄給學姐
- `requiresReview`: 標記「陳學姐的真實全名尚未確認」、「具體信箱或寄送方式尚未確認」
