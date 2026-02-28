請根據這個 repo 的現有代碼進行改造。目前的狀態：

## 現有代碼分析
- index.html：叫 "Lumina - English Writing Assistant"，有一個 textarea 輸入框、字數統計、模擬語法分析、每日名言、寫作歷史列表
- script.js：用 localStorage 存歷史紀錄（JSON 格式，key = lumina_essay_history）、有 mock 的語法分析（只檢查大小寫和幾個硬編碼規則）、隨機名言
- style.css：毛玻璃風格（glass-card），Google Fonts（Inter + Playfair Display），雙欄佈局（左編輯器 + 右歷史）
- 純靜態前端，無框架

## 改造方向
目標用戶是中國中學生（遼寧省，準備中考），主要學習英語詞彙和句型。需要用上 LLM 能力。

## 請做以下改動

### 1. 中文化 + 重新命名
- 把 "Lumina" 改成適合中學生的中文名字（例如「芬芬英語小助手」或類似的）
- 所有按鈕、提示文字改成中文
- 保留毛玻璃 UI 風格，配色改為更溫暖可愛的色調（粉色/淺紫系）

### 2. 改造現有的 textarea → 句型翻譯練習
- 把現有的「寫作文」改成「句型翻譯練習」
- 顯示一個中文句子，讓用戶翻譯成英文
- 提交後調用 LLM API 批改（語法對錯、更好的表達、1-5 星評分）
- 練習題從 `data/sentence-patterns.json` 讀取
- 創建 `data/sentence-patterns.json`，放 30 個中考常考句型（中文+參考答案+考點標籤如「現在完成時」「被動語態」「比較級」等）

### 3. 把現有的 quotes 區塊 → 單詞卡片
- 取代每日名言，改成「今日單詞」翻轉卡片
- 正面：英文單詞 + 音標
- 背面：中文意思 + 例句
- 可左右滑動/點按鈕切換下一個詞
- 用戶可標記「已會」或「再看看」，存 localStorage
- 創建 `data/vocabulary.json`，放 100 個中考高頻詞彙（英文、音標、中文、例句）

### 4. 改造現有的 History → 學習紀錄
- 保留 localStorage 歷史功能
- 每條紀錄改為顯示：日期、學了幾個單詞、做了幾題句型、AI 給的平均評分
- 頂部加一個「連續打卡 X 天」的統計

### 5. LLM API 設定
- 在頁面底部或一個設定彈窗中，讓用戶輸入 API Key 和 API endpoint
- 預設 endpoint：`https://api.openai.com/v1/chat/completions`
- 存入 localStorage，不硬編碼
- 沒有設定 API Key 時，句型批改顯示「請先在設定中輸入 API Key 才能使用 AI 批改功能」
- 調用時用 gpt-4o-mini 模型，system prompt 設為「你是一位友善的英語老師，專門幫助中國中學生準備中考英語」

### 6. 保持純前端
- 不要引入任何框架或打包工具
- 繼續用 HTML + CSS + JS 三個檔案
- 可以拆分多個 JS 檔案（如 vocabulary.js、practice.js）但不要用模組打包
- 手機 responsive 必須做好（主要用戶用手機學習）
