# S5：API GET 教學（選配）

> **對應 Block 5 Part A（2:40 – 2:50）**  
> **選配內容：** 如果時間不夠或她累了，可以跳過

---

## 🎯 教學目標

學完這段，她能：
1. 理解 GET = 去拿資料，POST = 傳資料
2. 看到 fetch 把 API 資料顯示在頁面上

---

## 📖 教學流程

### Step 1：回顧 API

> 💬 Jones：「上次你在瀏覽器貼 URL 呼叫了 Dog API。今天我們用程式碼來呼叫——幫打卡頁面加一句每日鼓勵。」

### Step 2：GET vs POST（只講概念）

| 動作 | 比喻 | 例子 |
|------|------|------|
| **GET** | 跟服務生說「給我菜單」 | 拿名言、拿狗圖 |
| **POST** | 填表格交給服務生 | 登入、送出訂單 |

> 💬 Jones：「今天只用 GET。以後要傳資料給伺服器，就要 POST。」

### Step 3：Demo 3 體驗

打開 `demo-3-checkin-with-api.html`：
- 打卡功能跟 demo-2 一樣
- 多了「每日鼓勵」區塊
- 每次刷新都有不同名言！

### Step 4：Console 體驗（可選）

```js
fetch("https://api.quotable.io/random")
  .then(r => r.json())
  .then(data => console.log(data.content))
```

> 💬 Jones：「一行 fetch，就能跟全世界的伺服器要資料。」

---

## ⚠️ 不要教的

- ❌ POST 的實作
- ❌ async/await 語法
- ❌ HTTP 狀態碼
- ❌ CORS
- ❌ API Key / 認證

---

## 🔄 備用 API

如果 Quotable API 掛了：
- `https://api.agify.io?name=azunyan`（猜年齡）
- `https://uselessfacts.jsph.pl/random.json?language=en`（隨機冷知識）
- `https://api.adviceslip.com/advice`（隨機建議）
