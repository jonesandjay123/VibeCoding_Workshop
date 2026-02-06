# M2: JavaScript「讓畫面動起來」最小示例

搜尋次數：5

---

## 摘要

JavaScript 是網頁三層結構（HTML / CSS / JS）的第三層——**行為層**。對已經會 HTML + CSS 的學生來說，JS 最核心的概念只有一個：**「當使用者做了某件事 → 網頁產生回應」**。本研究整理了最適合文科初學者理解的比喻、可以直接套在 Azunyan kawaii portfolio 上的最小互動範例，以及「不用會寫、只要看得懂」的 AI 輔助教學思路。

---

## 最佳比喻

### 🏠 蓋房子比喻（最廣泛使用、最直覺）

| 層 | 角色 | 對應 |
|---|---|---|
| HTML | 房子的骨架（牆壁、樑柱、房間） | 結構與內容 |
| CSS | 裝潢（油漆、家具、燈光） | 外觀與風格 |
| **JavaScript** | **水電 + 電器**（開關按了燈會亮、按門鈴會響） | **互動與行為** |

> **一句話版：** HTML 是骨架、CSS 是化妝、JS 是讓它會動的肌肉和神經。
> （來源：MDN / _nology / Reddit r/webdev）

### 🎭 舞台劇比喻（適合文科生）

- HTML = 劇本（角色、台詞、場景描述）
- CSS = 服裝設計師（衣服、燈光、佈景）
- **JavaScript = 導演**（指揮演員什麼時候進場、怎麼反應觀眾的互動）

> 出處：Ask MetaFilter — 「HTML is the script; CSS is the costume designer; JS is the director.」

### 🎀 對 Azunyan 最好的說法

> 「你已經會做漂亮的房間了（HTML + CSS）。JavaScript 就是讓房間裡的東西『有反應』——按開關燈會亮、點按鈕會跳出訊息、滑到哪裡東西會動。你的網站現在是一張漂亮的海報，加了 JS 就變成一個會回應你的小世界。」

---

## 最小 Demo 範例（可直接在她網站上用的）

### Demo 1：點按鈕 → 跳出打招呼（3 行 JS）

```html
<!-- 放在 index.html 任何位置 -->
<button onclick="alert('こんにちは！あずにゃんの世界へようこそ 🎀')">
  ✨ 點我打招呼
</button>
```

**看得懂就好：**
- `onclick="..."` → 「被點擊的時候，做引號裡的事」
- `alert('...')` → 「跳出一個小視窗，顯示括號裡的文字」

---

### Demo 2：點按鈕 → 切換深色/淺色主題（最實用）

```html
<!-- 在 <body> 結束前加這段 -->
<button id="theme-btn" onclick="toggleTheme()">🌙 切換主題</button>

<script>
function toggleTheme() {
  // document.body = 整個頁面
  // classList.toggle = 「有就拿掉，沒有就加上」
  document.body.classList.toggle('dark-mode');
}
</script>
```

```css
/* 在 CSS 檔案加這段 */
.dark-mode {
  background-color: #2d2d2d;
  color: #f0f0f0;
}

.dark-mode .card {
  background: rgba(255, 255, 255, 0.1);
}
```

**看得懂就好：**
- `document.body` → 「整個頁面」
- `.classList.toggle('dark-mode')` → 「如果 body 上有 `dark-mode` class 就拿掉，沒有就加上去」
- 所以點一次加深色、再點一次恢復——CSS 負責「深色長什麼樣」，JS 只負責「切換開關」

---

### Demo 3：console.log —— 偵探的筆記本

```html
<script>
// 按 F12 打開開發者工具 → Console 分頁看結果
console.log('🎀 網頁載入完成！');
console.log('現在時間是：' + new Date().toLocaleTimeString());
</script>
```

**看得懂就好：**
- `console.log()` 不會顯示在頁面上，是寫給「開發者自己看的筆記」
- 像偵探在記事本上寫線索，幫你確認程式有沒有跑到這一行

---

### Demo 4：簡單表單收集（配合她的 To Do 頁面）

```html
<input type="text" id="new-goal" placeholder="新的目標...">
<button onclick="addGoal()">追加 ✨</button>
<ul id="goal-list"></ul>

<script>
function addGoal() {
  // 1. 抓到輸入框裡的文字
  var text = document.getElementById('new-goal').value;
  
  // 2. 如果是空的就不做事
  if (text === '') return;
  
  // 3. 建立一個新的 <li> 項目
  var li = document.createElement('li');
  li.textContent = text;
  
  // 4. 放進清單裡
  document.getElementById('goal-list').appendChild(li);
  
  // 5. 清空輸入框
  document.getElementById('new-goal').value = '';
}
</script>
```

**看得懂就好：**
- `document.getElementById('new-goal')` → 「去頁面上找 id 叫 `new-goal` 的元素」
- `.value` → 「取得裡面的文字」
- `createElement('li')` → 「憑空建立一個 `<li>`」
- `appendChild(li)` → 「把它塞進清單裡」

---

## 教學建議

### 1. 核心教學順序（由淺到深）

```
Step 1: 為什麼需要 JS？→ 比喻 + 看 before/after 效果
Step 2: 最小 onclick → alert() → 「哦！按了會有反應！」
Step 3: 改改文字 → document.getElementById → 看到頁面上的字變了
Step 4: 切換 class → toggle dark mode → 「原來 JS 只是在加減 CSS class！」
Step 5: console.log → 開 DevTools → 「原來可以偷看程式在幹嘛」
```

### 2. 「讀 Code 比寫 Code 重要」教學思路

根據多個 Reddit 討論和教學文章，對 vibe coding / AI 輔助開發的初學者：

- **不需要從零手寫** — 但必須能「逐行讀懂 AI 產出的 code 在做什麼」
- **教會三個問題**：
  1. 「這行在選什麼東西？」（`document.getElementById` / `querySelector`）
  2. 「什麼時候會觸發？」（`onclick` / `addEventListener`）
  3. 「觸發後做什麼事？」（改文字 / 改 class / 顯示 alert）
- **黃金公式**：`「當 ____（事件），對 ____（元素），做 ____（動作）」`
  - 例：「當**按鈕被點擊**，對**整個頁面**，做**加上 dark-mode class**」

### 3. 結合她現有網站的實作建議

根據 Azunyan 的 portfolio 結構（`index.html`, `sns.html`, `about.html`, `todo.html`）：

| 頁面 | 可加的最小互動 | 難度 |
|---|---|---|
| `index.html` | 點擊 hero 區域跳出打招呼訊息 | ⭐ |
| `index.html` | 深色/淺色主題切換按鈕 | ⭐⭐ |
| `about.html` | 點擊技能標籤展開/收合詳細說明 | ⭐⭐ |
| `todo.html` | 輸入框 + 按鈕動態新增目標項目 | ⭐⭐⭐ |
| `sns.html` | 複製連結按鈕（點擊 → 「已複製！」） | ⭐⭐ |

### 4. AI 輔助教學的具體做法

> **教會她用 Prompt 的方式：**
> 「幫我寫一段 JavaScript，**當**使用者點擊 id 叫 `theme-btn` 的按鈕，**對** `body` **加上** `dark-mode` 這個 class。如果已經有就拿掉。」

然後帶她一起讀 AI 的輸出，用「選什麼 → 什麼時候 → 做什麼」三步驟逐行確認。

> ⚠️ Reddit 社群共識：AI 會「很有自信地」寫出不存在的方法名或有 bug 的 code。初學者至少要能看懂 code 在做什麼，才能判斷 AI 是不是在亂講。

---

## 資源列表

### 英文資源
1. **MDN: What is JavaScript?** — 最權威的入門解釋，含 HTML/CSS/JS 三層蛋糕比喻
   - https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript

2. **MDN: JavaScript basics** — 從零到第一個互動的完整教程
   - https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics

3. **freeCodeCamp: HTML Button onclick – JavaScript Click Event Tutorial** — onclick vs addEventListener 的清楚對比
   - https://www.freecodecamp.org/news/html-button-onclick-javascript-click-event-tutorial/

4. **CodeAnalogies: HTML/CSS/JS as Building a City** — 用蓋城市比喻三者關係
   - https://blog.codeanalogies.com/2018/05/09/the-relationship-between-html-css-and-javascript-explained/

5. **Skillcrush: What Is JavaScript? A Guide for Total Beginners** — 非技術背景友善的入門
   - https://skillcrush.com/blog/javascript/

6. **W3Schools: JavaScript Tutorial** — 互動式 Try-it-Yourself 範例
   - https://www.w3schools.com/js/

7. **Tadabase: HTML, CSS, & JavaScript Explained with Analogies** — 房子比喻的完整版
   - https://tadabase.io/blog/html-css-javascript-explained

### 比喻來源
8. **_nology Blog: The Anatomy of a Website** — 人體比喻（骨骼/皮膚/肌肉）
   - https://nology.io/news/html-css-and-javascript-the-anatomy-of-a-website/

9. **DEV Community: The Human Body and HTML, CSS & JS** — 人體比喻延伸
   - https://dev.to/ashwinbhatkal/the-human-body-and-html-css-js-36eh

### AI 輔助程式教學相關討論
10. **Reddit r/ChatGPTCoding: How would someone with no coding experience learn to use AI** — 零經驗者用 AI 學寫程式的社群建議
    - https://www.reddit.com/r/ChatGPTCoding/comments/1fynrmj/

11. **Reddit r/learnprogramming: How to actually work on a project (No AI code)** — AI code 要讀懂才能用
    - https://www.reddit.com/r/learnprogramming/comments/1lj12lm/

12. **Hacker News: Learn to code, ignore AI, then use AI to code even better** — 先理解再用 AI 的共識
    - https://news.ycombinator.com/item?id=43503295

---

*研究完成日期：2026-02-04*
*目標學生：Azunyan（梓）— 大二文科生，中日雙語，已會 HTML/CSS，有 kawaii portfolio*
*GitHub: https://github.com/azunyanchannel/azunyan.hp*
