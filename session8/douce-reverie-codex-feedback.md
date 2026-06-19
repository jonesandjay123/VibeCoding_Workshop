# DouceReverie Codex Feedback：第八堂課延伸建議

> 這份是 Codex 版觀察。範圍刻意只看 `/Users/joneswang/Downloads/code/DouceReverie` repo 現況與 `session8` 既有課程方向，沒有參考 `session8/douce-reverie-opus-feedback.md`。

## 一句話結論

`DouceReverie` 第七堂課的成果已經從「漂亮首頁」升級到「有架構的精品電商 prototype」：Next.js App Router、多語系字典、商品資料抽離、首頁互動、產品列表頁都已經成形。

第八堂如果繼續做這個網站，我不建議只加更多商品或普通 section。更好的方向是把它轉成櫻井妹妹自己的 **creator base / brand operating system**：一個既能展示品牌世界觀，也能整理她的內容主題、發文 checklist、AI workflow、安全邊界的網站。

## Repo 現況觀察

### 已經做得好的地方

- 技術架構清楚：`app/[locale]/page.tsx` 負責 locale route，`components/Storefront.tsx` 負責首頁互動，`lib/products.ts` 與 `messages/*.json` 把資料和文案抽出來。
- 多語系基礎已經打好：目前有 `zh-CN`、`zh-TW`、`ja`、`en`，這很適合接「創作者跨平台、跨語言發文」的第八堂主題。
- 品牌調性完整：hero、manifesto、journal、產品命名、色彩 token 都有一致的 editorial fashion-commerce 感。
- 互動感足夠當教學素材：header scroll state、drawer、search overlay、quick add toast、wishlist state 都能拿來講「React state 不是抽象概念，而是畫面記得使用者做了什麼」。
- 商品頁已經存在：`/[locale]/products` 讓它不只是首頁 demo，而是開始有網站資訊架構。

### 目前比較像 prototype 的地方

- 商品圖目前多數是 CSS 生成的抽象服裝剪影，還沒有真實商品圖、穿搭圖、社群圖牆或品牌素材庫。
- Search overlay 目前只會填入建議字，還沒有實際 filter 商品或導向結果。
- Bag / Account 還是 UI 狀態，不是完整購物車或會員流程。
- Navbar drawer 的選單文字目前寫死為英文，還沒有完全接進多語系字典。
- Manifesto 很有品牌感，但文字偏長；課堂實作時可以讓學生練習「把長理念拆成可發布的 content themes」。
- `npm run build` 目前在我這邊因為 `next: command not found` 失敗，推測是 `node_modules` 尚未安裝；上課前可先跑 `npm install` 確認環境。

## Codex 會推薦的第八堂主軸

### 不要把主菜變成 Firebase / Auth

會員、登入、購物車、資料庫都可以是未來路線，但第八堂如果要教 AI Creator Agent，最好先不要把時間花在 Firebase setup、Auth rules、OAuth callback 這種水電工程。

明天的主菜應該是：

```text
DouceReverie 不只是賣衣服的網站，
而是櫻井妹妹練習「把創作流程教給 AI」的第一個 creator base。
```

### 最適合新增的頁面：`/[locale]/creator-workflow`

我會建議明天新增一個多語系頁面，而不是只在首頁底部塞區塊。

理由：

- 已經有 `products` route，可以自然延伸出第二個獨立 route。
- 新頁面能承接第八堂主題，不會破壞首頁高級 editorial 節奏。
- 學生可以練到 route、component、messages、navigation、content modeling。
- 頁面本身可以變成她下次做 Record & Replay / Codex skill 的藍圖。

頁面名稱可以是：

```text
AI Creator Workflow
```

或更符合品牌口吻：

```text
Creator Atelier
```

我偏好課堂上先用 `Creator Atelier` 當畫面標題，因為它比較像 DouceRêverie 的世界觀；但檔案 route 用 `creator-workflow`，學生比較容易理解。

## 建議新增內容

### 1. My Content Themes

讓櫻井妹妹定義自己的內容柱：

- Fashion / outfit diary
- Morning room mood
- Language learning diary
- Travel and cafe notes
- Behind the brand

這一段不是單純文案，而是訓練她把「我想發什麼」變成資料結構。之後可以放到 `lib/creator.ts`。

### 2. Posting Checklist

把發文流程拆成人和 AI 各自負責的步驟：

```text
1. 我選照片和主題
2. AI 產出 caption 草稿
3. AI 產出繁中 / 日文 / 英文版本
4. AI 建議 hashtags
5. AI 準備發文畫面
6. 停在 publish 前
7. 我確認後才發布
```

這會直接連到第八堂最重要的觀念：AI 可以準備，但人要確認。

### 3. AI Tools

做一個安靜、漂亮的工具清單，不需要真的接 API：

- Caption Draft
- Translation Polish
- Hashtag Mixer
- Image Alt Text
- Posting Dry Run

每個 tool 可以有三個欄位：

```text
Input / AI helps with / Human checks
```

這比「做一個假按鈕」更有教學價值。

### 4. First Reusable Workflow

直接把 `prepare-social-post-dry-run` 放進網站：

```text
Inputs:
- image_path
- caption
- platform
- expected_account

Rules:
- Never publish without confirmation.
- Never enter passwords.
- Stop if account is wrong.
- Verify image and caption before asking user.
- Do not browse the feed.
```

這一段可以是第八堂的最終成果：就算 Record & Replay 現場卡住，她也已經完成 workflow blueprint。

### 5. Things AI Should Never Do

這個 section 很重要，因為它讓「安全邊界」變成產品設計的一部分：

- 不可以自己按 publish
- 不可以輸入密碼
- 不可以切換到不確定的帳號
- 不可以亂滑 feed
- 不可以未確認就修改品牌語氣
- 不可以把私人照片或草稿拿去公開

這會讓學生理解 agent 不是魔法，而是需要規則的合作夥伴。

## 可做功能的優先順序

### MVP：明天最推薦做到這裡

1. 新增 `creator-workflow` route。
2. 新增 `lib/creator.ts`，放 content themes、checklist、tools、safety rules。
3. 新增多語系文案，至少先做 `zh-TW` 與目前 default `zh-CN`，如果時間夠再補 `ja` / `en`。
4. 首頁 header / drawer 加上 Creator Atelier 入口。
5. 用既有色彩與 editorial 排版做出頁面，不另外大改設計系統。
6. 最後跑 `npm run typecheck` 或 `npm run build`，再用瀏覽器看手機版與桌面版。

### Stretch：如果進度很順

- 讓 search overlay 可以用 `searchValue` filter `allProducts`，把「state -> derived UI」講清楚。
- 做一個小型 Caption Draft panel，使用者輸入主題後產生靜態範例，不需要真的接 LLM。
- 把 product card 的 CSS placeholder 替換成 2-3 張更像品牌素材的圖片。
- 新增 `content-ideas` 小資料表，讓學生用 JSON 管理社群發文點子。
- 增加一個 `altText` 欄位，教她為圖片寫無障礙描述，也順便練 content metadata。

### 先不要做

- 真登入、Firebase Auth、會員中心。
- 真付款、真購物車、庫存同步。
- 自動發布到 IG / X / Threads。
- 一次做太多平台整合。
- 把網站轉成後台 dashboard，這會稀釋現在漂亮的品牌第一印象。

## 兩小時課堂建議流程

### 0:00-0:10 看現有網站，讓她說出它現在像什麼

問題可以很簡單：

```text
妳覺得這現在比較像品牌官網、購物網站，還是妳自己的創作者基地？
如果要讓它更像妳自己的基地，少了哪一頁？
```

目標不是考她技術，而是讓她開始當 product owner。

### 0:10-0:25 定義 creator workflow

一起填三件事：

```text
我想發什麼？
我想發在哪裡？
我希望 AI 幫我準備什麼，但不能替我決定什麼？
```

這段先寫進紙上或 markdown，再讓 Codex 變成網站資料。

### 0:25-1:10 實作 Creator Atelier 頁面

建議小步驟：

```text
1. inspect app route 結構
2. 新增 creator data
3. 新增 page route
4. 套用既有 CSS token
5. 補 header / drawer 入口
6. 檢查多語系是否能載入
```

這段可以讓她看 Codex 怎麼先讀 code，再動手改。

### 1:10-1:30 把 workflow blueprint 放進頁面

讓她決定規則，不要老師全寫：

```text
AI 可以做：
- 幫我草擬文案
- 幫我翻譯
- 幫我整理 hashtags
- 幫我準備發文畫面

AI 不可以做：
- 自己發布
- 自己輸入密碼
- 用錯帳號還繼續
```

這一段的教學價值比多做一個漂亮 card 更高。

### 1:30-1:45 Record & Replay / skill 草稿

如果工具環境允許，就示範 dry-run。

如果不允許，就把 skill 先寫成文件：

```text
prepare-social-post-dry-run.md
```

讓她理解：workflow 先被說清楚，工具之後才能學得好。

### 1:45-2:00 驗收與回顧

驗收問題：

```text
今天哪個決定是妳做的？
AI 幫妳做了哪一步？
哪一步必須停下來等妳確認？
下次妳想讓 Codex 學會哪個重複流程？
```

最後 commit，可以讓她看到真實工程流程：

```text
git status
git add
git commit
git push
```

## 我會給老師的備課提醒

- 上課前先在 `DouceReverie` 跑 `npm install`，再跑 `npm run build`。我這邊直接跑 build 時因 `next: command not found` 失敗，應該只是尚未安裝 dependencies。
- 準備一份短的 creator workflow 範例，不要現場才想平台、caption、圖片。
- 如果要展示發文 dry-run，請使用不含私人資訊的測試帳號或安全頁面，並明確停在 publish 前。
- 不要讓她覺得「AI agent = 自動幫我做所有事」。要把它講成「我教 AI 做準備工作，但我保留最後決定權」。
- 設計上延續現有 DouceRêverie 的安靜、高級、少女感，不要突然變成 SaaS dashboard。

## Codex 的最終建議

明天最漂亮的成果不是「網站多一個功能」，而是：

```text
DouceReverie 多了一個 Creator Atelier。

櫻井妹妹第一次把自己的內容主題、發文流程、AI 可做事項、AI 禁止事項，
整理成一個網站頁面和 reusable workflow blueprint。
```

這會自然銜接第七堂的 agentic tool-making，也會讓第八堂真正升級成「把自己的創作者流程教給 AI」。
