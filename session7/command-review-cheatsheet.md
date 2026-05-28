# Session 7 指令與概念複習速查卡

> 這張不是小考，是生存卡。當 AI 工具、Xcode 或專案狀態卡住時，先回來看這張。

---

## Terminal 基本移動

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

## JSON / Data Flow

| 概念 | 一句話 |
| --- | --- |
| JSON | 電腦看的資料格式 |
| Data model | App 裡一張卡片或一筆資料的形狀 |
| Import | 把外部資料放進 App |
| Export | 把 App 資料拿出去給別的工具用 |
| API | App 跟外部服務要資料 |

本堂最重要的資料流：

```text
App 裡的 phrase cards
-> 匯出成 prompt / JSON
-> 貼到 ChatGPT 或 Gemini
-> AI 回傳翻譯 JSON
-> 貼回 App
-> 更新卡片
```

這比一開始接 API 更穩，也更容易理解。

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
Only modify ContentView.swift.
Add a copy button next to the Vietnamese translation.
Do not change the project structure.
Do not add API integration.
After editing, summarize what changed.
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

### JSON 格式錯

貼給 AI：

```text
This JSON cannot be imported by my app.
Please fix it so it matches this format exactly:
[
  {
    "id": "...",
    "vietnamese": "..."
  }
]
Return JSON only.
```

