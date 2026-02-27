# S3：localStorage + DevTools 教學腳本

> **對應 Block 3（1:10 – 1:50）**  
> **核心體驗：** 在 DevTools 裡親眼看到資料被存起來，刷新頁面還在

---

## 🎯 教學目標

學完這段，她能：
1. 說出「資料存在 localStorage」
2. 用 DevTools → Application → Local Storage 查看資料
3. 理解 JSON.stringify 和 JSON.parse 的角色

---

## 📖 教學流程

### Step 1：localStorage 比喻

> 💬 Jones：「瀏覽器有一個『小抽屜』叫 localStorage。你放東西進去，關掉瀏覽器再打開，東西還在。但抽屜只能放紙條（文字），不能放真的東西（物件）。」

```
🗄️ localStorage 小抽屜

  放進去：localStorage.setItem("名字", "值")
  拿出來：localStorage.getItem("名字")
  全部清掉：localStorage.clear()
```

---

### Step 2：打開 Demo 2 操作

打開 `demo-2-checkin-basic.html`：

1. 輸入單字數（例：10）
2. 寫一句英文（例：I love studying!）
3. 按「打卡！」
4. 看到連續天數、打卡紀錄出現

> 💬 Jones：「打卡成功了。那資料現在在哪裡？我們來偵探。」

---

### Step 3：DevTools 大發現 🔥

**這是今天最重要的時刻。**

1. 按 `Cmd + Option + I`（Mac）打開 DevTools
2. 點上方的 **Application** 標籤
3. 左側 **Storage** → **Local Storage** → 點擊網址
4. 右側會顯示 key-value 表格

> 💬 Jones：「看到了嗎！你的打卡資料就在這裡。key 是名稱，value 是資料。點開 value——看，就是你剛學的 JSON 格式！」

讓她觀察：
- key 名稱是什麼
- value 裡的 JSON 結構
- 跟她在 Block 2 設計的結構是否一致

---

### Step 4：刷新大實驗

> 💬 Jones：「現在，你按 Cmd+R 重新整理。」

**刷新後——資料還在！**

> 💬 Jones：「記得上次 Session 2 的 Todo demo 嗎？刷新就消失了。今天的打卡紀錄不會消失，因為我們存了 localStorage。」

對比表：

| | Session 2 Todo | Session 3 打卡 |
|---|---|---|
| 存了嗎？ | ❌ 沒有 | ✅ localStorage |
| 刷新後？ | 消失 | 還在！ |
| 關瀏覽器？ | 消失 | 還在！ |

---

### Step 5：Console 體驗 stringify / parse

在 DevTools 的 Console 裡打：

```js
// 拿出來看（是文字）
localStorage.getItem("checkin-records")

// 解析成物件（可以展開看）
JSON.parse(localStorage.getItem("checkin-records"))
```

> 💬 Jones：「stringify = 把東西寫在紙上（物件→文字）。parse = 把紙上的字讀回來（文字→物件）。抽屜只能放紙，所以存的時候要 stringify，拿的時候要 parse。」

---

### Step 6：限制說明

> 💬 Jones：「localStorage 很方便，但它是『學習用資料庫』。真實產品像 IG 和 Line，資料存在伺服器上——這樣你換手機也能看到。localStorage 只存在這台電腦的這個瀏覽器裡。但作為入門工具，它超好用的。」

---

## ⚠️ 不要教的

- ❌ sessionStorage（太像會混淆）
- ❌ IndexedDB
- ❌ Cookie 和 localStorage 的差異
- ❌ 容量限制細節（5MB）
- ❌ 任何後端資料庫概念
- ❌ async/await 語法

---

## 🛠️ 如果 DevTools 找不到

備用路徑：
1. Chrome 選單 → 更多工具 → 開發人員工具
2. 右鍵頁面 → 檢查
3. 快捷鍵：`Cmd + Option + I`（Mac）/ `F12`（Windows）

找到 Application 標籤後，左邊的 Storage 區塊展開就能看到 Local Storage。
