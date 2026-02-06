# M4: 靜態 vs 動態網站教學示意

搜尋次數：5

---

## 摘要

本模組要向已有 HTML/CSS 基礎的文科大二學生解釋：**她目前做的是「靜態網站」**，而當她的品牌需要會員登入、購物車、留言板時，就需要進入「動態網站」的世界。核心教學目標：

1. 讓她理解靜態 ↔ 動態的差異，而非害怕它
2. 讓她知道「前端 / 後端 / 資料庫」各自負責什麼
3. 讓她發現：**她已經站在前端 70% 的位置了**（HTML + CSS ≈ 前端的骨架與皮膚，只差 JavaScript 的互動能力）
4. 用不需要後端的小 demo 讓她「感受」互動，降低恐懼感

**關鍵洞見（來自搜尋）**：餐廳比喻是全網最普遍的前端/後端類比，被 CodeAnalogies、Technically.dev、Medium、Codecademy、DEV Community 等多個教學平台不約而同採用。我們可以在此基礎上加入「品牌開店」的情境讓它更貼近學生。

---

## 最佳比喻

### 🍽️ 比喻一：餐廳（最經典，全網共識）

| 餐廳元素 | 網站元素 | 說明 |
|---------|---------|------|
| 餐廳門面、裝潢、菜單 | **前端**（HTML/CSS/JS） | 客人（使用者）看到的一切 |
| 服務生 | **API / HTTP 請求** | 在前台和後台之間傳遞訊息 |
| 廚房 | **後端**（伺服器） | 接收訂單、處理邏輯、準備回應 |
| 食材倉庫 / 冰箱 | **資料庫** | 儲存所有食材（數據） |

> 🔑 **靜態 vs 動態的餐廳版**：
> - **靜態網站** ＝ 只有菜單的展示架（海報）。每個走過的人看到的菜單一模一樣，你想改價錢要重新印。
> - **動態網站** ＝ 真正在營業的餐廳。你點什麼，廚房就做什麼；VIP 客人看到的推薦菜不同。

### 🏪 比喻二：品牌快閃店 → 正式開店（更貼近學生情境）

| 階段 | 網站類型 | 說明 |
|------|---------|------|
| **快閃店**（Pop-up Store） | 靜態網站 | 漂亮的佈置、固定商品展示，但沒有收銀系統、不記得誰來過 |
| **正式店面** | 動態網站 | 有 POS 系統（後端）、會員卡（資料庫）、客製化推薦 |

> 💡 **教學金句**：「你現在會的 HTML/CSS 就像你已經會佈置一間超美的快閃店了。動態網站只是幫你加上收銀機和會員系統而已。」

### 📱 比喻三：Instagram 的「限時動態」vs「貼文」

- **靜態** ＝ 你的 IG 名片（Bio + 精選動態）：所有人看到的都一樣
- **動態** ＝ 你的 IG 首頁 Feed：每個人看到的內容不同，因為演算法（後端）根據你的喜好（資料庫）來決定推什麼給你

---

## 前端/後端/資料庫角色卡

### 🎭 角色卡：用「網紅品牌團隊」來比喻

| 角色 | 技術對應 | 做什麼 | 工具舉例 |
|------|---------|--------|---------|
| 🎨 **美術 / 攝影師** | 前端（HTML/CSS） | 決定品牌視覺、排版、配色 | HTML, CSS, Figma |
| 🗣️ **社群小編** | 前端（JavaScript） | 讓頁面「會動」，回應粉絲互動 | JavaScript, React |
| 📞 **客服 / 營運** | 後端（Server） | 處理訂單、驗證身分、計算運費 | Node.js, Python, PHP |
| 📦 **倉庫管理員** | 資料庫（Database） | 記住所有商品、會員資料、訂單紀錄 | MySQL, MongoDB, Supabase |
| 📬 **快遞員** | API | 在前台和後台之間傳遞訊息 | REST API, GraphQL |

> 🎯 **鼓勵式定位**：
> - 你已經會 HTML + CSS ＝ 你已經是美術 / 攝影師了 ✅
> - 學會 JavaScript ＝ 你還兼任了社群小編 ✅
> - 這就是前端的全部。**你已經在前端 70% 的位置了！**
> - 後端和資料庫？那是另一組人的工作。你可以學，但也可以用現成工具（Supabase、Firebase、Shopify）代替。

---

## 不需後端的互動 Demo Ideas

> 目標：讓學生在「純前端」環境下體驗到「互動」和「記憶」的感覺，降低「我一定要學後端才能做有用的東西」的心理門檻。

### Demo 1：📝 localStorage 待辦清單（最簡單）
- **概念**：瀏覽器自帶的「小筆記本」，關掉再開還記得
- **做法**：用 JavaScript 把使用者輸入存到 `localStorage`
- **程式碼量**：< 30 行 JS
- **學習點**：「原來瀏覽器自己就有記憶功能！」
```javascript
// 存
localStorage.setItem('brandName', '小美的飾品店');
// 讀
const name = localStorage.getItem('brandName');
document.querySelector('h1').textContent = `歡迎回來，${name}！`;
```

### Demo 2：💛 收藏 / 愛心按鈕
- **概念**：點愛心 → 記住你喜歡哪些商品（存在 localStorage）
- **做法**：每個商品卡片加一個愛心 toggle，狀態存 localStorage
- **學習點**：「這就是購物網站『加入最愛』的原理！」

### Demo 3：📊 Google Sheets 當假資料庫
- **概念**：用 Google Sheets 存商品資料，前端直接讀取顯示
- **做法**：
  1. 建一個 Google Sheet（商品名稱、價格、圖片連結）
  2. 發佈為 CSV/JSON
  3. 前端用 `fetch()` 讀取並渲染成商品卡片
- **學習點**：「原來資料庫就是這種感覺！只是正式的更快、更安全。」

### Demo 4：🌙 深色模式切換
- **概念**：按鈕切換亮/暗模式，用 localStorage 記住偏好
- **做法**：CSS 變數 + JS toggle + localStorage
- **學習點**：「網站怎麼記得我上次選了深色模式？就是這樣！」

### Demo 5：📋 簡易表單 → Google Form
- **概念**：品牌官網的「聯絡我們」表單，送到 Google Form
- **做法**：前端表單 POST 到 Google Form 的 action URL
- **學習點**：「不用寫後端也能收集客戶資料！」

---

## 教學建議

### 1. 教學流程建議（90 分鐘課堂）

| 時間 | 活動 | 重點 |
|------|------|------|
| 0-10 min | **回顧**：展示她之前做的靜態網站 | 肯定成果，建立信心 |
| 10-25 min | **比喻引入**：快閃店 vs 正式開店 | 用品牌情境切入，不用技術術語 |
| 25-40 min | **角色卡活動**：發角色卡，讓她把自己的技能對應到卡片上 | 發現自己已在前端 70% |
| 40-60 min | **Hands-on Demo**：localStorage 愛心收藏 | 寫 < 20 行 JS 體驗「互動」 |
| 60-75 min | **展示真實案例**：品牌網站的進化路徑 | 連結到她的創業目標 |
| 75-90 min | **路線圖**：接下來學什麼？Shopify / Supabase / Vibe Coding | 降低焦慮，給出明確方向 |

### 2. 避免的教學陷阱

- ❌ 不要一開始就講「伺服器」「HTTP 請求」「SQL」
- ❌ 不要讓她覺得「不會後端就做不了有用的網站」
- ❌ 不要用程式碼截圖轟炸
- ✅ 先讓她「感覺到」互動（demo first, theory later）
- ✅ 強調「現成工具可以幫你跳過後端」（Shopify, Wix, Supabase, Firebase）
- ✅ 把每個概念連結到她的品牌目標

### 3. 鼓勵式教學語言

> 「你做的靜態網站就像你已經蓋好了一間漂亮的店面。動態網站？就是幫這間店裝上收銀機和會員系統。」

> 「HTML 是骨架、CSS 是妝容、JavaScript 是性格。你已經有骨架和妝容了，只差加上性格讓它活起來。」

> 「很多品牌創業者從來不碰後端，她們用 Shopify 賣東西、用 Notion 管理內容。你學的前端技能 + 這些工具 = 足夠啟動一個品牌了。」

### 4. 品牌網站從靜態 → 動態的真實路徑

| 階段 | 狀態 | 工具 | 功能 |
|------|------|------|------|
| 1. Landing Page | 靜態 | HTML/CSS + GitHub Pages | 品牌介紹、作品展示 |
| 2. 加上互動 | 半動態（純前端） | + JavaScript + localStorage | 暗色模式、收藏功能、動畫 |
| 3. 開始賣東西 | 動態（借用後端） | Shopify / Gumroad 嵌入 | 購物車、結帳 |
| 4. 會員系統 | 全動態 | Supabase / Firebase | 會員登入、個人化推薦 |
| 5. 完整品牌平台 | 全端 | Next.js + Supabase | Blog、電商、CRM 整合 |

**真實案例參考**：
- **Glossier**（美妝品牌）：從 Instagram + 簡單 Blog 起家 → Shopify 電商 → 自建全端平台
- **品牌快閃 → Shopify 遷移**：搜尋結果中 By Association Only 記錄了多個自然護膚品牌從 WordPress 遷移到 Shopify 的案例（如 Formerly Known As）
- **KOL 網站進化**：很多 YouTuber/Podcaster 從 Linktree（超靜態）→ 個人品牌網站（靜態）→ 課程平台（動態，用 Teachable/Kajabi）

---

## 資源列表

### 英文資源
1. **[Static vs. Dynamic Websites - HubSpot](https://blog.hubspot.com/website/static-vs-dynamic-website)** — 最完整的靜態 vs 動態比較文章，圖文並茂
2. **[Static vs Dynamic Website - GeeksforGeeks](https://www.geeksforgeeks.org/websites-apps/static-vs-dynamic-website/)** — 技術面的清晰對比表格
3. **[Static vs. Dynamic Websites - Figma](https://www.figma.com/resource-library/static-vs-dynamic-website/)** — 設計師角度的解釋
4. **[Front End v. Back End Explained by Waiting Tables - CodeAnalogies](https://blog.codeanalogies.com/2018/04/07/front-end-v-back-end-explained-by-waiting-tables-at-a-restaurant/)** — 餐廳比喻最佳文章，有圖解
5. **[The Details: Frontends and Backends - Technically.dev](https://technically.dev/posts/the-details-frontends-and-backends)** — 餐廳比喻的進階版，適合教師參考
6. **[Frontend vs Backend: Restaurant Analogy - Medium](https://medium.com/@devadharshinik2012/frontend-vs-backend-explained-with-a-restaurant-analogy-b0e94900af2a)** — 2025 年新文，簡潔版餐廳比喻
7. **[Web Architecture: The Restaurant Analogy - Medium](https://cameron-manavian.medium.com/how-to-understand-web-architecture-the-restaurant-analogy-7e534ee5cee7)** — 包含 API 角色的完整餐廳比喻
8. **[Static vs Dynamic - Shopify Blog](https://www.shopify.com/blog/static-vs-dynamic-website)** — 電商角度的實用建議
9. **[Static vs Dynamic - CloudCannon](https://cloudcannon.com/blog/static-vs-dynamic-websites-the-definitive-guide/)** — 最完整的技術指南
10. **[localStorage Complete Guide - Meticulous](https://www.meticulous.ai/blog/localstorage-complete-guide)** — localStorage 完整教學

### 中文資源
11. **[前端與後端、基本網站架構 - pala.tw](https://pala.tw/frontend-backend-basic/)** — 繁中，用餐廳比喻解釋前後端
12. **[網頁新手入門 - AppWorks School (Medium)](https://medium.com/appworks-school/網頁新手入門-初探網頁架構和前後端語言-a88a5dc86ee3)** — 繁中，點餐/出餐比喻
13. **[靜態與動態網站 - Strikingly](https://tw.strikingly.com/content/blog/static-vs-dynamic-website-whats-best-for-you/)** — 繁中，速度與功能取捨
14. **[前端/後端/資料庫學習指南 - YouTube](https://www.youtube.com/watch?v=tle-SrkG2dc)** — 繁中 YouTube 教學
15. **[前端、後端、全端比較 - ALPHA Camp](https://tw.alphacamp.co/blog/2018-07-20-18464)** — 繁中，就業角度分析

### 影片資源
16. **[Static vs. Dynamic Website - Verpex (YouTube)](https://www.youtube.com/watch?v=qSz7SDCR9e4)** — 5 分鐘快速理解
17. **[Static vs Dynamic - Academind (YouTube)](https://www.youtube.com/watch?v=_wFJj94kSTU)** — 11 分鐘深入講解
18. **[Front-End vs. Back-End: Restaurant Analogy (YouTube)](https://www.youtube.com/watch?v=SqmvdkpLrM0)** — 餐廳比喻影片版
