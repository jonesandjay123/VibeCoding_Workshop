# 🎀 Vibe Coding Course — 課堂 Demo 檔案

> 配合 S3（JavaScript 小魔法）和 S4（API 是什麼）使用的獨立示範檔案。
> 所有檔案雙擊就能在瀏覽器開，不需要安裝任何東西！

---

## 📁 檔案清單

| # | 檔案 | 對應課程 | 說明 |
|---|------|---------|------|
| 1 | `demo-1-alert.html` | S3 Demo 1 | 最簡單的 JS：按鈕 → alert 跳出小視窗 |
| 2 | `demo-2-darkmode.html` | S3 Demo 3 | Dark Mode 切換：JS 操控 CSS class |
| 3 | `demo-3-todo.html` | S3 Demo 4 | 動態新增 Todo：用 JS 即時生成 HTML |
| 4 | `demo-4-api-dogs.html` | S4 Demo 1 | fetch Dog API 顯示隨機狗狗圖片 |
| 5 | `demo-5-api-anime.html` | S4 Demo 2 | fetch Jikan API 搜尋動漫資料 |

---

## 🚀 使用方式

1. **直接雙擊** `.html` 檔案，瀏覽器就會打開
2. 不需要 `npm`、不需要 `node`、不需要任何安裝
3. Demo 4 和 5 需要**網路連線**（要呼叫外部 API）

---

## 🌐 語言切換功能（中文 / 日本語）

所有 Demo 頁面都支援 **中文 ↔ 日文** 即時切換！

### 使用方式
- 每個頁面**右上角**都有語言切換按鈕：`🇨🇳 中文` / `🇯🇵 日本語`
- 點擊即可切換，所有 UI 文字會立即更新
- 預設語言為**中文**

### 技術細節
- 語言選擇儲存在 `localStorage`（key: `demo-lang`），跨頁面保持一致
- 靜態文字使用 `data-zh` / `data-ja` 屬性 + `textContent` 替換
- 複雜 HTML 區塊使用 `.i18n-zh` / `.i18n-ja` class 切換顯示/隱藏
- 動態生成的文字（計數器、API 狀態等）透過 JS 翻譯物件 `i18n` 處理
- 輸入框 placeholder 使用 `data-zh-placeholder` / `data-ja-placeholder`

### 翻譯原則
- 技術術語保留英文（`fetch`, `API`, `JSON`, `classList`, `alert` 等）
- 日文翻譯採自然口語風格
- `<script>` 裡的中文程式碼註解維持不動（教學用途）

---

## 📋 各 Demo 詳細說明

### Demo 1：打招呼 Alert ✨
- **學到什麼**：`onclick` + `alert()` — 按了有反應的最小單位
- **黃金公式**：**當**按鈕被點擊，**對**瀏覽器，**做**跳出 alert
- **重點**：這是全世界最小的 JavaScript！

### Demo 2：Dark Mode 切換 🌙
- **學到什麼**：`classList.toggle()` — JS 只是開關，CSS 負責外觀
- **黃金公式**：**當**按鈕被點擊，**對** body 的 classList，**做** toggle dark-mode
- **重點**：模擬 kawaii 風格網站，展示淺色 ↔ 深色的切換
- **互動**：右下角的月亮/太陽按鈕

### Demo 3：動態新增 Todo ✨
- **學到什麼**：`createElement` + `appendChild` — JS 可以即時生成 HTML
- **黃金公式**：**當**追加按鈕被點擊，**對** todo-list，**做**建立新項目並塞進去
- **互動功能**：新增、勾選完成、刪除、Enter 送出、淡入/淡出動畫
- **重點**：重新整理會消失（因為沒有存到資料庫）——這是故意的！

### Demo 4：隨機狗狗 API 🐕
- **學到什麼**：`fetch()` + `.then()` + JSON — 第一個 API 呼叫
- **API**：Dog CEO API（`https://dog.ceo/api/breeds/image/random`）
- **重點**：每次按都會得到不同的狗狗，展示 API 的「隨機性」
- **包含**：API 流程圖解（前端 → fetch → 伺服器 → JSON → 顯示）

### Demo 5：動漫搜尋 API 🎌
- **學到什麼**：API 參數（`?q=...&limit=5`）— 同一個 API、不同參數、不同結果
- **API**：Jikan API（`https://api.jikan.moe/v4/anime`）
- **重點**：參數就像 UberEats 的「不要辣」「加大」
- **互動功能**：搜尋框、快速標籤（SPY×FAMILY、葬送的芙莉蓮等）
- **注意**：Jikan API 有頻率限制（每秒 3 次），demo 之間稍微等一下

---

## 🎯 建議教學順序

```
Session 3（JS 小魔法）：
  1. demo-1-alert.html    → 「按了有反應」的最小單位
  2. demo-2-darkmode.html  → 理解「JS 只是在操控 CSS class」
  3. demo-3-todo.html      → 感受「動態生成元素」的威力

Session 4（API 是什麼）：
  4. demo-4-api-dogs.html  → 第一個 API 呼叫 + JSON 概念
  5. demo-5-api-anime.html → API 參數 + 更複雜的資料處理
```

---

## ⚠️ 注意事項

- **Jikan API** 有 rate limit（每秒 3 次），如果回傳錯誤 429，等 2-3 秒再試
- **Dog API** 偶爾會慢一點，耐心等一下就好
- 所有 demo 都有中文註解在 `<script>` 裡面，可以打開 DevTools (F12) 對照看
- 語言切換按鈕使用 `localStorage` 存取偏好，清除瀏覽器資料會重設為中文

---

*建立日期：2026-02-04*
*配合 Vibe Coding Course S3 & S4 使用*
