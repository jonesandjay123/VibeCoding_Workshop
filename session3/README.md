# Session 3: Data Flow & Version Control — 資料是怎麼活著的

> **日期**：2026-02-27（五）
> **對象**：櫻井妹妹（Azunyan）
> **時長**：約 3 小時

## 內容概覽

第三堂課從「她妹妹要中考」的真實需求出發，帶她走過需求拆解 → JSON 資料結構 → localStorage 實作 → Git Branch 體驗。核心主題是「觀察資料怎麼流動」。

### 資料夾結構

```
session3/
├── materials/          # 教材文件
│   ├── S1_course_outline.md    # 完整 3 小時課程節奏表（最重要！）
│   ├── S2_json_intro.md        # JSON 教學腳本
│   ├── S3_localstorage_demo.md # localStorage + DevTools 教學腳本
│   ├── S4_git_branch.md        # Git Branch 教學腳本
│   ├── S5_api_get.md           # API GET 教學（選配）
│   ├── P1_student_cheatsheet.md # 學生速查卡
│   ├── P2_demo_code.md         # Demo 程式碼彙整
│   └── demos/                  # 實作 Demo 程式碼
│       ├── demo-1-json-viewer.html      # JSON 視覺化
│       ├── demo-2-checkin-basic.html     # 最小打卡頁面（核心！）
│       └── demo-3-checkin-with-api.html  # 打卡 + API quote
└── research/           # 課前研究資料
```

## 學習目標

### 模組 1: 需求拆解（結構思維）
- 從真實需求出發畫 User Flow
- 拆解 UI 層 / Logic 層 / Data 層
- 理解「資料長什麼樣」的問題

### 模組 2: JSON 作為資料模型
- JSON 是「電腦看的 .md」
- 結構化資料 vs 純文字
- 設計自己的打卡紀錄結構

### 模組 3: localStorage + DevTools
- localStorage = 瀏覽器裡的小抽屜
- 用 DevTools 觀察資料存取
- JSON.stringify / JSON.parse

### 模組 4: Git Branch 體驗
- Branch = 平行宇宙
- 建立 / 切換 / merge branch
- git log 看專案時間軸

### 模組 5: API GET（選配）
- GET = 去拿資料
- fetch() 實作每日鼓勵名言

## Demo 清單

| Demo | 說明 |
|------|------|
| `demo-1-json-viewer.html` | JSON 結構視覺化，展示打卡資料長什麼樣 |
| `demo-2-checkin-basic.html` | 最小打卡頁面，localStorage 存取核心體驗 |
| `demo-3-checkin-with-api.html` | 打卡 + API 每日鼓勵名言（進階版） |

所有 Demo 都是深色主題、中文介面、單檔 HTML。

## 前置要求

- ✅ 完成 Session 1（HTML/CSS + GitHub Pages）
- ✅ 完成 Session 2（Git CLI + JS 概念 + API 概念）

---

*Prepared by Jarvis for Jones & Azunyan*
