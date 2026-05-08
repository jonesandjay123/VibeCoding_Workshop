# Session 6: KoreanPhraseBuddy — 用 Codex + Xcode 做首爾旅行韓文小幫手

> **狀態：** 2026-05-08，根據 Jones 課前實際預演後更新
> **對象：** 已完成 Session 1-5、熟悉一點 HTML / JS / React / AI coding，但第一次正式進入 iOS / SwiftUI 的學生
> **場景：** Azunyan 即將去首爾旅行，所以本堂課把原本的 IdeaCanvas iOS Reader 改成更貼近真實需求的旅行工具 App
> **預演 repo：** [`KoreanPhraseBuddy`](https://github.com/jonesandjay123/KoreanPhraseBuddy)
> **原始方案保留：** [`ideacanvas-ios-reader-original.md`](./ideacanvas-ios-reader-original.md)

---

## 一句話版本

這堂課不是要教會 Swift，也不是要做完整商業 App。

這堂課要讓學生體驗：

> **我下週真的要去首爾，所以今晚我可以用 AI coding agent + Xcode，做一個自己手機上真的能用的韓文小幫手。**

完成版概念叫 **Seoul Phrase Buddy**：

- 輸入一句自己可能會在首爾用到的句子
- 存成旅行小卡
- App 幫忙轉成自然、禮貌的韓文
- 可以複製給店員看
- 可以用 iPhone 播放韓文
- 沒網路或 API 卡住時，也能用外部 ChatGPT / Gemini 網頁版批次翻譯後匯入

---

## 為什麼從 IdeaCanvas 改成 KoreanPhraseBuddy？

原本 Session 6 的方向是：

> 把 Session 5 的 IdeaCanvas 心智圖 JSON 匯出，再用 SwiftUI 做 iOS Reader。

這個設計很好，核心概念是「資料和介面分離」。但這次實際上課情境更明確：Azunyan 很快要去首爾。

所以本堂課改成更有生活動機的作品：

> 做一個旅行現場真的會打開用的小工具。

這個改動保留了原本 Session 6 的核心精神：

- 第一次打開 Xcode
- 第一次看 SwiftUI
- 第一次在陌生平台上靠 AI coding agent 前進
- 繼續練習把需求拆小、逐步驗證
- 繼續強調「資料」不是畫面：小卡資料可以本機保存、JSON 匯出、外部 AI 處理、再回到 App

但它比 IdeaCanvas Reader 更適合這次課：

- 學生馬上知道為什麼要做
- 每一步都有肉眼可見的成果
- 語音輸入、韓文 TTS、翻譯都跟旅行場景直接連上
- 成品即使很小，也真的有用

---

## 角色分工

這次預演已經由 Jones 在外出電腦上，用 ChatGPT + Codex 把 `KoreanPhraseBuddy` 做出來。Jarvis 不需要也不應該代跑 app 實作；Jarvis 的任務是把走過的路、踩過的坑、適合教學的順序整理回 workshop 教材。

課堂上的角色建議：

| 角色 | 任務 |
| --- | --- |
| Jones | 主導教學節奏、決定哪些地方 demo、哪些地方讓學生親手做 |
| Azunyan | 坐在自己的電腦前，用 AI coding agent 修改自己的 Xcode project |
| ChatGPT / Gemini | 幫忙把口語需求整理成適合貼給 Codex 的 prompt |
| Codex Desktop / CLI | 實際修改 SwiftUI 專案 |
| Xcode | 建 project、build、跑 Simulator / 實機、處理權限和 signing |
| Jarvis | 課後整理教材、沉澱流程、commit / push workshop docs |

教學重點不是「老師事先寫好一個 app 給學生看」。

教學重點是：

> 學生學會在陌生技術棧裡，把一個真實需求拆成小步驟，交給 AI coding agent，然後用 Xcode 一步一步驗證。

---

## 最重要的教學結論

### 1. App 要先變有用，再接 API

預演證明，Gemini API 不是第一步。

最安全的教學順序是先讓 App 成為一個本機可用的小工具：

1. 可以打開
2. 可以輸入
3. 可以新增小卡
4. 可以保存
5. 可以語音輸入
6. 可以顯示韓文欄位
7. 可以複製 / 播放韓文

等學生已經感覺「這個 App 活了」，再接 Gemini。

如果一開始就進 API key、Info.plist、網路錯誤，學生會把整堂課記成「Xcode 很可怕」。

### 2. 課堂版要 Japanese-first

`KoreanPhraseBuddy` 預演 repo 是 Jones 自己用的繁中版本：

- 中文輸入
- 繁中 UI
- `SFSpeechRecognizer(locale: "zh-TW")`

但 Azunyan 的母語是日文，所以課堂版應改成：

- 日文 UI
- 日文語音輸入
- `SFSpeechRecognizer(locale: "ja-JP")`
- 按鈕文字例如：`音声入力`、`停止`、`カードを追加`

目的語仍然是韓文，因為產品場景是首爾旅行。

### 3. 語音輸入要提早

預演時因為開發速度快，先做了韓文 TTS，後來才加中文語音輸入。

但教學時應該調整：

> 本機保存完成後，就先加日文語音輸入。

原因是語音輸入給學生的成就感很直接：

- 她不用打很多字
- 她可以直接說出旅行句子
- 句子立刻出現在 App 裡
- 這會讓 App 很快變得像「自己的工具」

### 4. Gemini key 是最大坑

預演踩到的重要坑：

`Config/Secrets.xcconfig` 裡有 `GEMINI_API_KEY`，不代表 App runtime 讀得到。

資料流必須完整：

```text
Config/Secrets.xcconfig
  -> GEMINI_API_KEY build setting
  -> Info.plist 裡的 GeminiAPIKey
  -> AppConfig.swift
  -> GeminiTranslator.swift
```

也就是說，Xcode target 的 Info 裡需要有：

```text
GeminiAPIKey = $(GEMINI_API_KEY)
```

或 target build settings 裡要有：

```text
INFOPLIST_KEY_GeminiAPIKey = $(GEMINI_API_KEY)
```

如果少了這個 mapping，`xcodebuild -showBuildSettings` 看起來可能是對的，但 App 仍然會顯示：

```text
請先在 Secrets.xcconfig 設定 GEMINI_API_KEY
```

這一段課堂上要用 checklist，不要臨場猜。

### 5. 外部 LLM 匯出 / 匯入不是多餘功能，而是教學亮點

預演版加入了外部 LLM fallback：

- App 把所有小卡匯出成 JSON prompt
- 使用者貼到 ChatGPT / Gemini 網頁版
- 外部 LLM 回傳 JSON array
- App 用 `id` 對應原本小卡，只更新 `korean` 欄位

這件事很值得教，因為它讓學生理解：

> App 裡的資料可以變成 JSON，交給外部 AI 處理，再回到 App。

這比單純「按一個 API 翻譯」更能建立資料流概念，也能避免 Gemini API、quota、Wi-Fi、key setup 在課堂上卡死。

---

## 建議課堂順序

這是根據預演後調整出的順序，不是 `KoreanPhraseBuddy` repo 的實作順序。

### Step 0: 開場 — 今天不是學 Swift，是做旅行工具

目標：降低焦慮，建立動機。

可以這樣說：

> 今天我們不是要從頭學 Swift。今天是要證明一件事：妳下週真的要去首爾，所以我們今晚做一個手機上可以幫妳說韓文的小工具。Swift 不熟沒關係，我們要練的是怎麼跟 AI coding agent 合作。

---

### Step 1: Xcode Hello World 跑起來

目標：讓學生第一次看到 iOS app 在 Simulator 或實機上跑起來。

建議：

- Xcode → New Project → iOS App
- Product Name 可用 `KoreanPhraseBuddy` 或學生自己的名字版本
- Interface: SwiftUI
- Language: Swift
- 不勾 Core Data / Tests
- 先按 Run，不改任何 code

驗收：

- Simulator / iPhone 上看到 Hello World

教學重點：

- 不解釋太多 Swift
- 先建立「Xcode 可以跑」的信心
- 如果 signing / device 卡住，先用 Simulator

---

### Step 2: 做第一版 SwiftUI 畫面

目標：把 Hello World 變成 Seoul Phrase Buddy 的外殼。

學生 prompt：

```text
Please update this SwiftUI app to make a simple Seoul Phrase Buddy UI.

Requirements:
- Page title: Seoul Phrase Buddy
- A text input where the user can type a Japanese phrase
- An Add Card button
- A simple empty state that says there are no phrase cards yet
- Use @State only for now
- Do not add networking or API calls yet
- Keep the code beginner-friendly
```

驗收：

- App 標題變成 Seoul Phrase Buddy
- 有輸入框
- 有新增按鈕
- UI 看起來像一個 App，而不是 Hello World

教學重點：

- SwiftUI `View` 跟 React component 有家族相似性
- 先做畫面，不做資料、不做 API

---

### Step 3: 用 `@State` 新增小卡

目標：讓學生第一次看到自己輸入的內容出現在列表中。

學生 prompt：

```text
Please add phrase cards in memory.

Requirements:
- When the user types a Japanese phrase and taps Add Card, add it to a list
- Show the newest card at the top
- Each card should display the original Japanese phrase
- Clear the text field after adding
- Use @State for the card array for now
- Do not save data yet
- Do not add translation yet
```

驗收：

- 輸入一句日文
- 按 Add Card
- 卡片出現在列表上方
- 關掉 App 後資料消失沒關係

教學重點：

- 先用記憶體資料
- 讓學生理解「畫面是資料長出來的」

---

### Step 4: 加 `PhraseCard` model 和本機保存

目標：讓小卡重開 App 後還在。

學生 prompt：

```text
Please add a PhraseCard model and local saving.

Requirements:
- Create a PhraseCard model that is Identifiable and Codable
- Fields: id, japanese, korean, createdAt
- Save the card list with UserDefaults using JSONEncoder
- Load the saved list when the app starts
- Keep the implementation simple and beginner-friendly
- Do not add networking yet
```

驗收：

- 新增幾張卡
- 關掉 App / 重開 App
- 卡片還在

教學重點：

- `Codable` 可以把資料變成可保存的形式
- `UserDefaults` 適合小型本機資料
- 這是 iOS 版 localStorage 類比

可能卡點：

- 保存是隱形的，學生不會感覺到它存在
- 要用「重開 App 還在」來示範它真的有用

---

### Step 5: 加日文語音輸入

目標：讓學生可以用說話建立卡片，降低打字成本。

學生 prompt：

```text
Please add simple Japanese voice input to this SwiftUI phrase card app.

Requirements:
- Use iOS native Speech framework
- Recognize Japanese speech with the ja-JP locale
- Add a microphone button near the text field
- While listening, update the text field with the recognized sentence
- Let the user stop listening manually
- Add the required Info.plist privacy usage descriptions
- Keep the app UI copy Japanese-first
- Keep the UI and code beginner-friendly
```

驗收：

- 按 `音声入力`
- 允許麥克風和語音辨識權限
- 說一句日文
- 文字出現在輸入框
- 按停止
- 按新增小卡

教學重點：

- 手機 App 能用裝置能力：麥克風、語音辨識
- iOS 使用隱私功能時需要 Info.plist usage description
- 真機通常比 Simulator 更適合測語音

可能卡點：

- 麥克風權限被拒後，要去 iOS Settings 重開
- Simulator 的麥克風設定可能不穩
- `SFSpeechRecognizer` locale 一定要是 `ja-JP`，不要沿用預演版 `zh-TW`

---

### Step 6: 加韓文欄位與假翻譯

目標：先完成翻譯 UI，不接 API。

學生 prompt：

```text
Please improve each phrase card with a Korean translation area.

Requirements:
- Show the original Japanese text
- Show Korean text if it exists
- If Korean is empty, show "まだ翻訳されていません"
- Add a Translate button
- For now, Translate should set a fake Korean sample text
- Do not call Gemini yet
- Keep the code simple
```

驗收：

- 每張卡有原文和韓文區
- 按 Translate 後出現假韓文

教學重點：

- 先設計互動，再接真正 AI
- 假資料是正常開發方法，不是偷懶

---

### Step 7: 加複製韓文

目標：讓 App 開始接近旅行現場用途。

學生 prompt：

```text
Please implement Copy for the Korean text.

Requirements:
- Add a Copy button on each card
- Use UIPasteboard to copy the Korean text
- If the Korean text is empty, do nothing or show a simple status message
- Keep the UI compact and beginner-friendly
```

驗收：

- 按 Copy
- 貼到 Notes / Messages 可看到韓文

教學重點：

- App 可以跟系統剪貼簿互動
- 旅行時「給店員看」比語音更可靠

---

### Step 8: 加韓文 TTS 播放

目標：讓 App 可以把韓文念出來。

學生 prompt：

```text
Please implement Speak for the Korean text.

Requirements:
- Add a Speak button on each card
- Use AVSpeechSynthesizer
- Korean speech language should be ko-KR
- If another speech is playing, stop it before starting the new one
- If the Korean text is empty, do nothing or show a simple status message
```

驗收：

- 按 Speak
- iPhone / Simulator 播放韓文

教學重點：

- `ko-KR` 是韓文語音
- 裝置音量 / 靜音模式可能影響播放
- TTS 聽起來不完美沒關係，重點是功能可用

---

### Step 9: 最後才接 Gemini

目標：把假翻譯換成真翻譯。

學生 prompt：

```text
Please replace the fake translation with a Gemini API call.

Requirements:
- Translate the Japanese phrase into natural, polite Korean for Seoul travel situations
- Keep the prompt short and focused
- Read the Gemini API key from the app bundle Info.plist key named GeminiAPIKey
- If the API key is missing, show a clear user-facing error message
- Show a loading state while translating
- Disable the Translate button while the request is running
- Save the Korean result back into the existing card list
- Do not commit any real API key
```

建議 Gemini prompt：

```text
You are an interpreter for a Japanese traveler visiting Seoul.
Translate the following Japanese sentence into natural, polite Korean suitable for saying directly to shop staff, station staff, hotel staff, or local people.
Do not add facts that are not in the original sentence.
Return only the Korean sentence. No explanation. No Markdown.
```

驗收：

- 設定 key 後按 Translate
- 出現自然韓文
- 翻譯結果保存到小卡

教學重點：

- API key 不要 commit
- prototype 可以把 key 放 app bundle，但正式產品不應該這樣做
- `Secrets.xcconfig` 是本機 secret 管理，類似 Android `local.properties`

---

### Step 10: 加外部 LLM 匯出 / 匯入 fallback

目標：當 Gemini API、quota、Wi-Fi、key setup 卡住時，App 還是能用。

學生 prompt：

```text
Please add an external LLM export/import fallback.

Requirements:
- Add Export and Import buttons above the card list
- Export should copy a prompt to the clipboard
- The prompt should include all phrase cards as JSON
- Ask ChatGPT or Gemini web to fill or update only the korean field
- Import should open a sheet where the user can paste a JSON array
- Import should match cards by id and update only the korean field
- Preserve the original card order
- Show a simple success or error message
- Keep the code beginner-friendly
```

驗收：

- 按 Export，prompt 進剪貼簿
- 貼到 ChatGPT / Gemini 網頁版
- 拿回 JSON array
- 回 App 按 Import 貼上
- 小卡韓文被補上

教學重點：

- 這是資料流，不只是 UI 功能
- JSON 是 App 和 AI 之間的交換格式
- fallback 是實用產品設計的一部分

---

### Step 11: 加排序與刪除確認

目標：收尾成旅行現場比較安全的工具。

學生 prompt：

```text
Please add final travel usability improvements.

Requirements:
- Let the user reorder phrase cards using the native SwiftUI List edit mode
- Save the new order using the existing UserDefaults persistence
- Ask for confirmation before deleting a card
- Keep the implementation native and simple
```

驗收：

- 至少三張小卡
- 按 Edit，拖曳排序
- 重開 App 後順序仍保留
- 刪除前會跳確認

教學重點：

- iOS `List` 有很多原生能力
- 資料順序也是資料的一部分
- 旅行現場誤刪很煩，所以 destructive action 要確認

---

## 課堂時間配置建議

如果只有約 3 小時，不要硬塞完整預演版。

### 3 小時推薦版

| 段落 | 內容 | 時間 |
| --- | --- | --- |
| 1 | Xcode Hello World + 專案導覽 | 25 min |
| 2 | 第一版 UI + `@State` 小卡 | 35 min |
| 3 | `PhraseCard` + UserDefaults 保存 | 35 min |
| 4 | 日文語音輸入 | 35 min |
| 5 | 韓文欄位 + 假翻譯 + 複製 | 30 min |
| 6 | 韓文 TTS | 20 min |
| 7 | Gemini 或外部 LLM fallback 二選一 | 30 min |
| 8 | 收尾 / commit / 回顧 | 10 min |

### 如果時間不夠，優先保留

1. Xcode 跑起來
2. 新增小卡
3. 本機保存
4. 日文語音輸入
5. 韓文欄位 + 複製

這樣即使沒有 Gemini，也已經是一個可用的旅行筆記工具。

### 如果狀態很好，再加

- 韓文 TTS
- Gemini API
- 外部 LLM 匯出 / 匯入
- 排序
- 刪除確認
- App icon / display name polish

---

## 工具主線與備援

### 首選：Codex Desktop / Codex App

推薦原因：

- 能看 repo、改檔、產 diff
- 很適合「Xcode build/run → 錯誤貼回 Codex → 修」的循環
- 比純聊天更像 coding partner

### 備援 A：Codex CLI

如果 Desktop 不穩但 CLI 可用，可以改 CLI。

不要讓 CLI 安裝 / 登入變成課程主線。卡太久就切備援。

### 備援 B：Antigravity + Gemini

Azunyan 已經熟悉 Antigravity，也可用 Gemini Pro。若 Codex 帳號、額度、登入、權限卡住，就回 Antigravity。

### 備援 C：ChatGPT / Gemini 網頁版手動貼 code

最保底。體驗比較弱，但仍能完成核心 MVP。

---

## 給打字慢學生的語音 → Prompt 工作流

不要要求學生一開始就能打出很長、很精準的 coding prompt。

教她這個流程：

1. 用 ChatGPT 手機 App 語音說需求
2. 請 ChatGPT 整理成適合貼給 Codex 的英文 prompt
3. 把 prompt 貼給 Codex
4. Codex 改 Xcode project
5. Xcode build/run
6. 錯誤訊息貼回 Codex

固定句型：

```text
請把我剛剛說的需求整理成一段適合貼給 Codex 的英文 prompt。
請包含：
1. 我想修改哪個 app
2. 我想新增什麼功能
3. UI 大概要長什麼樣
4. 不要一次改太多
5. 修改完請告訴我改了哪些檔案
```

這本身就是本堂課的重要能力：

> 不會寫完美 prompt 沒關係；先會描述需求，再讓另一個 AI 幫你整理成 coding agent 能執行的指令。

---

## Xcode / iOS 常見坑

### 1. Xcode 可能藏起 root-level README / `.gitignore`

學生可能以為檔案不見了。提醒她 Xcode project navigator 和 Finder / repo tree 不是完全一樣的視角。

### 2. App icon / display name 可能被 iOS cache

如果 iPad 主畫面還顯示舊名稱或舊 icon：

1. 從裝置刪掉 App
2. 回 Xcode 重新 Run

### 3. Gemini key mapping 容易漏

再次強調：

```text
GEMINI_API_KEY build setting ≠ App runtime 一定讀得到
```

runtime 讀的是：

```swift
Bundle.main.object(forInfoDictionaryKey: "GeminiAPIKey")
```

所以 Info.plist / target Info 必須真的有 `GeminiAPIKey = $(GEMINI_API_KEY)`。

### 4. 語音權限被拒後很麻煩

如果學生第一次按錯拒絕：

- 到 iOS Settings 找 App
- 打開 Microphone / Speech Recognition
- 或刪 App 重裝再試

### 5. Simulator log 很吵

Xcode console 可能出現 app launch measurement、gesture gate、reporter disconnected 等系統 log。

只要 App 沒 crash、功能正常，先當作雜訊，不要讓學生被 log 嚇到。

### 6. TTS 沒聲音不一定是 code 壞

先檢查：

- 裝置音量
- 靜音模式
- Simulator 音訊輸出
- 韓文 voice 是否可用

---

## API key 教學安全說法

課堂上可以這樣講：

> 今天我們是 private workshop prototype，所以可以先把 Gemini API key 透過本機 `.xcconfig` 放進 App bundle，方便學習。但正式上架或給很多人用的 App 不能這樣做，因為 App bundle 裡的 key 有機會被拆出來。正式產品應該走後端 proxy 或其他安全設計。

務必提醒：

- 不要 commit `Config/Secrets.xcconfig`
- repo 裡只放 `Config/Secrets.example.xcconfig`
- 真 key 只留在本機

---

## App 命名建議

Repo / Xcode project：

```text
KoreanPhraseBuddy
```

原因：

- `Korean` 是形容詞，表示韓文的 / 韓國的
- `Korea` 是名詞，表示韓國

App 內標題：

```text
Seoul Phrase Buddy
```

iPad / iPhone Home Screen display name 可以短一點：

```text
Seoul Buddy
```

避免 `Seoul Phrase Buddy` 被主畫面截斷。

---

## 最小完成定義

如果今晚只完成以下項目，就算成功：

- iOS App 可以跑
- 可以輸入 / 語音輸入日文句子
- 可以新增成小卡
- 小卡會本機保存
- 可以看到韓文欄位
- 可以複製韓文或假韓文

如果再完成以下任一項，就是加分：

- 韓文 TTS
- Gemini 真翻譯
- 外部 LLM 匯出 / 匯入
- 小卡排序
- 刪除確認
- App icon / display name polish

---

## 課後整理方向

課後可以把學生實際走過的 prompt 和錯誤補回這份文件：

````md
## Actual Class Log

### Step N: 功能名稱

Prompt used:
```text
貼給 Codex 的 prompt
```

Result:
- 成功 / 失敗 / 部分成功
- 改了哪些檔案

Xcode result:
- build 成功嗎？
- Simulator / 實機有跑起來嗎？

Student issue:
- 哪裡卡住
- 老師怎麼提示

Teaching note:
- 下次要怎麼調整
````

這樣 Session 6 會從「課前設計」慢慢變成真正可重複使用的教材。
