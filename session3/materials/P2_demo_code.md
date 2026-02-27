# P2：課堂 Demo 程式碼索引

> **產出類型**：教學用獨立 HTML Demo 檔案  
> **資料夾位置**：`materials/demos/`  
> **來源教材**：S2_json_intro.md + S3_localstorage_demo.md + S5_api_get.md

---

## 📁 Demo 檔案一覽

| # | 檔案名稱 | 對應教材 | 核心概念 | 難度 |
|---|---------|---------|---------|------|
| 1 | `demo-1-json-viewer.html` | S2 Block 2 | JSON 結構視覺化 | ⭐ |
| 2 | `demo-2-checkin-basic.html` | S3 Block 3 | localStorage + JSON | ⭐⭐ |
| 3 | `demo-3-checkin-with-api.html` | S5 Block 5 | fetch GET + 名言 API | ⭐⭐⭐ |

---

## 🎯 教學時機與用法

### Demo 1 — JSON 視覺化 `demo-1-json-viewer.html`
- **什麼時候用**：Block 2，JSON 教學中段
- **教學重點**：左邊 JSON 原始碼、右邊視覺化卡片，即時同步
- **課堂動作**：讓她改 JSON 值，看右邊即時更新
- **帶到概念**：JSON 是結構化資料，人和電腦都能讀

### Demo 2 — 最小打卡頁面 `demo-2-checkin-basic.html`（核心！）
- **什麼時候用**：Block 3，localStorage 教學核心
- **教學重點**：輸入 → 打卡 → 存 localStorage → DevTools 觀察
- **課堂動作**：打卡 → 開 DevTools → Application → 看到資料 → 刷新還在！
- **帶到概念**：資料流動的完整路徑
- **功能**：輸入框、打卡按鈕、連續天數顯示、歷史紀錄

### Demo 3 — 打卡 + API 名言 `demo-3-checkin-with-api.html`（進階）
- **什麼時候用**：Block 5，API GET 選配環節
- **教學重點**：在 demo-2 基礎上加入 fetch API 的每日鼓勵名言
- **課堂動作**：刷新看不同名言 → 如果有時間在 Console 裡手動 fetch
- **帶到概念**：GET = 去拿資料，程式碼串接外部服務

---

## 📐 檔案設計原則

1. **完全獨立** — 單一 HTML 檔，不依賴外部 library
2. **雙擊即開** — 瀏覽器直接打開
3. **深色主題** — 配合學生的使用習慣
4. **中文介面** — 繁體中文
5. **有中文註解** — `<script>` 內有教學說明
6. **DevTools 友善** — localStorage 的 key 設計清楚易讀

---

## 🔗 相關文件

- `S2_json_intro.md` — JSON 教學腳本
- `S3_localstorage_demo.md` — localStorage + DevTools 教學腳本
- `S5_api_get.md` — API GET 教學腳本
- `demos/README.md` — Demo 資料夾內的使用說明

---

*建立日期：2026-02-27*  
*Vibe Coding Course — Phase 3 產出*
