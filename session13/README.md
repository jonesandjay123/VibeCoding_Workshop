# Session 13：Pandas 到底是什麼？—— 表格思維 × Codex，把 Jupyter 變成你的數據實驗室

> **日期：** 2026-10-09（週五 20:30–22:30）
> **場景：** 約 2 小時、Zoom 視訊遠端連線（導師在美國，學生在中國廈門）
> **對象：** 櫻井妹妹（Azunyan）
> **定位：** 回應她 10/8 凌晨在微信裡的三句話。這堂課只解決一個問題：**Jupyter 和 Pandas 到底是什麼**——不是背 API，而是建立心智模型。工具升級為她剛找回來的 Codex。

---

## 一句話版本

```text
她當 15 分鐘小老師：展示用 Codex 做的可視化作業（診斷她的真實理解程度）
→ Jupyter 心智模型：notebook / cell / kernel 三個概念＋三大坑
→ Pandas 心智模型：表格思維，只學 6 個動作
→ 實戰：拿 sample-sales.csv 從零做一張「溝通級」圖表，她指揮、Codex 執行
→ 收心法：一句話總結＋下堂預告
```

今天最大的躍進是：**她第一次能用自己的話講出「DataFrame 是什麼」**，而不是背出 `pd.read_csv()` 怎麼拼。

---

## 為什麼是這個題目

她在微信裡說了三句話，每一句都直接決定了今天的設計：

### 1. 「我又可以用 codex 了」→ 本堂主工具升級為 Codex

Session 12 用的是 Trae / 通義靈碼（因為當時 Antigravity 的 Agent 連不上）。現在她親自證實 Codex 可用了——那就直接升級：**Codex 是 autonomous coding agent，Python 是它最強的語言**，數據清洗＋EDA 正是它的甜蜜點。

但留一條退路：如果上課時 Codex 連不上，立刻回退到 Session 12 的 Trae / 通義靈碼工作流，不除錯、不糾結（見 live-runbook 應急方案）。

### 2. 「我把它用來做數據可視化的作業太牛了」→ 開場她當小老師

這是她第一次用 AI 工具獨立搞定作業，而且是她自己覺得「太牛了」的正向體驗。開場 15 分鐘讓她展示：

- 她怎麼跟 Codex 描述需求的？（診斷她的「需求表達」能力）
- Codex 給了什麼？她怎麼判斷對不對？（診斷她的「驗算」習慣）
- 哪裡卡住了？（這就是今天要補的洞）

**導師不要急著教，先看她會什麼。** 她展示的過程，就是這堂課的起點診斷。

### 3. 「課堂上是用 jupyter notebook 和 Pandas，但是我沒有弄明白」→ 今天只解決這一個問題

這是整堂課的核心。她「沒有弄明白」的不是 API——是**心智模型缺失**：

- Jupyter：她可能以為它就是個「能跑 Python 的編輯器」，不知道 cell / kernel / 執行順序是怎麼回事。
- Pandas：她可能以為要背幾十個函數，不知道 DataFrame 本質上就是**一張 Excel 表**，所有操作都是「篩、選、算、排」。

學校的教法是參數表導向，對非資工背景的學生最不友好。今天的打法：

- **Jupyter 只講三個概念**（notebook / cell / kernel）＋**三大坑**（亂序執行、變數殘留、kernel 重啟）。
- **Pandas 只學六個動作**（讀、看、選、篩、分組、畫），每個動作都對應一句中文。
- API 怎麼拼，全部交給 Codex。她的工作是：**講清楚＋驗算**。

### 導師的誠實定位

跟 Session 12 一樣：導師不是 Data Scientist，不教統計理論。這堂課導師的專長是**把抽象概念翻譯成她能抓住的比喻**（表格思維、實驗室筆記本），以及示範「怎麼跟 Codex 把需求講到一次做對」。

---

## 本堂核心心智模型

### Jupyter：實驗室筆記本，不是編輯器

```text
Notebook（整本實驗記錄本）
 └─ Cell（一個一個小格子，寫一段代碼或文字）
      └─ Kernel（在背後真正跑 Python 的大腦）
```

關鍵洞察：**Cell 只是送指令的窗口，Kernel 才是執行者。** 你以為刪掉一個 cell 就沒事了？它的變數還活在 Kernel 裡。這就是三大坑的根源。

### Pandas：表格思維（スプレッドシート思考）

```text
DataFrame ＝ 一張 Excel 表
  ├─ 每一行（row）＝ 一筆記錄
  ├─ 每一列（column）＝ 一個欄位 ＝ 一個 Series
  └─ index ＝ 每一行的行號貼紙

所有 Pandas 操作，都是在對這張表做四件事：
  篩（filter）→ 選（select）→ 算（aggregate）→ 排（sort）
```

關鍵洞察：**你不需要背 50 個函數，你只需要會講「我想對這張表做什麼」。** 剩下的交給 Codex。

### 三種角色的分工（延續 Session 12）

| 角色 | 負責 | 不負責 |
| :--- | :--- | :--- |
| **學生** | 講清楚需求、驗算結果、判斷圖表是否合理 | 背 API 參數、手寫 pandas 代碼 |
| **Codex** | 寫代碼、查文檔、修 bug | 保證結果正確（它會算錯、會選錯圖） |
| **導師** | 翻譯概念、示範提問與驗算、守住時間 | 講統計理論、代寫作業 |

---

## 課前準備（請學生提前備好）

- [ ] Codex 能打開（10/8 她已確認可用；若上課時連不上，改用 Session 12 的 Trae / 通義靈碼）
- [ ] Jupyter 能跑（Session 12 已裝好；`pip` 清華源、`pandas` `matplotlib` 就緒）
- [ ] 下載本目錄 `data/sample-sales.csv`，放在好找的資料夾（20 行練習數據：4 家門店 × 5 年 × 品類/銷售額/利潤）
- [ ] （選配）把她用 Codex 做的那份可視化作業找出来，開場要展示
- [ ] 筆電電量充足，Zoom 可分享螢幕

---

## 學習目標

完成本堂課後，Azunyan 應能：

1. **用自己的話講出 Jupyter 是什麼：** notebook / cell / kernel 三個概念，以及為什麼 cell 可以亂序執行。
2. **躲開 Jupyter 三大坑：** 亂序執行、變數殘留、kernel 重啟——知道出問題時第一個動作是 Kernel → Restart & Run All。
3. **建立 Pandas 表格思維：** 看到 DataFrame 就想到 Excel 表；看到需求就想到「篩、選、算、排」四個動作。
4. **用中文指揮 Codex 做數據分析：** 把「各門店每年的利潤總和」這類需求講到 Codex 能一次生成可跑的代碼。
5. **驗算 Codex 的輸出：** 會用 `head()` / `shape` / `describe()` / 抽查手算判斷數字對不對。
6. **獨立完成一張溝通級圖表：** 從讀 CSV 到導出 png，全程自己指揮。

---

## 今天的三大里程碑（Milestones）

### 🟢 Milestone 1：她當小老師＋Jupyter 心智模型（0–45 分鐘，必達）

- 她展示用 Codex 做的可視化作業（15 分鐘）：怎麼描述需求的？哪裡卡住？
- Jupyter 三個概念＋三大坑（30 分鐘）：她親手跑 5 個 cell，親手踩一次「亂序執行」的坑，再親手用 Restart & Run All 修掉。
- **驗收：** 她能用自己的話講出「為什麼刪掉 cell 不等於刪掉變數」。

### 🟢 Milestone 2：Pandas 表格思維，六個動作（45–95 分鐘，核心）

全部使用 `data/sample-sales.csv`（20 行，4 家門店 × 5 年）：

| # | 中文意圖 | Pandas 動作 | 驗算點 |
| :--- | :--- | :--- | :--- |
| 1 | 讀進來 | `read_csv` | `shape` 是不是 (20, 5)？ |
| 2 | 看一眼 | `head()` / `info()` / `describe()` | 欄位名對不對？有沒有缺失？ |
| 3 | 選一欄 | `df['profit']` | 拿出來的是不是一欄（Series）？ |
| 4 | 篩幾行 | `df[df['profit'] > 20]` | 數一下有幾行，肉眼驗算 |
| 5 | 分組算 | `groupby('store')['profit'].sum()` | 手算一家門店的 5 年加總對答案 |
| 6 | 畫出來 | `plot(kind='bar')` | 圖跟 Session 12 的選圖模型對得上嗎？ |

每一題的固定節奏：**她先用中文說需求 → Codex 生成 → 跑起來 → 人工驗算 → 迭代**。
第 5 題是全場最重要的一題：**手算驗算 groupby**——這是她真正「弄明白」Pandas 的時刻。

- **驗收：** 她能不看小抄，說出「篩、選、算、排」並各舉一個例子。

### 🟣 Milestone 3：實戰＋收心法（95–120 分鐘）

- 實戰（95–110 分鐘）：從零做一張「溝通級」圖表——各門店 2021–2025 利潤趨勢折線圖，中文標題、圖例、導出 png。她全程指揮，導師只在她卡住超過 3 分鐘時介入。
- 收心法（110–120 分鐘）：一句話心法＋下堂預告。

---

## 今天的關鍵決策與技術邊界

### 1. 為什麼主工具換成 Codex？

她親自驗證可用，而且 Codex 的 autonomous agent 特性（給任務、自己跑完）比 Session 12 的 IDE 內 Agent 更適合「她講中文需求 → 拿到完整可跑代碼」的流程。但**不把雞蛋放一個籃子**：中國網路環境多變，課前確認一次，上課時連不上就秒切回 Trae / 通義靈碼。

### 2. 為什麼不教更多 Pandas API？

因為她的問題不是「API 不夠多」，是「不知道 Pandas 在幹嘛」。六個動作夠她應付 80% 的課堂作業；剩下的 20%，她現在會指揮 Codex 了——**教她「怎麼問」，比教她「怎麼背」重要十倍。**

### 3. 為什麼第 5 題要手算驗算？

`groupby` 是 Pandas 裡最抽象的操作，也是最容易「跑出來了但不知道對不對」的地方。親手加一次 18+22+25+30+35=130，再跟 Codex 跑出來的數字對上——這個「對上了」的瞬間，就是理解發生的瞬間。

### 4. 跟 Session 12 的關係

Session 12 解決的是「工具鏈＋選圖模型」；Session 13 解決的是「Jupyter＋Pandas 心智模型」。兩堂合起來，她才算真正擁有「獨立用 Vibe 方式做數據作業」的能力。下堂（Session 14）預告方向：Seaborn 進階圖表，或用 Streamlit 把分析做成可交互的小網頁。

---

## 參考資料

- Pandas 官方入門：[10 minutes to pandas](https://pandas.pydata.org/docs/user_guide/10min.html)（給 Codex 查，不用她讀完）
- Jupyter 官方：[Jupyter Notebook quickstart](https://jupyter-notebook.readthedocs.io/en/stable/)（知道 cell / kernel 概念即可）
- Codex：[openai/codex GitHub repo](https://github.com/openai/codex)（CLI 的 autonomous agent 特性說明）
- 本課學生小抄：[`pandas-mental-model.md`](./pandas-mental-model.md)（Jupyter 三大坑＋Pandas 六動作，課後複習用）
- Codex 提問模板：[`codex-data-prompts.md`](./codex-data-prompts.md)（數據分析專用，照著填就能問）
