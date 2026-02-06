# S7: LLM API 實戰 — 從 Google AI Studio 到 Cloudflare Workers

> **目標**：讓學生理解 LLM 也是一種 API，並親手部署一個可以呼叫的 endpoint

---

## 📋 教學流程概覽

| 步驟 | 內容 | 時間 |
|------|------|------|
| 1 | 解釋「LLM 也是 API」的概念 | 5 分鐘 |
| 2 | Google AI Studio 試玩 + 創建 API Key | 10 分鐘 |
| 3 | 用 Terminal 測試 API（curl） | 10 分鐘 |
| 4 | 部署到 Cloudflare Workers | 15 分鐘 |
| 5 | 測試自己的 LLM endpoint | 5 分鐘 |

---

## Step 1: LLM 也是 API！

### 講解重點

之前我們玩過的 API：
- 🐕 Dog API → 給我一張隨機狗圖
- 🐱 Cat API → 給我一張隨機貓圖
- 🎌 Anime API → 搜尋動漫角色

**LLM（大型語言模型）也是一樣的概念！**
- 📤 **輸入**：你的問題（prompt）
- 📥 **輸出**：AI 的回答

差別只在於：
- 普通 API：固定格式的資料（JSON、圖片 URL）
- LLM API：智慧生成的文字回應

---

## Step 2: Google AI Studio 試玩

### 2.1 進入 Google AI Studio

🔗 **網址**：https://aistudio.google.com/

### 2.2 試玩對話

1. 點擊 **「Get started」** 或 **「Create」**
2. 選擇 **「Chat prompt」**
3. 輸入任何問題試試看！

### 2.3 創建 API Key

1. 點擊左側選單 **「Get API key」**
2. 點擊 **「Create API key」**
3. 選擇一個 Google Cloud 專案（或創建新的）
4. **複製並保存你的 API Key！** ⚠️ 不要外流

> 💡 API Key 格式：`AIzaSy...` 開頭的一長串字符

---

## Step 3: 用 Terminal 測試 API

### 3.1 找到 API 參考文件

🔗 **Interactions API 文件**：
https://ai.google.dev/api/interactions

### 3.2 用 curl 測試

打開 Terminal（Mac）或命令提示字元（Windows），貼上以下指令：

```bash
curl -X POST https://generativelanguage.googleapis.com/v1beta/interactions \
  -H "x-goog-api-key: 你的API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gemini-2.5-flash",
    "input": "Hello, how are you?"
  }'
```

### 3.3 預期回應

如果成功，你會看到類似這樣的 JSON 回應：

```json
{
  "outputs": [
    {
      "text": "Hello! I'm doing well, thank you for asking...",
      "type": "text"
    }
  ],
  "status": "completed"
}
```

### 3.4 如果失敗了？

| 錯誤 | 可能原因 | 解決方法 |
|------|----------|----------|
| `401 Unauthorized` | API Key 錯誤 | 檢查 Key 是否正確複製 |
| `429 Too Many Requests` | 超過免費額度 | 等一下再試，或換帳號 |
| `400 Bad Request` | JSON 格式錯誤 | 檢查引號、括號 |

---

## Step 4: 部署到 Cloudflare Workers

### 為什麼需要 Workers？

直接在前端網頁呼叫 Google API 有問題：
- ❌ API Key 會暴露在網頁原始碼中
- ❌ 任何人都能看到並盜用你的 Key

**解決方案**：用 Cloudflare Workers 當中間人
- ✅ API Key 安全存放在 Workers 的 Secret 中
- ✅ 前端只知道 Workers 的網址，不知道 Key

```
[你的網頁] → [Cloudflare Worker] → [Google AI API]
              （Key 藏在這裡）
```

### 4.1 登入 Cloudflare

🔗 **網址**：https://dash.cloudflare.com/

沒有帳號的話，用 Google 帳號註冊（免費）

### 4.2 創建 Worker

1. 左側選單點 **「Workers & Pages」**
2. 點 **「Create」** → **「Create Worker」**
3. 給 Worker 取個名字，例如：`my-llm-api`
4. 點 **「Deploy」**（先用預設代碼部署）
5. 部署成功後，點 **「Edit code」** 編輯代碼

### 4.3 貼上 Worker 代碼

刪除預設代碼，貼上以下內容：

```javascript
// Cloudflare Worker: LLM API Proxy
// 用途：安全地呼叫 Google Gemini API

export default {
  async fetch(request, env) {
    // 只接受 POST 請求
    if (request.method !== "POST") {
      return new Response(JSON.stringify({ 
        error: "Please use POST method" 
      }), {
        status: 405,
        headers: { "Content-Type": "application/json" }
      });
    }

    try {
      // 讀取前端傳來的資料
      const body = await request.json();
      const prompt = body.prompt || "Hello";
      const model = body.model || "gemini-2.5-flash";

      // 呼叫 Google AI API
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/interactions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": env.GEMINI_API_KEY  // 從 Secret 讀取
          },
          body: JSON.stringify({
            model: model,
            input: prompt
          })
        }
      );

      const data = await response.json();

      // 整理回應格式
      let text = "";
      if (data.outputs) {
        const textOutput = data.outputs.find(o => o.type === "text");
        if (textOutput) text = textOutput.text;
      }

      return new Response(JSON.stringify({
        ok: true,
        status: response.status,
        text: text
      }), {
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"  // 允許跨域請求
        }
      });

    } catch (error) {
      return new Response(JSON.stringify({ 
        ok: false, 
        error: error.message 
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
};
```

### 4.4 添加 Secret（API Key）

1. 點右上角 **「Save and deploy」**
2. 回到 Worker 設定頁面
3. 點 **「Settings」** → **「Variables」**
4. 在 **「Secrets」** 區塊點 **「Add」**
5. 填入：
   - **Variable name**: `GEMINI_API_KEY`
   - **Value**: 你的 Google AI API Key
6. 點 **「Save and deploy」**

---

## Step 5: 測試你的 LLM Endpoint！

### 5.1 用 curl 測試

```bash
curl -X POST "https://你的worker名稱.你的帳號.workers.dev" \
  -H "Content-Type: application/json" \
  -d '{"prompt":"你好，請用繁體中文回答，你是誰？"}'
```

### 5.2 預期回應

```json
{
  "ok": true,
  "status": 200,
  "text": "你好！我是 Gemini，由 Google 開發的大型語言模型..."
}
```

### 5.3 恭喜！🎉

你現在有了自己的 LLM API endpoint！

之後在任何網頁中，都可以用 JavaScript 呼叫：

```javascript
const response = await fetch("https://你的endpoint", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ prompt: "使用者的問題" })
});
const data = await response.json();
console.log(data.text);  // AI 的回答
```

---

## 🎁 進階：保護你的 Endpoint

如果擔心別人發現你的 endpoint 並濫用，可以加上密碼驗證：

### 修改 Worker 代碼（加入 Token 檢查）

```javascript
export default {
  async fetch(request, env) {
    // 檢查密碼
    const authHeader = request.headers.get("Authorization");
    if (authHeader !== `Bearer ${env.SECRET_TOKEN}`) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    
    // ... 其餘代碼不變
  }
};
```

然後在 Secrets 加入 `SECRET_TOKEN`（自己設定一個密碼）。

呼叫時加上 Header：
```bash
curl -X POST "https://你的endpoint" \
  -H "Authorization: Bearer 你的密碼" \
  -H "Content-Type: application/json" \
  -d '{"prompt":"Hello"}'
```

---

## 📝 學生練習提示

### 給 AI 的 Prompt（生成 Worker 代碼）

如果學生想讓自己的 AI 幫忙生成代碼，可以用這個 prompt：

```
請幫我寫一個 Cloudflare Worker 代碼，功能是：
1. 接收 POST 請求，body 包含 { "prompt": "使用者問題" }
2. 呼叫 Google Gemini API（使用 interactions endpoint）
3. API Key 從環境變數 env.GEMINI_API_KEY 讀取
4. 回傳格式化的 JSON { "ok": true, "text": "AI回答" }
5. 加上 CORS header 允許跨域請求

Google Gemini interactions API 的格式是：
POST https://generativelanguage.googleapis.com/v1beta/interactions
Header: x-goog-api-key: YOUR_KEY
Body: { "model": "gemini-2.5-flash", "input": "問題" }
```

---

## 🔗 參考連結

| 資源 | 網址 |
|------|------|
| Google AI Studio | https://aistudio.google.com/ |
| Gemini API 文件 | https://ai.google.dev/api |
| Interactions API | https://ai.google.dev/api/interactions |
| Cloudflare Workers 教學 | https://developers.cloudflare.com/workers/ |

---

*Last updated: 2026-02-06*
