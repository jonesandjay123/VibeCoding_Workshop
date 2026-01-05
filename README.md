# Vibe Coding Workshop Master Guide
[繁體中文](README.md) | [日本語](README_JA.md)

> **適合對象**：無 Coding 背景
> **目標**：3 小時內完成「個人作品集網站」並上線
> **核心概念**：不教寫 Code，教「怎麼做 PM (Product Manager) + CD (Creative Director) 來指揮 AI」

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
4. **Now**: What I’m doing recently.
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

### 3. 日系清爽專用 Prompt Pack (The Spells)
*當學生卡住或想優化時，請你丟這些 Prompt 到 Google Doc 讓她貼。*

**Phase 1: 生成初版**
> "請根據這個 README.md 的規格，生成一個完整的單頁式作品集網站。給我完整的 index.html 和 style.css 程式碼。確保風格是日系雜誌感，大量留白。"

**Phase 2: 迭代優化 (Vibe Check)**
> **更日系一點**：
> "把版面變得更像日本設計雜誌：字體大小層級要對比明顯，間距(padding/margin)加大 1.5 倍，顏色減少到只剩黑白灰加一個主色。不要任何陰影，改用細線框。"

> **卡片質感升級**：
> "Works 區塊的卡片要更有質感。圖片比例設為 4:3，文字放在圖片下方。Hover 圖片時，圖片稍微放大 (scale 1.05) 並變亮一點點。不要用粗框。"

> **加入動態 (Scroll Reveal)**：
> "幫我把所有區塊加入 'Scroll Reveal' 效果。當捲動到該區塊時，內容才慢慢淡入並往上浮現 (fade-up)。動畫時間 0.8s，要很優雅。"

**Phase 3: 功能補強**
> **手機版優化**：
> "檢查手機版的顯示。Hero 區塊的文字在手機上要大一點。Works 改成單欄顯示。漢堡選單要好點選。"

> **Dark Mode (選配)**：
> "右上角加一個切換深色模式的按鈕 (跟隨系統預設)。深色模式要是深灰 (Dark Grey) 不是全黑。"

---

## ⏱️ 3 小時流程 (The Runbook)

### 0:00 - 0:20 心態建立 (Mindset)
- **Showcase**: 展示你的 GitHub 或是幾個漂亮的靜態網站。
- **Concept**: 
    - 「GitHub 是你存放『人生專案』的倉庫。」
    - 「網站不是工程，是你想法的具現化。」
    - 「AI 是你的實習生，你是一半挑惕一半引導的總監。」

### 0:20 - 0:50 規劃與設置 (Setup)
1. **Google Doc**: 開啟模板，花 10 分鐘訪談她，填好「我的定位」、「Vibe」、「作品清單」。
2. **GitHub Repo**: 
    - 帶她註冊/登入 GitHub。
    - 按右上角 `+` -> `New repository`。
    - 取名 (例: `my-portfolio-2026`)，設為 **Public**。
    - 勾選 **Add a README file**。
3. **Blueprint**: 
    - 編輯 `README.md` (點筆的圖示)。
    - 貼上上面的 **[學生 Repo README 模板]**。
    - 填入剛剛 Google Doc 討論好的內容。
    - 按 `Commit changes`。

### 0:50 - 1:40 Vibe Coding 循環 (The Loop)
*這是一段「生成 -> 測試 -> 挑惕」的循環*

1. **第一次生成**: 
    - 把 README 內容複製。
    - 貼給 Gemini/Antigravity: "Hi, 這是我的網站設計圖，請幫我寫出第一版 index.html / styles.css"。
2. **上傳測試**:
    - 在 GitHub Repo 頁面 -> `Add file` -> `Create new file`。
    - 檔名 `index.html` -> 貼上程式碼 -> Commit。
    - (如有 CSS 檔同理)。
3. **開啟 GitHub Pages (關鍵 Dopamine!)**:
    - 到 `Settings` -> `Pages`。
    - Branch 選 `main` -> `/root` -> Save。
    - 等 1-2 分鐘，重整頁面，拿到網址！(看到畫面出現在網路上，她會瘋掉)
4. **迭代 (Iterate)**:
    - 問她：「哪裡不喜歡？」、「哪裡怪怪的？」。
    - 使用 **[Prompt Pack]** 裡的指令，回去叫 AI 修改。
    - 重複：複製 code -> GitHub 編輯檔案 -> Commit -> 重新整理網頁。
    - *目標：至少跑過 3 輪修改。*

### 1:40 - 2:20 圖片與內容替換 (Manual Polish)
- 教她怎麼在 GitHub 網頁上 `Upload files` 上傳圖片。
- 教她怎麼看 `index.html` 裡的 `<img>` tag 並把 `src` 改成圖片檔名。
- *這一步是讓她感覺「我看得懂 Code」、「我可以控制它」。*

### 2:20 - 3:00 收尾與部署 (Closing)
- 確保最終版上線無誤。
- **SEO 設定**: 加個 `title` tag 跟 `meta description`。
- **README 更新**: 在 README 最下面加一段 "What I learned today" (今天學到了什麼)。
- **分享**: 叫她把網址傳給好朋友或是 IG 限動。

---

## 🚑 介入指南 (Intervention Protocol)

當她卡住時，請依此判斷你的介入層級：

| 狀況 | 介入層級 | 作法 |
| :--- | :--- | :--- |
| **小錯 / 版面微調 / 文案修改** | **Level 1 (Direct)** | 用**你的電腦**打開她的 GitHub Repo (Web)，直接 Edit 檔案修好 -> Commit。她只要重整就好。 |
| **AI 聽不懂指令 / 生成不出你要的** | **Level 2 (Proxy)** | 在**你的電腦**跑 AI，把好的 Prompt 或是生成好的 Code 貼到 Google Doc。她只要負責複製貼上。 |
| **整個壞掉 / 檔案結構亂掉** | **Level 3 (Reset)** | 你 Clone 她的 Repo 到你電腦 -> 本機大修 -> Push 回去。她完全不用碰 Git 指令。 |

> **金句**: 「我現在直接幫你改，是因為不想讓你卡在工具上，我們專注在設計就好。」

---

## 💡 下一步 (Next Steps)
這次結束後，她已經有了：
1. 自己的網域 (GitHub Pages)
2. 第一個 Portfolio 專案
3. 與 AI 協作的經驗

**第二次課程預告**：
"現在你的網站很酷了，下次我們來教怎麼讓 AI 幫你一次改 10 個頁面 (Gemini CLI)，還有怎麼做自動化 (Node.js)。"
