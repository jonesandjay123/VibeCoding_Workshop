# Session 7: AI Agentic Tool-Making — 從「做一個 App」到「用 AI Agent 做自己的工具」

> **日期：** 2026-05-29
> **對象：** 已完成 Session 1-6，做過 Web / React / JSON / iOS 初體驗的櫻井妹妹（Azunyan）
> **時長：** 約 2 小時
> **場景：** Zoom lesson；Jones 可以用自己的 demo clone + iPhone Simulator 當舞台
> **參考素材：** [`KoreanStudyBuddy`](https://github.com/azunyanchannel/KoreanStudyBuddy)
> **定位：** 這不是 iOS 架構課，而是 Vibe Coding / Agentic Coding 課：說清楚想做的工具，請 AI agent 小步修改，跑起來驗收，卡住時 debug。

---

## 一句話版本

前六堂主要在學：

```text
用 AI 輔助做網站、資料流、React prototype、iOS app 初體驗。
```

第七堂開始升級成：

```text
用 AI Agent 做自己的小工具。
```

今天不要把重點放在 SwiftUI 架構、Xcode 設定、iOS project structure。
真正要練的是這個工作流：

```text
想要一個工具
-> 用人話描述
-> 拆成很小的任務
-> 請 AI agent 改一小步
-> 用 Simulator / 畫面驗收
-> 看錯誤、改 prompt、再試一次
-> 成功後保存版本
```

---

## 今日核心主題

### 從 App 開發轉成 Tool-Making

Session 6 已經做過 iOS first app，所以今天不需要重新教「怎麼做 iOS app」。
今天要讓她理解：

> App 只是其中一種外殼。真正有價值的是：我可以把自己的生活需求，變成一個會幫我的工具。

用 `KoreanStudyBuddy` 當素材，是因為它已經有上一堂課的連續性：

- 她知道這是語言學習 / 旅行 / creator 生活會用到的東西
- 畫面變化可以在 Simulator 立刻看到
- 不需要跳到完全陌生的新專案
- 可以把注意力放在「怎麼指揮 AI agent」，而不是「iOS 到底怎麼寫」

### 老師心裡要守住的線

今天不是：

- 深講 SwiftUI
- 解釋 MVVM / architecture
- 從零做一個大型新 app
- 把所有功能一次丟給 AI
- 追求完美完成品

今天是：

- 學會把工具需求講清楚
- 學會限制 AI agent 的修改範圍
- 學會用可見畫面驗收
- 學會把錯誤訊息變成 debug prompt
- 學會人是 product owner / director，AI 是執行助手

---

## Session 1-6 輕量回顧

開場 10-15 分鐘，只要把脈絡接回來，不要變成考試。

| Session | 做過什麼 | 今天接到哪裡 |
| --- | --- | --- |
| 1 | Static site / Vibe Coding 入門 | 用人話描述想做的畫面 |
| 2 | Git / Terminal / JavaScript / API 概念 | 知道專案、檔案、指令不是魔法 |
| 3 | JSON / localStorage / Data Flow | 工具背後有資料形狀 |
| 4 | React / JSON / AI generation | 用資料驅動畫面，用 AI 生成內容 |
| 5 | Idea sorting / product sizing | 想法要先縮成 MVP |
| 6 | iOS first app / Korean study tool | 今天沿用它，練 agentic remix |

可以這樣說：

```text
前面六堂不是白學的。
今天我們把它們合起來：妳有一個想法，知道資料大概長什麼樣，知道要拆小，知道要跑起來看，然後用 AI agent 幫妳做自己的工具。
```

---

## 建議 2 小時節奏

### 0:00-0:15 回顧與今天定位

目標：讓她知道今天不是 iOS 考試，而是 agentic tool-making 練習。

可以問：

```text
上次 KoreanStudyBuddy / Korean phrase app 裡，妳記得它可以做什麼嗎？
如果它要變成妳自己的工具，妳最想改哪一點？
```

接著定義今天：

```text
今天不是要學完整 iOS 架構。
今天是練習：怎麼把一個小工具想清楚，請 AI agent 幫我們改，然後用畫面驗收。
```

### 0:15-0:35 Product / User Review

用 `KoreanStudyBuddy` 做 product review，而不是 code review。

看 app 時只問產品問題：

```text
這個工具現在是給誰用？
使用者打開後第一件事會做什麼？
現在最有用的功能是哪個？
如果改成妳自己的版本，最小只改哪 1-2 個地方？
今天先不要做什麼？
```

把她放在 product owner / director 的位置：

```text
妳不是在背程式。
妳是在決定：這個工具要幫誰、幫什麼、先改哪一步。
```

### 0:35-1:25 Small AI-Agent Remix

只做一個小 remix，不要開新大坑。候選主題：

1. **Fashion Phrase Buddy**
   幫她整理穿搭、拍攝、購物時會用到的韓文 / 日文 / 英文短句。

2. **Creator Caption / Phrase Buddy**
   幫 creator 準備影片 caption、貼文短句、留言回覆 phrase。

3. **Travel Korea Buddy v2**
   沿用首爾旅行場景，把例句、分類、按鈕文字調得更像真實旅行工具。

建議選最小任務：

```text
Task 1: 改 title / subtitle / empty state
Task 2: 換 3-5 個 example phrases
Task 3: 新增一個 scene / category，例如 Cafe、Shopping、Content Shoot
```

每一步都要用同一個節奏：

```text
說需求
-> 請 AI agent 只改必要檔案
-> Run / Simulator 看畫面
-> 如果不對，描述 expected vs actual
-> 成功就 git status / 保存
```

### 1:25-1:45 Debugging Prompt Practice

就算現場沒有真的壞，也要練一次「怎麼問 debug」。

讓她看到 debug 不是：

```text
壞了，幫我重寫整個 app。
```

而是：

```text
這是錯誤訊息。
我本來期待 A，現在看到 B。
請找最小必要修改，不要重寫整個專案。
```

可以練三種情境：

- Xcode build error
- Simulator 畫面跟期待不同
- AI 改了太多檔案，看不懂它動了什麼

### 1:45-2:00 Wrap-up

最後一定要回到方法，而不是只回顧功能。

問她：

```text
今天哪一步是妳決定的？
哪一步是 AI agent 做的？
我們怎麼知道它做對了？
如果它做錯，妳要怎麼描述問題？
下一次妳想做自己的工具時，第一個 prompt 應該先問什麼？
```

收束成一句話：

```text
今天學到的不是 iOS，而是：妳可以當工具的導演，讓 AI agent 幫妳把小工具一步一步做出來。
```

---

## Sample Prompts

### 1. Minimal App Remix Prompt

```text
We are remixing this beginner SwiftUI app into a small personal tool.

Goal:
Change it from a Korean study buddy into [Fashion Phrase Buddy / Creator Caption Buddy / Travel Korea Buddy v2].

Please make the smallest useful change:
- Change the visible title and subtitle.
- Replace the sample examples with 3-5 examples for this theme.
- Add one simple scene/category if the app already has categories.

Rules:
- Do not rewrite the whole app.
- Do not change the project structure.
- Do not add API integration.
- Keep the code beginner-friendly.
- After editing, list exactly which files changed.
- Explain how I can test the change in Xcode Simulator.
```

### 2. Debugging Prompt

```text
The app no longer works as expected.

Error / problem:
[paste the important Xcode error lines or describe the screen problem]

Context:
- This is a beginner SwiftUI app.
- We only want the smallest necessary fix.
- Do not rewrite the whole project.
- Do not add new architecture.

Please:
1. Explain the likely cause in simple terms.
2. Tell me which file needs to change.
3. Fix only the minimum necessary part.
4. List how to confirm the fix in Xcode Simulator.
```

### 3. Expected vs Actual Mismatch Prompt

```text
The app builds, but the result does not match what I expected.

Expected:
[describe what I wanted to see]

Actual:
[describe what I actually see in the Simulator]

Please:
- Explain the difference in beginner-friendly terms.
- Propose the smallest change to make the app match the expected behavior.
- Do not rewrite unrelated parts.
- If you need to edit code, say which file and why.
```

---

## Instructor Notes

### Keep her as product owner / director

每一個決定都先回到她：

```text
妳想讓這個工具幫誰？
這句話要更像旅行、穿搭、還是 creator？
這個分類有用嗎？
畫面現在像不像妳會真的打開用的工具？
```

AI agent 負責執行，但方向由她決定。

### Avoid code-structure lecture

如果她問 code，可以簡短回答。
但不要主動展開：

- MVVM
- SwiftUI lifecycle
- App architecture
- dependency injection
- complex state management

更適合的說法：

```text
我們先不用背它。
今天只要知道：這個檔案控制畫面文字，這個地方放範例資料。我們請 AI 小步修改，然後用 Simulator 確認。
```

### Use Simulator as the stage

Zoom lesson 裡畫面回饋很重要。
讓她一直看到：

```text
Prompt 改了什麼
-> Simulator 畫面變了什麼
-> 我們怎麼判斷對不對
```

不要讓課程停在 IDE 文字裡太久。

### Teach constraints and validation

今天最重要的 AI 使用能力是「限制」：

```text
Only modify visible text.
Do not rewrite the whole app.
Do not add API integration.
After editing, tell me how to test.
```

以及「驗收」：

```text
Build 能不能過？
Simulator 看到什麼？
跟 expected 有沒有一樣？
git diff 有沒有改到奇怪的地方？
```

---

## 本堂不做

為了把注意力留給 agentic workflow，今天先不要做：

- 不深入 iOS architecture
- 不從零開一個全新大型專案
- 不接真實 API key
- 不處理 App Store 上架
- 不強求真機 signing
- 不講太多新工具安裝
- 不讓 AI 一次重寫整個 app

---

## 今日成功標準

不是她懂 SwiftUI，也不是完成大型 App。

成功是她能說出並做過一次：

```text
我想改一個小工具
-> 我把需求講清楚
-> 我限制 AI agent 只改一小步
-> 我跑起來看結果
-> 不對時我能描述 expected vs actual
-> 成功時我知道要保存版本
```

這就是 Session 7 的核心：

> **AI Agentic Tool-Making：用 AI agent，把自己的需求變成可驗收的小工具。**
