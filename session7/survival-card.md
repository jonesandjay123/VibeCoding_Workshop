# Session 7 Survival Card：AI Agent 做工具卡住時先看這張

> 這張不是小考，是生存卡。當 AI agent、Xcode 或專案狀態卡住時，先回來看這張。

---

## Terminal 基本移動

今天真的需要記的最小組合：

```text
pwd
ls
cd
git status
git diff
git add .
git commit -m "message"
git restore .
```

其他指令先當查表用，不需要一次背起來。

| 指令 | 做什麼 | 什麼時候用 |
| --- | --- | --- |
| `pwd` | 看現在在哪個資料夾 | 迷路時 |
| `ls` | 看資料夾裡有什麼 | 進資料夾後 |
| `cd my-project` | 進入專案資料夾 | 開始工作 |
| `cd ..` | 回上一層 | 走錯資料夾 |
| `clear` | 清畫面 | Terminal 太亂 |

---

## Git 保存與回復

| 指令 | 做什麼 | 什麼時候用 |
| --- | --- | --- |
| `git status` | 看目前改了什麼 | 每一步前後都可以 |
| `git diff` | 看實際改了哪些內容 | AI 改完後檢查 |
| `git add .` | 把改動放進準備保存區 | commit 前 |
| `git commit -m "訊息"` | 保存一個版本 | 做完一個小成功 |
| `git push` | 推到 GitHub | 想讓雲端也有最新版本 |
| `git pull` | 從 GitHub 拉最新 | 開始工作前 |
| `git log --oneline` | 看歷史紀錄 | 想找之前版本 |
| `git restore .` | 放棄目前未 commit 的改動 | AI 改壞且還沒保存時 |

基本節奏：

```text
開始前：git pull
改完後：git status
確認後：git add .
保存：git commit -m "做了什麼"
上傳：git push
```

最重要的習慣：

```text
能跑
-> commit
-> 再請 AI 改下一步
```

---

## npm / Web 專案

| 指令 | 做什麼 | 什麼時候用 |
| --- | --- | --- |
| `npm install` | 安裝專案依賴 | clone 後第一次 |
| `npm run dev` | 開發模式預覽 | 寫網站時 |
| `npm run build` | 打包正式版 | 部署前 |

常見概念：

| 名稱 | 一句話 |
| --- | --- |
| `package.json` | 專案的設定與可執行指令 |
| `node_modules/` | 安裝出來的工具包，不上傳 GitHub |
| `dist/` | build 出來的上線版本 |
| `localhost` | 只有自己電腦看得到的本地網站 |

---

## Xcode / iOS 專案

| 名稱 | 一句話 |
| --- | --- |
| Xcode | 跑 iOS App 的主要工具 |
| SwiftUI | 用來寫 iOS 畫面的方式 |
| Simulator | 電腦裡的假 iPhone |
| Build | 檢查 app 能不能編譯 |
| Run | 把 app 跑起來 |
| Signing | 讓真機知道這個 app 可以被安裝 |

第七堂建議：

- 先用 Simulator，不要卡在真機 signing
- Xcode 主要負責 Build / Run / 看錯誤
- 不要在 Xcode 裡手改太多不懂的地方
- 讓 AI 每次只改小範圍，例如 `ContentView.swift`

---

## Agentic Tool-Making 基本節奏

今天最重要的不是背 code，而是這個循環：

```text
我想做什麼工具？
-> 最小只改哪一步？
-> 請 AI agent 改
-> Simulator 驗收
-> 不對就描述 expected vs actual
-> 能跑就 commit
```

每次 prompt 都要講清楚：

| 要素 | 例子 |
| --- | --- |
| Goal | Change this into Creator Caption Buddy |
| Scope | Only update title, examples, and one category |
| Constraint | Do not rewrite the whole app |
| Validation | Explain how to test in Xcode Simulator |

---

## JSON / Data Flow

| 概念 | 一句話 |
| --- | --- |
| JSON | 電腦看的資料格式 |
| Data model | App 裡一張卡片、一句 phrase、或一個 category 的形狀 |
| Import | 把外部資料放進 App |
| Export | 把 App 資料拿出去給別的工具用 |
| API | App 跟外部服務要資料 |

今天只要知道：

```text
畫面上看到的 phrase / category
通常背後都有一份資料或程式碼
AI agent 改資料，Simulator 畫面就會變
```

本堂不需要深入 API。先讓本機小工具變有用，再考慮自動化和雲端。

---

## AI 工具使用規矩

| 規矩 | 為什麼 |
| --- | --- |
| 每次只改一小步 | 降低 AI 改壞機率 |
| 明確說不要改什麼 | 避免 agent 自動重構 |
| 貼錯誤訊息，不貼整包雜訊 | 省額度，也讓 AI 聚焦 |
| 改完先跑起來 | 不要累積一堆不知道哪裡壞 |
| 改完先 `git status` | 看 AI 動了哪些檔 |
| 能跑就 commit | 留一個安全存檔點 |

好 prompt 例子：

```text
Only update visible text and sample examples.
Change the app into Creator Caption Buddy.
Do not change the project structure.
Do not add API integration.
After editing, summarize what changed and how to test in Simulator.
```

---

## 卡住時怎麼辦

### AI agent 額度用完

```text
1. 打開 ChatGPT / Gemini 網頁版
2. 貼目前檔案內容
3. 請它回傳完整更新後檔案
4. 手動貼回 Xcode
5. Build / Run
```

### AI 改壞了

```text
git status
git diff
git restore .
```

如果已經 commit 過，就回到上一個安全點再想下一步。

### Xcode 報錯

```text
1. 複製紅色錯誤裡最重要的 5-20 行
2. 貼給 AI
3. 請它用最小修改修好
4. 不要讓它重寫整個 app
```

### 畫面跟期待不同

貼給 AI：

```text
The app builds, but the screen is not what I expected.

Expected:
[我本來想看到什麼]

Actual:
[Simulator 現在看到什麼]

Please explain the difference and suggest the smallest fix.
Do not rewrite the whole app.
```
