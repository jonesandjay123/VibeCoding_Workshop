後天就要帶應井妹妹第七堂Vibecoding課了。雖然我覺得更精確來說，現在應該叫做agentic coding了外對...然後明天下午到晚上姪女會來找我玩，我比較少時間，就想說今晚早點開始先想！

首先這zip是用來記錄歷來（前六堂）課程安排的準備。比較特別的是兩個多禮拜前的第六堂，是在池袋客美多咖啡當面上的。也因此我刻意安排趁機帶她做iOS app。因為如果不是當面、光靠zoom螢幕分享的同時還要帶她插線、接手機、單螢幕操作等等，肯定會爆掉...XD

雖然第六堂課最後免搶讓她跑起了app但我相信妹妹肯定忘記了一頭霧水！ 所以可能會再次嘗試帶她用agentic coding做下一款（她下個月好像說要去越南，可能可以往這方想想，或看她最近有沒有啥新想法）

＿＿＿

上面一些背景補充完畢，這邊我列一下一些比較實際的轉有名詞來跟你討論拆解一下！
最近因為google科技線更新頻頻！ 我帶妹妹給她認識唯一一個IDE就是直接從google最新出的IDE Antigravity開始的！ 沒想到剛好這幾天大改版....Antigravity拆分成了兩種： 一種像Codex Claude Code那樣，純對話框形式的agentic工具; 另一種是因應最近網友的不滿，才把過去IDE的形式也保留下來。變成兩個不同的App，一黑、一白。

然後又有我說上次第六堂，實體碰面時，我帶她當場安裝的Xcode，讓她可以寫ios，打包。
我忘記有沒有帶她也安裝Codex了！ 只記得那天她其中一個工具的token很快就用完了...
所以我擔心禮拜五這次碰面，她免費仔的使用方式可能會再次遇到token用罄的狀況！

我們必須趁現在順便列好工具清單。最好有第二第三條備案可選。

我看完 zip 的前六堂脈絡後，我覺得第七堂最穩的定位應該是：

# 第七堂主題：從 Vibe Coding 進化到 Agentic Coding

不是再硬塞新工具，而是讓妹妹理解：

> **AI 不只是幫我寫一段 code，而是可以像小助理一樣：讀專案、理解目標、修改檔案、跑測試、修 bug。
> 但我作為人，要會下任務、檢查成果、知道什麼時候切換備案。**

這堂課其實可以承接第六堂，不要完全另開戰場。第六堂她雖然跑起 iOS app，但大概率只是「跟著老師做完」，還沒形成心智模型。所以第七堂最適合做：

## **Vietnam Phrase Buddy / Travel Phrase Buddy**

因為她下個月可能去越南，剛好可以把 Session 6 的 **KoreanPhraseBuddy** 變成一個她真的會用的旅行小工具。

---

# 我建議的第七堂課程目標

## 最小完成版

這堂課結束時，她要能在 Xcode 跑起一個 SwiftUI app，內容是：

* 輸入一句日文旅行用語
* 存成 phrase card
* 顯示越南文欄位
* 可以複製越南文
* 可以用外部 ChatGPT / Gemini 網頁版幫她翻譯，再貼回 app

先不要把 Gemini API 當主線。你前六堂已經踩出一個結論：**app 要先變有用，再接 API**。API key、quota、Info.plist、runtime mapping，全部都是會讓初學者覺得「我是不是不適合 coding」的坑。

---

# 工具主線與備案清單

## 工具優先順序

| 優先 | 工具                           | 用途                               | 風險                   | 我的建議                    |
| -- | ---------------------------- | -------------------------------- | -------------------- | ----------------------- |
| 1  | **Antigravity IDE / App**    | 讓她體驗 agentic coding              | 最近大改版，UI 可能和你之前教的不一樣 | 可以用，但不要把課綁死在 UI 教學      |
| 2  | **Codex App / Codex CLI**    | 修改本地 Xcode 專案                    | 免費額度可能爆、登入狀態不確定      | 很適合作為主備案                |
| 3  | **Claude 網頁版 / Claude Code** | 幫忙產 SwiftUI patch 或完整檔案          | Claude Code 多半不是免費主線 | 當「聰明顧問」而不是唯一工具          |
| 4  | **ChatGPT / Gemini 網頁版**     | 生成 prompt、修錯、翻譯 JSON             | 不能直接改檔案              | 最穩 fallback             |
| 5  | **Xcode 本身**                 | Build / Run / Simulator / iPhone | signing、device、權限容易卡 | Xcode 只負責驗證，不要讓她在裡面手改太多 |

---

# 關於 Antigravity 這次變動，你的判斷是對的

Google I/O 2026 的官方文章把 Antigravity 2.0 定位成新的 standalone desktop application，並且有 Antigravity CLI、SDK、Gemini API managed agents 等生態；官方也強調它是 agent-first development platform。([blog.google][1])

同時，Google 的 Antigravity codelab 已經明確提醒：舊版 v1.23.2 或更早版本的教學不適用於 v2.0.0 以上，因為新版本產品形態不一樣。這點很重要，代表你**不要照舊版 IDE 操作流程寫死教材**。([Google Codelabs][2])

所以第七堂的教學口徑應該變成：

> 「今天我們不學某個固定 IDE 的按鈕位置。因為工具一直改。今天我們學的是 agentic coding 的工作流：描述目標 → 讓 agent 改 → 跑起來 → 看錯誤 → 再指揮 agent 修。」

這樣就算 Antigravity 又改 UI，課程也不會爆掉。

---

# 免費額度風險：你要預設一定會爆

這堂要設計成「工具爆了也能繼續」。

原因是現在 agentic coding 的免費/低價額度都很不穩。OpenAI 官方說 Codex 可用於 eligible ChatGPT plans，包括 Free，但 usage limits 依方案不同；Codex pricing 也已改成接近 token usage 的邏輯。([OpenAI Help Center][3])

GitHub Copilot Free 也不是無限，官方文件寫明有每月 2,000 inline suggestions 與 50 premium requests。([GitHub Docs][4])

Anthropic 也把 Claude Code usage limits 當成一個會變動、會受方案影響的資源；今年 5 月還宣布針對付費方案提高 Claude Code 的五小時 rate limits。([Anthropic][5])

所以你課前就要跟妹妹講：

> 今天我們不是賭某一個 AI 工具永遠可用。真正的能力是：一個工具卡住時，我知道怎麼換工具，還能繼續把專案往前推。

---

# 我建議的工具安裝檢查表

## A. 必裝

| 工具             | 確認項目                             |
| -------------- | -------------------------------- |
| Xcode          | 能開新 SwiftUI iOS App，能跑 Simulator |
| GitHub account | 能登入，repo 能開                      |
| Node / Git     | 不一定這堂用，但最好保留前幾堂基礎                |
| Antigravity    | 確認她現在裝的是新版 App 還是 IDE 版          |
| 至少一個網頁 LLM     | ChatGPT / Gemini / Claude 任一個能用  |

## B. 建議安裝

| 工具              | 用途                                 |
| --------------- | ---------------------------------- |
| Codex App / CLI | 當 Antigravity 爆掉時，接手修改專案           |
| VS Code         | 當 Antigravity IDE 版不穩時，用作普通 editor |
| GitHub Desktop  | 如果她 terminal 操作又忘了，可以當圖形化備案        |

## C. 不建議這堂依賴

| 工具/功能             | 原因                                   |
| ----------------- | ------------------------------------ |
| 真機 iPhone signing | 遠端課很容易爆                              |
| Gemini API key    | 容易卡 quota、Info.plist、runtime mapping |
| App Store 打包      | 對第七堂太重                               |
| Firebase / 後端     | 沒必要，會稀釋主題                            |

---

# 第七堂課程結構

## 0. 開場：把第六堂重新講成人話

你可以這樣說：

> 上次我們做的是「讓 iPhone 跑起一個 app」。
> 但這次更重要的是：妳要知道自己在做什麼。
> 今天不是學 Swift，而是學怎麼用 AI agent 指揮一個 iOS 專案。

這裡你可以畫一個簡單流程：

```text
我有一個想法
↓
寫成小任務
↓
交給 agent 修改專案
↓
Xcode 跑起來
↓
看到錯誤 / 不滿意
↓
再請 agent 修
```

---

## 1. 先不要新建空白 App，先用第六堂成果做變體

我不建議第七堂從空白 Xcode project 重來。她第六堂已經做過一次，現在重點不是「再看一次 Hello World」，而是把已經存在的 app 改成她自己的用途。

建議路線：

```text
KoreanPhraseBuddy
↓
TravelPhraseBuddy
↓
VietnamPhraseBuddy
```

這會讓她感覺：

> 原來 app 不是一次性的 demo，我可以把它改造成別的東西。

這個 mental model 很重要。

---

## 2. 第一個 agent 任務：Rename / Re-theme

讓她下第一個很安全的任務：

```text
Please rename this app concept from KoreanPhraseBuddy to VietnamPhraseBuddy.
Change the UI text from Korean travel assistant to Vietnam travel assistant.
Keep the app simple and do not add API integration yet.
```

驗收標準：

* App title 變了
* 按鈕文案變了
* 不需要新功能
* Xcode 還能跑

這是暖身，不要一開始就讓 agent 大改架構。

---

## 3. 第二個 agent 任務：加入越南文欄位，但先用假資料

Prompt：

```text
Add a Vietnamese translation field to each phrase card.
For now, do not call any API.
When the user adds a Japanese phrase, create a card with the Japanese text and a placeholder Vietnamese text like "Vietnamese translation goes here".
Keep the data model simple and make sure the app still builds.
```

教學點：

> 我們先做「資料欄位」和「畫面」，不要急著真的翻譯。

這會延續 Session 3/4 的資料流概念：資料先活起來，再接外部服務。

---

## 4. 第三個 agent 任務：外部 LLM fallback

這是這堂的亮點。

與其課堂上串 Gemini API，不如做一個「匯出 prompt → 貼到 ChatGPT/Gemini → 貼回 JSON」的流程。

Prompt：

```text
Add an "Export Translation Prompt" button.
When tapped, it should generate a prompt that asks an external LLM to translate all untranslated Japanese phrases into natural Vietnamese.
The prompt should ask the LLM to return JSON with each card id and Vietnamese translation.
Also add an "Import Translation JSON" text area or sheet where the user can paste the JSON response and update the matching phrase cards.
Do not use any API key.
```

這對妹妹來說會很震撼，因為她會看到：

```text
App 裡的資料
↓
變成 JSON prompt
↓
丟給外部 AI
↓
AI 回 JSON
↓
貼回 App
↓
App 更新
```

這才是 agentic / AI-native product thinking。

---

## 5. 最後才做「可用性小功能」

時間夠再做：

| 功能              | 難度 | 推薦度    |
| --------------- | -- | ------ |
| 複製越南文           | 低  | 很推薦    |
| 刪除卡片            | 低  | 推薦     |
| 搜尋 phrase       | 中  | 可選     |
| 分類：餐廳 / 交通 / 飯店 | 中  | 推薦     |
| TTS 播放越南文       | 中高 | 可選     |
| Gemini API 自動翻譯 | 高  | 不建議當主線 |

---

# 當天 fallback 劇本

## 情境 A：Antigravity token 用完

直接切：

```text
1. 打開 ChatGPT / Gemini 網頁版
2. 貼目前檔案內容
3. 請它回傳完整 ContentView.swift
4. 手動貼回 Xcode
5. Build / Run
```

你可以跟她說：

> 這不是退步。這是最基本、最可靠的 AI coding fallback。

---

## 情境 B：Codex / Agent 改壞專案

不要現場 debug 太久。直接教她：

```bash
git status
git diff
git restore .
```

或者如果你不想讓她碰 terminal，就用 GitHub Desktop / Xcode source control revert。

教學點：

> Agentic coding 一定要有版本控制，不然 AI 一改壞你就崩潰。

---

## 情境 C：Xcode signing / iPhone 實機爆掉

立刻降級成 Simulator。

不要為了「跑在手機上」犧牲整堂課。第六堂已經證明可以實機跑，第七堂重點是 agent workflow。

---

## 情境 D：翻譯 API / 外部 LLM 回傳 JSON 格式壞掉

這反而是教學機會。

讓她把錯誤 JSON 貼回 AI：

```text
This JSON cannot be imported by my app. Please fix it so it matches this format exactly:
[
  {
    "id": "...",
    "vietnamese": "..."
  }
]
Return JSON only.
```

她會學到一個非常實用的能力：**讓 AI 修自己的輸出格式**。

---

# 我會避免的第七堂陷阱

## 不要再做太多工具介紹

她現在不需要知道：

* Antigravity CLI vs SDK
* Managed Agents
* Gemini API architecture
* Claude Code vs Codex 深度比較
* MCP / agent harness

這些你可以知道，但她只需要一件事：

> 我怎麼把一個想法拆成 agent 能執行的小任務？

---

## 不要再把課變成「安裝課」

你已經很清楚遠端裝環境超容易爆。這堂最好課前就做：

* 先請她打開 Xcode
* 先請她確認 Simulator 可以跑
* 先請她確認 Antigravity / Codex / ChatGPT 至少一個能用
* 課堂上不要花超過 20 分鐘處理安裝

---

## 不要一開始就 API

API 是第七堂最大誘惑，但也是最大坑。

這堂其實可以明確說：

> 今天我們不用 API key，因為我們要學的是更重要的資料流：App → Prompt → LLM → JSON → App。

這比真的串 API 更適合初學者。

---

# 我建議你今晚先準備的東西

## 1. 一份「工具備案表」

課前傳給她：

```text
請上課前確認：

1. Xcode 可以打開
2. 可以 Run 一個 iOS Simulator
3. Antigravity 可以登入
4. ChatGPT / Gemini / Claude 至少一個可以使用
5. GitHub 可以登入
6. 如果有 Codex App，也請先登入
```

---

## 2. 一個第七堂 starter repo

你可以直接複製 KoreanPhraseBuddy，改名成：

```text
VietnamPhraseBuddy-Starter
```

保留基本架構，但不要全部做好。讓她在課上用 agent 完成轉換。

---

## 3. 三段固定 prompt

### Prompt 1：檢查專案

```text
Please inspect this SwiftUI iOS project and explain the current structure in beginner-friendly terms.
Do not modify files yet.
Focus on what each file is responsible for.
```

### Prompt 2：小步修改

```text
Please make only one small change: rename the app concept from Korean Phrase Buddy to Vietnam Phrase Buddy.
Update visible UI text only.
Do not change the data model, API logic, or project structure.
After editing, summarize exactly what files you changed.
```

### Prompt 3：出錯修復

```text
The app no longer builds in Xcode.
Here is the error message:

[paste error]

Please explain the likely cause in simple terms, then suggest the smallest safe fix.
Do not rewrite the whole app unless necessary.
```

---

# 我的總結判斷

我覺得第七堂不要叫「再做一個 iOS app」，而是叫：

> **Agentic Coding Survival Class：工具會變、quota 會爆，但專案還是要完成。**

最好的題目是：

> **把第六堂的 KoreanPhraseBuddy 改造成 VietnamPhraseBuddy。**

這樣它同時滿足：

* 承接第六堂，不會讓她前面學的東西斷掉
* 跟她下個月越南旅行有真實動機
* 可以避開 API key 和 quota 主坑
* 可以自然導入 agentic coding 的核心：小任務、版本控制、fallback、修錯
* 就算 Antigravity / Codex 爆了，也能用 ChatGPT/Gemini 網頁版手動繼續

最重要的是，這堂課的成功標準不是「她懂 SwiftUI」，而是她能感覺到：

> **我可以指揮 AI，把一個已存在的 app 改成我自己的工具。**

[1]: https://blog.google/innovation-and-ai/technology/developers-tools/google-io-2026-developer-highlights/ "I/O 2026 developer highlights: Antigravity, Gemini API, AI Studio"
[2]: https://codelabs.developers.google.com/getting-started-google-antigravity "Getting Started with Google Antigravity  |  Google Codelabs"
[3]: https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan?utm_source=chatgpt.com "Using Codex with your ChatGPT plan"
[4]: https://docs.github.com/en/copilot/concepts/billing/individual-plans?utm_source=chatgpt.com "About individual GitHub Copilot plans and benefits"
[5]: https://www.anthropic.com/news/higher-limits-spacex?utm_source=chatgpt.com "Higher usage limits for Claude and a compute deal with ..."


Antigravity 2.0、跟gemini 3.5模型，剛好都是跟妹妹碰面以後幾天才出現的！ 然後gemini 3.5雖然聰明又快，但我隱約印象中有個問題是Antigravity 2.0儘管分成agentic跟IDE兩種，但是給的token額度似乎是共享的？！ 也就是說不管選哪邊，用完就是一起用完！ 且還要卡一個禮拜後才會回覆...

然後codex我自己是超愛，但是我只紹也都是plus會員（現在甚至是用不完的pro）。但是妹妹gpt是免費仔帳號，我很擔心跑沒幾下就用完...

那讀就等於當她的Antigravity 2.0 + codex額度在我們課程中一半用完的話....不就宣告死刑了嗎？
這就次我擔心的點！ 我不想要再刻意帶她去裝 Claude。不然真的很亂！

想想人家跟新Antigravity進入2.0後，本身會有分家的（agentic版+IDE版）兩款 + 已經安裝好的Xcode。跟我推薦應該要當作新常駐的Codex... 如果再來Claude...甚至更多會不會莫名其妙啊！

然後你幫我查看看，如果我們再走cli的codex或是Antigravity cli或是我沒想到的什麼，有沒有可能cli再稍微白嫖一點分開獨立的token用量？

你這次的擔心是對的，而且結論我先講：

## 結論：不要把「CLI」當成可靠白嫖續命方案

**Codex CLI 不會神奇地跟 ChatGPT Free 的 Codex 額度分開。**
OpenAI 官方說 Codex usage 會依 ChatGPT plan 計算，而且 Codex、local clients/CLI、IDE extension、cloud-delegated usage 都算在 Codex / agentic usage limit 裡；達到限制後就是要等 reset、升級、或用 API key 付費。([OpenAI Help Center][1])

**Google 這邊也不能期待 Antigravity CLI / Gemini CLI 是完全獨立大水庫。**
目前官方文件寫得很清楚：Gemini Code Assist agent mode 和 Gemini CLI 的 quota 是 combined，而且 daily request limits 會 aggregate across all interactions with any model version or family。免費個人帳號是 1000 requests/day，AI Pro 是 1500/day，Ultra 是 2000/day。([Google for Developers][2])

更關鍵的是，Google 官方文件還說：Google 正在把工具統一到 Antigravity 這個 multi-agent platform，**Antigravity CLI 已經可用**，而 Gemini Code Assist IDE Extensions 和 Gemini CLI 將在 **2026-06-18** 起停止為 individuals / AI Pro / AI Ultra 這些 tier 服務請求，要遷移到 Antigravity / Antigravity CLI。([Google for Developers][2])

所以你問的「CLI 能不能再白嫖一點獨立 token？」我的判斷是：

> **短期可能有某些邊角帳號/認證方式能多撐一點，但不應該設計成課程備案。正式課程上，要假設同一生態內的 GUI / IDE / CLI 額度會互相影響。**

---

# 你真正應該設計的是「無 agent 額度也能繼續」的課

你現在最怕的是：

```text
Antigravity 額度爆
+
Codex Free 額度爆
=
課程宣告死亡
```

但其實不一定。只要你把課設計成下面這種三層模式，就不會死。

---

# 我建議第七堂工具策略

## 第一層：主線工具

| 工具                        | 角色                         |
| ------------------------- | -------------------------- |
| **Antigravity 2.0 IDE 版** | 主教學工具，讓她看到 agent 如何讀專案、改檔案 |
| **Xcode**                 | 只負責 Build / Run / 看錯誤      |
| **Git / GitHub Desktop**  | 只負責保存與回復                   |

這裡不要同時開 Antigravity agentic 版 + IDE 版亂切。
你可以選一個主線：**IDE 版比較適合初學者**，因為她看得到檔案。

---

## 第二層：Codex 作為強力備案，但不要課程依賴

| 工具                  | 角色                     |
| ------------------- | ---------------------- |
| **Codex App / CLI** | Antigravity 不行時，接手修改專案 |
| **但不要預設它一定可用**      | Free 帳號可能很快撞限          |

OpenAI 官方明確說 Codex Free 目前只是 limited time included；Codex 本來主要包含於 Plus、Pro、Business、Enterprise/Edu。([OpenAI Help Center][1])

所以你對妹妹免費帳號的擔心完全合理。

---

## 第三層：真正不死的 fallback

這層才是你應該準備的。

| 工具                                  | 用法                                 |
| ----------------------------------- | ---------------------------------- |
| **ChatGPT / Gemini / Claude 任一網頁版** | 不需要裝新 coding tool，只拿來產生完整 Swift 檔案 |
| **Xcode**                           | 手動貼上 `ContentView.swift`           |
| **你準備好的 starter 檔案**                | 如果 agent 壞掉，直接回到乾淨版本               |

這樣即使所有 agent 工具爆掉，也還能教：

> 怎麼把需求描述成 prompt，拿到完整檔案，貼回 Xcode，跑起來。

這仍然是 vibecoding / agentic coding 的基礎能力。

---

# 我不建議再叫她裝 Claude

你直覺是對的。
她現在工具心智已經夠混亂了：

```text
Antigravity 2.0 agentic 版
Antigravity 2.0 IDE 版
Xcode
Codex
ChatGPT / Gemini
```

再加 Claude Code，她會從「我在做 app」變成「我到底要開哪個東西」。

所以第七堂我會明確限制工具：

## 妹妹版工具宇宙

```text
主要：
Antigravity IDE + Xcode

備用：
Codex

最後保命：
ChatGPT/Gemini 網頁版 + 手動貼 code
```

Claude 先不要進來。

---

# CLI 額度判斷表

## Codex CLI

**不值得當獨立白嫖備案。**

原因：

* Codex CLI 是 Codex surface 之一
* usage 依 ChatGPT plan
* 會算進 agentic usage
* Free 只是 limited time included
* 用完大概率就是等 reset / 升級 / API key 付費

官方也說，使用 API key 可以跑額外 local tasks，但那就是按 API 標準費率收費，不是白嫖。([OpenAI 開發者][3])

---

## Gemini CLI

**以前可能還能當 Antigravity 旁路，但現在不建議依賴。**

因為官方現在寫：

* Gemini Code Assist agent mode + Gemini CLI quota 是 combined
* 不同 Gemini model family 的使用也 aggregated
* Google 正在把這些工具往 Antigravity / Antigravity CLI 統一
* 2026-06-18 後 Gemini CLI 對個人/AI Pro/AI Ultra 的服務路徑會變動 ([Google for Developers][2])

所以它不是你想像中那種「Antigravity 爆了，CLI 還有一整桶免費 token」的穩定方案。

---

## Antigravity CLI

**可以課前裝來測，但不要課上依賴。**

我會把它定位成：

> 你自己這種 power user 可以研究；妹妹課程不要把它當主線。

因為它仍然是 Antigravity 生態的一部分，未來最可能跟 Antigravity plan / model quota 綁在一起。官方 Antigravity plans 頁面也提到 usage limits 可能修改，baseline quota usage 可在 settings page 看。([Google Antigravity][4])

---

# 最穩的第七堂設計：先把 AI 使用量壓到最低

你不要讓 agent 一直大範圍讀 repo、重構、跑長任務。免費帳號最怕這種。

## 省額度規則

| 做法                        | 為什麼                    |
| ------------------------- | ---------------------- |
| 每次只改一個檔案                  | 降低 context / tool call |
| 每次只下一個小任務                 | 避免 agent 自動連跑十幾步       |
| 不讓 agent 一開始 scan 全 repo  | 對小 app 沒必要             |
| 不做 API integration        | debug 太耗額度             |
| 優先請它改 `ContentView.swift` | 初學者最能理解                |
| 錯誤訊息只貼關鍵段落                | 不要丟整包 log              |

---

# 當天可以這樣安排

## Phase 1：Antigravity 還活著時

只做兩個任務：

```text
Task 1:
把 app 從 KoreanPhraseBuddy 改成 VietnamPhraseBuddy，只改畫面文字。

Task 2:
加入 phrase card 的 Vietnamese 欄位，不接 API，只用 placeholder。
```

做完這兩個就先 commit。

---

## Phase 2：開始省額度

接下來不要讓 agent 大改。改成你帶她用「小 prompt」。

例如：

```text
Only modify ContentView.swift.
Add a copy button next to the Vietnamese translation.
Do not change the app structure.
```

---

## Phase 3：如果 Antigravity 爆了

立刻切換到保命模式，不要浪費 20 分鐘登入/重試：

```text
1. 打開 Xcode
2. 打開 ContentView.swift
3. 打開 ChatGPT/Gemini 網頁版
4. 貼目前 ContentView.swift
5. 請它回傳完整可替換版本
6. 貼回 Xcode
7. Run
```

這樣課不會死。

---

# 我會準備一個「無 agent 模式」prompt

你可以課前存好：

```text
You are helping a beginner modify a simple SwiftUI iOS app.

I will paste the current ContentView.swift below.

Please make the requested change and return the full updated ContentView.swift file only.

Requirements:
- Keep the code beginner-friendly.
- Do not introduce extra files.
- Do not use external APIs.
- Do not change the project structure.
- Make sure the file can compile in Xcode.

Requested change:
[在這裡寫需求]

Current ContentView.swift:
[貼上整個檔案]
```

這個 prompt 很重要。
它就是所有 agent 都死掉時的保命符。

---

# 課前你可以讓妹妹做的檢查

不要叫她裝一堆新東西，只叫她確認：

```text
1. Xcode 可以打開
2. 上次的 iOS app project 還在
3. Antigravity IDE 可以打開
4. ChatGPT 或 Gemini 網頁版可以登入
5. Codex 如果已經裝了就登入；沒裝也沒關係
```

我會避免說「一定要裝 Codex CLI / Antigravity CLI」。
除非你自己先遠端幫她測過，不然課堂上裝 CLI 很容易變成環境地獄。

---

# 我的建議決策

## 不要做

```text
Antigravity IDE
+ Antigravity agentic app
+ Antigravity CLI
+ Codex
+ Codex CLI
+ Claude Code
+ Gemini CLI
```

這會把她炸掉。

## 要做

```text
主線：
Antigravity IDE + Xcode

備用：
Codex，如果已經有

終極備用：
ChatGPT/Gemini 網頁版 + 手動替換 Swift 檔案
```

---

# 你這堂課真正要教她的一句話

> **工具會改版、額度會用完、agent 會失控；但只要妳知道怎麼拆小任務、保存版本、讀錯誤、換成手動 patch，妳就不會被工具綁架。**

這其實比「再多裝一個 Claude」更接近 agentic coding 的真正能力。

[1]: https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan "Using Codex with your ChatGPT plan | OpenAI Help Center"
[2]: https://developers.google.com/gemini-code-assist/resources/quotas "Quotas and limits  |  Gemini Code Assist  |  Google for Developers"
[3]: https://developers.openai.com/codex/pricing "Pricing – Codex | OpenAI Developers"
[4]: https://antigravity.google/docs/plans?utm_source=chatgpt.com "Plans"


其實我想找你留還有一個更深層次的東西想跟你聊。有點類似開始想轉型！ 啥意思？

你有沒有發現，前六堂課都是基於ai輔助的寫code，做出某種要馬是網站、要馬是app之類的工具？！

可是我發現一個有趣的現象！這趟東京之旅結束以後，我彷彿受到妹妹的啟發，開始往經營KOL、虛擬人設的方向去想了！ 畢竟你知道，過去兩年多我不斷地（現在也依舊）在開發一些自己感興趣的小工具，等於開發工具本身已經不是技術上的問題。在有ai輔助的現在來說，只是想不想的問題！

但這也帶來一個現象，就是門檻降地、爛大家、寫工具本身已經不是有價值的事情了！ 當然，對妹妹或是那些剛剛學會用的人來說是很有價值。 但是我自己本身已經開始進化，我已經開始自己在摸索更後面的東西了！ 這些東西有些！我感覺不是單單只靠Jarvis、codex那些agent輔助就可以做到了！

我開始感覺到好像是某中對工具理解的敏銳度嗅覺！

什麼意思？ 譬如如果要生ai圖片，一般大眾可能只會想到找你、找gemini生圖對吧？ 但是我知道的更多，我甚至知道他的歷史脈絡是先從早期的Stable Diffusion Midjourney這個王者，在來到各大廠商輪流當王者，開源可以用ComfyUI自己跑。然後AI影片生成SeedDance、ＡＩ音樂找Suno等等的。這修工具線的嗅覺，甚至只是一個簡單的知道有這個名字本身也好！

我想說的是，或許第七堂開始，因應現在agentic工具開始變得很吃token，很容易用到一半就沒額度。而我得繼續想出東西水時間帶她持續有東西。 我在想，或旭可以開始導入這些更活、更未來多元可用的方向去鋪墊，甚至可以帶她理解雲端平台的搭建，firebase上面可以hosting\可以弄DB這些操作設定剛好可以來補齊當token用完以後的“水時間”動作，依然提供很有質量的知識內容。這才是我今天真正想要帶往的第七堂後的是方向？！


對，你這段我覺得很關鍵。你其實不是單純在問「第七堂要教什麼」，而是在問：

> **當 AI coding 本身變成基本技能以後，下一層真正有價值的能力是什麼？**

我會把它命名成：

# 從 Vibe Coding 到 AI-Native Creation

前六堂的主軸是：

> **用 AI 寫出東西。**

但你現在看到的下一階段是：

> **用 AI、工具鏈、平台、內容、角色、人設、社群、雲端，把一個東西變成可以被看見、被使用、被持續更新的存在。**

這已經不是單純 coding 了。

---

# 你感覺到的「工具嗅覺」其實很有價值

你講 Stable Diffusion、Midjourney、ComfyUI、SeedDance、Suno、HeartMula 這段非常準。

一般人看到 AI 圖片，可能只知道：

```text
ChatGPT 可以生圖
Gemini 可以生圖
```

但你看到的是：

```text
文字模型
圖片模型
影片模型
音樂模型
工作流節點
本地算力
雲端服務
開源替代
商業平台
API 成本
內容分發
角色包裝
```

這不是單純知道工具名字而已，而是一種**技術地圖感**。

這種能力我覺得可以叫：

## AI Tool Literacy / AI 工具素養

更進一步一點是：

## AI Stack Sense / AI 工具鏈嗅覺

也就是：

> 我知道現在這個需求，應該用哪一類工具處理；
> 哪些工具只是玩具，哪些可以進 pipeline；
> 哪些免費可以試，哪些會變成本坑；
> 哪些適合創作，哪些適合部署，哪些適合自動化。

這個能力未來很重要，因為 coding 會越來越 commodity，但**知道怎麼組合工具、選工具、定方向**不會那麼快 commodity。

---

# 你對妹妹課程的方向，可以開始升級

我會建議你把第七堂之後，從單純的：

> 「教她用 AI 寫 app」

升級成：

> **教她成為 AI-native creator。**

也就是她不一定每堂都要寫 code。她可以學：

| 模組                  | 她學到什麼                 | 跟未來的關係          |
| ------------------- | --------------------- | --------------- |
| Agentic Coding      | 用 AI 修改 app / website | 基本創作能力          |
| Prompt Design       | 把想法變成 AI 可執行任務        | 所有工具通用          |
| AI Image            | 生角色、封面、貼文圖            | KOL / 虛擬人設      |
| AI Video            | 把靜態內容變短片              | TikTok / Shorts |
| AI Music            | 背景音樂、氛圍素材             | 內容完整度           |
| Firebase Hosting    | 作品上線                  | 從 demo 變公開作品    |
| Firestore DB        | 資料保存                  | 從靜態頁變產品         |
| GitHub              | 版本管理                  | 專案長期累積          |
| App Store / Web App | 發佈概念                  | 作品變履歷           |
| Persona Design      | 虛擬角色 / KOL 定位         | 內容經營能力          |

這樣你就不會被 token 綁架。

因為課程不再是：

> 今天一定要讓 AI agent 寫完一個 app。

而是：

> 今天我們持續建立一個 AI-native 創作能力地圖。

---

# 「水時間」其實不要叫水時間

你剛剛說 Firebase、Hosting、DB 可以拿來補 token 用完後的「水時間」。
我懂你的意思，但我會換一個角度看：

這不是水時間。

這是**把學生從玩 AI 帶到理解產品基礎設施**。

例如妹妹可能一開始覺得：

> 我用 AI 生成一個網頁，好厲害。

但你可以帶她看到：

```text
網頁要怎麼放到網路上？
資料要存在哪裡？
如果別人打開也看得到，背後發生什麼事？
為什麼要 GitHub？
為什麼要 Firebase Hosting？
為什麼要 database？
為什麼有些功能要登入？
為什麼 API key 不能直接放前端？
```

這些東西對一個初學者非常有價值，而且不太吃 token。

---

# 第七堂可以變成「轉型第一堂」

我會建議你不要完全拋棄原本的 coding app 線，但把第七堂做成一個**轉折堂**。

## 第七堂主題可以叫：

> **AI 工具不只是寫 Code：從 App 到 AI Creator Workflow**

或者更簡單：

> **Agentic Coding + AI Creator Stack 入門**

這堂可以分成兩半。

---

# 第七堂建議結構

## Part 1：承接第六堂，完成一個小 app 變體

例如：

```text
Travel Phrase Buddy / Vietnam Phrase Buddy
```

只做簡單版：

* 改 app 主題
* 加 phrase card
* 加 copy button
* 不接 API

這部分讓她知道：

> 上次做的東西不是一次性 demo，可以被改造成新的工具。

---

## Part 2：當 agent 額度用完，切到 Creator Stack

這不是備胎，而是你可以正式設計成課程第二段。

你可以跟她說：

> Coding agent 額度用完沒關係，因為真正的產品不只是 code。
> 我們來做這個 app 的「外在生命」。

然後帶她做：

### 1. App persona

例如：

```text
Vietnam Phrase Buddy 是一個給第一次去越南旅行的人用的小助手。
它的語氣要親切、輕鬆、像朋友。
```

### 2. App icon prompt

讓她用 Gemini / ChatGPT 生圖：

```text
A cute minimalist travel phrasebook app icon inspired by Vietnam, with a small speech bubble, lotus flower, and warm friendly colors, iOS app icon style, clean vector design, no text.
```

### 3. Landing page 文案

```text
Vietnam Phrase Buddy
Your tiny travel language helper for Vietnam.
Save useful phrases, translate them, and copy them when you need them.
```

### 4. Firebase Hosting 概念

不用一定真的 deploy 完，也可以先講：

```text
本地 app / 網頁
↓
GitHub
↓
Firebase Hosting
↓
公開網址
```

### 5. Firestore 概念

用非常生活化方式講：

```text
如果 phrase 只存在手機裡，那換裝置就沒了。
如果存在 Firestore，之後可以登入同步。
```

這樣她會開始理解「產品」而不是只理解「code」。

---

# 這對你自己也很重要

我覺得你現在的轉型其實跟你過去兩年做的東西連在一起。

你以前的軸線是：

```text
我有 idea
↓
我做 app / website / tool
↓
我上架或部署
```

但你現在開始看到另一條線：

```text
我有一個世界觀 / 人設 / 內容方向
↓
我用 AI 生成素材
↓
我用工具鏈製作內容
↓
我用平台分發
↓
我用自動化維持更新
↓
我用角色累積注意力
```

這就是從 indie hacker 往 AI-native media operator / creator founder 走。

你現在做的 Jyn Null、Observer J、JoviBitz，其實都不是單純工具。它們更像：

> **角色化內容資產。**

而這類東西不只是「會寫 code」就能完成。

它需要：

* 審美
* 題材嗅覺
* 工具鏈嗅覺
* 發布節奏
* 平台感
* 成本控制
* 人設一致性
* 自動化能力
* 內容包裝能力

這些反而是你現在正在長出來的能力。

---

# 第七堂之後可以重組成 4 條課程線

我會這樣規劃後續：

## Track A：Agentic Coding

繼續保留，但不再每堂都硬 coding。

內容：

* 修改 SwiftUI app
* 修改網站
* 讀錯誤
* Git revert
* 小步 prompt
* agent 用量控制

目標是讓她可以「自己改小東西」。

---

## Track B：AI Creator Stack

這是新線。

內容：

* AI 圖片
* AI 影片
* AI 音樂
* app icon
* poster
* short video
* landing page visual
* virtual persona

目標是讓她知道「AI 不只寫程式，也能做內容」。

---

## Track C：Cloud / Publish Stack

這條很適合 token 用完時教。

內容：

* GitHub 是什麼
* Firebase Hosting 是什麼
* Database 是什麼
* Auth 是什麼
* API key 為什麼不能亂放
* 網站怎麼公開

目標是讓她知道「作品怎麼上線」。

---

## Track D：Product / Persona Thinking

這條是你現在最想導入的。

內容：

* 這個工具給誰用？
* 它的名字是什麼？
* 它的個性是什麼？
* 如果它是 IG 帳號會發什麼？
* 如果它是 app，icon 長怎樣？
* 如果它是網站，首頁一句話是什麼？
* 如果它是短影音頻道，第一支影片是什麼？

目標是讓她知道「做東西不是只有功能，還有定位」。

---

# 很適合妹妹的課程方向

因為妹妹不一定要變工程師。
但她如果能長出這種能力，未來非常有用：

> **我可以把一個模糊想法，變成一個可展示的 AI-native prototype。**

這比「我會寫 React」對她來說可能更有價值。

她未來不管是做：

* 社群內容
* 個人品牌
* 活動企劃
* 小生意
* app idea
* 學校專題
* 求職作品集
* KOL / 虛擬人設

都會用到。

---

# 你可以把第七堂重新命名

不要叫：

```text
第七堂：繼續做 iOS app
```

我會叫：

```text
第七堂：AI 工具鏈思維：從 App 到 Creator Stack
```

或者更口語：

```text
第七堂：不只寫 App，AI 還能幫妳做出一個完整作品
```

---

# 第七堂具體教案版本

我會這樣安排 2 小時。

## 0:00–0:15 回顧

問她：

```text
上次我們做了什麼？
妳覺得 app 是怎麼被跑起來的？
妳記得 Xcode / Antigravity 各自負責什麼嗎？
```

不用期待她答對。這只是幫她重新啟動記憶。

---

## 0:15–0:45 Agentic coding 小任務

做：

```text
KoreanPhraseBuddy → VietnamPhraseBuddy
```

只改文案、顏色、卡片欄位。

---

## 0:45–1:00 Build / Debug / Commit

教她：

```text
每做完一個小成功，就保存。
AI 會犯錯，所以我們要留存檔點。
```

---

## 1:00–1:20 AI Creator Stack 介紹

用一張地圖講：

```text
文字：ChatGPT / Gemini
圖片：Gemini / Midjourney / Stable Diffusion / ComfyUI
影片：SeedDance / Veo / Runway / Kling
音樂：Suno / HeartMula
網站：Firebase Hosting
資料：Firestore
自動化：Jarvis / Codex / scripts
```

不要講太深，只要讓她知道「原來世界這麼大」。

---

## 1:20–1:40 幫 app 做外觀

讓她做：

* app name
* slogan
* icon prompt
* landing page hero text

這部分即使 coding 額度爆了也能做。

---

## 1:40–2:00 發布概念 / Firebase 簡介

講：

```text
做出來只是第一步。
讓別人看到，才是作品。
```

簡單介紹：

```text
GitHub = 作品倉庫
Firebase Hosting = 把網站放上網
Firestore = 放資料
Auth = 登入系統
```

如果她狀態好，再 demo 一個 Firebase console。
如果她累了，就只看架構圖。

---

# 你可以準備一張「AI 工具地圖」

這張圖對她很有用。內容可以很簡單：

```text
想法
↓
文字：ChatGPT / Gemini
↓
程式：Antigravity / Codex
↓
圖片：Gemini / ComfyUI / Midjourney
↓
影片：Veo / SeedDance / Runway
↓
音樂：Suno / HeartMula
↓
網站：Firebase Hosting
↓
資料：Firestore
↓
發布：App Store / Web / Instagram / YouTube
```

這張圖其實就是你說的「工具嗅覺」的初階版。

---

# 對你自己的定位，我會這樣看

你現在不是只是「會用 AI 寫 code 的人」。

你比較像在變成：

## AI-native product / media orchestrator

中文可以說：

> **AI 原生產品與內容編排者。**

你知道：

* 哪些工具正在變強
* 哪些工具適合接 pipeline
* 哪些工具只是玩票
* 哪些平台能放大注意力
* 哪些方向可以自動化
* 哪些東西值得本地跑
* 哪些東西該用雲端服務
* 什麼東西可以變成角色、內容、產品、網站、app

這比單純 coding 更高一層。

---

# 我覺得第七堂的真正方向

不是放棄 coding。

而是從：

```text
AI 幫我寫 code
```

升級成：

```text
AI 幫我把一個想法變成作品、產品、角色或內容系統
```

妹妹的課也可以變成你的實驗場。
你不是只在教她，而是在整理一套更大的教育框架：

## AI-Native Creation Curriculum

也就是：

1. 想法
2. Prompt
3. App / Web prototype
4. Visual identity
5. Cloud hosting
6. Database
7. Persona
8. Content distribution
9. Automation

這個框架甚至未來可以變成：

* 小朋友 / 青少年 AI 創作課
* 非工程師 AI 工具課
* AI creator bootcamp
* 你自己的內容系列
* JoviBitz / Observer J / Jyn Null 背後的方法論

---

# 我最建議你今晚先做的不是備課，而是改定義

你可以先在心裡把課程從：

> Vibecoding 課

改名成：

> **AI 創作工具課**

或：

> **AI-Native Builder 課**

這樣第七堂就不會被 Antigravity / Codex token 卡死。

因為 coding 只是其中一種創作手段。
App 只是其中一種作品形式。
真正要教的是：

> **如何用 AI 工具鏈，把腦中的想法變成可展示、可使用、可發布的東西。**


我的想法是 我喜歡隨機應變、針對她的需求想法客製化他想做的事情。 所以我打算是開門見山就先跟他講現在的大環境現況（講得好像很慘一樣～ＸＤ），就是最近工具更新、紛紛因為卷而變得強的，但同時也開始對那些免費仔的額度權益受到擠壓！ 好像不付費的人，根本無法跟著玩、入門這款AI遊戲。

所以先讓她有個心理準備一後，如果她沒想法，我們就先往預設的default假設 去做越南文...ＸＤ 如果她臨時丟了新的想法，反而可以激盪出更多隨機應變的元素，而我也家線在跟你列出的同時自己整理好、做好準備了。你說是吧？

最糟最糟，也能回來這討論串，因為你已經有前後脈絡，到時候直接找你接問，你也能夠立即知道我跟櫻井妹妹當下遇到、拋出了啥新的點子。然後你作為顧問來給予引導跟方向調整！ 甚至我們也還有我的Jarvis。真的有必要，她把github repo權限開給Jarvis，直接無縫銜接幫她做，做完push。

因為後面真的學得不是怎麼做出來，而是思維、規距的堆砌組裝 跟表達陳述 對吧？

對，我覺得你這個方向**非常對**。而且你現在其實已經不是在「備一堂固定課」，而是在設計一個：

# 可隨機應變的 AI 創作教練框架

你開門見山先講大環境，這個很合理。因為它會先幫她建立心理模型：

> **AI 工具越來越強，但免費額度越來越不穩。
> 所以真正要學的不是某一個工具，而是怎麼在工具限制下，仍然把想法推進。**

這句話很重要。它也會讓「如果工具突然不能用」不再像課程失敗，而是變成課程內容本身。

---

## 我覺得你可以這樣開場

你可以半開玩笑跟她說：

> 最近 AI 世界有點卷瘋了。工具都變超強，但免費仔的日子也越來越難過。
> 所以今天我們不只學怎麼叫 AI 寫 code，我們要學更重要的東西：
> **怎麼在工具會改版、額度會用完、AI 會出錯的情況下，還是把一個想法做出來。**

然後接：

> 如果妳今天有想做的東西，我們就用妳的想法。
> 如果暫時沒有，那我們就用我準備的預設題目：做一個越南旅行小助手。
> 重點不是越南文 app 本身，而是學怎麼把一個想法拆成可以執行的步驟。

這樣就很漂亮。

---

# 你這堂真正教的不是「做出來」

你說得很準：

> 後面真的學得不是怎麼做出來，而是思維、規矩的堆砌組裝，跟表達陳述。

我會把它拆成四個能力：

## 1. 想法表達

她要學會把「我想做一個東西」講清楚。

例如不是：

> 我想做一個旅遊 app。

而是：

> 我想做一個給下個月去越南旅行用的小工具，可以存常用句子、翻成越南文、需要時快速複製。

這已經是產品描述了。

---

## 2. 任務拆解

從模糊想法拆成步驟：

```text
App 名字
↓
目標使用者
↓
主要功能
↓
第一版只做什麼
↓
先不要做什麼
↓
怎麼驗收成功
```

這比直接叫 AI「幫我做 app」強太多。

---

## 3. 工具選擇

她要開始知道：

```text
寫 code：Antigravity / Codex
跑 iOS：Xcode
保存專案：GitHub
上網頁：Firebase Hosting
存資料：Firestore
做圖：Gemini / image tools
做影片：Veo / SeedDance / Runway
做音樂：Suno / HeartMula
```

不需要每個都會，但至少知道工具地圖。

---

## 4. 失敗處理

這是 agentic coding 最重要的一環：

```text
token 用完怎麼辦？
AI 改壞怎麼辦？
Xcode 報錯怎麼辦？
功能太大怎麼辦？
工具不支援怎麼辦？
```

你第七堂其實可以把這變成主題：

> **AI 工具不是魔法，而是一個需要指揮、管理、備案的工作流。**

---

# 我很支持「先問她想法」這個方式

因為這會讓她從學生變成 co-creator。

你可以一開始就問：

> 妳最近有沒有什麼真的想做的東西？
> 可以是 app、網站、IG 角色、旅遊工具、小遊戲、學校用工具、圖片生成、短影片頻道，都可以。
> 今天不一定要完成很大，但我們可以把它變成第一版。

這個問法很好，因為你不是只開放「app idea」，而是開放：

* app
* website
* 角色
* 圖片
* 短影片
* 工具
* 旅遊助手
* 小遊戲
* 學校專題

這就進入你說的「更活、更未來多元可用」方向。

---

# 當她沒有想法時，才回 default

你的 default 越南文 app 是很好的安全網。

但它不要呈現成「今天固定要做這個」，而是：

> 如果妳今天沒有特別想法，我有一個備用題目：因為妳下個月可能去越南，我們可以做一個 Vietnam Phrase Buddy。

這樣她會感覺：

> 老師有準備，但也願意跟著我走。

這很像真正的產品顧問 / 創作教練，而不是照表操課老師。

---

# 你現在可以準備一個「即興決策樹」

第七堂開始時，看她丟什麼，你就走哪條。

## 她說：「我想做 app」

走：

```text
想法定義
↓
MVP 功能
↓
Antigravity / Codex 改 SwiftUI
↓
Xcode 跑
↓
icon / 文案
```

## 她說：「我想做網站」

走：

```text
網站主題
↓
首頁一句話
↓
用 AI 生 HTML / React
↓
本地預覽
↓
Firebase Hosting 概念
```

## 她說：「我想做 IG / KOL / 虛擬角色」

走：

```text
角色設定
↓
受眾
↓
發文風格
↓
頭像 / 視覺 prompt
↓
第一篇貼文
↓
內容節奏
```

## 她說：「我想做影片」

走：

```text
主題
↓
腳本
↓
畫面 prompt
↓
音樂 prompt
↓
剪輯結構
↓
發布平台
```

## 她說：「我不知道」

走：

```text
Vietnam Phrase Buddy
↓
順便介紹 AI creator stack
```

這樣你就不會被現場狀況打亂。

---

# Jarvis 介入這件事，我覺得可以，但要定位清楚

你說如果真的有必要，她把 GitHub repo 權限開給 Jarvis，直接無縫銜接幫她做，做完 push。

這是可以的，但你要避免變成：

> 妹妹坐旁邊看 Jarvis 代工。

所以 Jarvis 的角色最好是：

## 不是代寫工人，而是示範「專業 agent workflow」

你可以跟她說：

> 如果人類自己操作卡住，我們可以請 Jarvis 這種比較完整的 agent 接手。
> 但妳要看的是：我們怎麼交代任務、怎麼限制範圍、怎麼看它改了什麼、怎麼決定要不要接受。

也就是她學的是：

```text
如何委派
如何驗收
如何提需求
如何看 diff
如何回退
```

而不是學「按一下讓 Jarvis 幫我做完」。

這就是你說的規矩。

---

# 你可以把第七堂核心規矩定成 5 條

這些其實很適合作為你未來所有 AI 課的核心原則：

## 1. 先定義作品，不要先開工具

不要一開始就問「用哪個 AI」。
先問：

```text
我們今天要做出什麼？
誰會用？
完成後長什麼樣？
```

---

## 2. 先做最小版，不要一開始做完整版

例如 Vietnam app 的最小版是：

```text
輸入 phrase
顯示 phrase card
有越南文欄位
可以複製
```

不是：

```text
登入
雲端同步
自動翻譯
語音播放
App Store 上架
```

---

## 3. 每次只叫 AI 做一小步

不要：

```text
幫我做完整 app。
```

要：

```text
只修改 ContentView.swift，新增一個 copy button，不要改資料結構。
```

---

## 4. 每成功一次就保存

這是你可以灌輸給她的工程習慣：

```text
能跑
↓
commit
↓
再改下一步
```

---

## 5. 工具爆掉也要繼續前進

這是第七堂最有時代感的規矩：

```text
Agent 額度爆 → 改成網頁 LLM 回完整檔案
網頁 LLM 爆 → 改講產品設計 / Firebase / prompt / UI
Xcode 爆 → 改做 landing page / icon / persona
```

只要作品方向還在，課就沒死。

---

# 你可以直接把這堂課包裝成「實戰顧問模式」

不是老師單向教，而是：

> 妳帶 idea，我幫妳把 idea 變成一個 AI-native prototype。

這其實很有價值。

因為未來真正強的人，不一定是會背語法的人，而是會做這件事的人：

```text
模糊想法
↓
清楚表達
↓
拆任務
↓
選工具
↓
指揮 AI
↓
驗收結果
↓
包裝發布
```

這就是你說的「堆砌組裝跟表達陳述」。

---

# 最後我會怎麼定義第七堂

我會把第七堂定義成：

> **第七堂不是一堂固定專案課，而是一堂 AI 創作實戰課。**

它的流程是：

```text
1. 說明現在 AI 工具大環境：更強、更卷、更限額
2. 問妹妹今天有沒有想做的東西
3. 有想法 → 現場拆成 MVP
4. 沒想法 → Vietnam Phrase Buddy
5. coding 額度夠 → 用 Antigravity / Codex 做
6. coding 額度不夠 → 做 prompt、UI、icon、landing page、Firebase 概念
7. 最後總結今天學到的不是工具，而是工作流
```

這樣你就很穩。

你不是在賭 Antigravity。
不是在賭 Codex。
也不是在賭妹妹記不記得 SwiftUI。

你是在教她一個新的時代能力：

# 用 AI 工具鏈，把想法變成作品的能力。
