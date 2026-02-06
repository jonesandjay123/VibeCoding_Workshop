# S4：API 是什麼？——讓程式幫你叫外送

> **Session 4 教學示範腳本**
> 教學者：Jones ｜ 時間：約 15 分鐘（講解 5 分 + Demo 8 分 + 收尾 2 分）
> 學生背景：大二東亞史、中日雙語、想當 KOL、零 API 概念、已會 HTML/CSS

---

## Part 1：API 解說腳本（3–5 分鐘，Jones 口述）

### 🎬 開場：外送平台比喻（1 分鐘）

> **Jones：**
>
> 我問你一個問題——你有用過 UberEats 或 Foodpanda 嗎？
>
> 你在 APP 上面滑一滑、按一按，食物就送到你家了。
> 但你有沒有想過——你根本不知道那家餐廳的廚房長什麼樣、主廚叫什麼名字、他用什麼牌子的鍋子，對吧？
>
> 你不需要知道。你只要在 APP 上**告訴它你要什麼**，它就幫你搞定。
>
> 這就是 API 的核心概念。

### 🔗 帶到程式世界（1 分鐘）

> **Jones：**
>
> 你用 UberEats 叫外送，對吧？
>
> 那如果我跟你說——**程式也能叫外送**呢？
>
> 你的網頁程式可以跟 Instagram 說「欸，把我最新的 9 張照片給我」；
> 可以跟天氣網站說「東京現在幾度？」；
> 可以跟翻譯服務說「幫我把這段中文翻成日文」。
>
> 這些「跟別人要東西」的動作，就是在**呼叫 API**。
>
> **API 就是——讓你的程式跟別人的程式『叫外送』的標準方法。**

### 🏗️ 一句話解釋前端 / 後端 / 資料庫（1 分鐘）

> **Jones：**
>
> 既然我們講到這了，我順便用一個你聽得懂的方式解釋三個術語：
>
> 想像你開了一家品牌快閃店——
>
> | 角色 | 比喻 | 白話 |
> |------|------|------|
> | **前端 Frontend** | 店面裝潢、招牌、Menu | 客人看到的畫面（你已經會的 HTML/CSS！） |
> | **後端 Backend** | 後面的倉庫 + 老闆 | 處理訂單、決定該做什麼的伺服器 |
> | **資料庫 Database** | 庫存清單 | 記住所有商品、訂單、客戶資料 |
> | **API** | 店員 | 在店面和倉庫之間跑來跑去傳話的人 |
>
> 一句話版本：
> **「前端是門面，後端是大腦，資料庫是記憶，API 是讓它們講話的方法。」**

### ✨ 轉場到 Demo（30 秒）

> **Jones：**
>
> 好，講太多概念會睡著，我們直接來看真的。
>
> 接下來我要在你面前，用**一行程式碼**，叫別人的伺服器幫我做事。
>
> 打開 Chrome → 按 `F12`（或 `Cmd + Option + J`）→ 點上面的 `Console` 分頁。
>
> 準備好了嗎？跟我一起貼。

---

## Part 2：瀏覽器 Live Demo（8 分鐘）

> ⚠️ **環境準備**：Chrome 瀏覽器 → 任意網頁 → 按 `Cmd + Option + J`（Mac）或 `F12`（Windows）→ Console 分頁
>
> 所有程式碼可直接複製貼上，不需安裝任何東西。

---

### Demo 1：你的第一個 API 呼叫——隨機狗狗圖片 🐕（2 分鐘）

#### 教學引導

> **Jones：**
>
> 世界上有一個免費的 API，專門提供隨機的狗狗照片。
> 你跟它說「給我一張」，它就從資料庫裡隨機挑一張狗狗圖的網址給你。
>
> 我們用一行程式碼去跟它「叫外送」：

#### 🖥️ 貼進 Console 的程式碼

```javascript
// Demo 1：呼叫 Dog CEO API，取得一張隨機狗狗圖片
fetch('https://dog.ceo/api/breeds/image/random')
  .then(res => res.json())
  .then(data => {
    console.log('🐕 API 回傳的資料（JSON）：', data);
    console.log('🖼️ 圖片網址：', data.message);
    console.log('👆 複製上面的網址，貼到瀏覽器就能看到狗狗！');
  });
```

#### 📋 預期結果

Console 會印出：
```
🐕 API 回傳的資料（JSON）： {message: 'https://images.dog.ceo/breeds/terrier-wheaten/n02098105_1386.jpg', status: 'success'}
🖼️ 圖片網址： https://images.dog.ceo/breeds/terrier-wheaten/n02098105_1386.jpg
👆 複製上面的網址，貼到瀏覽器就能看到狗狗！
```

> 💡 **每次執行都會得到不同的狗狗**——因為 API 後面的伺服器每次「隨機挑一張」給你。

#### 教學重點

> **Jones：**
>
> 看到了嗎？你剛剛做了什麼？
>
> 1. 你用 `fetch()` 發了一個「請求」給 dog.ceo 的伺服器
> 2. 伺服器收到後，從它的資料庫裡隨機挑了一張狗圖
> 3. 然後把結果用 **JSON 格式**（就是那個大括號 `{ }` 的東西）傳回來給你
>
> 就是 UberEats 的流程：你下單 → 餐廳做 → 外送員送到你手上。
>
> **`fetch` = 下單，JSON = 送到你手上的那包食物。**

---

### Demo 2：用 Jikan API 搜動漫 🎌（3 分鐘）

#### 教學引導

> **Jones：**
>
> 好，狗狗圖很可愛，但跟你沒什麼關係。
>
> 我知道你對日本文化有興趣——如果我說有一個 API 可以搜尋全世界的動漫資料呢？
>
> Jikan API 就是 MyAnimeList（MAL）的開放 API，裡面有上萬筆動漫資料。
> 我們來搜一下《SPY×FAMILY 間諜家家酒》：

#### 🖥️ 貼進 Console 的程式碼

```javascript
// Demo 2：用 Jikan API 搜尋動漫「SPY×FAMILY」
fetch('https://api.jikan.moe/v4/anime?q=spy+family&limit=3')
  .then(res => res.json())
  .then(data => {
    console.log('🎌 搜尋結果（原始 JSON）：', data);
    console.log('---');
    data.data.forEach((anime, i) => {
      console.log(`🎬 第 ${i+1} 部：${anime.title}`);
      console.log(`   日文名：${anime.title_japanese}`);
      console.log(`   評分：⭐ ${anime.score}`);
      console.log(`   集數：${anime.episodes} 集`);
      console.log(`   圖片：${anime.images.jpg.image_url}`);
      console.log('---');
    });
  });
```

#### 📋 預期結果

Console 會印出（資料為即時，數值可能不同）：
```
🎌 搜尋結果（原始 JSON）： {pagination: {…}, data: Array(3)}
---
🎬 第 1 部：SPY×FAMILY
   日文名：SPY×FAMILY
   評分：⭐ 8.55
   集數：12 集
   圖片：https://cdn.myanimelist.net/images/anime/1441/122795.jpg
---
🎬 第 2 部：SPY×FAMILY Part 2
   日文名：SPY×FAMILY
   評分：⭐ 8.55
   集數：13 集
   圖片：...
---
🎬 第 3 部：SPY×FAMILY Season 2
   ...
---
```

#### 🎯 延伸挑戰：換一部你喜歡的動漫

> **Jones：** 試著把 `spy+family` 換成別的動漫名字！

```javascript
// 💡 試試看！把 'spy+family' 換成你喜歡的動漫
// 例如：chainsaw+man、jujutsu+kaisen、frieren、oshi+no+ko

fetch('https://api.jikan.moe/v4/anime?q=frieren&limit=1')
  .then(res => res.json())
  .then(data => {
    const anime = data.data[0];
    console.log(`🎬 ${anime.title}（${anime.title_japanese}）`);
    console.log(`⭐ 評分：${anime.score} ／ 集數：${anime.episodes}`);
    console.log(`📖 簡介：${anime.synopsis?.slice(0, 100)}...`);
  });
```

#### 教學重點

> **Jones：**
>
> 注意看網址裡面的 `?q=spy+family&limit=3`——
>
> - `q=spy+family` 就是你跟 API 說「我要搜 spy family」
> - `limit=3` 就是你跟 API 說「最多給我 3 筆就好」
>
> 這些叫做**參數（parameters）**——就像你在 UberEats 上選「不要辣」「加大」一樣，你在告訴 API 你想要什麼。
>
> 你改了參數，API 就給你不同的結果。**同一個 API，不同的參數，不同的外送。**

---

### Demo 3：查東京即時天氣 🌤️（3 分鐘）

#### 教學引導

> **Jones：**
>
> 最後一個 demo——你手機上的天氣 APP，它的資料是哪來的？
> 它不是自己量溫度的，它就是**呼叫天氣 API** 拿的。
>
> 我們用 Open-Meteo 這個完全免費的天氣 API 來查東京的即時天氣：

#### 🖥️ 貼進 Console 的程式碼

```javascript
// Demo 3：用 Open-Meteo API 查東京即時天氣
fetch('https://api.open-meteo.com/v1/forecast?latitude=35.68&longitude=139.69&current_weather=true')
  .then(res => res.json())
  .then(data => {
    const w = data.current_weather;
    console.log('🌤️ 東京即時天氣：');
    console.log(`🌡️ 溫度：${w.temperature}°C`);
    console.log(`💨 風速：${w.windspeed} km/h`);
    console.log(`🕐 觀測時間：${w.time}`);
    console.log('');
    console.log('📦 完整 API 回傳：', data);
  });
```

#### 📋 預期結果

Console 會印出（數值為即時資料）：
```
🌤️ 東京即時天氣：
🌡️ 溫度：8.2°C
💨 風速：13.5 km/h
🕐 觀測時間：2026-02-04T15:00
📦 完整 API 回傳： {latitude: 35.7, longitude: 139.6875, …, current_weather: {…}}
```

#### 🎯 延伸挑戰：換城市

> **Jones：** 想查別的城市？只要改經緯度！

```javascript
// 💡 換城市試試看！
// 台北：latitude=25.03, longitude=121.56
// 大阪：latitude=34.69, longitude=135.50
// 京都：latitude=35.01, longitude=135.77
// 紐約：latitude=40.71, longitude=-74.01

fetch('https://api.open-meteo.com/v1/forecast?latitude=34.69&longitude=135.50&current_weather=true')
  .then(res => res.json())
  .then(data => {
    const w = data.current_weather;
    console.log(`🌡️ 大阪現在 ${w.temperature}°C ／ 風速 ${w.windspeed} km/h`);
  });
```

#### 教學重點

> **Jones：**
>
> 你剛剛做的事情，跟你手機上的天氣 APP 做的事**一模一樣**。
>
> 差別只是——天氣 APP 會把 JSON 資料變成漂亮的畫面給你看。
> 而你現在看到的是**原始資料**——還沒「裝潢」過的。
>
> 記得嗎？前端就是裝潢。你已經會 HTML/CSS 了——
> 所以理論上，**你已經可以做一個天氣網頁了**。
> 用 API 拿資料，用 HTML/CSS 把它變漂亮。就這樣。

---

## Part 3：連結到她的夢想（2 分鐘）

> **Jones：**
>
> 好，我們剛剛用三個 demo 呼叫了三個不同的 API：
>
> - 🐕 狗狗圖片——看到 JSON 長什麼樣
> - 🎌 動漫搜尋——學到怎麼傳參數
> - 🌤️ 東京天氣——理解你手機 APP 的運作原理
>
> 但這些都只是開胃菜。我真正想讓你知道的是——
>
> **你以後的品牌網站，就是靠 API 串起來的。**
>
> 想像你畢業後做了自己的品牌，你的官網可以：
>
> | 你想做的事 | 對應的 API |
> |-----------|-----------|
> | 官網自動顯示 IG 最新貼文 | Instagram Graph API |
> | 讓客人直接在網站上刷卡買東西 | Stripe / 綠界金流 API |
> | 網站自動翻成日文，給日本粉絲看 | Google Translate API |
> | 品牌客服機器人自動回覆 | OpenAI / ChatGPT API |
> | 粉絲數、觸及率數據分析 | YouTube / TikTok Analytics API |
> | 串接 LINE 通知出貨進度 | LINE Messaging API |
>
> 每一個，都是 `fetch()`——就像你今天做的一樣。
>
> **你已經會叫外送了。剩下的只是選餐廳而已。**

---

## 📝 Session 4 重點回顧

給學生的一頁筆記：

```
┌──────────────────────────────────────────┐
│  🍕 API = 讓程式跟別人的程式「叫外送」      │
│                                          │
│  你（前端）→ fetch 發送請求 → 伺服器處理    │
│            ← JSON 回傳結果 ← 資料庫撈資料  │
│                                          │
│  🔑 核心觀念：                             │
│  1. fetch() = 打電話給 API                │
│  2. JSON    = API 回傳的包裹               │
│  3. 參數    = 你跟 API 說的客製化需求       │
│                                          │
│  📐 架構（品牌快閃店比喻）：                 │
│  前端 = 門面    後端 = 大腦                 │
│  資料庫 = 記憶  API = 溝通方式              │
└──────────────────────────────────────────┘
```

---

## 🔧 教師備註

### 常見問題 FAQ

**Q：為什麼有的 API 要 Key、有的不用？**
> 像 UberEats 要登入才能點餐一樣。有些 API 是開放的（像狗狗圖、天氣），有些需要「會員帳號」（API Key）來確認你是誰、限制用量。

**Q：JSON 是什麼？**
> 就是一種「資料包裝格式」。像你寄包裹要寫收件人、地址、內容物，JSON 用 `{ }` 和 `" "` 把資料包得整整齊齊，讓程式讀得懂。

**Q：fetch 裡的 `.then` 是什麼意思？**
> 「然後」的意思。因為 API 回應需要時間（像外送也要等一下），所以我們說「等回來以後，**然後**做這件事」。

### 備用 API（萬一某個掛了）

| 用途 | 備用 |
|------|------|
| 隨機圖片 | `https://randomfox.ca/floof/`（狐狸圖） |
| 動漫搜尋 | 直接在瀏覽器開 `https://api.jikan.moe/v4/anime?q=naruto` |
| 天氣 | 改查台北：`latitude=25.03&longitude=121.56` |

### Jikan API 注意事項
- 有 rate limit（每秒 3 次），demo 之間稍微等一下
- 如果回傳錯誤 `429`，等 2-3 秒再試

---

*建立日期：2026-02-04*
*研究來源：M3_api_explainer.md*
*課程：Vibe Coding Course — Module 3: API*
