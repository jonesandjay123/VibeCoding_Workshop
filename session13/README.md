# Session 13：Pandas 到底是什麼？—— 表格思維 × Codex

> **日期：** 2026-10-09（週五；實際上課時間與時區以雙方約定為準）
> **時長：** 120 分鐘，含 5 分鐘休息、5 分鐘機動緩衝
> **場景：** Zoom 遠端；延續 Session 12 的數據可視化練習
> **定位：** 回應妹妹「又可以用 Codex」「拿它做數據可視化作業太牛了」「Jupyter 和 Pandas 沒有弄明白」的反饋。先看她已經會什麼，再補理解與驗證。

## 一句話版本

開場 15 分鐘：她展示作業，導師提問診斷 → 親手理解 notebook / cell / kernel → 用一張小表練「讀、看、選、篩、分組、畫」→ 自己改題、驗算、輸出圖 → 重啟後完整重跑。

保留用 AI 做出作品的成就感，但今天的成功標準是：**她能解釋資料如何變成答案，並在條件改變時自己調整、驗證。** 不要求背 API，也不把「全部交給 AI」當成理解。

## 三個可觀察的學習目標

1. **理解執行狀態：** 預測重跑 cell 的結果；說明刪除 cell、只重啟 kernel、重啟並全跑的差異。
2. **理解表格操作：** 說出一行代表什麼、金額單位是什麼；分清選欄、篩行、分組加總與畫圖。用手算確認門店 A 的五年利潤合計為 130。
3. **獨立遷移：** 不直接看答案，完成 2025 年各門店比較；進度允許時做五年趨勢。交出能從乾淨 kernel 重跑的 notebook、PNG 和一句有數字依據的解讀。

## 120 分鐘安排

| 經過時間 | 內容 | 現場驗收 |
| :--- | :--- | :--- |
| 00–15 | 學生作品展示＋導師診斷：展示作業；最後 3 分鐘確認環境 | 指出原始資料、處理代碼、圖；解釋一個數字如何得到 |
| 15–35 | Jupyter 三概念與狀態實驗 | 先猜再跑；解釋為何刪 cell 不會清掉變數 |
| 35–55 | Pandas：讀、看、選、篩 | 20×5；一行是一店一年；`profit > 20` 留 9 行 |
| 55–60 | 休息 | 離開螢幕，保留當前進度 |
| 60–80 | 分組、驗算、畫比較圖 | A=130；表合計與原表合計同為 456 |
| 80–100 | 學生獨立改題 | 必做：2025 比較圖；進階：2021–2025 趨勢圖 |
| 100–105 | 機動緩衝 | 吸收載入、連線、字型等延誤；沒延誤就用來核對圖表 |
| 105–115 | 重啟、全跑、查看輸出檔 | 先保存；從頭無錯誤；實際打開 PNG 看標籤與數字 |
| 115–120 | Exit ticket：她教回來 | 三題口述＋一句數據解讀；記下仍不懂的一點 |

**守時原則：** 環境障礙最多佔用 5 分鐘機動額度；仍不通就切備援。延誤超過額度時先砍趨勢進階題、再砍圖表美化，保留休息、手算和最後驗收。不要把更多內容塞進兩小時。

## 課前準備：先驗證，不假定上次已裝好

- [ ] 下載整個 `session13/`，保留 `data/` 子目錄；不要只下載 notebook。
- [ ] 打開 [`student-workbook.ipynb`](./student-workbook.ipynb)，選 Python kernel，跑第一個環境／路徑 cell。
- [ ] 確認 `pandas`、`matplotlib` 能 import、CSV 能讀、圖能輸出。已能跑就不升級套件。
- [ ] Codex 是首選，因為她說現在可用；確認當天的登入、額度及執行能力。不同介面未必能替她執行 notebook。
- [ ] 導師預先跑過 workbook，準備本地 CSV 和 [`instructor-answers.md`](./instructor-answers.md)。不把現場安裝或雲端帳號當作唯一退路。
- [ ] 可展示先前作業，但先遮住姓名、學號、同學資料與憑證；沒有可分享作業就展示練習表，不壓縮後續時間。

若需要全新本地環境，在**課前**使用自己已確認的 Python 環境安裝 `pandas matplotlib notebook`，從 `session13/` 執行 `python -m notebook`。不要在課中反覆重裝。Notebook、JupyterLab、VS Code 的按鈕名稱可能不同，以「重啟 kernel」「全部執行」的功能為準。

## 本堂心智模型

- **Notebook**：存代碼、說明及已保存輸出的 `.ipynb` 文件；保存文件不會保存活著的 Python 記憶體。
- **Cell**：一段代碼或文字。代碼會送到 kernel 執行；改文字不代表新代碼已跑過。
- **Kernel**：執行 Python 並保存當前變數的程序；實際執行順序可能與畫面順序不同。
- **DataFrame**：像 Excel 工作表的二維表，有列名、資料型別及 index；不是 Excel 本身。Index 是標籤，不一定連號或唯一。
- **先看表再看圖**：篩行決定留下哪些記錄；分組決定每組如何算；畫圖只呈現提供的數字，不會替你決定正確統計口徑。

學生負責提問題、先預測、閱讀關鍵代碼、親手改一個條件、驗證結果；Codex 協助解釋或產生小段代碼；導師以提問協助而不搶鍵盤。不要宣稱某工具「Python 最強」或保證一次就對。

## 資料與題目邊界

[`sample-sales.csv`](./data/sample-sales.csv) 是 **20 行合成教學資料**，4 家店 × 2021–2025 五年。`sales`、`profit` 統一以「萬元（人民幣）」作為本練習的設定單位。完整欄位定義見 [`data/README.md`](./data/README.md)。

- 一行已是一家門店一年的合計，不是訂單，也不是所有品類的明細。
- `category` 是該店該年標記的主力品類。按它分組不能解讀成「各品類實際銷售／利潤貢獻」，今天不做品類佔比。
- `groupby('store')['profit'].sum()` 回答「各店五年總和」，會把年份合併掉；不能拿這個結果冒充逐年趨勢。
- 2025 比較先篩年份；五年趨勢保留 `year` 與 `store`，按年份排序。這份表每個店年只有一行，`pivot` 可直接轉成折線圖需要的寬表。

## 備援與不做的事

Codex 不通 → 用**已確認能用**的 Session 12 Trae／通義靈碼；都不通 → 本地 workbook 與教師答案照樣能學。學生 Jupyter 不通 → 導師分享已測好的本地環境，她口述、預測、手算；只算概念驗收，不能聲稱她已獨立重現，課後再補跑。

今天不加 Seaborn、Streamlit 或新資料集，不研究帳號連線，不交付未理解的學校作業。遵守學校對 AI 的規定；個資、成績、私人聊天與金鑰不貼給 AI、不 commit。分享輸出前也要檢查 notebook 的舊輸出及 traceback。

## 課堂文件與官方參考

- [`live-runbook.md`](./live-runbook.md)：逐段提問、正確的 kernel 實驗、時間分流
- [`student-workbook.ipynb`](./student-workbook.ipynb)：可逐格跑的六動作與學生挑戰
- [`instructor-answers.md`](./instructor-answers.md)：驗算答案、挑戰參考解及驗收規準
- [`pandas-mental-model.md`](./pandas-mental-model.md)：學生小抄
- [`codex-data-prompts.md`](./codex-data-prompts.md)：先提示、再解釋的小步提問模板
- [Jupyter：Notebook、cell 與 kernel](https://jupyter-notebook.readthedocs.io/en/stable/notebook.html)
- [pandas：分組統計](https://pandas.pydata.org/docs/getting_started/intro_tutorials/06_calculate_statistics.html)
- [Matplotlib：保存圖與 show 的注意事項](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.show.html)

延續 Session 12 的「比較／趨勢」選圖觀念；下次先看本次 exit ticket，再決定是否進階。
