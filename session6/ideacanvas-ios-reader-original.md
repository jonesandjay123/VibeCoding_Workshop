# Session 6: 從 Web Mind Map 到 iOS — IdeaCanvas 手機版

> **日期：** 待定
> **對象：** 完成 Session 1-5 的學生（有 HTML / JS / React 基礎、用過 localStorage、做過 LLM 呼叫）
> **場地：** 咖啡店（實體見面）
> **時長：** 約 3 小時（含休息、點餐緩衝）
> **前置要求：**
> - Session 5 的 IdeaCanvas 在本地機可以跑
> - 學生電腦已安裝 **Xcode**（10GB+，**不要在咖啡店下載**）
> - AI 編碼工具至少能用一個（Antigravity / Gemini CLI / Claude Code / Cursor 任一）
> - 帶充電線 × 2、延長線或插座位置的咖啡店

---

## 內容概覽

Session 5 我們做出了 **IdeaCanvas**——一個會跟 Gemini 對話、自動長出子主題的網頁心智圖。這堂課的核心命題是：

> **「你昨天做的東西，可以搬到你口袋裡的手機上嗎？」**

答案是可以，但關鍵不是「把同樣的東西再寫一次」，而是**學會「資料」和「介面」的分離**。JSON 是資料的護照——Web 版本能產生 JSON、iOS 版本能讀 JSON，兩邊就連起來了。

這堂課我們做兩件事：

1. **幫 IdeaCanvas 加上 JSON 匯出/匯入**（讓 Web 版變成可以「輸出資料」的工具）
2. **用 Xcode + SwiftUI + AI 寫一個 iOS App**，讀 IdeaCanvas 輸出的 JSON 並顯示成樹狀列表

**不是**把整個 IdeaCanvas 在手機上重做一次。那太貪心。**先做最簡單的版本：手機上看到自己昨天做的心智圖內容**，這就是巨大勝利。

---

## 核心學習流程

```
Session 5 的 IdeaCanvas
    ↓
加上匯出按鈕 → 產生 .json 檔
    ↓
用 AirDrop / iMessage / USB 傳到 Mac
    ↓
Xcode 新建 SwiftUI iOS App
    ↓
AI 協助寫 Swift code 讀 JSON
    ↓
Simulator 上看到心智圖變成樹狀列表 🎉
```

---

## 資料夾結構

```
session6/
└── README.md            ← 本檔（老師備課筆記）
```

（可能會隨上課過程新增學生範例 JSON 或截圖，屆時再加）

---

## 🎯 學習目標

完成這堂課，學生應該能：

- ✅ 理解「資料（JSON）跟介面（UI）是兩回事」——同一份資料可以長出完全不同的畫面
- ✅ 會用 JavaScript 把 JSON 下載成檔案、從檔案讀回來
- ✅ 第一次打開 Xcode，建立一個 SwiftUI iOS App 並在 Simulator 跑起來
- ✅ 理解 SwiftUI 的 View 跟 React function component 的「家族相似性」
- ✅ 繼續用 Vibe Coding 心法——**不是自己寫 Swift，是跟 AI 對話寫 Swift**
- ✅ 能把手機 App 跑起來，看到自己昨天做的心智圖內容

**不是學習目標：**

- ❌ 學會 Swift 語法細節
- ❌ 理解 SwiftUI 底層運作
- ❌ 把整個心智圖功能移植到 iOS（觸控編輯、SVG 曲線、AI 對話都先放）
- ❌ 上 App Store

---

## 🧠 為什麼這樣教？（教學哲學）

### 為什麼要做 iOS 版本？

不是因為手機 App 比較酷，而是因為這堂課可以完成一個很重要的心智升級：

> **「同樣的資料，可以長出不同的介面。」**

學生之前做的所有東西都是在「一個平台上反覆改」。這堂課第一次讓她體驗「**資料跨平台**」——JSON 從 React 網頁流到 SwiftUI iOS App，中間沒有重寫任何資料邏輯。

這個體驗一旦建立，她之後就能自己想通：

- 「那我的資料也可以流到 Google Sheets 吧？」
- 「那我也可以從別人給我的 JSON 開始做 App 吧？」
- 「那後端 API 回傳的 JSON 跟我讀檔案的 JSON 不就是同一回事？」

這是學語法學不來的心智升級。

### 為什麼第六堂就碰 iOS？（不會太早嗎？）

不會，因為我們**不是真的在教 Swift / iOS**，而是在**利用 iOS 做一次「陌生平台也能 vibe coding」的體驗**。

Vibe Coding 的終極訊息是：**只要學會跟 AI 對話，任何平台、任何語言都不是門檻**。Session 6 就是這個訊息的實證——學生根本不會 Swift，但她可以做出一個會跑的 iOS App。

這比等她「學完 Swift 才能做 iOS」快一百倍，而且**她體驗到的自信是真的**。

### 為什麼先做 JSON 匯出？

JSON 匯出看起來是過渡步驟，但其實是整堂課最重要的單元。原因：

1. 她已經會用 React 和 localStorage（第 5 堂剛做完）→ 這是她熟悉的環境，壓力小
2. 在熟悉環境下加一個新功能 → 她能專心學「JSON 序列化和檔案下載」這個新概念
3. 等到進 Xcode，她已經**有一份屬於自己的 JSON** 在手上 → iOS 開發的 input 是她親手做出來的，不是老師給的範例

等於幫她把 Session 5 的成品「轉成一張門票」，帶這張門票走進 iOS 的世界。

### 為什麼不做完整心智圖移植？

因為時間不夠、難度太高、而且沒必要。

完整心智圖需要：SVG 繪圖、樹狀佈局、觸控編輯、雙指縮放……這些在 SwiftUI 做都要十幾個小時。一堂 3 小時的課做不完。

**只做「讀取 + 列表顯示」，看到自己的資料在手機上「活過來」**，這個成就感是真實的、也是可達成的。後面要加什麼功能是她自己的 side project，不是這堂課要塞滿。

---

## 🧱 課程結構（5 幕、約 3 小時）

| 幕 | 內容 | 時長 |
|---|---|---|
| 第一幕 | 暖身與連結「資料 vs 介面」 | 20-25 min |
| 第二幕 | 為 IdeaCanvas 加上 JSON 匯出/匯入 | 40-50 min |
| 第三幕 | 第一次打開 Xcode，跑 Hello World | 40-50 min |
| 第四幕 | ⭐ 用 AI 寫出「讀 JSON 顯示樹」的 iOS App | 50-60 min |
| 第五幕 | 收尾、反思、展望未來 | 15-20 min |

**總計：** 約 3 小時（含 10-15 分鐘休息 / 點餐 / 網路卡頓緩衝）

---

## 🎬 第一幕：暖身與連結（20-25 min）

**目標：** 讓學生看到「同一份資料可以長出不同的畫面」這個核心概念，而不是直接跳進 code。

### 活動流程

1. **先問問題（5 min）：**
   - 「妳昨天做的 IdeaCanvas 在哪裡？現在打開給我看」
   - 「妳看，這是妳電腦上 Chrome 裡的網頁。如果我現在叫妳在手機上也看到一模一樣的東西，妳會怎麼做？」
   - 可能的回答：「把網址傳給我」「截圖」「直接拍照」
   - 這些都對，但都沒有「**互動性**」——在手機上不能改、不能加節點

2. **引入概念（5 min）：**
   - 「那如果我說，有個辦法讓手機上的 App 真的**讀到妳網頁上的內容**，妳信不信？」
   - 「關鍵是一個叫 JSON 的東西。妳記得上週我們有碰過 JSON 嗎？」
   - 回顧 Session 3/4 碰過的 JSON——她應該有印象

3. **示範（5 min）：**
   - 打開 Chrome DevTools → Application → Local Storage
   - 找到 `ideacanvas-data` 這個 key，點開
   - 「這就是妳所有心智圖的資料。它不是畫面，是**文字**——妳可以複製它，可以傳給別人」
   - 把這段 JSON 複製出來，貼到一個新 .txt 檔
   - 「這個檔案就是我們今天要做的事情——讓它變成一個真的檔案，然後在手機 App 裡打開」

4. **連結 Big Picture（5 min）：**
   - 畫一個超簡單的圖：
     ```
     [IdeaCanvas 網頁]  →  [tree.json 檔案]  →  [iOS App]
         (React)                                 (SwiftUI)
     ```
   - 「妳今天會做的是左邊和右邊中間那條線，還有最右邊的 App 的第一版」
   - 「我們不是在做兩個網頁/兩個 app，我們是在做**一條資料流**」

### 💡 Teaching Tips

- **不要一開始就講 Swift / Xcode / SwiftUI**——她會嚇到。先講 JSON 就好
- **強調「妳已經會的」** ——React、JavaScript、localStorage，這些她都有
- **如果她問「那為什麼網頁不能直接在手機看？」**，可以用比喻：「網頁是穿西裝的，手機 App 是穿洋裝的。同一個人穿不同衣服。衣服是介面，人是資料」
- **咖啡店環境：** 點完飲料再開始，確保她有舒服的座位和穩定的電源

---

## 🎬 第二幕：為 IdeaCanvas 加上 JSON 匯出/匯入（40-50 min）

**目標：** 在熟悉的 Vite + React 環境，用 Vibe Coding 方式加兩個按鈕——Export JSON 和 Import JSON。讓她體驗「在既有專案上加新功能」。

### 活動流程

1. **啟動環境（5 min）：**
   - 在她的 IdeaCanvas 專案資料夾啟動 frontend（`npm run dev`）和 backend（`npm run server`）
   - 確認心智圖會跑、可以產生子主題
   - 打開 Claude Code（或 Antigravity、Cursor，看她習慣什麼）

2. **定義目標（5 min）：**
   - 問她：「我們要加兩個按鈕在畫面上。一個叫 Export JSON，點下去會下載一個 .json 檔；一個叫 Import JSON，點下去可以選檔案，然後整個心智圖會被覆蓋成檔案裡的內容。妳想放在哪裡？」
   - 讓她決定 UI 位置（通常會說「左上角」或「右下角」）

3. **Vibe Coding — 寫 Export（15 min）：**
   - 引導她打這個 prompt 給 AI：
     ```
     請幫我在 IdeaCanvas 加一個「Export JSON」按鈕，放在 [左上角]。
     點下去後，把 localStorage 的 `ideacanvas-data` 讀出來，
     下載成一個叫 `idea-canvas-YYYYMMDD.json` 的檔案。
     ```
   - AI 會產生 code
   - 讓她自己點 Accept / 編輯 / 存檔
   - 打開網頁，點按鈕，確認 .json 檔真的下載到 Downloads
   - 用 VS Code 打開下載的 .json 檔，確認內容是對的

4. **Vibe Coding — 寫 Import（15 min）：**
   - 類似流程：
     ```
     請再加一個「Import JSON」按鈕，放在 Export 旁邊。
     點下去後打開檔案選擇器，讓使用者選一個 .json 檔，
     讀完之後把內容寫回 localStorage 的 `ideacanvas-data`，
     然後重新整理畫面讓心智圖載入新資料。
     ```
   - 測試：先刪掉 localStorage（DevTools → Clear storage），確認心智圖變空
   - 然後點 Import，選剛才下載的 .json，確認心智圖完整還原

5. **收工小里程碑（5 min）：**
   - 「妳剛剛做了兩件事：1) 把網頁上的資料變成一個可以拿走的檔案；2) 把這個檔案放回去能恢復原樣。下一步是把這個檔案**拿到手機上**，然後在 iOS App 裡打開它。」

### 💡 Teaching Tips

- **Vibe Coding 精神：** 別跳進去幫她寫 code，讓 AI 寫、讓她讀 AI 的解釋
- **如果 AI 寫錯：** 鼓勵她跟 AI 說「這邊跑不起來，錯誤訊息是 XXX，幫我修」
- **Blob 和 URL.createObjectURL：** 這兩個概念她大概不懂，不用教，讓 AI 用就好。她只要知道「瀏覽器有內建功能做這件事」
- **File Input：** Import 那邊會用到 `<input type="file">`，她可能覺得醜，可以晚點再美化
- **重要：** 這一幕結束時**務必讓她親手在電腦桌面上看到 .json 檔案的 icon**。這是具象化的勝利

---

## 🎬 第三幕：第一次打開 Xcode（40-50 min）

**目標：** 讓她第一次接觸 Xcode 和 SwiftUI，建立最小可行 iOS App，看到 Simulator 跑起來。重點是「原來這玩意兒能跑」，不是學語法。

### 活動流程

1. **開 Xcode（5 min）：**
   - Launchpad → Xcode（**之前必須已經裝好**）
   - 「Create a new Xcode project」
   - 選 **iOS → App**
   - 填 Product Name：`IdeaCanvasMobile`、Interface：**SwiftUI**、Language：**Swift**
   - 不勾 Core Data、不勾 Include Tests
   - 存到 Desktop 或她習慣的 code 資料夾

2. **第一次看 Xcode 介面（5 min）：**
   - 左邊是檔案樹（像 VS Code）
   - 中間是編輯器
   - 右邊是 Canvas（SwiftUI 即時預覽，有時要按 Resume）
   - 上方有 Run 按鈕（播放三角形）
   - 點開 `ContentView.swift`

3. **看 Hello World 的對照（5 min）：**
   ```swift
   struct ContentView: View {
       var body: some View {
           VStack {
               Image(systemName: "globe")
               Text("Hello, world!")
           }
           .padding()
       }
   }
   ```
   - 問她：「這個東西，看起來像妳寫過的什麼？」
   - 引導她看出：**這就是一個 component**。`struct ContentView: View` ≈ `function ContentView()`，`var body: some View` ≈ `return (...)`，`VStack` ≈ `<div style={{display:'flex', flexDirection:'column'}}>`

4. **跑 Simulator（10 min）：**
   - 選上方的 target device：iPhone 16 Pro（或任何 iPhone）
   - 按 ▶️ Run（Cmd+R）
   - **第一次會很慢**（10-30 秒），請她等，這正常
   - iOS Simulator 打開，看到「Hello, world!」

5. **改一行字看效果（5 min）：**
   - 把 `"Hello, world!"` 改成 `"Hello, 心智圖！"`
   - Cmd+S 存檔
   - Canvas 會即時更新；Simulator 也會 hot reload
   - 「妳剛做了一個 iOS App，而且妳改了一行字它就變了」

6. **連結心智模型（10 min）：**
   - 畫對照表給她看：
     ```
     React (妳熟的)         SwiftUI (新的)
     function XX()    ≈    struct XX: View
     return (...)     ≈    var body: some View { ... }
     <div>            ≈    VStack / HStack / ZStack
     <p>              ≈    Text("...")
     <button>         ≈    Button("...") { ... }
     props            ≈    parameters
     useState         ≈    @State
     ```
   - 「妳不用背這些。待會我們讓 AI 寫，妳只要看得出來它在做什麼就行」

### 💡 Teaching Tips

- **第一次開 Xcode 會很慢**，要有耐心
- **如果 Canvas 預覽卡住**：右上角會有 Resume 按鈕，按一下
- **如果 Simulator 沒下載**：Xcode → Settings → Platforms → 下載 iOS Simulator（**這個可能很大，咖啡店網路不適合下載**，**上課前務必確認有裝**）
- **不要讓她手抄 Swift code**——Vibe Coding 精神，讓 AI 寫
- **強調：** 她現在只是在「看」和「改一行字」，不是在「寫 iOS」

---

## 🎬 第四幕：⭐ 核心 — Vibe Coding 寫 iOS Mind Map Reader（50-60 min）

**目標：** 用 AI 寫出一個 SwiftUI App，讀 tree.json 並顯示成縮排列表。看到自己昨天做的心智圖「活」在手機螢幕上。

### 活動流程

1. **把 JSON 檔帶進專案（5 min）：**
   - 從 Downloads 找到第二幕產生的 `idea-canvas-YYYYMMDD.json`
   - 重新命名為 `tree.json`（簡單）
   - 拖進 Xcode 專案的檔案樹裡
   - 選「Copy items if needed」
   - 確認 Target Membership 有勾 IdeaCanvasMobile

2. **Vibe Coding 第一個 prompt（20 min）：**
   - 打開 Claude Code / Cursor / Antigravity 連到 Xcode 專案資料夾
   - 讓她打這個 prompt：
     ```
     我是一個只會 React 和 JavaScript 的初學者，
     這是我第一個 SwiftUI 專案。

     請幫我改寫 ContentView.swift，做這些事：
     1. 從 bundle 讀取 tree.json 這個檔案
     2. 這個 JSON 的結構是一棵樹，每個節點有 {id, text, children}，
        children 是一個同結構節點的陣列
     3. 把整棵樹顯示成一個可以捲動的 List，
        父節點顯示時不縮排，每深一層縮排 20pt
     4. 用粗體顯示 text
     5. 如果讀檔失敗，顯示錯誤訊息

     請一次寫完完整的 ContentView.swift 和需要的 Model struct。
     ```
   - AI 會產生 code（通常會包含 `Codable` struct 和遞迴的 SwiftUI View）
   - 讓她 Accept、按 Cmd+R 跑 Simulator

3. **預期會踩的坑 + 怎麼 debug（15 min）：**
   - **最常見錯誤 1：** 檔案讀不到 → AI 通常會寫 `Bundle.main.url(forResource: "tree", withExtension: "json")`，如果檔案沒加入 target 就讀不到
   - **最常見錯誤 2：** JSON decode 失敗 → `id` 是 String 還是 Int? text 是 optional 嗎? 讓她把錯誤訊息貼給 AI
   - **最常見錯誤 3：** 無限遞迴 → SwiftUI 的遞迴 View 要小心，AI 通常會用 `OutlineGroup` 或手動 recursive struct
   - **原則：** 錯誤訊息整段貼給 AI，不要自己 debug

4. **看到成果的那一刻（5 min）：**
   - Simulator 上出現她昨天做的心智圖的文字內容
   - 「看！妳昨天做的東西，現在在手機上了」
   - 記得拍照留念，她會想發 story

5. **微調（10-15 min，如果時間夠）：**
   - 加顏色：「讓深度不同的節點用不同顏色」
   - 加圖示：「父節點前面加一個箭頭 emoji」
   - 改字型：「標題用更大的字」
   - 每個改動都讓她自己對 AI 下指令

### 💡 Teaching Tips

- **最重要的一句話：** 「妳不是在學 Swift，妳是在學『怎麼讓 AI 幫妳寫 Swift』」
- **如果她卡住問「這是什麼意思？」** ——讓她**問 AI**，不要自己解釋。養成她跟 AI 對話的反射
- **SwiftUI 的預覽 Canvas** 會跟 Simulator 同步，但 Canvas 有時會卡。Simulator 比較可靠，建議直接看 Simulator
- **時間有限：** 她第一次做到「JSON 讀進來顯示成列表」就是大成功，不要強加更多功能
- **如果看到成果時她眼睛發亮：** 那就是你教學成功的時刻，多讓她玩一下

---

## 🎬 第五幕：收尾與展望（15-20 min）

**目標：** 把今天做的事情「釘」進她的記憶，讓她帶走自信和下一步的想像。

### 反思問題

1. 「妳覺得今天最魔幻的時刻是什麼？」
2. 「妳原本以為 iOS 開發會很難，現在覺得呢？」
3. 「JSON 這個東西，它在 Web 跟 iOS 之間像什麼角色？」
4. 「如果下一步妳要讓這個 iOS App 更好玩，妳會想加什麼？」

### 展望未來（不用做，只要想像）

跟她講這些未來可能性，不用現在做：

- **觸控編輯：** 「點一下節點可以改文字」
- **新增節點：** 「點 + 按鈕加子節點」
- **同步到雲端：** 「改完自動存到 Google Drive，電腦手機都能看到最新的」
- **Apple Pencil：** 「用 iPad + Pencil 手寫節點」
- **Gemini 整合：** 「手機上也能點 Spark 產生子主題」
- **AirDrop：** 「兩個人直接用 AirDrop 傳心智圖」
- **上 App Store：** 「只要加一點，就可以是真的 app」

### 里程碑總結

讓她自己講今天的成就：

- ✅ 幫 Web App 加了匯出/匯入 JSON 功能
- ✅ 第一次用 Xcode
- ✅ 第一次寫（嚴格說是 vibe coding）SwiftUI
- ✅ 做出一個會跑的 iOS App
- ✅ **讓昨天做的心智圖「活」在手機上**

「這是很多資深工程師花一個禮拜才能做到的事。妳在一個下午做到了。這就是 Vibe Coding 的威力。」

### 💡 Teaching Tips

- **不要省略反思階段。** 這不是時間填充，是記憶鞏固的關鍵。她會忘掉 Swift 的語法，但不會忘掉「原來我做得到」這個感覺
- **讓她自己說成就感**，不要你幫她總結。問問題，等她回答
- **拍照** ——她會想紀錄「我做出 iOS App」的時刻

---

## 📋 老師快速檢查清單

### 開課前一天（在家確認）

- [ ] 學生的 IdeaCanvas 在她電腦上能跑（frontend + backend）
- [ ] 學生電腦已安裝 Xcode（Launchpad 能看到）
- [ ] 學生電腦已下載 iOS Simulator（Xcode Settings → Platforms）
- [ ] 咖啡店有插座 / 或帶延長線
- [ ] 至少一個 AI 編碼工具（Claude Code / Cursor / Antigravity）能用
- [ ] 把這份 README 再讀一遍，想好每幕的引導句

### 開課前 30 分鐘（到咖啡店）

- [ ] 點好飲料、找好有插座的位置
- [ ] 打開電腦、確認網路
- [ ] 確認她的電腦開機、Xcode 能開

### 開課中（計時）

- [ ] 第一幕：20-25 min（暖身）
- [ ] 第二幕：40-50 min（JSON 匯出/匯入）
- [ ] 第三幕：40-50 min（Xcode Hello World）
- [ ] 第四幕：50-60 min（SwiftUI 讀 JSON 顯示）⭐
- [ ] 第五幕：15-20 min（反思）
- [ ] 中間插一個 10 min 休息（第三幕結束時）

### 開課後

- [ ] 讓她 push 她的 iOS 專案到 GitHub（新 repo 或放 session6/ 底下）
- [ ] 收集她的 feedback：哪一幕最爽？哪一幕最卡？
- [ ] 本 README 根據實際上課狀況補充 / 修正（living document）

---

## 🌱 Optional：時間還有多

如果第四幕很順，全部做完還剩 20-30 min，可以試：

1. **加「返回 JSON」按鈕：** 讓 iOS App 把樹重新序列化回 JSON 字串，顯示在 Text 裡。證明 Swift 也會做 Web 上一樣的事
2. **變成 Detail View：** 點一個節點跳到新頁面顯示更多資訊（SwiftUI `NavigationLink`）
3. **從網路讀 JSON：** 用 URLSession 從 GitHub raw URL 抓 tree.json（不是從 bundle 讀）。下一步很自然是「從 IdeaCanvas 的後端即時拉資料」
4. **dark mode 測試：** 在 Simulator 切換深色模式，看顯示有沒有問題

**如果時間不夠，這些都不用做。核心成就是「看到 JSON 在手機上顯示」就夠了。**

---

## 📌 給學生的 cheatsheet 重點（之後可以另開 cheatsheet.md）

如果之後要補 student-facing cheatsheet，應該涵蓋：

- **React → SwiftUI 對照表**（function component、useState、JSX → Swift 版本）
- **Xcode 常用快捷鍵**（Cmd+R、Cmd+.、Cmd+B、Cmd+/）
- **JSON import/export 的 JavaScript 片段**（完成品）
- **SwiftUI 讀 bundle JSON 的 Swift 片段**（完成品）
- **Debug 流程：** 錯誤訊息 → 複製 → 貼給 AI → Accept 修正

這不是上課中給的，是上完之後讓她帶回家複習的。

---

## 課程設計備註

- **JSON 匯入/匯出** 在 Session 5 的 IdeaCanvas 目前**還沒有**——這是真實的功能缺口，第二幕不是「假裝練習」，是真的在完成 Session 5 沒做完的事
- **Xcode 26.2** 在 Mac Mini 已確認可用，iOS 26 Simulator 可選
- **IdeaCanvas tech stack：** Vite + React 19 + TypeScript + 自刻 SVG mind map（用 d3-hierarchy + d3-shape）+ Express 後端 + Gemini 2.5 Flash
- **沒有要改 Express 後端**，第二幕只改前端 + localStorage
- **iOS App 不需要連後端**，第四幕純本地讀 JSON 檔就好
- 以上每個設計決定都是為了**降低複雜度，聚焦核心概念**

---

*本教案 living document，由 Jarvis 根據 Session 5 的 IdeaCanvas 實作與 VibeCoding_Workshop 現有 session 格式設計。Session 6 實際上課後請回來更新踩坑紀錄與時間分配實況。*
