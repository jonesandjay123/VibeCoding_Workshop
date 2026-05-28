# Session 7: AI 工具鏈思維 — 從 App 到 Creator Stack

> **日期：** 2026-05-29（預定）  
> **對象：** 已完成 Session 1-6，做過 Web / React / JSON / iOS 初體驗的櫻井妹妹（Azunyan）  
> **時長：** 約 2-3 小時  
> **定位：** 這不是固定專案課，而是 AI 創作實戰課。先問她想做什麼，再用工具鏈把想法推進成作品。

---

## 一句話版本

前六堂主要在學：

> 用 AI 輔助寫出網站或 App。

第七堂開始升級成：

> 用 AI 工具鏈，把一個模糊想法變成可展示、可使用、可發布的作品。

這堂不賭某一個工具一定可用。Antigravity、Codex、ChatGPT、Gemini、Xcode、GitHub、Firebase 都只是工具；真正要學的是：

```text
想法
-> 表達
-> 拆成 MVP
-> 選工具
-> 指揮 AI
-> 驗收
-> 保存
-> 包裝 / 發布
```

---

## 這堂課的核心判斷

最近 AI coding 工具快速變強，也開始更吃額度。這不是「沒付費就不能玩」，而是遊戲規則變了：會用 AI 的人，不只是會問一個工具，而是知道工具狀況變動時怎麼換打法。

課堂中很可能遇到：

- Antigravity / Gemini 額度用完
- Codex Free 額度不夠
- Agent 改壞專案
- Xcode build / signing 卡住
- API key / quota / JSON 格式出錯

所以這堂課不要設計成「某個 agent 成功寫完一個 App 才算成功」。

這堂課要讓她知道：

> 工具會改版、額度會用完、AI 會出錯；但只要知道怎麼拆小任務、保存版本、換工具、改用手動 patch，作品仍然可以往前推。

---

## 開場話術

可以用半開玩笑的方式講：

```text
最近 AI 工具升級很快，變得更強，但免費額度也更容易用完。
所以今天我們不只學一個工具，而是學怎麼當一個 AI 工具指揮官。

今天更重要的是：
工具能用時，我們用它加速。
工具不能用時，我們換方法，作品還是要繼續往前。
```

接著問她：

```text
妳最近有沒有什麼真的想做的東西？
可以是 app、網站、IG 角色、旅遊工具、小遊戲、學校用工具、圖片生成、短影片頻道，都可以。

如果妳今天有想法，我們就用妳的想法。
如果暫時沒有，我有一個備用題目：Vietnam Phrase Buddy。
```

---

## 今日最低成功標準

這堂課不需要完成完整 app。只要完成以下任一項，就算成功：

1. 把一個想法拆成 MVP，並寫出前三個小任務
2. 用 AI 修改一個小功能，並成功跑起來
3. 在 agent 額度用完時，用 fallback prompt 產出完整檔案
4. 幫一個 prototype 做出名字、slogan、icon prompt 和 landing page 文案

老師心裡要守住一件事：

> 今天不是把所有工具鏈講完，而是讓她第一次意識到：AI 創作不是按一個魔法按鈕，而是一套可以管理的工作流。

---

## 課程主線：即興顧問模式

第七堂的預設流程不是照表操課，而是先接她的想法。

### Idea Intake 小表

一開始如果她有想法，先用這張表問，不急著開工具：

```text
1. 妳想做的是什麼？
2. 誰會用它？
3. 使用者打開後第一件事會做什麼？
4. 今天如果只能做一個最小版本，要有哪 1-2 個功能？
5. 今天先不要做什麼？
6. 最後要怎麼知道它成功了？
```

這張表的目的，是把隨機靈感變成 MVP。

### 如果她想做 App

```text
想法定義
-> MVP 功能
-> Antigravity / Codex 修改 SwiftUI 或 Web 專案
-> Xcode / browser 跑起來
-> Git 保存
-> icon / slogan / landing page 包裝
```

### 如果她想做網站

```text
網站主題
-> 首頁一句話
-> AI 生成 HTML / React
-> 本地預覽
-> GitHub / Firebase Hosting 概念
```

### 如果她想做 IG / KOL / 虛擬角色

```text
角色設定
-> 目標受眾
-> 發文語氣
-> 頭像 / 視覺 prompt
-> 第一篇貼文
-> 內容節奏
```

### 如果她想做影片

```text
主題
-> 腳本
-> 畫面 prompt
-> 音樂 prompt
-> 剪輯結構
-> 發布平台
```

### 如果她沒有想法

走預設備案：

```text
KoreanPhraseBuddy
-> TravelPhraseBuddy
-> VietnamPhraseBuddy
```

---

## 預設備案：Vietnam Phrase Buddy

承接 Session 6 的 `KoreanPhraseBuddy`，把上次的 iOS app 初體驗改造成新的旅行工具。

最小完成版：

- 輸入一句日文旅行用語
- 存成 phrase card
- 顯示越南文欄位
- 可以複製越南文
- 不接 API key
- 可以用 ChatGPT / Gemini 網頁版翻譯後貼回 App

本堂不建議把 Gemini API 當主線。API key、quota、Info.plist、runtime mapping 對初學者太容易變成挫折。

核心教學點：

> App 要先變有用，再接 API。

---

## 建議 2 小時節奏

先在心裡切成兩層：

必做核心：

```text
開場大環境
-> 問她想法
-> 拆 MVP
-> 做一個最小修改
-> 跑起來 / 或產出一個可展示成果
-> 總結今天學到的工作流
```

選做拓展：

```text
AI Creator Stack
Firebase / Firestore
Icon prompt
Landing page
社群貼文
```

### 0:00-0:15 回顧與開場

- 問她記不記得上次做了什麼
- 確認 Xcode / Antigravity / ChatGPT 或 Gemini 能不能打開
- 說明今天的大環境：工具更強，但免費額度更不穩
- 讓她知道工具爆掉也不是課程失敗

### 0:15-0:35 想法訪談

問：

```text
妳今天有沒有想做的東西？
這個東西誰會用？
第一版只要做到什麼就算成功？
什麼功能今天先不要做？
```

如果她有想法，就走她的想法。  
如果沒有，就走 `Vietnam Phrase Buddy`。

### 0:35-1:05 Agentic coding 小任務

只做安全小步：

```text
Task 1: Rename / Re-theme
把 app 從 KoreanPhraseBuddy 改成 VietnamPhraseBuddy，只改可見文案。

Task 2: Data field
加入 Vietnamese translation 欄位，不接 API，只用 placeholder。

Task 3: Utility
加 copy button 或 delete button。
```

每一步驗收：

- App 還能 build / run
- 畫面有改變
- 沒有大重構
- 知道改了哪些檔案

### 1:05-1:20 Build / Debug / Commit

教她這個節奏：

```text
能跑
-> git status
-> git add .
-> git commit -m "..."
-> 再改下一步
```

重點不是 Git 指令背熟，而是知道：

> 每個小成功都要保存，因為 AI 可能下一步改壞。

### 1:20-1:45 AI Creator Stack（選做）

如果 coding 工具還活著，這段是拓展視野。  
如果 agent 額度爆了，這段就是主線。

帶她看 AI 工具地圖時只講五類，不要一次把所有工具名字灌給她：

```text
想法工具：ChatGPT / Gemini，幫我整理想法
Coding 工具：Antigravity / Codex，幫我改專案
驗證工具：Xcode / Browser，確認真的能跑
發布工具：GitHub / Firebase，讓作品被保存或看見
創作工具：圖片 / 影片 / 音樂 AI，幫作品有外觀與內容
```

其他工具名字可以當「世界地圖」補充，不要求她一次吸收。

### 1:45-2:00 包裝與發布概念

幫今天的作品補上外在生命：

- App name
- 一句 slogan
- icon prompt
- landing page hero text
- Firebase Hosting / Firestore 概念（只講概念，不強求實作）

可以這樣講：

```text
做出來只是第一步。
讓別人看得到、用得到、記得住，才會變成作品。
```

### 最後 5 分鐘一定要收束

問她：

```text
今天我們做了什麼？
今天哪一步是 AI 做的？
哪一步是人做決定的？
如果工具額度用完，我們還有哪些方法？
下一次如果妳自己想做一個東西，第一步應該先問什麼？
```

然後總結：

```text
今天學到的不是某個工具，而是：
1. 先把想法講清楚
2. 拆成最小版本
3. 選工具
4. 小步請 AI 修改
5. 跑起來驗收
6. 保存版本
7. 最後包裝成作品
```

---

## 第七堂的五條規矩

### 1. 先定義作品，不要先開工具

```text
我們今天要做什麼？
誰會用？
完成後長什麼樣？
```

### 2. 先做最小版，不要一開始做完整版

`Vietnam Phrase Buddy` 的最小版是：

```text
輸入 phrase
-> 顯示 phrase card
-> 有越南文欄位
-> 可以複製
```

不是登入、雲端同步、自動翻譯、App Store 上架。

### 3. 每次只叫 AI 做一小步

不要：

```text
幫我做完整 app。
```

要：

```text
Only modify ContentView.swift.
Add a copy button next to the Vietnamese translation.
Do not change the app structure.
```

### 4. 每成功一次就保存

```text
能跑
-> commit
-> 再改下一步
```

### 5. 工具爆掉也要繼續前進

```text
Agent 額度爆 -> 網頁 LLM 回完整檔案
網頁 LLM 爆 -> 產品設計 / Firebase / icon / prompt
Xcode 爆 -> landing page / persona / creator stack
```

---

## 課前檢查

請她上課前確認：

```text
1. Xcode 可以打開
2. 上次的 iOS app project 還在
3. Antigravity IDE 可以打開
4. ChatGPT 或 Gemini 網頁版可以登入
5. Codex 如果已經裝了就登入；沒裝也沒關係
6. GitHub 可以登入
```

不建議這堂再叫她裝 Claude Code、Gemini CLI、Antigravity CLI、更多新工具。工具太多會讓她從「做作品」變成「我到底要開哪個東西」。

---

## 本堂不做

為了避免現場被平台設定拖走，這堂先不要做：

- 不接真實 API key
- 不處理 App Store 上架
- 不強求真機安裝
- 不新增 Claude / CLI 工具
- 不做登入與雲端同步
- 不深入 Firebase console 設定；Firebase / Firestore 今天只講概念，時間充足才示範

---

## 本堂成功標準

不是她懂 SwiftUI，也不是一定要完成完整 App。

成功標準是她能感覺到：

> 我可以把一個模糊想法講清楚，拆成小任務，選工具，指揮 AI，驗收結果，並把成果保存下來。

這就是第七堂開始要教的新能力：

> 用 AI 工具鏈，把想法變成作品的能力。
