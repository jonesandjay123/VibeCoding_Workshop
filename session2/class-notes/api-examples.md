# 🌐 簡單好用的 API Endpoints 範例

> 這些 API 都是**免費、無需註冊**、可以直接在瀏覽器打開的！
> 非常適合教學和練習使用。

---

## 1️⃣ 隨機狗狗圖片 🐕

**Endpoint:**
```
https://dog.ceo/api/breeds/image/random
```

**回傳範例:**
```json
{
  "message": "https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1505.jpg",
  "status": "success"
}
```

**使用方式:**
- 直接在瀏覽器網址列貼上，按 Enter
- 每次刷新都會得到不同的狗狗圖片 URL
- `message` 就是圖片網址，可以直接開啟

---

## 2️⃣ 隨機貓咪圖片 🐱

**Endpoint:**
```
https://api.thecatapi.com/v1/images/search
```

**回傳範例:**
```json
[
  {
    "id": "MTk0ODA2NA",
    "url": "https://cdn2.thecatapi.com/images/MTk0ODA2NA.jpg",
    "width": 500,
    "height": 334
  }
]
```

**使用方式:**
- 回傳是一個陣列（注意外面有 `[]`）
- `url` 欄位就是貓咪圖片

---

## 3️⃣ 隨機笑話 😂

**Endpoint:**
```
https://official-joke-api.appspot.com/random_joke
```

**回傳範例:**
```json
{
  "type": "general",
  "setup": "Why did the scarecrow win an award?",
  "punchline": "Because he was outstanding in his field."
}
```

**使用方式:**
- `setup` = 笑話的開頭（問題）
- `punchline` = 笑點（答案）
- 每次刷新都是不同笑話

---

## 4️⃣ 隨機名言 💬

**Endpoint:**
```
https://api.quotable.io/random
```

**回傳範例:**
```json
{
  "content": "Be yourself; everyone else is already taken.",
  "author": "Oscar Wilde",
  "tags": ["wisdom"]
}
```

**使用方式:**
- `content` = 名言內容
- `author` = 作者

---

## 5️⃣ 假資料產生器（用戶資料）👤

**Endpoint:**
```
https://randomuser.me/api/
```

**回傳範例（簡化版）:**
```json
{
  "results": [
    {
      "name": { "first": "Emma", "last": "Wilson" },
      "email": "emma.wilson@example.com",
      "picture": { "thumbnail": "https://..." }
    }
  ]
}
```

**使用方式:**
- 可以產生假的用戶資料（名字、email、頭像等）
- 很適合做 UI 原型或測試

---

## 6️⃣ 查詢 IP 位置 📍

**Endpoint:**
```
https://ipapi.co/json/
```

**回傳範例:**
```json
{
  "ip": "24.48.0.1",
  "city": "New York",
  "region": "New York",
  "country_name": "United States",
  "timezone": "America/New_York"
}
```

**使用方式:**
- 會自動偵測你目前的 IP 和位置
- 顯示城市、國家、時區等資訊

---

## 7️⃣ Pokemon 資料 🎮

**Endpoint:**
```
https://pokeapi.co/api/v2/pokemon/pikachu
```

**使用方式:**
- 把 `pikachu` 換成任何 Pokemon 名字
- 可以得到該 Pokemon 的完整資料（圖片、屬性、招式等）
- 也可以用數字：`/pokemon/25`（皮卡丘是 25 號）

---

## 🧪 練習小挑戰

1. 用瀏覽器打開狗狗 API，找到圖片網址，新開分頁貼上看狗狗
2. 試試看 Pokemon API，查詢你最喜歡的 Pokemon
3. 用 IP API 看看你目前在哪個城市

---

## 💡 小提醒

- **JSON** 就是這種 `{ }` 格式的資料
- API 就像是「資料販賣機」— 你發請求，它給資料
- 這些都是 **GET** 請求（純粹拿資料，不改變任何東西）

---

*課堂筆記 by Jarvis 🤖 — Session 2*
