# ✨ Vibe Cards Workshop

Vibe Coding 第四堂課 — JSON 驅動的卡片系統 + AI 生成

## 學習重點

1. **JSON = 資料** — 改 JSON，畫面跟著變
2. **React = 顯示** — 把 JSON 變成好看的卡片
3. **AI = 生成** — 輸入主題，AI 幫你生卡片
4. **環境變數** — API key 不能寫死在 code 裡（`.env` + `.gitignore`）

## 快速開始

```bash
# 1. 安裝
npm install

# 2. 設定 API key
cp .env.template .env
# 編輯 .env，填入你的 Gemini API key

# 3. 啟動
npm run dev
```

## 檔案結構

```
src/
├── App.jsx          # 主頁面（卡片列表 + AI 生成）
├── App.css          # 樣式
└── data/
    └── cards.json   # 🎯 種子卡片（改這裡 → 頁面變化！）
```

## 動手試試

1. 打開 `src/data/cards.json`，加一張新卡片
2. 改標題、描述、rating → 看頁面即時更新
3. 在 AI 輸入框打「東京甜點推薦」→ 按生成
4. 🎉

## API Key 安全

- `.env` 裡放 API key（**不會被 git 上傳**）
- `.env.template` 是範本（**可以上傳**，告訴別人需要什麼 key）
- `.gitignore` 裡有 `.env`（確保不會意外 commit）

## 取得 Gemini API Key

1. 前往 https://aistudio.google.com/apikey
2. 建立 API key
3. 複製到 `.env` 的 `VITE_GEMINI_API_KEY=`
