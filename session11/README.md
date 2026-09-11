# Session 11：從本機走向雲端 — SocialPulse 的 Cloudflare Pages 與 Workers AI 實戰

> **日期：** 2026-09-11  
> **場景：** 約 2 小時、Zoom 視訊遠端連線（導師在美國，學生在中國廈門）  
> **對象：** 櫻井妹妹（Azunyan）  
> **定位：** 接續 Session 10 打造的「SocialPulse 人脈記憶庫」Web App，今天不花時間在終端機除錯，而是透過現代 CI/CD 與雲端託管，讓作品第一次正式上線到 Internet，能在手機端直接操作，並探索 Cloudflare 內建免費 AI 的擴充能力。

---

## 一句話版本

```text
GitHub Repo (學生擁有)
→ Cloudflare Dashboard 視覺化連結 (學生帳號)
→ 自動 CI/CD 構建部署 (main branch)
→ 手機實測 (驗證廈門直連 / VPN 可用性)
→ [選配加分] Cloudflare Pages Functions + Workers AI 結構化自然語言整理
```

今天最大的躍進是：**程式不再只活在自己的筆記型電腦裡，而是變成世界上任何人（以及妳自己的手機）隨時可以打開的真實產品。**

---

## 為什麼是這個題目

在 Session 10 中，Azunyan 成功在本地建立了以人脈關係與互動紀錄為核心的 SocialPulse 原型，並學會了用外部 LLM 生成 JSON Payload 貼入 App 的流程。

但本地開發（`localhost:5173`）有一個根本瓶頸：
1. 只能在筆電前打開，出門社交、在廈大校園認識新朋友或參加活動時，無法即時用手機記錄。
2. 跨國遠端協作時，學生端本機環境（Node、Antigravity 等）若受網路或環境限制，容易陷入挫折。

今天我們把「部署到雲端」變成一堂極佳的現代軟體工程心智模型課：
- 不需要學生在終端機安裝複雜 CLI（避免 Wrangler 登入與本機環境地獄）。
- 學生親自掌握雲端平台帳號與 GitHub 倉庫所有權。
- 透過「Git Push 即自動發布（Continuous Deployment）」理解現代團隊協作的標準流程。

---

## 本堂核心心智模型

```text
[導師電腦 (美國) / 學生電腦 (廈門)]
  ├── AI Agent 協同編程
  └── git push origin main
              ↓
      [GitHub 遠端倉庫] (學生所有，導師為 Collaborator)
              ↓ Webhook 觸發
  [Cloudflare Pages 雲端構建農場]
  ├── npm run build (產生靜態 dist)
  └── Pages Functions (/functions/api)
              ↓ 部署至全球邊緣網路
  [全球 CDN 邊緣節點 (*.pages.dev)]
              ↓
  [櫻井妹妹的手機 / 瀏覽器] (廈門現場實測)
```

### 職責劃分與所有權原則

| 角色 / 服務 | 擁有者 | 負責任務 |
| :--- | :--- | :--- |
| **GitHub Repo** | 櫻井妹妹 | 專案原始碼來源，授權導師為 Collaborator 共同提交代碼 |
| **Cloudflare 帳號** | 櫻井妹妹 | 雲端服務資產主體，由學生自己註冊並點選授權 |
| **代碼開發與 Agent** | 導師電腦（亦可由學生操作） | 本機 coding、跑測試、git push，不需接觸學生雲端憑證 |
| **CI/CD Build & Hosting** | Cloudflare Pages | 自動偵測 push、在雲端執行 `npm run build` 並分發全球 |
| **邊緣智慧 (選配)** | Cloudflare Workers AI | 伺服器端免費調用 LLM，輸出 JSON Schema 結構化草稿 |

---

## 學習目標

完成本堂課後，Azunyan 應能：

1. **掌握現代部署概念：** 理解 `git push` 如何觸發雲端平台自動打包並發布至全球 CDN。
2. **擁有自己的雲端平台：** 獨立完成 Cloudflare 帳號註冊，並完成 GitHub 授權綁定。
3. **完成第一次全球發布：** 親手將 SocialPulse 發布到公網，並在自己手機瀏覽器中成功載入。
4. **具備真實網路環境檢驗思維：** 在廈門現場以「VPN 關閉 / 開啟」對照測試，理解中國境內連線境外邊緣網路的實際表現與工程取捨。
5. **理解漸進增強（Progressive Enhancement）：** 在保留原手動貼入 JSON 的可靠底線下，無痛疊加 Workers AI 自然語言處理功能。
6. **釐清應用程式託管 vs 資料儲存的邊界：** 清楚理解目前靜態部署下 `localStorage` 跨裝置不互通的特性，為未來的雲端資料庫（D1）奠定觀念。

---

## 今天的兩大里程碑（Milestones）

### 🟢 Milestone 1：SocialPulse 第一次登上網際網路（核心必達，45–60 分鐘）

- 學生建立並擁有自己的 Cloudflare 帳號。
- 學生在 Cloudflare Dashboard 綁定個人 GitHub 上的 SocialPulse repo。
- 設定 Vite 構建參數：
  - **Build command:** `npm run build`
  - **Build output directory:** `dist`
- 點擊「Save and Deploy」，由 Cloudflare 自動完成雲端打包。
- **高光時刻：** 櫻井妹妹拿起手機，輸入專屬網址 `https://socialpulse-xxxx.pages.dev`，親眼看見並操作自己的 App！
- **現場實測：** 廈門關閉 VPN 測試連線速度與可用性，評估是否需要備援方案。

### 🟣 Milestone 2：選配加分 — Cloudflare Workers AI 免費自然語言整理（60–120 分鐘）

- 專案根目錄新增 Cloudflare Pages Functions：`/functions/api/structure-memory.ts`。
- Dashboard 綁定 Cloudflare Workers AI（命名為 `AI`）。
- 採用免費配額多語言模型：`@cf/zai-org/glm-4.7-flash`（每天 10,000 Neurons 免費額度）。
- 使用 Workers AI 的 **JSON Schema 結構化輸出模式**，確保回傳完全吻合 `StructuredImportPayload`。
- 前端 `ImportMemoryModal.tsx` 擴充自然語言輸入框，保留「手動 JSON」作為底線防護。

---

## 今天的關鍵決策與技術邊界

### 1. 為什麼今天絕對不要用 Wrangler CLI？
- 學生人在廈門，本機環境曾有 Antigravity 與網路受限紀錄。若在終端機要求跑 `npx wrangler login`，OAuth 本地回調（callback）極易因網路與防火牆中斷，演變成 90 分鐘的終端機環境除錯災難。
- 改走 **Cloudflare Dashboard Web 介面連動 GitHub**，不僅 100% 透過瀏覽器完成，且徹底解耦導師電腦與學生雲端帳號：導師用自己電腦寫 code / push，學生的 Cloudflare 自動 build，不需要共享任何金鑰。

### 2. 人在廈門，Cloudflare 的真實情況與 Plan B 策略
- **客觀事實：** Cloudflare Pages 官方並未向中國大陸境內提供 SLA 保證（`pages.dev` 網域名稱在境內連線可能慢或需依賴 VPN）。
- **決策矩陣：**
  - **情境 A（關閉 VPN 可直連）：** 維持 Cloudflare，繼續挑戰 Workers AI。
  - **情境 B（關閉 VPN 較慢但可用）：** 個人專案無須過度工程化，維持 Cloudflare。
  - **情境 C（關閉 VPN 完全阻斷）：** 記錄實測結果，課堂先以 VPN 完成驗收，備援候選方案鎖定 **Azure Static Web Apps Global**（免費、支援 GitHub 自動部署）。

### 3. 一定要對學生說明的儲存限制（Storage Caveat）
- 目前 SocialPulse 的資料保存在瀏覽器的 `localStorage`。
- **手機與電腦的資料各自獨立：** 手機開啟網站時看到的是手機本機的空白資料庫，電腦看到的是電腦上的紀錄。
- 今天解決的是 **「App 本身隨處可用」**，而不是 **「資料跨端雲端同步」**。多裝置同步（如 Cloudflare D1 / 雲端資料庫）留待後續課程，今天切忌分心碰 D1。

---

## 今天明確不做（Non-Goals）

- 不在終端機安裝或執行 Wrangler CLI 進行登入與部署。
- 不接觸、不串接任何需要付費綁卡的外部商業 LLM API（如 OpenAI / Anthropic 付費 Key）。
- 不實作多裝置雲端資料庫（Cloudflare D1 / Supabase 等）。
- 不碰中國境內 ICP 備案或 21Vianet Azure China 複雜訂閱。
- 不刪除既有的手動 JSON Import 驗證機制。

---

## 課堂文件

- [`live-runbook.md`](./live-runbook.md)：120 分鐘逐段實況帶領指南、應變分流、話術與檢核清單
- [`cf-ai-architecture.md`](./cf-ai-architecture.md)：Cloudflare Pages Functions 架構、Workers AI 結構化 JSON Schema 規格與漸進增強前端代碼指南
