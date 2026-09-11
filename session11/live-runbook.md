# Session 11 Live Runbook：SocialPulse 雲端發布與邊緣 AI

> **目標：** 帶領櫻井妹妹擺脫本地終端機環境的束縛，透過 Cloudflare Pages 實現「從 GitHub 到公網」的自動部署，在手機端成功開啟 App；並在時間充裕時，透過 Workers AI 體驗網站自帶智慧的躍遷。

---

## 推薦節奏：120 分鐘精準配時

| 時間 | 段落 | 學生要完成的事 | 導師要守住的事 |
| :--- | :--- | :--- | :--- |
| **00–15 min** | **開場定錨與概念鋪陳** | 理解「在筆電跑」與「在 Internet 跑」的差別 | 強調今天不碰本機終端機、不登入 Wrangler |
| **15–30 min** | **Cloudflare 帳號建立** | 學生在自己瀏覽器註冊 Cloudflare（必要時開 VPN） | 堅持由學生自己註冊與掌握帳號，導師不代勞 |
| **30–45 min** | **GitHub ↔ Pages 連線** | 在 Dashboard 選擇 SocialPulse，確認構建設定 | 確認 Build Command 是 `npm run build`、輸出是 `dist` |
| **45–60 min** | **🟢 第一部署與手機驗收** | 手機開啟 `pages.dev` 網址，實測 VPN 關/開差異 | **本堂核心里程碑！** 記錄廈門真實網路表現 |
| **60–75 min** | **架構擴充：伺服器與 AI** | 理解為什麼 Pages 可以有後端（Pages Functions） | 講解 Progressive Enhancement（保留原手動 JSON） |
| **75–105 min** | **🟣 Agent 編程與自動發布** | 觀摩導師推代碼，見證 Cloudflare 自動重新構建 | 實作 `/functions/api/structure-memory.ts` 與 UI |
| **105–115 min** | **Workers AI 綁定與實測** | 在 Dashboard 綁定 `AI`，手機端測試自然語言整理 | 輸入一段口述，驗收預覽、修正與本機保存 |
| **115–120 min** | **總結、概念提煉與下堂伏筆** | 回顧 Git/CI-CD/邊緣架構，理解 localStorage 侷限 | 指出手機與電腦資料獨立的原因，預告資料庫同步 |

---

## 開場講法（導師參考話術）

```text
「妹妹，上一堂課我們一起在妳的電腦上把 SocialPulse 跑起來了，妳也成功讓 AI 幫忙整理出格式貼進去。
但目前它還有一個最大的缺點：它只活在筆記型電腦裡。如果妳今天在廈大校園認識一個新朋友，妳總不能當場把電腦翻開來記吧？

今天這兩小時，我們要跨出非常關鍵的一大步：把這個專案正式發布到網際網路上！
妳今天不需要在自己的終端機裡安裝一堆複雜的工具或設定環境。
妳只要做兩件事：
1. 擁有妳自己的 Cloudflare 帳號。
2. 讓 Cloudflare 跟妳的 GitHub 連線。

以後只要代碼一更新，雲端伺服器就會自動幫妳打包更新。
做完之後，妳就可以直接拿起手機，打開妳自己部署的 SocialPulse！」
```

---

## 階段步驟與實作指引

### Phase 1：開場與心智模型（00–15 min）

#### 核心比喻：從「廚房試吃」到「開張外帶店」
- **本機開發（localhost:5173）：** 就像在自己家廚房做菜，只有站在廚房裡的人吃得到。
- **Git Repo（GitHub）：** 妳的私房食譜本。
- **Cloudflare Pages：** 妳請的專業中央廚房，只要妳食譜本有更新，它自動照著食譜做菜，並分發到全球每一家門市。
- **手機存取：** 妳走在路上，直接走進離妳最近的門市享受成果。

---

### Phase 2：建立 Cloudflare 帳號（15–30 min）

- [ ] 請學生在自己電腦的瀏覽器打開 [dash.cloudflare.com](https://dash.cloudflare.com/)。
- [ ] 若在廈門直連載入緩慢或驗證碼卡住，**立刻指導開啟 VPN**（保持課堂流暢）。
- [ ] 學生使用個人 Email 註冊並完成信箱驗證。
- [ ] **導師提醒：** 絕對不要由導師代辦或把學生帳號註冊在導師名下，軟體資產歸屬感是 Vibe Coding 的核心價值。

---

### Phase 3：連動 GitHub 倉庫（30–45 min）

在 Cloudflare 管理後台帶領學生點選：

1. 左側選單進入 **Workers & Pages**
2. 點擊 **Create application**
3. 切換至 **Pages** 標籤頁
4. 選擇 **Connect to Git**
5. 授權學生的 GitHub 帳號，並勾選 **SocialPulse** 專案倉庫
6. 設定構建參數（Framework preset 選 Vite 或手動填寫）：
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/`（留空或預設）
7. 點擊 **Save and Deploy**。

---

### Phase 4：首次上線與手機端檢驗（45–60 min）【核心驗收】

#### 構建監控
- 帶學生看 Cloudflare 的即時 build logs：
  `Cloning repository...` → `Installing dependencies...` → `vite build...` → `Deploying to Cloudflare's global network...`
- 當看到綠色打勾：**Success! Your project is deployed.**

#### 手機端驗收與網路環境分流測試
請學生拿出手機，掃描或輸入網址：`https://<project-name>.pages.dev`。

- [ ] **測試 1（關閉手機 VPN）：**
  - 在廈門日常蜂窩網路或校園 Wi-Fi 下直連。
  - 是否能順利打開？首頁載入花費幾秒？
- [ ] **測試 2（若連線失敗或超時，開啟手機 VPN）：**
  - 再次整理，確認功能是否全部正常（添加、搜尋、localStorage 存取）。

#### 現場分流判定：
- **狀態良好（直連流暢或可接受）：** 綠燈！繼續推進 Milestone 2。
- **必須依賴 VPN 才能開：** 告知學生現狀，確認學生可接受「自己日常使用時需開 VPN」，將 Azure Global 列為課後備援，繼續推進 Milestone 2。
- **完全無法存取且卡死超過 15 分鐘：** 啟動 Plan B（備援方案，見後文）。

---

### Phase 5 & 6：擴充 Workers AI 結構化整理（60–105 min）【選配加分】

> ⚠️ **時間保護原則：** 若抵達此階段時已超過 75 分鐘，停止代碼擴充，將剩餘時間用於玩轉手機端 App 與回顧！

#### 1. 概念解說（5 分鐘）
- 過去：自然語言 ➔ 複製到 ChatGPT ➔ 要求 JSON ➔ 複製 ➔ 貼回 SocialPulse。
- 現在：直接在 SocialPulse 裡打字，由 Cloudflare 邊緣伺服器自動請 AI 整理成標準格式！
- 堅持 **Progressive Enhancement（漸進增強）**：手動貼 JSON 的功能不刪除，當作網路不佳或免費額度用盡時的保底退路。

#### 2. 代碼實作（由導師本機 Agent 編程，學生觀摩）
- 專案根目錄建立 `/functions/api/structure-memory.ts`（參考 [`cf-ai-architecture.md`](./cf-ai-architecture.md)）。
- 修改 `src/components/ImportMemoryModal.tsx`，加入「✨ 快速自然語言整理」輸入區塊。
- 本機驗證 `npm run build` 通過。
- 執行 `git commit -m "feat: add edge ai structuring via workers ai"` 並 `git push origin main`。
- 帶學生切回 Cloudflare Dashboard，看見它因為新的 commit **自動觸發重新部署！**

---

### Phase 7：Dashboard AI 綁定與完整鏈條驗收（105–115 min）

1. 在 Cloudflare Dashboard 進入 SocialPulse Pages 專案。
2. 點擊 **Settings** ➔ **Bindings** ➔ **Add** ➔ 選擇 **Workers AI**。
3. Variable name 填寫：`AI`。
4. 點擊 Save，觸發最新一版部署生效。
5. **端到端實測：**
   - 在手機或電腦打開 SocialPulse。
   - 點擊「紀錄新互動」➔「自然語言整理」。
   - 輸入測試範例：
     > 「今天在廈大咖啡廳遇到李學長，他在做物聯網新創，下週要出差深圳。他喜歡喝無糖美式，跟我約九月底再聊聊。」
   - 點擊「✨ 生成結構化資料」，確認自動帶入人物（李學長）、標籤、互動細節與待辦。
   - 人工檢查無誤後，按下確認保存！

---

### Phase 8：收尾提煉與下堂鋪陳（115–120 min）

用 5 分鐘幫助學生建立通盤視野：
1. **今天最大的突破是什麼？** （從只有自己電腦看得到的代碼，變成全網隨時可用、還帶有邊緣 AI 能力的線上產品）。
2. **跨裝置的重要提醒（Storage Caveat）：**
   - 讓學生看電腦上的資料清單，再看手機上的清單。
   - **提問：**「為什麼手機上看不到剛才在電腦建的人？」
   - **觀念建立：**「因為目前資料只存在這台機器的瀏覽器（localStorage）。Cloudflare Pages 幫我們搬上雲端的是『應用程式本體』，而不是『資料庫』。下一堂課，如果妳希望手機和電腦資料即時同步，我們就可以教它接上真正的雲端資料庫（如 Cloudflare D1）！」

---

## 應變備援策略（Fallback Routes）

```text
[開始部署]
   ↓
學生 Cloudflare 註冊/連動
   ├── 卡在驗證碼/註冊 > 學生開啟 VPN
   └── 順利完成 > 推進部署
          ↓
[手機實測 pages.dev]
   ├── A. 關 VPN 順暢 > 完美！直接留用 Cloudflare，衝刺 Workers AI
   ├── B. 關 VPN 稍慢/需 VPN > 接受現狀，留用 Cloudflare，衝刺 Workers AI
   └── C. 嚴重阻斷且無法接受 > 課後或下週切換 Plan B (Azure Static Web Apps Global)
```

### 備用情境說明：如果未來真的需要終端機 Wrangler？
若未來某些高級配置必須使用 CLI，切記不要使用預設的 `wrangler login`（會開 localhost 伺服器回調而卡住），應使用 Cloudflare 於 2026 年推出的裝置碼流程：
```bash
npx wrangler login --device
```
這會在終端機印出驗證網址與短碼，學生可以在手機或任何能上網的瀏覽器輸入授權，徹底避開本地網路連接問題。**（今日不需要執行）**

---

## 本堂絕對不要踩的坑

1. **不要在學生電腦安裝 Node/Wrangler：** 跨國遠端調試環境是浪費時間的頭號殺手，今天全部走雲端 GUI。
2. **不要把導師的帳號借給學生用：** 失去帳號所有權，學生會失去對作品的掌控感與成就感。
3. **不要今天碰 Cloudflare D1 或資料庫：** 兩小時內同時講 CI/CD、邊緣 AI 又加上 SQL/ORM，認知負荷必然超載。
4. **不要在 AI 出錯時直接修改底層 schema：** 一定要堅持由人工在 UI 上確認與校正（Human-in-the-loop）。
5. **不要刪除手動貼入 JSON 的入口：** 漸進增強是產品健壯性的唯一標準。

---

## 課後反思問題（提問學生）

1. 「現在妳的網站已經上線了，妳覺得把網址傳給朋友看，跟叫朋友到妳電腦前看，感覺有什麼不一樣？」
2. 「當我們在電腦修改一行字並 push 到 GitHub，Cloudflare 是怎麼知道要更新網站的？」
3. 「為什麼剛才我們輸入自然語言後，還特地做了一個預覽修改畫面，而不是直接存進資料庫？」
