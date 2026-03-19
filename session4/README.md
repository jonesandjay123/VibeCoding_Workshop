# Session 4: JSON-Driven UI + AI Generation — 讓 AI 聽你的話

> **日期**：2026-03-20（四）
> **對象**：櫻井さん（Azunyan）
> **時長**：約 3 小時

## 內容概覽

第四堂課從「Jones 的 Trip Planner live demo」出發，讓她親眼看到 JSON 驅動 UI + AI 即時寫入的威力，再帶她從零建一個屬於自己的卡片系統。核心主題是「JSON = 資料，React = 顯示，AI = 生成」。

### 資料夾結構

```
session4/
├── README.md                 # 本文件（課程說明）
├── workshop_plan.md          # 完整 3 小時課程節奏表
└── starter-project/          # 🎯 Vibe Cards 起始模板
    ├── .env.template         # API key 範本（教正確觀念）
    ├── .gitignore            # .env 不會被 commit
    ├── README.md             # 教學步驟
    ├── package.json
    ├── vite.config.js
    ├── index.html
    └── src/
        ├── main.jsx
        ├── App.jsx           # 主頁面（卡片列表 + AI 生成）
        ├── App.css           # 紫色漸層樣式
        └── data/
            └── cards.json    # 🎯 種子卡片（改這裡 → 頁面變化！）
```

## 學習目標

### 第一幕：震撼 — Live Demo（30 min）
- 體驗 Trip Planner（Jones 的真實專案）
- 看 Jarvis 即時透過 API 寫入資料 → 頁面即時更新
- 理解「背後就是 JSON」的概念

### 第二幕：動手 — 從零建卡片系統（45 min）
- 打開 `starter-project/`，`npm install` + `npm run dev`
- 修改 `cards.json` → 看頁面即時變化（hot reload）
- 加一張自己的卡片、改標題、改分類
- 理解 JSON → React → 畫面 的資料流

### 第三幕：AI — 讓 AI 幫你生卡片（30 min）
- 設定 `.env`（API key 安全觀念）
- 輸入主題 → Gemini AI 生成 3 張卡片
- 體驗「一句話 → AI 生成 → 畫面更新」的完整流程
- Prompt engineering 初體驗（改 prompt → AI 行為改變）

### 第四幕：上線 — 部署到 GitHub Pages（30 min）
- `npm run build` → 產出 `dist/`
- GitHub Pages 部署（或 Netlify drop）
- 她有自己的 URL 可以分享！

### 第五幕：自由改裝（30 min）
- 改主題（美食/追劇/學習卡/whatever）
- 改顏色、改 prompt、加功能
- 結尾：「下次你想加什麼？」

## 核心概念

| 概念 | 比喻 | 實作 |
|------|------|------|
| JSON | 食譜裡的食材清單 | `cards.json` |
| React | 廚師把食材變成料理 | `App.jsx` |
| AI (Gemini) | 自動幫你想食材 | API call |
| `.env` | 保險箱放鑰匙 | `VITE_GEMINI_API_KEY` |
| `.gitignore` | 告訴 git「這個不要上傳」 | `.env` 不被 commit |

## 前置要求

- ✅ 完成 Session 1-3
- ✅ Node.js 已安裝
- ✅ GitHub 帳號

## Demo 重點

| 時間點 | 動作 | 預期反應 |
|--------|------|----------|
| 0:05 | Trip Planner demo | 「好酷！」 |
| 0:15 | Jarvis 即時寫入 | 「欸它自己出現了！」 |
| 0:40 | 她改 JSON → 頁面變 | 「原來這麼簡單」 |
| 1:15 | AI 生成卡片 | 「哇它自己生出來了！」 |
| 1:45 | 部署上線 | 「這是我的網站！」 |
| 2:15 | 自由改裝 | 開始有自己的想法 |

---

*Prepared by Jarvis for Jones & Azunyan*
