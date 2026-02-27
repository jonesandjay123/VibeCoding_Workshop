# 🎀 Vibe Coding Course — Session 3 Demo 檔案

> 配合 S2（JSON 介紹）、S3（localStorage）、S5（API GET）使用的獨立示範檔案。
> 所有檔案雙擊就能在瀏覽器開，不需要安裝任何東西！

---

## 📁 檔案清單

| # | 檔案 | 對應課程 | 說明 |
|---|------|---------|------|
| 1 | `demo-1-json-viewer.html` | S2 Block 2 | JSON 結構視覺化：左邊原始碼、右邊卡片，即時同步 |
| 2 | `demo-2-checkin-basic.html` | S3 Block 3 | 最小打卡頁面：輸入 → 打卡 → localStorage 存取（核心！）|
| 3 | `demo-3-checkin-with-api.html` | S5 Block 5 | 打卡 + API 每日鼓勵名言（進階版）|

---

## 🚀 使用方式

1. **直接雙擊** `.html` 檔案，瀏覽器就會打開
2. 不需要 `npm`、不需要 `node`、不需要任何安裝
3. Demo 3 需要**網路連線**（要呼叫外部 API）
4. 所有 Demo 使用**深色主題** + **中文介面**

---

## 📋 各 Demo 詳細說明

### Demo 1：JSON 視覺化 📦
- **學到什麼**：JSON 的結構、key-value 概念
- **互動**：即時編輯 JSON → 視覺化卡片同步更新
- **重點**：還包含 .txt / .md / .json 三格比較

### Demo 2：英文打卡（核心！）✨
- **學到什麼**：localStorage 存取、JSON.stringify / JSON.parse、DevTools 觀察
- **功能**：輸入框、打卡按鈕、連續天數顯示、歷史紀錄
- **重點**：打開 DevTools → Application → Local Storage 看到資料
- **關鍵體驗**：刷新頁面 → 資料還在！

### Demo 3：打卡 + 每日鼓勵（進階）🌟
- **學到什麼**：fetch() GET 請求、API 回傳 JSON、備用方案設計
- **API**：Quotable API（備用：Advice Slip API + 離線名言）
- **功能**：demo-2 所有功能 + 每日鼓勵名言 + 換一句按鈕
- **重點**：GET = 去拿資料

---

## ⚠️ 注意事項

- 所有 demo 的 localStorage 共用同一個 key（`checkin-records`），在同一個瀏覽器中資料互通
- Demo 1 不使用 localStorage（純展示）
- 如果 Quotable API 掛了，Demo 3 會自動使用備用名言
- Console（F12）裡有偵探筆記，可以看到資料流動過程

---

*建立日期：2026-02-27*  
*配合 Vibe Coding Course S2 & S3 & S5 使用*
