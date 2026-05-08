# Session 6: KoreanPhraseBuddy — 首爾旅行用 iOS 韓文小幫手

> **狀態：** 2026-05-07 晚上課前備課版
> **場景：** Jones 正在日本旅行中，今晚要和櫻井妹妹進行第六堂 Vibe Coding 課程。她下週左右要去首爾，因此本堂課從原本的「IdeaCanvas iOS Reader」調整為更貼近生活情境的「韓文旅行 Phrase Buddy iOS App」。
> **參考 repo：** [`JapanPhraseBuddy`](https://github.com/jonesandjay123/JapanPhraseBuddy)
> **建議新試作 repo：** `KoreanPhraseBuddy`
> **App 顯示名稱建議：** `Seoul Phrase Buddy`

---

## 給 GPT / 共同備課者的快速背景

Jones 原本的 Session 6 教材是：

> 從 Web Mind Map 到 iOS — 把 Session 5 的 IdeaCanvas 心智圖資料用 JSON 匯出，再用 SwiftUI 做 iOS Reader。

這個版本的核心學習目標是：

- 第一次進入 Xcode / SwiftUI
- 理解「資料」和「介面」分離
- 體驗「不熟悉的平台也能靠 AI coding 做出東西」

但今晚實際情境變了：櫻井妹妹下週要去首爾旅行。Jones 想把課程改成更有立即用途的作品：

> 做一個 iOS 版韓文旅行小幫手：輸入中文句子，存成小卡，需要時翻成自然禮貌韓文，並能複製或用 iPhone 播放。

這個改動仍然保留 Session 6 的核心精神：

- 從熟悉的網頁 / AI coding 經驗，跨到陌生的 iOS / SwiftUI
- 不要求學生先學完 Swift，而是透過 AI prompt 拆小步驟完成 MVP
- 把「我下週真的會用到」變成學習動機

原版 IdeaCanvas iOS Reader 已保留在：

```text
session6/ideacanvas-ios-reader-original.md
```

---

## 為什麼推薦 `KoreanPhraseBuddy`，不是 `KoreaPhraseBuddy`？

- `Korean` 是形容詞，表示「韓文的／韓國的」
- `Korea` 是名詞，表示「韓國」

因此 repo / project 名稱建議：

```text
KoreanPhraseBuddy
```

課堂上的產品名稱可以更情境化：

```text
Seoul Phrase Buddy
```

也就是：

- GitHub repo：`KoreanPhraseBuddy`
- Xcode project：`KoreanPhraseBuddy`
- App display name：`Seoul Phrase Buddy`
- 課程主題：做一個首爾旅行用韓文小幫手

---

## 本堂課的核心命題

> **「下週要去首爾，所以今晚做一個真的能在旅行中打開用的小工具。」**

這堂課不是要完整複製 `JapanPhraseBuddy`。`JapanPhraseBuddy` 已經包含 Android、Wear OS、Gemini、TTS、furigana、同步、匯入匯出等功能，太完整，不適合直接當 3 小時課程目標。

今晚只做 iOS MVP：

1. 可以輸入中文
2. 可以新增成小卡
3. 小卡會保存在手機本機
4. 可以把中文翻成自然禮貌韓文
5. 可以複製韓文
6. 可以播放韓文 TTS

如果這六件事完成，就是巨大勝利。

---

## 課前預演目標（Jones 自己先做一次）

Jones 的計畫是課前先自己預演一次，確認 iPad / iPhone 實機部署與 SwiftUI 開發流程會遇到哪些坑。這非常重要，因為今晚真正難的可能不是寫 app，而是第一次 iOS 開發的細節。

預演時請特別記錄：

- Xcode 建 project 時選了哪些選項
- Bundle Identifier 怎麼命名
- Signing & Capabilities 是否需要登入 Apple ID
- Personal Team 是否可用
- iPad / iPhone 是否能被 Xcode 偵測到
- 第一次開 Developer Mode 是否要重開機
- USB-C / Lightning 線是否能資料傳輸，不只是充電
- Simulator 是否比實機更穩
- Gemini API key 放在哪裡比較適合教學
- 哪些 prompt 一次成功，哪些 prompt 太大、容易壞
- 哪些步驟適合讓妹妹自己操作，哪些適合 Jones demo

---

## Apple Developer / 實機部署重點

### 是否需要付費 Apple Developer Program？

**今晚大概率不需要。**

只要目標是：

- 在 Simulator 跑
- 或把 app 跑到自己的 iPhone / iPad 做本機測試

通常只需要：

- 一個 Apple ID
- Xcode 登入 Apple ID
- 使用 Personal Team
- 裝置信任這台 Mac
- 裝置開啟 Developer Mode
- Xcode signing 設定正確

不需要付年費 US$99 的 Apple Developer Program。

付費帳號主要用於：

- App Store 上架
- TestFlight
- 較正式的 distribution
- 某些進階 capability

今晚不要把「付費開發者帳號」放進主線，否則很容易變成行政流程地獄。

### 實機部署檢查清單

開課前最好先確認：

- [ ] Mac 已安裝 Xcode，且能打開
- [ ] Xcode 已完成首次啟動、同意 license、安裝 components
- [ ] Xcode → Settings → Accounts 已登入 Apple ID
- [ ] 可以看到 Personal Team
- [ ] iPhone / iPad 用可傳資料的線接到 Mac
- [ ] 裝置跳出 Trust This Computer 時選 Trust
- [ ] iOS / iPadOS 已開啟 Developer Mode
- [ ] 開 Developer Mode 後若要求重開機，已完成
- [ ] Xcode 左上角 device list 看得到該裝置
- [ ] Bundle Identifier 改成唯一值，例如：

```text
com.joneslab.KoreanPhraseBuddy
```

如果妹妹的裝置臨時卡住，備案是先用 Simulator 完成本堂課，實機部署當作 optional。

---

## MVP 功能範圍

### 必做

- 中文輸入框
- 「新增小卡」按鈕
- 小卡列表
- 小卡本機保存
- 韓文欄位
- 「翻譯」按鈕
- 「複製」按鈕
- 「播放」按鈕

### 可以延後

- 分類
- 搜尋
- 雲端同步
- Apple Watch
- 分享 extension
- App icon 精修
- 多語言切換
- 上架 App Store
- 片語資料庫
- 羅馬拼音 / 韓文發音標註
- 匯入 / 匯出 JSON

### 建議資料模型

```swift
struct PhraseCard: Identifiable, Codable {
    var id: UUID = UUID()
    var chinese: String
    var korean: String = ""
    var createdAt: Date = Date()
}
```

---

## 建議課程節奏（約 3 小時）

### 0. 開場：為什麼今天做這個（10 min）

開場不要先講 Swift。先講情境：

> 「妳下週要去首爾。今天我們做一個真的可以放在手機裡、旅行時打開用的小工具。」

讓她先輸入幾句真的會用到的中文：

- 請問這裡可以刷卡嗎？
- 請問這班車會到弘大入口嗎？
- 可以幫我推薦不辣的餐點嗎？
- 我對海鮮過敏，請問這道菜有海鮮嗎？
- 請問洗手間在哪裡？

### 1. Xcode Hello World（25–35 min）

目標：先讓 app 跑起來，不做功能。

成功標準：

- Simulator 或實機看到 `Hello, world!`
- 學生知道 Xcode project、Preview、Run button 大概在哪裡

這一步不要貪心。第一次 Xcode 很容易被 signing / device / simulator 佔掉時間。

### 2. 做出第一版 UI（35–45 min）

功能：

- 標題：Seoul Phrase Buddy
- 中文輸入框
- 新增小卡按鈕
- List 顯示小卡

這裡先不要翻譯，不要 API。

成功標準：

- 輸入中文
- 按新增
- 下面出現一張卡片

### 3. 本機保存（30–40 min）

功能：

- `PhraseCard` conform `Codable`
- 用 `UserDefaults` 保存 `[PhraseCard]`
- App 重開資料還在

教學重點：

> App 的畫面會消失，但資料可以被保存。資料不是畫面，資料可以被 encode 成 JSON。

這一段可以呼應原本 Session 6 的「資料 vs 介面」概念。

### 4. 韓文翻譯（45–60 min）

建議分兩階段：

#### 4A. Fake translation / 手動韓文欄位

先讓 app 支援 `korean` 欄位，並在卡片上顯示。可以暫時用假資料或手動填入。

目的：避免一開始就被 API 卡住。

#### 4B. Gemini / 外部 LLM 翻譯

再加入真正翻譯。

建議 prompt 要求：

- 台灣旅人
- 首爾旅行
- 自然、禮貌、可直接對店員 / 站務 / 路人說
- 不新增中文沒有提到的資訊
- 只回傳 JSON object 或純文字

如果 API key / quota / network 卡住，備援流程：

1. App 產生 prompt
2. 複製到 ChatGPT / Gemini web
3. 把回傳韓文貼回 app

今晚主線可先用 API，但教材應保留外部 LLM 備案。

### 5. 複製與播放（25–35 min）

加入：

- Copy Korean：`UIPasteboard.general.string = korean`
- Speak Korean：`AVSpeechSynthesizer` + `ko-KR`

成功標準：

- 可以複製韓文給別人看
- 可以按播放，iPhone 用韓文念出來

這會是整堂課最有「旅行工具完成了」感覺的瞬間。

### 6. 收尾（10–15 min）

反思問題：

- 今天最像魔法的是哪一步？
- 哪一步其實只是資料在流動？
- 如果妳明天要加功能，會加什麼？
- 這個 app 下週首爾真的會用在哪些情境？

---

## 建議 AI Coding Prompts

### Prompt 1：建立基本 UI

```text
我正在做一個 SwiftUI iOS app，名稱是 Seoul Phrase Buddy。
請幫我修改 ContentView，做出以下功能：

- 頁面標題：Seoul Phrase Buddy
- 一個中文輸入框，placeholder 是「輸入想說的中文」
- 一個「新增小卡」按鈕
- 下面用 List 顯示所有已新增的小卡
- 每張小卡先只需要顯示 chinese 文字

請先用 @State 在 ContentView 裡保存資料，不要加入 API，也不要加入複雜架構。
請給我可以直接貼進 ContentView.swift 的完整程式碼。
```

### Prompt 2：加入資料模型與本機保存

```text
請幫我把剛才的 SwiftUI app 改成使用 PhraseCard model：

struct PhraseCard: Identifiable, Codable {
    var id: UUID = UUID()
    var chinese: String
    var korean: String = ""
    var createdAt: Date = Date()
}

請加入 UserDefaults 保存功能：
- 新增小卡後自動保存
- App 打開時自動讀取
- 使用 JSONEncoder / JSONDecoder

請保持程式簡單，適合初學者閱讀。
```

### Prompt 3：加入韓文欄位與卡片 UI

```text
請幫我改進 Seoul Phrase Buddy 的卡片 UI。
每張卡片要顯示：

- 原始中文
- 如果 korean 不為空，顯示韓文
- 如果 korean 為空，顯示「尚未翻譯」
- 每張卡片有三個按鈕：翻譯、複製、播放

目前翻譯按鈕先不要接 API，可以先把 korean 設成範例文字「안녕하세요」。
複製和播放可以先留空 function，我們下一步再做。
```

### Prompt 4：加入韓文 TTS

```text
請幫我在 SwiftUI app 裡加入韓文播放功能。
需求：

- 使用 AVFoundation
- 用 AVSpeechSynthesizer 播放韓文
- language 設定為 ko-KR
- 如果 korean 是空字串，不要播放

請告訴我需要 import 什麼，並給我最簡單可用的程式碼。
```

### Prompt 5：加入複製功能

```text
請幫我加入複製韓文的功能。
需求：

- 按下「複製」後，把該卡片的 korean 複製到 iOS 剪貼簿
- 使用 UIPasteboard
- 如果 korean 是空字串，不要複製
- 可以用一個簡單的 @State message 顯示「已複製」
```

### Prompt 6：加入 Gemini 翻譯 API

```text
請幫我在這個 SwiftUI app 中加入 Gemini 翻譯功能。

需求：
- 輸入：PhraseCard 的 chinese
- 輸出：自然、禮貌、適合台灣旅人在首爾對店員、站務、飯店櫃檯或路人直接說的韓文
- 不要新增中文沒有提到的事實
- 翻譯完成後更新該卡片的 korean 欄位並保存
- 使用 async/await
- API key 先用一個常數 GEMINI_API_KEY 代表，之後我會自己處理安全性
- 請保持程式碼簡單，適合初學者理解

請先只回傳最小可用版本，不要加入複雜架構。
```

---

## Gemini 翻譯 Prompt 建議

```text
你是台灣旅人在韓國首爾旅行時的現場口譯助手。
請把下面這句中文轉成自然、禮貌、適合直接對韓國店員、站務、飯店櫃檯或路人說的韓文。
可以稍微潤飾成更自然的韓文，但不要新增中文沒有提到的事實。
請只輸出韓文句子，不要解釋，不要 Markdown。

中文：{chineseText}
```

如果想要 JSON：

```text
你是台灣旅人在韓國首爾旅行時的現場口譯助手。
請把下面這句中文轉成自然、禮貌、適合直接對韓國店員、站務、飯店櫃檯或路人說的韓文。
可以稍微潤飾成更自然的韓文，但不要新增中文沒有提到的事實。
請只輸出合法 JSON object，不要 Markdown，不要解釋。

JSON schema:
{
  "korean": "自然禮貌的韓文句子"
}

中文：{chineseText}
```

---

## 參考 `JapanPhraseBuddy` 時要取哪些概念？

可以借用的概念：

- 旅行現場溝通工具，而不是大型片語庫
- 先存小卡，不要等翻譯成功才保存
- 每張小卡可以個別翻譯 / 重翻
- 翻譯失敗時不要丟失原始中文
- 小卡保存在本機
- 按鈕順序偏向實用：播放 → 複製 → 翻譯/重翻 → 刪除
- Gemini 429 / 額度問題要有外部 LLM 備案

今晚不要借用的複雜度：

- Android / Kotlin / Compose
- Wear OS
- Data Layer sync
- furigana / rubySegments
- 拖曳排序
- 完整匯入匯出 JSON
- 多 module project

---

## 教學上的關鍵提醒

### 不要一開始就說「今天學 Swift」

比較好的說法：

> 「今天不是要妳學會 Swift，而是要妳體驗：就算是陌生平台，也可以靠 AI 拆小步驟做出真的能用的 app。」

### 每一步都要有可見成果

不要連續 40 分鐘只改 code。每 10–20 分鐘要能按 Run 看到變化。

### API 是高風險區

Gemini API 很可能卡在：

- API key
- quota
- HTTP request
- JSON parsing
- iOS networking permission / ATS confusion
- async/await 初學者難懂

所以翻譯 API 不要放太早。先讓 app 本身成立，再加 AI。

### 實機部署也是高風險區

如果 iPhone / iPad 卡住，不要讓整堂課被 signing 吃掉。備案：

1. 先用 Simulator 完成 app
2. 最後再挑戰實機
3. 或 Jones demo 自己 iPad 上的版本

---

## 今晚最小成功定義

如果最後完成以下任一版本，都算成功：

### A. 完整 MVP 成功

- iOS app 可跑
- 可新增中文小卡
- 可保存
- 可翻譯韓文
- 可複製
- 可播放

### B. 無 API 成功

- iOS app 可跑
- 可新增中文小卡
- 可保存
- 可手動填入或假資料顯示韓文
- 可複製 / 播放韓文

### C. Simulator 成功

- Simulator 完成功能
- 實機部署列為課後挑戰

不要把成功定義綁死在「一定要實機 + 一定要 Gemini + 一定要完整漂亮」。今晚的核心是完成第一個 iOS 旅行工具。

---

## 課後可能延伸

- 加刪除小卡
- 加重翻
- 加常用場景分類：交通 / 餐廳 / 飯店 / 購物 / 緊急
- 加韓文羅馬拼音或中文注音輔助
- 加外部 LLM prompt 匯出 / 匯入
- 加 app icon
- 加分享功能
- 加 iCloud sync
- 變成多語言 Travel Phrase Buddy

---

## 給 Jones 的備課建議

課前你自己預演時，不要只看「有沒有做出來」。請刻意記錄：

1. 哪些地方 AI 一次就寫對
2. 哪些地方 AI 會過度工程化
3. 哪些 prompt 要縮小
4. 哪些 Xcode / signing / device 步驟很煩
5. 哪些適合你先 demo，哪些適合讓她親手做
6. 如果只剩 90 分鐘，應該砍掉哪些功能
7. 如果她很興奮，哪些 optional 最值得加

今晚真正的教學價值不是 app 多完整，而是讓她帶著一個想法走進陌生平台，然後真的把它做出來。
