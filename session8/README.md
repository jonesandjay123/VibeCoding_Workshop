# Session 8: AI Creator Agent — 把自媒體流程教給 Codex

> **日期：** 2026-06-19  
> **對象：** 已完成 Session 1-7，做過 Web / React / JSON / iOS 初體驗，也開始理解 AI agent 可以做工具的櫻井妹妹（Azunyan）  
> **時長：** 約 2 小時  
> **場景：** Zoom lesson；Jones 可用自己的 Codex / Jyn Null workflow 做 demo，再回到 Azunyan 的 [`DouceReverie`](https://github.com/azunyanchannel/DouceReverie) 網站  
> **定位：** 這堂不是 Firebase / Login / Auth 主菜，也不是單純網站加功能。今天要讓學生理解：創作者可以把重複流程示範給 AI，逐步變成自己的 reusable workflow / skill。

---

## 一句話版本

前七堂主要在學：

```text
用 AI 輔助做網站、資料流、React prototype、iOS app，並開始用 AI agent 做自己的工具。
```

第八堂升級成：

```text
用 AI Agent 學會自己的 creator workflow。
```

今天不要把重點放在：

- Firebase project setup
- Login / Auth / Security Rules
- 網站再多加幾個普通區塊
- 讓 AI 自己直接公開發文

真正要練的是這個思維：

```text
我有一個會一直重複的創作者流程
-> 我先把它拆成 inputs / steps / success criteria
-> 我示範一次或寫成 checklist
-> AI agent 學會準備流程
-> 發布前由人確認
-> 發布後由人和 AI 一起驗證
```

> 2026-06-19 課前轉向備註：如果因為社群平台風險，今天決定先不做 creator automation，可以改走「把 DouceReverie 正式部署到網路上」。Firebase Hosting + Spark 的操作手冊見 [`firebase-hosting-spark-guide.md`](./firebase-hosting-spark-guide.md)。

---

## 今日核心主題

### 從「做作品網站」升級成「建立 Creator Operating System」

`DouceReverie` 網站可以繼續擴充，但不要只是說「今天再加一個頁面」。

今天要把網站包裝成：

> **她自己的小型創作者基地。**

網站可以承載：

- About me
- Gallery
- Latest post
- Content ideas
- AI Creator Workflow
- Posting checklist
- Future automated posting skill

這樣網站不只是展示頁，而是她開始整理自己創作流程的地方。

### Record & Replay 的教學定位

OpenAI / Codex 的 Record & Replay 可以把使用者在 Mac 上示範的 workflow 轉成 reusable skill。它適合：

- 重複性流程
- 依賴個人偏好的流程
- 比起文字描述，更容易用示範說清楚的流程

課堂上要用白話講：

```text
以前：
我每次都要重新教 AI 怎麼做。

現在：
我示範一次，Codex 可以把流程整理成 skill。
下次我只要給新的圖片、文字、目標平台，它就知道大概怎麼準備。
```

但要立刻補安全邊界：

```text
公開發文永遠要人工確認。
不要錄密碼。
不要錄私密頁面。
不要讓 AI 自己亂逛 feed。
```

---

## 老師心裡要守住的線

今天不是：

- 教她所有 Codex 新功能
- 現場硬解平台登入 / 權限 / 2FA
- 一口氣錄 IG / X / Threads 全流程
- 讓 AI 真的自動發文
- 把 Firebase Auth 當主菜

今天是：

- 讓她理解 AI agent 可以學 workflow
- 讓她當 creator workflow 的 product owner
- 設計一個安全的 dry-run posting flow
- 把她自己的 creator workflow 放回 DouceReverie 網站
- 即使 Record & Replay 現場卡住，也能完成一個有意義的網站成果

---

## Session 1-7 輕量回顧

開場 5-10 分鐘接脈絡即可，不要變成複習考。

| Session | 做過什麼 | 今天接到哪裡 |
| --- | --- | --- |
| 1 | Vibe Coding 入門 / Static site | 用人話描述想做的東西 |
| 2 | Git / JavaScript / API 概念 | 知道工具背後有資料與流程 |
| 3 | JSON / localStorage / Data Flow | 把內容整理成資料 |
| 4 | React / JSON / AI generation | 用 AI 快速生成畫面和內容 |
| 5 | Idea sorting / product sizing | 先縮小 MVP |
| 6 | iOS first app / Korean Phrase Buddy | 把生活需求做成工具 |
| 7 | Agentic Tool-Making | 人當 product owner，AI agent 做小步修改 |
| 8 | AI Creator Agent | 把自己的創作者流程教給 AI |

可以這樣說：

```text
前幾堂我們一直在學：怎麼讓 AI 幫我們做出網站、app、工具。
今天再升級一點：不是只叫 AI 寫 code，而是開始教 AI 學會妳自己的創作流程。
```

---

## 建議 2 小時節奏

### 0:00-0:10 開場：今天不是寫更多 code

目標：建立第八堂的升級感。

可以直接說：

```text
今天我們不只是繼續做網站。

前幾堂課，我們學的是：
怎麼用 AI 幫我們寫一點 code，做出一個網站或 app。

今天要升級一點：
我們要學怎麼把自己的重複工作流程，變成 AI 可以學會的 skill。

也就是說，妳不是只會叫 AI 寫 code。
妳開始可以訓練 AI 幫妳做自己的 creator workflow。
```

### 0:10-0:25 Warm-up：她未來可能想經營什麼？

目標：讓她先站在 creator / product owner 的位置。

問三個問題：

```text
妳以後如果經營自媒體，會想發什麼？
妳會在哪些平台發？
哪一個步驟最麻煩、最重複？
```

可以提供選項：

```text
Fashion
Travel
Language learning
Food
Daily diary
Music
Anime
Study abroad
Personal website updates
```

收斂成一句：

```text
AI agent 最適合的不是取代創作，而是學會那些妳已經知道怎麼做、但每次都很煩的步驟。
```

### 0:25-0:45 Demo：Jyn Null 發文 pipeline

目標：讓她看到真實 creator workflow，不必一開始就讓她操作。

用 Jyn Null 當展示案例，但 framing 不是「幫 Jones 發文」，而是：

```text
這是一個創作者每天會重複做的流程。
我們可以把它拆成 AI 可以幫忙準備的步驟。
```

展示 pipeline：

```text
靈感 / 新聞
-> 產生文案
-> 生成圖片
-> 整理 IG / X / Threads / 小紅書版本
-> 上傳圖片
-> 貼 caption
-> 發布前確認
-> 發布後檢查
```

特別講清楚兩個安全概念：

```text
AI 可以幫忙準備。
公開發文前，人要確認。
```

### 0:45-1:05 Record & Replay 概念與 dry-run 設計

目標：讓她理解 Record & Replay，不把它誤解成神奇自動發文。

說法：

```text
Record & Replay 不是單純錄滑鼠座標。
它比較像：我示範一次，Codex 幫我整理成一個 reusable skill。
```

設計一個最小安全 workflow：

```text
Input:
- image_path
- caption
- expected_account
- publish_mode = dry-run

Workflow:
1. 打開 X 或 Threads compose
2. 確認帳號
3. 上傳圖片
4. 貼上 caption
5. 檢查 preview
6. 停在 publish 前
7. 不按 publish
```

如果她已經有 ChatGPT Plus / Pro 且環境允許：

```text
讓她參與設計 prompt / inputs / success criteria，
Jones 示範或讓她嘗試錄一個超小 workflow。
```

如果她還沒買或權限卡住：

```text
只做概念 demo，
把 skill 草稿寫成文件，
下一次再實錄。
```

### 1:05-1:35 實作：新增 DouceReverie 的 AI Creator Workflow 頁面

目標：讓這堂課一定有實際成果。

把 `DouceReverie` 擴充成 creator launch page / content hub。

新增頁面概念：

```text
/creator-workflow
```

或如果專案沒有 routing，就新增首頁區塊：

```text
AI Creator Workflow
```

頁面內容建議：

```text
My Content Themes
My Posting Checklist
My AI Tools
My First Reusable Workflow
Things AI Should Never Do Without Asking Me
```

學生要決定：

```text
我的內容主題是什麼？
我想在哪些平台發？
AI 可以幫我準備什麼？
哪些事情 AI 不可以自己做？
```

這一段要用 AI agent 小步改網站：

```text
先 inspect project
-> 找到首頁 / routes / components
-> 新增一個小頁面或 section
-> 跑起來看畫面
-> 改文案
-> git status 檢查
```

### 1:35-1:50 Skill 草稿：prepare-social-post-dry-run

目標：即使沒有真的錄製，也產出一個可以下次錄的 skill blueprint。

讓她一起填：

```text
Skill name:
prepare-social-post-dry-run

Inputs:
- image_path
- caption
- platform
- expected_account

Rules:
- never publish without confirmation
- never enter passwords
- stop if account is wrong
- verify image and caption before asking user
- do not browse the feed

Success criteria:
- correct account
- image appears
- caption complete
- stopped before publish
- user can review safely
```

### 1:50-2:00 Wrap-up

最後一定回到方法，不要只回顧做了哪個頁面。

問她：

```text
今天哪一步是妳決定的？
哪一步可以交給 AI agent？
我們怎麼避免 AI 自己亂發文？
如果工具現場不能錄，妳還可以先準備什麼？
下一次妳想讓 AI 學哪一個 workflow？
```

收束成一句：

```text
今天學到的不是某個網站功能，而是：
妳可以把自己的創作流程拆清楚，讓 AI agent 逐步學會怎麼幫妳準備。
```

---

## 明天最推薦的具體成果

課程結束時，最好有三個東西：

> 補充備課文件：我另外放了一份 Codex 版 repo feedback 與實作規劃在 [`douce-reverie-codex-feedback.md`](./douce-reverie-codex-feedback.md)，專門針對第七堂做出的 `DouceReverie` repo，規劃第八堂如果繼續擴充網站時最推薦的方向。

### 1. 一個新的網站頁面或區塊

```text
DouceReverie / AI Creator Workflow
```

內容包含：

```text
My content themes
My posting checklist
My AI tools
My first reusable workflow
Things AI should never do without asking me
```

### 2. 一份她自己的 workflow checklist

範例：

```text
My first creator workflow:

Input:
- one photo
- one short idea
- target platform

Steps:
1. Write a caption in my voice.
2. Make Japanese / Chinese / English versions.
3. Choose hashtags.
4. Prepare the post.
5. Stop before publishing.
6. I review and approve.
```

### 3. 一個 Codex skill 概念草稿

```text
Skill name:
prepare-social-post-dry-run

Inputs:
- image_path
- caption
- platform
- expected_account

Rules:
- never publish without confirmation
- never enter passwords
- stop if account is wrong
- verify image and caption before asking user
```

---

## Firebase / Auth 要不要碰？

明天最多碰 5-10 分鐘概念，不要實作。

可以這樣講：

```text
今天我們做的是 creator workflow。

之後如果妳想讓網站真的記住使用者、收藏內容、登入管理作品，
那就會進入 Firebase / Auth / database。

但那是下一個階段。
```

原因：

```text
Firebase / Auth 很重要，但它像水電工程。
今天的主題是：妳如何把創作流程變成 AI 可以幫忙準備的 workflow。
```

除非她明確說：

```text
我想讓我的網站有會員登入 / 留言 / 私密作品管理。
```

否則不要把 Auth 當第八堂主菜。

---

## 三個難度選項

### Option A：最推薦

**AI Creator Agent + DouceReverie Workflow Page**

成果：

```text
1. 她理解 Record & Replay 是什麼
2. 看 Jones demo 一個 dry-run 發文流程
3. 她幫自己的網站新增 AI Creator Workflow 頁
4. 她寫出自己的第一份 AI workflow checklist
```

### Option B：如果她真的買了 Plus / Pro，而且設備允許

**她親自錄自己的第一個 Codex skill**

安全 workflow 選項：

```text
把一張圖片和 caption 放進 X compose，停在 publish 前。
```

或更中性：

```text
把一篇 blog draft 放進自己的網站草稿頁。
```

### Option C：如果 Record & Replay 現場卡住

**回到網站，但主題仍然是 AI creator system**

不要說：

```text
那我們只好加網站功能。
```

要說：

```text
我們先把 workflow 設計好，放進妳的網站。
等工具準備好，下次再讓 Codex 學會它。
```

可做功能：

```text
Content Idea Board
Caption Generator page
Gallery + post notes
Creator checklist
Draft bank
```

---

## Instructor Notes

### Keep her as creator / product owner

每一步先問她：

```text
妳想發什麼內容？
妳想在哪裡發？
AI 可以幫妳準備哪一步？
哪一步一定要妳自己確認？
這個頁面像不像妳真的會用的 creator home base？
```

### 不要過度技術化 Record & Replay

不需要展開太多：

- internal skill format
- plugin packaging
- Computer Use implementation details
- Chrome extension permissions matrix

她需要先理解：

```text
我示範一次流程。
AI 幫我整理成可重複的 skill。
下次我給新素材，它幫我準備。
公開發出去前，我確認。
```

### 不要讓公開發文變成課堂風險

如果 demo 社群平台：

- 使用測試文字
- 使用非敏感圖片
- 不錄密碼
- 不進 DM
- 不讓 AI 看私人 feed
- 停在 publish 前

### 把 fallback 說成設計，不是失敗

如果工具卡住：

```text
今天我們先把 workflow 設計成文件和網站頁面。
真正錄製 skill 是下一步。
```

這樣課堂仍然完整。

---

## 延伸到下一堂

Session 9 或 10 可以再進：

- Firebase / Auth / Database
- DouceReverie content draft bank
- Simple caption generator
- Real Codex skill recording
- Website deploy / custom domain
- Creator analytics checklist

但第八堂先守住這句話：

```text
我不是只學 coding。
我是在學怎麼把自己的內容、工具、流程，慢慢變成一套 AI 可以幫我運轉的系統。
```
