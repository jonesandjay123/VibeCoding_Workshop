# Session 4 — 完整 3 小時課程節奏表

## ⏱ 時間表

| 時間 | 階段 | 內容 | Jones 的角色 |
|------|------|------|-------------|
| 0:00-0:30 | 🎬 第一幕：震撼 | Trip Planner live demo + Jarvis 即時寫入 | 展示者 |
| 0:30-1:15 | 🔧 第二幕：動手 | 打開 starter-project → 改 JSON → 看變化 | 引導者 |
| 1:15-1:45 | 🤖 第三幕：AI | 設 .env → AI 生成卡片 → prompt 實驗 | 協助者 |
| 1:45-2:15 | 🚀 第四幕：上線 | npm build → GitHub Pages 部署 | 教練 |
| 2:15-2:45 | 🎨 第五幕：改裝 | 改主題、改樣式、加功能 | 旁觀者 |
| 2:45-3:00 | 📝 收尾 | 回顧 + 下次預告 | 引導者 |

---

## 🎬 第一幕：震撼（30 min）

### 開場白（建議逐字）
> 「前幾堂我們做了很多東西，今天我想讓你看一個我自己最近做的專案。」

### 步驟

1. **打開 Trip Planner**（手機 or 電腦）
   - 讓她拖幾張卡片、看深色模式、看留言功能
   - 「這整個東西，背後就是一張 JSON」

2. **Jarvis 即時寫入**
   - Jones 在 Slack 跟 Jarvis 說：「幫我加一張原宿的卡」
   - 她的畫面即時出現新卡片
   - 「看到了嗎？我的 AI 助手直接改了背後的 JSON，頁面就更新了」

3. **帶出核心概念**
   - JSON = 資料（食材清單）
   - React = 顯示（廚師煮成料理）
   - AI = 操作資料（自動幫你想食材）

---

## 🔧 第二幕：動手（45 min）

### 步驟

1. **打開 starter-project**
   ```bash
   cd session4/starter-project
   npm install
   npm run dev
   ```
   - 她看到紫色漸層的 Vibe Cards 頁面

2. **改 JSON → 頁面變化**
   - 打開 `src/data/cards.json`
   - 改標題 → 存檔 → 頁面即時更新（hot reload）
   - 加一張新卡片
   - 「看到了嗎？你改 JSON，頁面就跟著變」

3. **看 App.jsx（簡單解釋）**
   - 不用逐行看
   - 只點出：「這裡讀 JSON」「這裡顯示卡片」「這裡呼叫 AI」
   - 重點是 mental model，不是語法

---

## 🤖 第三幕：AI（30 min）

### 步驟

1. **設定 .env**
   ```bash
   cp .env.template .env
   ```
   - 教她：「API key 就像密碼，不能放在 code 裡」
   - 「.gitignore 會確保 .env 不會被上傳到 GitHub」
   - 填入 Gemini API key（用 Jones 的，課後刪除）

2. **AI 生成卡片**
   - 重啟 dev server（讓 .env 生效）
   - 在輸入框打「東京甜點推薦」→ 按 AI 生成
   - 3 張卡片出現！

3. **Prompt 實驗**
   - 改 prompt 主題：動漫推薦、韓國旅行、學英文資源
   - 讓她自己試不同的輸入
   - 「AI 回什麼取決於你怎麼問它」

---

## 🚀 第四幕：上線（30 min）

### 步驟

1. **Build**
   ```bash
   npm run build
   ```
   - 解釋：dev mode vs production build

2. **部署選項（選一個）**

   **Option A: GitHub Pages**
   - 在她的 GitHub 建 repo
   - push code
   - 設定 GitHub Pages

   **Option B: Netlify Drop（更快）**
   - 打開 netlify.com/drop
   - 把 `dist/` 資料夾拖進去
   - 30 秒上線

3. **🎉 分享 URL**
   - 她用手機打開自己的網站
   - 「這是你的網站，全世界都看得到！」

---

## 🎨 第五幕：自由改裝（30 min）

### 建議方向（讓她選）
- 🎨 改顏色（App.css 的 gradient）
- 📝 改主題（cards.json 換成她想要的）
- 🤖 改 AI prompt（讓 AI 產不同風格的卡片）
- ✨ 加功能（刪除按鈕？搜尋？分類篩選？）

### Jones 的角色
- 不要主導，讓她選方向
- 只在她卡住時提示
- 鼓勵她「試試看改了會怎樣」

---

## 📝 收尾（15 min）

### 回顧
- 「今天你學了什麼？」
- 讓她自己講（reverse teaching）

### 下次預告
- 「如果你想讓這個網站更厲害，下次你想加什麼？」
- 記錄她的答案 → Session 5 的方向

---

## ⚠️ 注意事項

- 課後**刪除 .env 裡的 API key**
- 如果她 push 到 GitHub，確認 `.gitignore` 有包含 `.env`
- 不要解釋太多 React 語法，focus on 「改了 → 看到變化」的體驗
