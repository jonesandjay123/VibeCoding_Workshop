# Session 5: DailyPlanner 功能優化 + 複習 — 把自己的作品變更好

> **日期**：TBD
> **對象**：櫻井さん（Azunyan）
> **時長**：約 3 小時

## 內容概覽

第五堂課以她自己的 DailyPlanner 為主軸，修 bug + 加功能 + 複習前四堂的指令與概念。不做新專案，而是把現有作品打磨到「可以每天用」的程度。

### 資料夾結構

```
session5/
├── README.md              # 本文件
├── workshop_plan.md       # 完整 3 小時課程節奏表
└── cheatsheet.md          # Session 1-4 指令複習速查卡
```

## 學習目標

### 第一幕：複習速查（30 min）
- **Bash 指令複習**（cd, ls, mkdir, rm, cp, mv, cat）
- **Git 指令複習**（status, add, commit, push, pull, log, branch）
- **npm 指令複習**（install, run dev, run build）
- 用 cheatsheet 做快速問答（她講，不是你講）

### 第二幕：Bug Fix（45 min）
- 一起看她的 DailyPlanner，列出她遇到的問題
- 讓她用 Antigravity **自己描述 bug** → AI 修
- 教她怎麼看 console error → 理解錯誤訊息
- 核心技能：debug mindset（看錯誤 → 找原因 → 修 → 驗證）

### 第三幕：功能優化（45 min）
- **她選想加的功能**（不是你決定）
- 可能的方向：
  - 📅 日期選擇器（date range picker）
  - 🎨 自訂主題色
  - 📱 手機版 UI 優化
  - 💾 匯出功能
  - ✏️ 卡片編輯 modal
- 用 Antigravity 實作，她主導 prompt

### 第四幕：Google Calendar 探索（30 min）
- **不是要做出 Google Calendar**
- 而是：探索「API 能做什麼」的概念
- Demo：用 Google Calendar API 讀取自己的行事曆
- 讓她理解：「你的 app 可以跟其他服務對話」
- 如果時間夠：把 calendar 事件顯示在她的 DailyPlanner 裡

### 第五幕：部署更新 + 收尾（30 min）
- Push 最新版到 GitHub
- 重新部署（GitHub Pages）
- 回顧 Session 1-5 學到的東西
- 討論：接下來她想自己做什麼？

## Google Calendar API 注意事項

### 可行性
- ✅ Google Calendar API 是免費的（有 quota 但個人用很夠）
- ✅ 可以讀取自己的行事曆事件
- ⚠️ 需要 OAuth 2.0 認證（稍微複雜）
- ⚠️ 前端直接呼叫需要 API key + OAuth consent screen

### 教學切入點
- **不要教 OAuth 的技術細節**（太複雜）
- 而是教「API = 跟別人的服務要資料」的概念
- 用 Google 提供的 API Explorer 做 live demo
- 如果要實作：用 Jones 的 API key，課後移除

### 她想做的 vs 現實
| 她想要的 | 現實 | 教學機會 |
|----------|------|----------|
| 超越 Google Calendar | 不可能 | 教她理解「大廠的資源 vs 個人」 |
| 自己的 planner + calendar 數據 | 可行！ | API integration 概念 |
| 更好的 UI | 可以做 | CSS + 設計思維 |

## 前置要求

- ✅ 完成 Session 1-4
- ✅ 她的 DailyPlanner repo 已建立
- ✅ Node.js + Git 已安裝

---

*Prepared by Jarvis for Jones & Azunyan*
