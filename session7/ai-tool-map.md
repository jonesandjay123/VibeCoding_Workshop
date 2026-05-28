# Session 7 AI 工具鏈地圖

> 這張圖不是要她每個工具都會，而是讓她開始有「工具鏈嗅覺」：知道不同類型的想法，應該找哪一類工具推進。

---

## 一張圖版本

先給妹妹看的版本只保留五類：

```text
想法工具：ChatGPT / Gemini
-> 幫我整理想法

Coding 工具：Antigravity / Codex
-> 幫我改專案

驗證工具：Xcode / Browser
-> 確認真的能跑

發布工具：GitHub / Firebase
-> 讓作品被保存或看見

創作工具：圖片 / 影片 / 音樂 AI
-> 幫作品有外觀與內容
```

老師版完整地圖：

```text
想法
-> 文字整理：ChatGPT / Gemini
-> 程式修改：Antigravity / Codex
-> App 驗證：Xcode
-> 網站預覽：Browser / localhost
-> 版本保存：Git / GitHub
-> 圖像素材：Gemini / Midjourney / Stable Diffusion / ComfyUI
-> 影片素材：Veo / SeedDance / Runway / Kling
-> 音樂素材：Suno / HeartMula
-> 網站發布：Firebase Hosting / GitHub Pages
-> 資料保存：Firestore / localStorage
-> 內容發布：Instagram / YouTube / TikTok / App Store / Web
```

---

## 工具角色表

| 類型 | 工具例子 | 第七堂怎麼講 |
| --- | --- | --- |
| 文字 / 想法整理 | ChatGPT, Gemini | 把模糊想法整理成 MVP、prompt、文案 |
| Agentic coding | Antigravity, Codex | 讀專案、改檔案、修 bug，但額度可能用完 |
| iOS 開發 | Xcode | Build / Run / Simulator，驗證 app 是否真的能跑 |
| Web 開發 | Vite, React, browser | 做網站原型、本地預覽 |
| 版本管理 | Git, GitHub | 保存每個小成功，AI 改壞時能回復 |
| 圖像生成 | Gemini, Midjourney, Stable Diffusion, ComfyUI | App icon、角色頭像、封面、貼文圖 |
| 影片生成 | Veo, SeedDance, Runway, Kling | 短影片、概念影片、社群內容 |
| 音樂生成 | Suno, HeartMula | 背景音樂、短影音氛圍 |
| Hosting | Firebase Hosting, GitHub Pages | 讓作品有公開網址 |
| Database | Firestore, localStorage | 讓資料保存、同步、跨裝置 |
| Automation | Jarvis, scripts, cron | 把重複流程自動化 |

---

## 妹妹版工具宇宙

第七堂不要把工具講太複雜。先限制在：

```text
主要：
Antigravity IDE + Xcode

備用：
Codex，如果她已經有裝

終極備用：
ChatGPT/Gemini 網頁版 + 手動替換 Swift 檔案
```

不建議這堂新增：

- Claude Code
- Gemini CLI
- Antigravity CLI
- Codex CLI
- 更多帳號 / 更多安裝流程

原因不是這些工具不好，而是學生心智負擔會爆掉。

---

## 額度與 CLI 判斷

課程設計上，不要假設 CLI 是可靠的免費續命方案。

原則：

- 同一個生態內的 GUI / IDE / CLI 很可能共享或聚合使用量
- 免費額度可能隨時調整
- 課堂不要賭「某個 CLI 還能白嫖」
- 真正穩的是準備無 agent 模式

無 agent 模式：

```text
網頁 LLM
-> 回傳完整檔案
-> 手動貼回 Xcode
-> Build / Run
```

---

## 四條後續課程線

### Track A: Agentic Coding

繼續練：

- 小步 prompt
- 修改 SwiftUI / Web
- 讀錯誤
- Git 保存 / 回復
- 控制 agent 用量

目標：

> 她可以自己改小東西。

### Track B: AI Creator Stack

開始接觸：

- AI 圖片
- AI 影片
- AI 音樂
- app icon
- poster
- short video
- virtual persona

目標：

> 她知道 AI 不只寫程式，也能做內容。

### Track C: Cloud / Publish Stack

適合 token 用完時教：

- GitHub 是什麼
- Firebase Hosting 是什麼
- Database 是什麼
- Auth 是什麼
- API key 為什麼不能亂放
- 網站怎麼公開

目標：

> 她知道作品怎麼上線。

### Track D: Product / Persona Thinking

引導她想：

- 這個工具給誰用？
- 它的名字是什麼？
- 它的個性是什麼？
- 如果它是 IG 帳號會發什麼？
- 如果它是 app，icon 長怎樣？
- 如果它是網站，首頁一句話是什麼？
- 如果它是短影音頻道，第一支影片是什麼？

目標：

> 她知道做東西不是只有功能，還有定位。

---

## 第七堂可以自然帶出的觀念

### AI Tool Literacy

AI 工具素養：

> 知道不同需求要用哪一類 AI 工具，而不是只知道「問 ChatGPT」。

### AI Stack Sense

AI 工具鏈嗅覺：

> 知道哪些工具適合創作、哪些適合 coding、哪些適合部署、哪些可能變成成本坑。

### AI-Native Creation

AI 原生創作：

> 不只用 AI 寫 code，而是用 AI 把想法變成作品、產品、角色或內容系統。

---

## 對學生最重要的一句話

```text
工具會變，額度會爆，AI 會犯錯。
真正要學的是：怎麼把想法說清楚、拆小、選工具、驗收、保存，然後繼續往前。
```
