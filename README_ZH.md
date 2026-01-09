# Vibe Coding Workshop Master Guide
[繁體中文](README_ZH.md) | [日本語](README.md)

> ⚠️ 本工作坊的唯一成功標準：
> 「今天一定要有一個可以公開分享的網址」

> **適合對象**：無 Coding 背景
> **目標**：3 小時內完成「個人作品集網站」並上線
> **核心概念**：不教寫 Code，教「怎麼做 PM (Product Manager) + CD (Creative Director) 來指揮 AI」

---

## 🧠 核心教學原則：分層疊加法

這套教學法的精髓是：**先用「最小可理解單位」讓她看懂，再一層層加上魔法**。

### 6 個 Layer，每一層回答一個問題：

| Layer | 問題 | 概念 |
| :---: | :--- | :--- |
| 1 | 內容是什麼？ | **HTML = 骨架** |
| 2 | 長得像什麼？ | **CSS = 外觀** |
| 3 | 怎麼排？ | **Layout = 版面系統** |
| 4 | 手機怎麼辦？ | **RWD = 自適應** |
| 5 | 有沒有質感？ | **Micro-interactions = 小動效** |
| 6 | 讓世界看見 | **Deploy = 上線** |

> 🎯 你要的不是「一開始就很像成品」
> 而是「她每一步都能理解：我剛加的是什麼」。

---

## 📅 前置準備 (Pre-flight Checklist)

### 學生準備 (Student)
- [ ] **Google Pro 帳號** (強烈建議申請學生 12 個月免費版，解鎖 Gemini Advanced)
- [ ] **GitHub 帳號** (只需註冊，暫時先不需安裝 Git)
- [ ] **個人素材**：
    - 3-6 張作品圖 (JPG/PNG)
    - 一段自我介紹 (80-120 字)
    - 一張大頭照或風格照
- [ ] **心理建設**：「今天不是來考試，是來玩創意的。AI 是你的手，你負責出腦。」

### 導師準備 (Mentor)
- [ ] **Google Doc 共用大腦**：建立一個新的 Google Doc，標題設為 `YYYY-MM-DD Portfolio Workshop`。
- [ ] **確認 GitHub 權限**：確保你知道怎麼在 Repo 設定 collaborators (如果需要緊急救援)。

---

## 🛠️ 核心素材包 (The Toolkit)

### 1. Google Doc 共用大腦模板 (Shared Brain)
*請直接複製以下內容貼到 Google Doc，這是你們當天的「控制台」*

```markdown
# 2026-XX-XX Portfolio Vibe Coding Workshop

## 1. 我的定位 (Identity)
我是 [名字]，擅長 [技能]，正在往 [方向] 發展。

## 2. 網站 Vibe (Keywords)
*請選 3 個關鍵詞：*
[ ] 乾淨 (Clean)      [ ] 安靜 (Quiet)    [ ] 可愛 (Kawaii)
[ ] 聰明 (Smart)      [ ] 可靠 (Reliable) [ ] 俐落 (Sharp)
[ ] 溫柔 (Gentle)     [ ] 專業 (Pro)

## 3. 核心內容 (Content)
- **Works**: 作品集展示
- **Now**: 最近在做什麼 / 關注什麼
- **Contact**: 聯絡方式

## 4. 作品清單 (Works)
*填寫 3 個作品*
1. Title: 
   Desc: 
2. Title:
   Desc:
3. Title:
   Desc:

## 5. Prompt Staging (AI 指令區)
*(這裡用來放我們討論好的 Prompt，再貼去給 AI)*
```

### 2. 學生 Repo README 模板 (The Blueprint)
*這是給 AI 看的「設計圖」。讓學生在 GitHub 建立新 Repo 後，直接建立 `README.md` 並貼上這段。*

```markdown
# J-Style Clean Portfolio (One Page)

## Goal
Build a clean, Japanese-magazine-style personal portfolio website.
Must be deployed and shareable today.

## Style / Vibe
- **Style**: Japanese clean magazine layout.
- **Visuals**: Spacious whitespace, minimal colors, low saturation.
- **Typography**: Noto Sans JP (primary), Inter (fallback).
- **Interactions**: Subtle hover effects and scroll reveal animations.

## Sections
1. **Hero**: Name, one-line tagline, small social icons/buttons.
2. **About**: Short bio (JP), interests.
3. **Works**: 3-6 cards grid. Image on top, title/desc below. High-end look.
4. **Now**: What I'm doing recently.
5. **Contact**: Email + Social links.

## Technical Constraints (Strict)
- Use **HTML / CSS / JavaScript** only (Single file index.html or separate files).
- **No Node.js** setup required.
- **No Build steps** required.
- Make it responsive (Mobile friendly).
- Code should be easy for a beginner to edit (use comments).

## Content (Fill these in)
[Student Name]: 
[Tagline]: 
[Bio]: 
[Social Links]: 
```

---

## ⏱️ 3 小時「分層疊加」流程 (The Runbook)

### 🎯 一行版本 —— 當天控制台
> Step 1：只要 HTML（醜沒關係）→ Step 2：上線拿網址 → Step 3：加 CSS 變日系 → Step 4：作品卡片 grid → Step 5：手機版優化 → Step 6：hover + scroll reveal → Step 7：把內容標記成「她回家能改」

---

### 0:00–0:15 共同大腦 & 內容盤點

**目標**：把素材都準備好，定調 vibe

**做法**：
- 打開 Google Doc 模板
- 花 10-15 分鐘訪談填寫：名字、tagline、bio、3 個作品 title+desc
- 定 vibe：日系清爽、留白、低飽和

✅ **產出**：內容材料（之後每一步都拿來用）

---

### 0:15–0:35 Layer 1：純 HTML（骨架，故意很「醜」）

**目標**：讓她看到「網站其實就是文字＋結構」

**Prompt（第一版只要一個檔）**：
> 請只用純 HTML（不要任何 CSS，不要任何 JS），做一個單頁作品集：Hero/About/Works/Contact。Works 做 3 個條目即可。語言用日文（如果她願意）。請加上適當的語意化標籤（header/main/section/footer）。

她看到的效果就是「2000 年網頁」—— 這反而是關鍵：
✅ 她會理解「原來 HTML 是內容的骨架」

**小教學點（只講一句）**：
- `<h1>` 是標題、`<p>` 是段落、`<a>` 是連結

---

### 0:35–0:55 先上線一次（超重要的 Dopamine！）

**目標**：在她還沒做漂亮前，就先拿到網址

**做法**：
1. GitHub 建 repo（名稱如 `my-portfolio-2026`，設為 Public）
2. 把 `index.html` 上傳 (`Add file` → `Create new file` 或 `Upload files`)
3. 開啟 GitHub Pages：
   - `Settings` → `Pages`
   - Branch 選 `main` → `/root` → Save
   - 等 1-2 分鐘，重整頁面，拿到網址！

✅ **產出**：第一個可公開網址（醜也沒關係）

> 💡 這一步會讓她相信「我做得到」。

---

### 0:55–1:25 Layer 2：加入 CSS（從醜變順眼）

**目標**：讓她看到「CSS 是化妝」

**Prompt（把 HTML 保持不動，單純加 style）**：
> 請在不改動 HTML 結構的前提下，新增一個 style.css，做日系清爽雜誌風：留白、字體層級清楚、低飽和。整體寬度設計為內容置中、最大寬度 900–1000px。不要陰影，主要用細線與間距做分隔。

她要體驗的是：
✅ **同一份 HTML，光加 CSS 就像換了一個世界**

**小教學點（只講一個概念）**：
- `class` 是「幫元素貼標籤」讓 CSS 可以選到它

---

### 1:25–1:45 Layer 3：版面系統（Grid / 卡片）

**目標**：作品集從條列變成「作品卡片」

**Prompt**：
> 把 Works 區塊改成卡片 grid（桌機 3 欄、平板 2 欄、手機 1 欄）。卡片包含圖片 placeholder（4:3）、標題、描述。卡片邊框用 1px 淺灰線，圓角小一點即可。整體保持日系乾淨。

✅ **產出**：看起來就像真的 portfolio

---

### 1:45–2:05 Layer 4：RWD 響應式

**目標**：讓她知道手機不是「縮小版」，而是另一個版面

只教一個東西：**media query**

**Prompt**：
> 請用 media query 做手機版優化（<= 600px）：字體略大、段落行距更舒服、Works 變 1 欄、按鈕更好點。請在 CSS 裡加註解說明。

✅ **產出**：她用手機打開會覺得「哇這是真的能用」

---

### 2:05–2:30 Layer 5：小動效（質感瞬間跳級）

**目標**：讓她理解「fancy 不一定要後端」

只加兩種動效：
1. **hover**：卡片微上移
2. **scroll reveal**：淡入上移（輕量）

**Prompt**：
> 加入非常克制的 micro-interactions：Works 卡片 hover 時上移 4px，圖片稍微放大；並加入簡單的 scroll reveal（IntersectionObserver）讓 section 進入視窗時淡入上移。動畫時間 0.6–0.8s，不要浮誇。

✅ **產出**：看起來立刻像「專業作品」

---

### 2:30–2:55 Layer 6：可維護化（她回家能自己改）

**目標**：讓她回家能繼續玩，不靠你

**兩種做法選一個**（看現場她狀態）：

#### A. 最簡單（建議第一堂）
- 在 HTML 最上面用註解標出「這裡改名字 / bio / works」
- 教她：改文字 → Commit → 等 1 分鐘 → 網站就更新了

#### B. 稍微進階（但還是零門檻）
- 用一個 `const data = {...}` 集中作品資料，JS 渲染 Works
- 她只要改 data 物件就能換內容

---

### 2:55–3:00 彩蛋（可選）：Firebase Studio 30 秒演示

說一句收尾：
> 「你剛剛做的，其實就是這些工具自動化的流程。」

然後收工 🎉

---

## 📚 分解教學原則（你之後會一直用到）

1. **每一步只新增一個新概念**
2. **先上線再變漂亮**（先得到網址）
3. **每次改動都有可見差異**（不做那種看不出來的微調）
4. **永遠保留可回退**（GitHub history / copy 備份）

---

## 🚑 介入指南 (Intervention Protocol)

當她卡住時，請依此判斷你的介入層級：

| 狀況 | 介入層級 | 作法 |
| :--- | :--- | :--- |
| **小錯 / 版面微調 / 文案修改** | **Level 1 (Direct)** | 用**你的電腦**打開她的 GitHub Repo (Web)，直接 Edit 檔案修好 → Commit。她只要重整就好。 |
| **AI 聽不懂指令 / 生成不出你要的** | **Level 2 (Proxy)** | 在**你的電腦**跑 AI，把好的 Prompt 或是生成好的 Code 貼到 Google Doc。她只要負責複製貼上。 |
| **整個壞掉 / 檔案結構亂掉** | **Level 3 (Reset)** | 你 Clone 她的 Repo 到你電腦 → 本機大修 → Push 回去。她完全不用碰 Git 指令。 |

> **金句**: 「我現在直接幫你改，是因為不想讓你卡在工具上，我們專注在設計就好。」

---

## 💡 下一步 (Next Steps)

這次結束後，她已經有了：
1. 自己的網域 (GitHub Pages)
2. 第一個 Portfolio 專案
3. 與 AI 協作的經驗
4. 理解 HTML / CSS / JS 各自在幹嘛

**第二次課程預告**：
> 「現在你的網站很酷了，下次我們來教怎麼讓 AI 幫你一次改 10 個頁面 (Gemini CLI)，還有怎麼做自動化 (Node.js)。」
