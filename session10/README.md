# Session 10：AI 輔助的人脈記憶庫

> **日期：** 2026-08-28
>
> **場景：** 約 2 小時、Zoom 視訊
>
> **對象：** 櫻井妹妹（Azunyan）
>
> **定位：** IDE 與中國境內 AI 工具測試只是暖身；主課題是把她維繫日本客戶、記錄廈門大學新關係的真實需求，做成一個可持續擴充的 Web App。

---

## 一句話版本

```text
用任何當下可用的外部 LLM 整理一段自然語言／語音紀錄
→ 輸出固定格式 payload
→ 貼進自己的 Web App
→ 人工預覽、修正、確認
→ 建立人物與互動紀錄
```

App 本身不內建 LLM API。今天要學的不是如何綁定某一家模型，而是如何讓一個產品透過穩定的資料格式，和 Gemini、Kimi、千問、DeepSeek 或未來其他可用模型合作。

## 為什麼是這個題目

Azunyan 在日本工作時，已經有記住客戶喜好、維繫關係與提供個人化服務的實際經驗。搬到廈門後，她也希望拓展廈門大學校內外的人脈。這個產品把她原本的優勢變成可以每天使用的工具，而不是為練習技術而虛構的題目。

適用關係包括：

- 日本客戶
- 廈大同學、老師與學長姐
- 企業家與業界人士
- 朋友與生活中認識的人

產品定位：

> 幫助我記住每段關係中的重要細節，並知道下一次如何真誠地繼續互動。

## 本堂核心心智模型

```text
External LLM                  Relationship Memory Web App
--------------------------    --------------------------------
接收口述或文字                接收固定格式 payload
整理、分類、不確定性標記  →   驗證格式與必要欄位
回傳 JSON 草稿                顯示預覽並讓人修正
                              保存人物與互動時間軸
```

### Model、Harness、App 各自負責什麼

- **Model：** 理解自然語言，協助整理成結構化草稿。
- **Agentic IDE / Harness：** 讀 repo、修改檔案、執行 terminal、展示 diff、協助完成 App。
- **Web App：** 保存經人工確認的資料，成為可靠的 system of record。

Google 帳號只是登入 TRAE 的方式，不代表 TRAE 一定使用 Gemini。TRAE 的 `Auto` 可能動態路由不同模型；本堂以完整工作流是否穩定為驗收，不以猜測背後模型為重點。

## 學習目標

完成本堂後，Azunyan 應能：

1. 在廈門實測 Antigravity，並建立 TRAE 中國版或其他可用 IDE 備援。
2. 解釋為什麼 LLM 不一定要透過 API 內建在產品裡。
3. 分辨人物的穩定資料與每次互動產生的時間軸資料。
4. 讓外部 LLM 依固定 contract 產生 JSON payload。
5. 將 payload 預覽、修正後才存入 Web App。
6. 用真實驗收流程判斷 AI 輸出是否可信，而不是直接接受。

## 今天的最小成果

第一版 Web App 只需要完成：

- 人物列表
- 人物詳情
- 每位人物的多筆互動紀錄
- 貼入 JSON payload
- 格式驗證與建檔前預覽
- 人工修正與確認
- 本機保存，重新整理後仍存在

### 成功標準

```text
學生用文字或語音描述一段「虛構」互動
→ 任意外部 LLM 產生符合 contract 的 payload
→ App 成功解析並顯示預覽
→ 學生指出至少一個需要確認的欄位
→ 修正後建立人物與互動紀錄
→ 重新整理頁面後資料仍存在
```

## 今天明確不做

- 不在 App 內串接 LLM API。
- 不做登入、多人帳號或雲端資料庫。
- 不開發 SwiftUI／原生 iOS App。
- 不自動傳送 LINE、微信、Email 或其他訊息。
- 不讓 AI 擅自建立人格畫像或把推測寫成事實。
- 不把真實客戶、未成年人或其他第三方的敏感資料放進課堂測試。
- 不安裝一長串 IDE；一個可工作的 primary 加一個 fallback 即可。

## Web App，而不是 iOS App

Session 10 選擇響應式 Web App，因為它能延續既有 React／Web 經驗，Mac 與手機都能開啟，也最容易示範「從外部 LLM 複製 payload，再貼進 App」的完整流程。

若這個 prototype 之後真的形成每日習慣，再依序考慮：

1. PWA 與手機桌面安裝
2. JSON 匯出／匯入與可靠備份
3. IndexedDB 或其他更適合長期使用的本機儲存
4. 提醒通知與加密同步
5. 最後才評估 SwiftUI iOS 版本

課堂 prototype 可使用 `localStorage`，但正式放入真人資料前，必須先補上備份、資料移轉與隱私設計。

## IDE 與模型策略

### 暖身順序

1. 用她在廈門的日常網路實測 Antigravity。
2. 同一個小 repo 連續完成讀取、最小修改、diff 與本機執行。
3. 若核心請求連續失敗兩次，不再排障，改用 TRAE 中國版。
4. 若 TRAE 中國版也不能登入或執行，使用原本可工作的 VS Code／IDE 繼續產品課。

老師的 TRAE 國際版只能用來熟悉介面，不能證明中國版在廈門可用；中國版的網路、帳號與模型必須由學生本人實測。

### 外部 LLM

使用她當下能正常登入、願意日常使用的一個模型即可。模型只負責產生 payload 草稿，不能直接寫入資料庫。換模型時 contract 不變。

## 人的判斷與隱私邊界

每一條資料都應區分：

- **對方親口說過的事**
- **自己觀察或感受到的事**
- **AI 提出的可能建議**

AI 不得把不確定日期補成精確日期，也不得從零碎資訊推測健康、財務、政治、宗教、家庭狀況或人格。涉及兒童、住址、證件、聯絡方式、健康、財務及私人秘密的內容，不應作為課堂 payload；真正有必要保存時，也要先重新評估同意、用途、保存位置與刪除方式。

## 課堂文件

- [`live-runbook.md`](./live-runbook.md)：兩小時現場流程、分流與時間控制
- [`payload-contract.md`](./payload-contract.md)：資料格式、外部 LLM prompt 與虛構範例
- [`research/china-ai-developer-stack-2026.md`](./research/china-ai-developer-stack-2026.md)：中國境內工具與工作流背景研究
- [`research/session10-tool-shortlist-and-harness-feasibility.md`](./research/session10-tool-shortlist-and-harness-feasibility.md)：工具候選與 Harness 概念研究；不是現行教案
