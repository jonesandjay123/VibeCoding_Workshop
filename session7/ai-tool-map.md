# Session 7 AI Agent Tool-Making Map

> 這張圖不是工具百科，而是讓學生建立「我想做一個工具時，誰負責哪一步」的感覺。

---

## 妹妹版一張圖

今天只需要這五格：

```text
人 / Product Owner
-> 決定工具要幫誰、先改什麼、怎樣算成功

ChatGPT / Gemini
-> 幫我整理想法、寫 prompt、解釋錯誤

AI Coding Agent: Antigravity / Codex
-> 幫我讀專案、改小功能、修小 bug

Xcode / Simulator
-> 讓我看到 app 真的有沒有跑、畫面有沒有改對

Git / GitHub
-> 保存每個小成功，避免 AI 下一步改壞
```

核心不是「哪個工具最強」，而是：

```text
人決定方向
AI agent 執行小步
Simulator 驗收結果
Git 保存安全點
```

---

## 今天的工作流

```text
1. Product review
   這個工具現在給誰用？哪裡可以變成我的版本？

2. Small task
   只選一個可見的小修改，例如 title、examples、scene/category。

3. Agent prompt
   明確說 goal、限制、不要改什麼、怎麼測。

4. Run
   用 Xcode Simulator 看畫面，不停在文字想像。

5. Validate
   Expected vs actual：有沒有跟想像一樣？

6. Debug
   貼錯誤或畫面差異，要求最小修復。

7. Save
   git status / git diff / commit。
```

---

## 工具角色表

| 類型 | 工具例子 | 第七堂怎麼講 |
| --- | --- | --- |
| Product thinking | 人、紙筆、ChatGPT | 決定這個工具幫誰、最小版本是什麼 |
| Prompt helper | ChatGPT, Gemini | 把口語需求整理成 agent 可執行的小任務 |
| Agentic coding | Antigravity, Codex | 讀專案、改檔案、修 bug，但要限制範圍 |
| iOS 驗證 | Xcode, Simulator | Build / Run / 看畫面，確認真的有變好 |
| Version control | Git, GitHub | 保存小成功，AI 改壞時有安全點 |
| Fallback | ChatGPT/Gemini web + 手動貼檔 | Agent 額度用完時，仍能繼續做小修改 |

---

## 不要把工具變成主角

今天的主角不是 Antigravity、Codex 或 Xcode。
主角是學生正在做的工具。

可以這樣講：

```text
我們不是為了學 Xcode 才做 app。
我們是因為想要一個自己的小工具，所以借 Xcode 和 AI agent 幫我們做出來。
```

老師要避免：

- 比較太多 agent 品牌
- 現場安裝太多新 CLI
- 深入 iOS project structure
- 讓學生覺得「工具沒成功就是我不會」

---

## Agentic Coding 的四個控制桿

### 1. Scope

每次只讓 agent 做一件小事。

```text
Only update visible text and examples.
Do not rewrite the whole app.
```

### 2. Constraints

明確說不要做什麼。

```text
Do not add APIs.
Do not change project structure.
Do not rename targets.
```

### 3. Validation

每次都要求測試方式。

```text
After editing, explain how to test in Xcode Simulator.
```

### 4. Recovery

卡住時不要慌，回到事實。

```text
Expected:
Actual:
Error message:
Changed files:
```

---

## 今天可以自然帶出的觀念

### AI Tool-Making

> 用 AI agent 把生活需求變成自己的小工具。

### Product Owner Mindset

> 人負責決定方向和驗收，AI 負責執行小步。

### Debugging as Conversation

> Debug 不是「救命」，而是把 expected、actual、error 說清楚。

### Small Wins + Version Save

> 能跑就保存，下一步再改。不要讓 AI 一次賭太大。

---

## 對學生最重要的一句話

```text
妳不用先變成 iOS 工程師，才可以開始做自己的工具。
妳要先學會把需求說清楚、拆小、交給 AI agent、跑起來驗收。
```
