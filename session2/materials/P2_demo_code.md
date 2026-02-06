# P2：課堂 Demo 程式碼索引

> **產出類型**：教學用獨立 HTML Demo 檔案
> **資料夾位置**：`materials/demos/`
> **來源教材**：S3_js_demo.md + S4_api_demo.md

---

## 📁 Demo 檔案一覽

| # | 檔案名稱 | 對應教材 | 核心概念 | 難度 |
|---|---------|---------|---------|------|
| 1 | `demo-1-alert.html` | S3 Demo 1 | `onclick` + `alert()` | ⭐ |
| 2 | `demo-2-darkmode.html` | S3 Demo 3 | `classList.toggle()` | ⭐⭐ |
| 3 | `demo-3-todo.html` | S3 Demo 4 | `createElement` + `appendChild` | ⭐⭐⭐ |
| 4 | `demo-4-api-dogs.html` | S4 Demo 1 | `fetch()` + JSON | ⭐⭐ |
| 5 | `demo-5-api-anime.html` | S4 Demo 2 | API 參數（query string） | ⭐⭐⭐ |

---

## 🎯 教學時機與用法

### Session 3：JavaScript 小魔法

#### Demo 1 — 打招呼 Alert `demo-1-alert.html`
- **什麼時候用**：JS 教學的第一步，開場破冰
- **教學重點**：讓學生體驗「按了有反應」→ 建立信心
- **課堂動作**：直接打開檔案，按按鈕，問學生「你看到什麼？」
- **帶到概念**：黃金公式「當＿＿事件，對＿＿元素，做＿＿動作」

#### Demo 2 — Dark Mode 切換 `demo-2-darkmode.html`
- **什麼時候用**：講完 alert 和 console.log 後，進入實用功能
- **教學重點**：JS 只做一件事（toggle class），CSS 負責所有外觀
- **課堂動作**：按右下角按鈕切換 → 打開 DevTools 看 body 的 class 變化
- **帶到概念**：HTML/CSS/JS 三兄弟分工合作

#### Demo 3 — 動態新增 Todo `demo-3-todo.html`
- **什麼時候用**：Session 3 最後的 demo，展示 JS 最帥的能力
- **教學重點**：JS 可以在使用者操作時「即時生成新的 HTML」
- **課堂動作**：讓學生跟著打字、新增、勾選、刪除 → 體驗互動感
- **帶到概念**：靜態海報 vs 互動網頁的根本差別
- **預留伏筆**：「重新整理就消失了哦——如果想存住，就需要後端 / 資料庫」

### Session 4：API 是什麼

#### Demo 4 — 隨機狗狗 API `demo-4-api-dogs.html`
- **什麼時候用**：講完 API = 叫外送的比喻後，第一個 live demo
- **教學重點**：fetch → 等待 → JSON 回來 → 顯示在畫面上
- **課堂動作**：按按鈕看不同的狗 → 讓學生理解「每次都是新的」
- **帶到概念**：fetch = 下單，JSON = 送到手上的包裹，.then = 「然後」
- **包含**：頁面內有 API 流程圖解

#### Demo 5 — 動漫搜尋 API `demo-5-api-anime.html`
- **什麼時候用**：Demo 4 之後，帶入「參數」概念
- **教學重點**：同一個 API + 不同參數 = 不同結果
- **課堂動作**：搜 SPY×FAMILY → 換成學生喜歡的動漫 → 讓學生自己搜
- **帶到概念**：`?q=...&limit=5` 就像 UberEats 選「不要辣」「加大」
- **注意**：Jikan API 有 rate limit，demo 之間等 2-3 秒

---

## 📐 檔案設計原則

所有 Demo 檔案遵循以下原則：

1. **完全獨立** — 單一 HTML 檔，不依賴任何外部 library 或 npm
2. **雙擊即開** — 直接在瀏覽器打開就能跑
3. **有中文註解** — `<script>` 內每一段都有解說
4. **視覺統一** — 粉色系 kawaii 風格，配合學生的審美
5. **內建解說** — 每個 demo 頁面上都有「這行在幹嘛」的程式碼說明區
6. **console 友善** — 打開 DevTools 可以看到偵探筆記

---

## 🔗 相關文件

- `S3_js_demo.md` — JavaScript Demo 完整教材（含逐行解說）
- `S4_api_demo.md` — API Demo 教學示範腳本
- `demos/README.md` — Demo 資料夾內的使用說明

---

*建立日期：2026-02-04*
*Vibe Coding Course — Phase 2 產出*
