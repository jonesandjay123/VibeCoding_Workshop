# DouceReverie 擴充建議 — Opus 的看法

> 這份是 Opus（claude-opus-4-8）實際 clone 並讀完 `DouceReverie` repo 後，針對「第八堂如果還是要做這個網站，可以往哪裡擴充加強」寫的看法與規劃。
>
> 立場：我把它當成一個**教學載體**來看，不是當成要上線的商業網站。所以下面每一條建議都會標清楚「跟哪堂課呼應」「誰決定」「AI 準備什麼」「為什麼適合第八堂」。
>
> 對應教案：[`README.md`](README.md) 主節奏、[`creator-agent-prompts.md`](creator-agent-prompts.md) 現場 prompt、[`live-runbook.md`](live-runbook.md) 路線判斷。這份是補在它們旁邊的「網站該怎麼長」的技術視角。

---

## 一句話結論

> 這個 repo 的**體質比我預期好很多**，已經有完整 i18n、品牌語言、設計 token、甚至 AI 自評（`critique.json`）。
> 所以第八堂**不需要重做網站，也不需要狂加功能**。最高槓桿的一步是：把「創作者流程」變成一份**資料（JSON）**，讓網站從「作品展示頁」變成「她可以自己編輯的 creator 基地」。

這正好接回第八堂的主軸：**人當 product owner，AI 幫忙準備，內容是資料不是寫死的 code。**

---

## 我實際看了什麼（repo 現況速覽）

技術棧（比一般初學者專案成熟）：

```text
Next.js 16 (App Router) + React 19 + TypeScript + Tailwind v4 + motion
```

結構：

| 區塊 | 檔案 | 狀態 |
| --- | --- | --- |
| 首頁路由 | `app/[locale]/page.tsx` | 乾淨，server component 取資料丟給 client |
| 商品列表路由 | `app/[locale]/products/page.tsx` | 已有第二個 route，結構清楚 |
| 主體 UI | `components/Storefront.tsx` | 單一大型 client component（Header / Manifesto / ProductCard / 抽屜 / 搜尋 / toast 都在裡面）|
| 多語系 | `lib/i18n.ts` + `messages/*.json` | **四語完整**：zh-CN（預設）/ ja / en / zh-TW |
| 商品資料 | `lib/products.ts` | 寫死在 TS 裡，但結構整齊，含各語系價格 |
| 設計系統 | `brand-spec.md` | oklch 色票 + 字體 token，難得有寫 |
| AI 自評 | `critique.json` | 五個面向各打 4 分，**這是很好的教學素材** |
| 舊版 | `legacy-static/index.html` | 1042 行的原始純 HTML 版，看得到「靜態 → Next」的演進 |
| 樣式 | `app/globals.css` | 895 行，手刻得很細 |

---

## 這個 repo 厲害在哪（先肯定櫻井妹妹）

開場可以直接誇她，這些都是真的做對了：

1. **品牌語言非常完整。** `manifesto` 那段日文白日夢文案、`Douce Rêverie` 的世界觀，是有靈魂的，不是 placeholder。
2. **i18n 架構是正解。** 文字全抽到 `messages/*.json`，四語都填滿，連價格都分幣別（`lib/products.ts`）。這是很多資深工程師都會偷懶的地方。
3. **無障礙有照顧到。** `aria-label`、`useReducedMotion`、Esc 關閉、focus 狀態都有。
4. **她讓 AI 對自己的作品打分數（`critique.json`）。** 這其實就是第七堂「人當 product owner，AI 自評」的延續，**第八堂可以直接拿來當 demo**。
5. **看得到演進。** `legacy-static/` 留著靜態版，對照現在的 Next 版，是很好的「我們一路怎麼長大」教材。

> 教學上的價值：她已經會「把內容抽成資料、把設計寫成規格、讓 AI 自評」。第八堂只要把這些習慣，從「做網站」轉到「做自己的 creator 流程」。

---

## 對應第八堂主題的關鍵洞察

第八堂的核心是把網站變成 **Creator Operating System**。我讀完 code 後，最想講的一句：

> 現在網站裡所有東西都是**寫死的展示品**（商品、文案、journal tiles）。
> 真正的「creator 基地」差別在於：**內容是她可以一直編輯的資料，而且有些東西會被記住。**

所以擴充方向不是「再加一個漂亮 section」，而是沿著三條線升級：

```text
1. 內容資料化：creator workflow 不要寫死，做成 JSON，她改 JSON 網站就變。
2. 一點點記憶：用 localStorage 做「草稿本」，呼應第三堂，但完全不碰後端。
3. 安全可見化：把「AI 不可以自己做的事」變成網站上看得到的公約。
```

---

## 擴充建議（依優先級）

### 🟢 P0 — 明天現場最推薦做的（低風險、必有成果）

#### P0-1. 新增 `/[locale]/creator-workflow` 路由

- **為什麼：** repo 已經有第二個 route（`products`），照同一個模子再做一個，AI 可以小步安全完成，幾乎不會壞既有頁面。
- **誰決定：** 她決定五個區塊各放什麼內容。
- **AI 準備：** 複製 `products/page.tsx` 的結構、接上 `getMessages`、把文字放進 `messages/*.json`。
- **內容（沿用教案五段）：**
  ```text
  My Content Themes（我想發什麼）
  My Posting Checklist（我的發文流程）
  My AI Tools（我會用哪些 AI 工具）
  My First Reusable Workflow（我的第一個可重複流程）
  Things AI Should Never Do Without Asking Me（AI 不能自己做的事）
  ```
- **呼應：** 第八堂主菜；架構上呼應第四堂（React/route）。

#### P0-2. 把 creator workflow 內容做成資料，而不是寫死

- **為什麼：** 這是我**最想推的一步**。新增 `lib/creator.ts`（或 `content/creator.json`），讓頁面 `.map()` 出來。她以後改一個檔案，網站就變。
- **誰決定：** 她填內容。
- **AI 準備：** 定義資料結構、寫好渲染、示範改一筆。
- **呼應：** 第三堂（JSON / data flow）+ 第八堂（人是內容的 owner）。
- **教學金句：**
  ```text
  妳不是在改網站，妳是在改一份妳自己的清單，
  網站只是把它好看地顯示出來。
  ```

### 🟡 P1 — 行有餘力，或下一堂的好起點

#### P1-1. localStorage「草稿本」（Draft Bank）

- 一個輸入框讓她打 caption 點子，存進 `localStorage`，重整不會不見。
- **嚴格守住：** 純前端、不碰 Firebase / Auth / DB。
- **呼應：** 第三堂 localStorage；也是「creator OS」最有感的功能。
- **注意現況：** 目前 `Storefront.tsx` 的 `cartCount` / `wishlist` 重整就歸零（沒有持久化）。草稿本剛好示範「什麼東西值得被記住」。

#### P1-2. Prompt Library 頁（把 `creator-agent-prompts.md` 搬上網站）

- 把課堂用的 prompt 做成網站上可複製的卡片。
- **價值：** 她的 prompt 也是「她自己的工具」，放上網站＝她的 creator OS 真的開始累積資產。

#### P1-3. 重跑 `critique.json` 自評迴圈

- 改完頁面後，叫 AI 用同一套五面向重新打分，對照前後。
- **價值：** 教她「AI 改完 → AI 自評 → 人決定收不收」的完整迴圈，這是第七、八堂的精神。

### 🔵 P2 — 之後（第九/十堂）再碰，今天只提一句

```text
- 商品圖：目前 product-media 是空的占位 div，補圖會更完整但不是今天重點。
- 搜尋功能化：現在搜尋框只會填字、不會真的搜。
- 部署 / 自訂網域：deploy 到 Vercel。
- Firebase / Auth / 真資料庫：守住教案，今天最多講 5 分鐘概念。
```

---

## 我會推薦的明天最小實作路徑（現場版）

如果只有 30 分鐘做網站，照這個順序，幾乎不會翻車：

```text
1. 用 prompt #4（inspect）讓 AI 先講專案結構 → 對照本文件，建立信心
2. P0-1：複製 products route，做出 /creator-workflow 空殼，先跑起來看到畫面
3. P0-2：把五個區塊內容抽成 lib/creator.ts，她填一段真的內容
4. git status 檢查 → 確認只動了該動的檔案
5. 行有餘力才上 P1-1 草稿本
6. 收尾：叫 AI 重跑 critique 自評，當作「驗收」
```

> 每一步都要回到那句話：**哪一步是妳決定的？哪一步可以交給 AI？**

---

## 技術上要小心的兩個坑（給 Jones 自己看）

1. **`proxy.ts` 要先確認真的有跑。** 這看起來是 Next 16 新的 `proxy.ts` 慣例（取代舊的 `middleware.ts`），負責把 `/` 轉到 `/zh-CN`。現場 `npm run dev` 後，直接開 `http://localhost:3000`，確認**有自動跳到 `/zh-CN`**。如果沒跳，就請學生直接開 `/zh-CN`，不要現場卡在 middleware 設定上（那不是今天主題）。

2. **目前沒有任何持久化。** `cartCount`、`wishlist`、搜尋字都是 `useState`，重整全歸零。這**不是 bug**，但如果要做 P1-1 草稿本，要明確跟她說「這次我們特地讓它被記住」，讓她感受到差別。

---

## 守住主軸：今天不要做的事

和 [`live-runbook.md`](live-runbook.md) 一致，再強調一次網站層面的版本：

```text
- 不要重做設計 / 改 brand-spec 色票
- 不要把 Storefront.tsx 大改（它是一坨大 component，動它容易連鎖壞）
- 不要加 Firebase / Auth / DB / 後端
- 不要裝大型套件
- 不要硬解搜尋、購物車、商品圖這些「電商功能」
```

> 一句話守則：**今天加的是「她的創作流程」，不是「電商功能」。**

---

## 跟既有教案怎麼搭

| 既有檔案 | 這份補了什麼 |
| --- | --- |
| [`README.md`](README.md) | 給了「網站該往哪長」的具體 P0/P1/P2 與檔案級建議 |
| [`creator-agent-prompts.md`](creator-agent-prompts.md) | prompt #4/#5 對應 P0-1、P0-2；建議把 prompt sheet 本身做成 P1-2 頁面 |
| [`live-runbook.md`](live-runbook.md) | runbook 的「Option 2 新增 route」＝我這裡的 P0-1，並補了 `proxy.ts` 與持久化兩個現場坑 |

---

## 給櫻井妹妹的一句話（可當收尾）

```text
妳的網站已經會「把文字變成資料、把設計寫成規格、讓 AI 幫自己打分數」。
今天我們只是把這個能力，從「做一個漂亮網站」，
轉成「做一個會一直長大、AI 幫妳運轉的創作者基地」。
```
