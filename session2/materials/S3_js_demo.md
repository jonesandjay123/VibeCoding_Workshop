# S3：JavaScript 小魔法 — 讓你的網站「有反應」🪄

> **對象**：Azunyan（梓）— 已會 HTML/CSS，kawaii portfolio 四頁網站
> **目標**：不用從零寫 code，但要「看得懂每一行在幹嘛」
> **核心觀念**：JS 就是一句話 →「**當**＿＿（事件），**對**＿＿（元素），**做**＿＿（動作）」

---

## 🧠 開始之前：JavaScript 是什麼？

> 你已經會做漂亮的房間了（HTML + CSS）。
> JavaScript 就是讓房間裡的東西「有反應」——
> 按開關燈會亮、點按鈕會跳出訊息、滑到哪裡東西會動。
> 你的網站現在是一張漂亮的海報，加了 JS 就變成**一個會回應你的小世界**。

| 層 | 比喻 | 你已經會的？ |
|---|---|---|
| HTML | 房子的骨架（牆壁、房間） | ✅ |
| CSS | 裝潢（油漆、家具、燈光） | ✅ |
| **JavaScript** | **水電 + 電器**（按開關燈會亮） | 👈 今天學這個！ |

---

## Demo 1：打招呼 alert ⭐（最簡單的第一步）

> **黃金公式**：「**當**按鈕被點擊，**對**瀏覽器，**做**跳出一個小視窗」

### 📍 加在哪裡

**檔案**：`index.html`
**位置**：找到 `<p class="tagline">` 那行，在它的**下面**加

### 📋 完整程式碼

```html
<!-- ✨ Demo 1：點我打招呼 ✨ -->
<button onclick="alert('こんにちは！あずにゃんの世界へようこそ 🎀')"
  style="
    margin-top: 1.5rem;
    padding: 0.8rem 2rem;
    font-family: 'Zen Maru Gothic', sans-serif;
    font-size: 1rem;
    background: rgba(255, 154, 162, 0.2);
    border: 2px solid #ff9aa2;
    border-radius: 50px;
    color: #4a4a4a;
    cursor: pointer;
    transition: all 0.3s;
  "
  onmouseover="this.style.background='rgba(255, 154, 162, 0.4)'"
  onmouseout="this.style.background='rgba(255, 154, 162, 0.2)'"
>
  ✨ 點我打招呼
</button>
```

### 🔍 逐行解說

| 程式碼 | Jones 解說：「這行在幹嘛」 |
|---|---|
| `<button>` | 這就是一個按鈕，跟 HTML 學過的一樣 |
| `onclick="..."` | 「被點擊的時候，執行引號裡面的指令」 |
| `alert('...')` | 「跳出一個系統小視窗，顯示括號裡的文字」 |
| `onmouseover="..."` | 滑鼠移上去的時候，稍微變深（小互動感） |
| `style="..."` | 用 inline CSS 讓按鈕符合你的 kawaii 風格 |

> 💡 **Jones 說**：這是全世界最小的 JavaScript——只有 `alert()` 一個指令。你已經會 JS 了！恭喜！🎉

---

## Demo 2：console.log 偵探 🔍（看瀏覽器的秘密筆記本）

> **黃金公式**：「**當**網頁載入完成，**對** Console，**做**寫一段開發者筆記」

### 📍 加在哪裡

**檔案**：`index.html`
**位置**：在 `</body>` 結束標籤的**前面**加

### 📋 完整程式碼

```html
<!-- ✨ Demo 2：偵探的秘密筆記本 ✨ -->
<script>
  // 🔍 這些文字不會出現在網頁上！
  // 要按 F12（Mac 按 Cmd+Option+I）→ 點 Console 分頁才看得到

  // 第一行：確認網頁有載入成功
  console.log('🎀 あずにゃんのサイト、載入完成！');

  // 第二行：顯示現在的時間（像偵探記錄案發時間）
  console.log('🕐 現在時間：' + new Date().toLocaleTimeString());

  // 第三行：顯示這個網頁的網址
  console.log('📍 目前頁面：' + window.location.href);

  // 第四行：用不同顏色的 log！（進階小技巧）
  console.log('%c✨ Welcome to Azunyan World ✨', 'color: #ff9aa2; font-size: 20px; font-weight: bold;');
</script>
```

### 🔍 逐行解說

| 程式碼 | Jones 解說：「這行在幹嘛」 |
|---|---|
| `<script>` | 告訴瀏覽器：「接下來是 JavaScript 囉」 |
| `// 🔍 這些文字...` | 雙斜線開頭 = 註解，瀏覽器會跳過，是寫給人看的筆記 |
| `console.log('...')` | 在 DevTools 的 Console 印出一行文字（網頁上看不到！） |
| `new Date().toLocaleTimeString()` | 取得現在的時間，變成人看得懂的格式 |
| `window.location.href` | 取得目前這個頁面的完整網址 |
| `'字串A' + '字串B'` | 加號在這裡 = 把兩段文字「黏在一起」 |
| `%c` + 第二個參數 | 進階技巧：可以幫 console 的文字加 CSS 樣式！ |

> 💡 **Jones 說**：`console.log` 就像偵探的筆記本——不會讓客人看到，但你自己隨時可以翻開來確認「程式跑到這裡了嗎？」「這個值是什麼？」。這是 debug（除蟲）最重要的工具！

### 🎯 動手試試看

打開你的網頁 → 按 `Cmd + Option + I`（Mac）或 `F12`（Windows）→ 點上面的 **Console** 分頁 → 你應該會看到你剛剛寫的訊息！

---

## Demo 3：Dark Mode 切換 🌙（最實用的魔法）

> **黃金公式**：「**當**月亮按鈕被點擊，**對**整個頁面的 body，**做**加上/拿掉 dark-mode class」

### 📍 加在哪裡（分兩個部分）

#### Part A：CSS 深色樣式

**檔案**：`index.html`（之後每一頁都可以加一樣的）
**位置**：在 `</style>` 結束標籤的**前面**加

```css
/* ✨ Dark Mode 深色主題 ✨ */

/* 當 body 有 dark-mode class 時，改變背景和文字顏色 */
body.dark-mode {
  --bg-color: #1a1a2e;           /* 深色背景 */
  --glass-bg: rgba(30, 30, 50, 0.75);  /* 深色玻璃效果 */
  --nav-glass: rgba(30, 30, 50, 0.85); /* 深色導航欄 */
  --text-main: #e0e0e0;          /* 淺色文字（才看得到） */
  --text-light: #aaaaaa;         /* 次要文字也變淺 */
  --accent-soft: rgba(255, 228, 232, 0.15); /* 粉色調淡一點 */
  --card-shadow: 0 8px 24px rgba(0, 0, 0, 0.3); /* 影子更深 */
}

/* 深色模式下，名字的文字陰影也要改 */
body.dark-mode .name {
  color: #f0f0f0;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
}

/* 深色模式下，tagline 的背景 */
body.dark-mode .tagline {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

/* 深色模式下，背景圖片稍微亮一點才看得到 */
body.dark-mode::before {
  opacity: 0.08;
}

/* 切換按鈕的樣式 */
.theme-toggle {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid var(--accent-pop);
  background: var(--glass-bg);
  backdrop-filter: blur(8px);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 9999;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.theme-toggle:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(255, 154, 162, 0.3);
}
```

#### Part B：HTML 按鈕 + JavaScript

**檔案**：`index.html`
**位置**：在 `</body>` 結束標籤的**前面**加

```html
<!-- ✨ Demo 3：Dark Mode 切換按鈕 ✨ -->
<button class="theme-toggle" onclick="toggleTheme()">🌙</button>

<script>
  // === Dark Mode 切換功能 ===

  function toggleTheme() {
    // 1. 對 body 加上或拿掉 'dark-mode' 這個 class
    //    toggle = 「有就拿掉、沒有就加上」（像開關一樣！）
    document.body.classList.toggle('dark-mode');

    // 2. 抓到切換按鈕
    var btn = document.querySelector('.theme-toggle');

    // 3. 根據目前是深色還是淺色，換按鈕的 emoji
    if (document.body.classList.contains('dark-mode')) {
      btn.textContent = '☀️';   // 深色模式 → 顯示太陽（點了可以切回來）
    } else {
      btn.textContent = '🌙';   // 淺色模式 → 顯示月亮（點了可以切過去）
    }

    // 4. 在 console 留個紀錄（偵探筆記！）
    console.log('🎨 主題切換！目前是：' +
      (document.body.classList.contains('dark-mode') ? '深色模式 🌙' : '淺色模式 ☀️')
    );
  }
</script>
```

### 🔍 逐行解說

| 程式碼 | Jones 解說：「這行在幹嘛」 |
|---|---|
| `document.body` | 「整個網頁的 body」——就是你看到的一切的容器 |
| `.classList` | body 上面掛的所有 class 的清單 |
| `.toggle('dark-mode')` | 「有這個 class 就拿掉，沒有就加上去」——一行搞定切換！ |
| `document.querySelector('.theme-toggle')` | 「去頁面上找第一個 class 叫 theme-toggle 的元素」 |
| `.contains('dark-mode')` | 「現在 body 上面有沒有 dark-mode 這個 class？」回傳 true 或 false |
| `btn.textContent = '☀️'` | 把按鈕上面顯示的文字換成太陽 emoji |
| `? ... : ...` | 三元運算子：「如果是 true 就用前面的，false 就用後面的」——像是一行寫完的 if/else |

> 💡 **Jones 說**：重點來了——JS 其實只做了一件事：**加上/拿掉一個 CSS class**。真正控制「深色長什麼樣」的還是 CSS！JS 只是那個「按開關」的手指。這就是 HTML/CSS/JS 三兄弟分工合作的方式。

### 🔄 要讓每一頁都能用？

把 Part A 的 CSS 和 Part B 的按鈕 + `<script>` 複製到 `sns.html`、`about.html`、`todo.html` 的對應位置就好！（一模一樣的程式碼）

---

## Demo 4：Todo 動態新增 ✨（最有成就感的魔法）

> **黃金公式**：「**當**追加按鈕被點擊，**對**目標清單，**做**建立一個新的項目並塞進去」

### 📍 加在哪裡

**檔案**：`todo.html`

#### Part A：輸入框 HTML + CSS

**位置**：在 `<div class="todo-list">` 的**前面**加

```html
<!-- ✨ Demo 4：動態新增目標 ✨ -->
<div class="add-goal-area"
  style="
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(8px);
    padding: 1.5rem 2rem;
    border-radius: 24px;
    box-shadow: 0 8px 24px rgba(149, 157, 165, 0.1);
    margin-bottom: 1.5rem;
    display: flex;
    gap: 1rem;
    align-items: center;
  "
>
  <input
    type="text"
    id="new-goal"
    placeholder="新しい目標を入力... ✨"
    style="
      flex: 1;
      padding: 0.8rem 1.2rem;
      border: 2px solid rgba(255, 154, 162, 0.3);
      border-radius: 50px;
      font-family: 'Noto Sans JP', sans-serif;
      font-size: 1rem;
      color: #4a4a4a;
      background: rgba(255, 255, 255, 0.6);
      outline: none;
      transition: border-color 0.3s;
    "
    onfocus="this.style.borderColor='#ff9aa2'"
    onblur="this.style.borderColor='rgba(255, 154, 162, 0.3)'"
  >
  <button
    onclick="addGoal()"
    style="
      padding: 0.8rem 1.5rem;
      background: rgba(255, 154, 162, 0.2);
      border: 2px solid #ff9aa2;
      border-radius: 50px;
      font-family: 'Zen Maru Gothic', sans-serif;
      font-size: 1rem;
      color: #4a4a4a;
      cursor: pointer;
      transition: all 0.3s;
      white-space: nowrap;
    "
    onmouseover="this.style.background='rgba(255, 154, 162, 0.4)'"
    onmouseout="this.style.background='rgba(255, 154, 162, 0.2)'"
  >
    追加 ✨
  </button>
</div>
```

#### Part B：JavaScript

**位置**：在 `</body>` 結束標籤的**前面**加

```html
<script>
  // === 動態新增目標功能 ===

  function addGoal() {
    // 1. 去頁面上找到 id 叫 'new-goal' 的輸入框
    var input = document.getElementById('new-goal');

    // 2. 拿出裡面打的文字
    var text = input.value;

    // 3. 如果什麼都沒打（空的），就直接結束、不做事
    //    trim() = 「把前後的空格都去掉」（避免只打空格就送出）
    if (text.trim() === '') {
      return;  // return = 「函式到此結束，下面的都不跑」
    }

    // 4. 找到已有的 todo-list 容器
    var todoList = document.querySelector('.todo-list');

    // 5. 憑空建立一個新的 div（就像用 HTML 寫 <div> 但是用 JS 動態生成）
    var newItem = document.createElement('div');
    newItem.className = 'todo-item';  // 給它加上 todo-item 的 class（套用現有的 CSS）

    // 6. 把裡面的 HTML 內容填上去
    //    用反引號 ` ` 可以寫多行字串（叫做 template literal）
    newItem.innerHTML = `
      <div class="checkbox"></div>
      <div class="todo-text">${text}</div>
    `;
    // ${text} = 「把 text 變數的值塞到這裡」

    // 7. 把新建的項目，塞到 todo-list 的最後面
    todoList.appendChild(newItem);

    // 8. 清空輸入框（讓使用者可以繼續打下一個）
    input.value = '';

    // 9. 讓新項目有個小動畫效果（淡入）
    newItem.style.opacity = '0';
    newItem.style.transform = 'translateY(-10px)';
    newItem.style.transition = 'all 0.3s ease';

    // 用 setTimeout 延遲一點點再顯示（這樣動畫才看得到）
    setTimeout(function() {
      newItem.style.opacity = '1';
      newItem.style.transform = 'translateY(0)';
    }, 50);
    // 50 = 50 毫秒 = 0.05 秒後執行

    // 10. 偵探筆記：在 console 記錄一下
    console.log('✨ 新目標追加：' + text);
  }

  // === 按 Enter 也能送出（不用每次都點按鈕）===
  document.getElementById('new-goal').addEventListener('keypress', function(event) {
    // event.key = 使用者按了什麼鍵
    if (event.key === 'Enter') {
      addGoal();  // 如果按的是 Enter，就執行 addGoal()
    }
  });
</script>
```

### 🔍 逐行解說

| 程式碼 | Jones 解說：「這行在幹嘛」 |
|---|---|
| `document.getElementById('new-goal')` | 「去頁面上找 id 叫 new-goal 的元素」——就是那個輸入框 |
| `.value` | 「取得輸入框裡面目前的文字」 |
| `text.trim()` | 「把文字前後的空白都清掉」——避免使用者只打空格 |
| `if (...) { return; }` | 「如果是空的，這個函式就結束，下面都不跑」 |
| `document.createElement('div')` | 「**憑空**建立一個 `<div>` 元素」——頁面上還看不到！ |
| `.className = 'todo-item'` | 「給新元素加上 class」——這樣它就會自動套用你原本寫好的 CSS |
| `.innerHTML = \`...\`` | 「把 HTML 內容塞進這個 div 裡面」 |
| `${text}` | 「在模板字串裡面，把變數的值塞進來」——像填空題！ |
| `.appendChild(newItem)` | 「把新建的東西，塞到 todo-list 的最後面」——它終於出現在頁面上了！ |
| `input.value = ''` | 「把輸入框清空」——打完送出後自動清除 |
| `setTimeout(function() {...}, 50)` | 「等 50 毫秒之後，再執行裡面的動作」——用來製造動畫效果 |
| `addEventListener('keypress', ...)` | 「監聽鍵盤事件」——偵測使用者按了什麼鍵 |
| `event.key === 'Enter'` | 「按的是 Enter 鍵嗎？」 |

> 💡 **Jones 說**：這個 demo 展示了 JS 最帥的能力——**動態建立元素**。HTML 是你事先寫好的內容，但 JS 可以在使用者操作的時候，**即時生成新的 HTML**塞到頁面上。這就是「互動式網頁」跟「靜態海報」的根本差別！

### ⚠️ 注意事項

這個 demo 的目標是**純重新整理就會消失**（因為沒有存到資料庫）。這是正常的！如果以後要讓資料「存住」，那就需要後端或 localStorage——但今天我們先專注在「看得到東西動」就好。

---

## 📝 四個 Demo 總整理

| Demo | 難度 | 加在哪 | JS 核心概念 | 學到什麼 |
|---|---|---|---|---|
| 1. 打招呼 alert | ⭐ | `index.html` tagline 下面 | `onclick` + `alert()` | 「按了有反應」的最小單位 |
| 2. console.log 偵探 | ⭐ | `index.html` `</body>` 前 | `console.log()` | 開發者的秘密筆記本、認識 DevTools |
| 3. Dark Mode 切換 | ⭐⭐ | 每頁都可加 | `classList.toggle()` | JS 只是開關，CSS 負責外觀 |
| 4. Todo 動態新增 | ⭐⭐⭐ | `todo.html` | `createElement` + `appendChild` | JS 可以「即時生成 HTML」 |

### 🎯 建議操作順序

```
Step 1 → 先加 Demo 1（alert），體驗「按了有反應」的感覺
Step 2 → 加 Demo 2（console.log），學會打開 DevTools
Step 3 → 加 Demo 3（Dark Mode），理解「JS 只是在操控 CSS class」
Step 4 → 加 Demo 4（Todo），感受「動態生成元素」的威力
```

### 🧠 每個 Demo 都在問同一個問題

> **當** ＿＿（什麼事件），**對** ＿＿（哪個元素），**做** ＿＿（什麼動作）

| Demo | 當... | 對... | 做... |
|---|---|---|---|
| 1 | 按鈕被點擊 | 瀏覽器 | 跳出 alert |
| 2 | 網頁載入 | Console | 印出訊息 |
| 3 | 月亮按鈕被點擊 | body 的 classList | toggle dark-mode |
| 4 | 追加按鈕被點擊 | todo-list | 建立新 item 並塞進去 |

---

*S3 教材 — 2026-02-04*
*配合 Azunyan kawaii portfolio（index.html, sns.html, about.html, todo.html）*
*研究基礎：M2_javascript_concept.md*
