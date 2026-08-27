# Session 10 工具短名單與 DeepSeek Harness 可行性報告

> **研究與查閱日期：2026-08-26（America/New_York）**
> **預計上課：2026-08-28（週五）**
> **學生情境：** Azunyan，即將升大四的非資工學生、macOS、目前在廈門；已使用 Antigravity + Gemini，具備 Git、Terminal、Web / React、iOS、AI agent 小步修改與驗收經驗。
> **範圍：** 本文承接既有的 `china-ai-developer-stack-2026.md`，不重做市場盤點，只在 Antigravity、TRAE / Lingma 二選一、Cursor、DeepSeek Harness 之間做 Session 10 決策。

## 一、結論先行

Session 10 最務實的組合是：

```text
日常 primary：Antigravity + Gemini（只要她在廈門的真實連線可穩定完成整個 workflow）
no-VPN fallback：TRAE 中國版（週五只先安裝這一個境內 IDE）
概念主角：DeepSeek Harness
Cursor：值得老師持續觀察，但本堂不安裝、不教 hands-on
```

強烈建議不要把這堂變成四個 IDE 的試用會。課堂真正的新知應是：

```yaml
Model != Agent != Harness != Tool

Agent: Model + Harness

Harness 可組合的能力:
  - models
  - tools
  - skills
  - memory / sessions
  - UI
  - sandbox / permissions
  - loops / scheduling / subagents
```

Azunyan 已在 Session 5–9 練過「縮小任務、讓 agent 執行、看 diff、跑起來驗收、由人決定是否保留」。DeepSeek Harness 正好把她一直在使用、卻尚未拆開命名的系統說清楚。重點不是 Cordis internals，也不是 MCP；重點是讓她親眼看到：**同一個 model，掛上一個 tool plugin 後，agent 才多出一項可執行能力；移除後能力又消失。**

## 二、決策準則

本報告不是比較「誰的模型分數最高」，而是以週五能否順利教學為準：

1. 在 Azunyan 的廈門真實網路能否登入並連續完成 2–3 次 agent request。
2. 能否讀既有 repo、只改 1–3 個檔案、呈現可理解的 diff。
3. 終端命令是否可見、可拒絕，錯誤能否回到 agent。
4. 免費起點、帳號與付款是否不會佔掉課堂。
5. 對她目前 Antigravity 習慣的遷移成本。
6. 是否能自然延續 Session 1–9，而不是重新教一套 IDE 按鈕。

所有區域、方案、配額與模型資訊都以 **2026-08-26** 當日官方頁面為準；週五仍須以她本人帳號與網路驗證。

---

## 三、A Track：Antigravity + Gemini

### A1. 在廈門真實連線要測什麼

「App 打得開」不能算通過。建議週五一開始用她平常真正會使用的網路與帳號，跑以下 12–15 分鐘 smoke test。不要為測試登出既有帳號，也不要現場重裝。

| 關卡 | 現場動作 | 通過標準 |
| --- | --- | --- |
| 1. 本機層 | 開啟既有的小型、無 secrets repo | 檔案、Git 狀態與舊設定正常 |
| 2. 認證層 | 確認 IDE 顯示正確帳號；重開一次 app | 不出現登入循環、地區錯誤或 token refresh 失敗 |
| 3. Model 層 | 問 Gemini：「只用一句話摘要 README，不要改檔」 | 連續兩次在可接受時間內成功，不只偶發成功一次 |
| 4. Repo context | 請它說出啟動指令、主要目錄、可能修改的 1–3 個檔案 | 答案來自 repo，而不是泛泛猜測 |
| 5. Agent plan | 給一個只改可見文案的小任務，要求先 plan | 能限制範圍且不先大改 |
| 6. Edit / diff | 允許修改一個無風險 Markdown 或 UI copy | Changes Overview / diff 可讀、可拒絕或復原 |
| 7. Terminal | 只允許 `git status` 與既有安全檢查／dev 指令 | 命令與輸出可見；失敗能回報給 agent |
| 8. 驗收 | 看 localhost 或檔案 preview | 能說出 expected vs actual，而不只宣稱完成 |
| 9. Session continuity | 關閉再開 app，回到剛才任務 | 對話／artifact／修改沒有無故消失 |
| 10. GitHub（分開計） | 可行時做 `git fetch`；不要把它混成 Gemini 成敗 | 明確知道是 GitHub 網路還是 model backend 失敗 |

Google 官方把 Antigravity 定位為能跨 editor、terminal、browser 工作、以 tasks 與 artifacts 溝通並驗證成果的 agentic platform；因此以上測的是她的**完整工作流**，不是單一 chat 回覆。[Antigravity IDE overview](https://antigravity.google/docs/ide/overview/)（查閱：2026-08-26）

區域風險仍不能忽略：Gemini 一般個人服務的官方地區頁對中國大陸仍不是普通 consumer 支援情境；既有研究已整理這一點。因此測試應在她的實際、合規網路條件下完成，不把任何繞行方案當課程前提。

### A2. 如果通過，什麼都不要換

若上面 1–9 全部穩定，應保留：

- 原本的 Antigravity + Gemini 作 primary。
- 同一份 repo 路徑、Git history、Node / npm、既有 run / test 指令。
- 她已熟悉的 prompt 節奏：先說目標與限制 → 小步修改 → diff → run → expected vs actual → commit。
- 原本的快捷鍵、主題、rules / skills 與安全確認習慣。
- 現有 Gemini 方案；不要因 Session 10 額外購買多個國際訂閱。

唯一新增的是一條已登入的 no-VPN fallback。**不是遷移，也不是重新 clone repo**；同一個本機 repo 可由不同 editor / harness 開啟。

### A3. 判定失敗的門檻

下列任一情況出現兩次，就不應把它當本週唯一 primary：

- 登入循環或 account / region error。
- agent request 長時間無回覆，重試仍失敗。
- 只有 editor 可用，Gemini backend 不可用。
- model 可聊天，但 repo indexing、terminal 或 diff 任一核心環節不穩。

此時不是刪除 Antigravity，而是將 TRAE 中國版提升為 no-VPN primary，Antigravity 保留為可用時的高品質國際層。

---

## 四、B Track：TRAE vs Lingma

### B1. 直接比較

此處比較的是 **TRAE 中國版 / TRAE IDE（含同帳號可用的 TRAE Work）** 與 **Qoder CN（原 Lingma）**，不是兩者的國際版。

| 項目 | TRAE 中國版 | Qoder CN（原 Lingma） | 對 Azunyan 的判讀 |
| --- | --- | --- | --- |
| macOS 安裝 | 官方下載頁列 macOS 12+、Apple Silicon `.dmg` | 官方下載頁列 macOS 11+、Apple Silicon | 兩者都低摩擦；先確認她的晶片與 OS |
| 從 Antigravity 遷移 | VS Code 系產品手感接近；IDE / SOLO 切換直觀 | 獨立 IDE 開箱即用，也支援主流 IDE；快捷鍵與版面仍需適應 | **純 UI 熟悉度：TRAE 略勝** |
| Repo agent | Agent / SOLO 可理解 codebase、拆任務、編輯、跑 terminal；近版加入平行任務與 worktree | 官方列工程自動感知、多檔修改、規劃／待辦、snapshot rollback、terminal | 兩者都達到 repo agent 門檻 |
| Terminal | agent 可調度 terminal；近版持續修正 terminal 穩定性 | 預設每次 terminal 命令要人確認；可另設 allowlist | **初學者安全教學：Lingma 較清楚** |
| Diff / review | 有集中 Diff View；可選 Review all / latest / skip | 工程級變更、Diff-Review、最終審查／採納與 snapshot rollback | **視覺集中度：TRAE 略勝；保守確認：Lingma 略勝** |
| 免費起點 | 2026-07-31 改為點數制；新帳號一次性 4,000 點（2,000 通用 + 2,000 Work），其後每月 500 通用點，TRAE Work 每日簽到另有 200 專用點 | 2026-05-20 結束個人 Pro 限免；免費體驗層為兩週 Pro 試用與 300 Credits，之後為有限基本模型訊息／補全 | **目前免費起量與持續可用量：TRAE 勝** |
| 帳號 | 中國版與國際版帳號、資料分離；中國版通常走本地手機流程 | 已轉為 Qoder CN 帳號／訂閱體系，舊 Lingma 與阿里雲帳號可能涉及升級或遷移 | 兩者都應週四先完成登入；TRAE 對新學生路徑較直接 |
| 大陸可靠度 | 有獨立中國版官網、模型與帳號體系 | 阿里雲境內產品與下載、帳號、模型路線 | 都比國際版更適合作 no-VPN；仍需廈門網路實測 |
| 文件一致性 | 國際版／中國版／TRAE Work／SOLO 名稱容易混淆 | Lingma 已於 2026-05-20 正式更名 Qoder CN，舊頁與新文件仍並存 | 兩邊都有產品命名噪音，不應拿來當課堂主題 |

官方依據：

- TRAE 中國版下載頁列 macOS 12+；中國版官方社群 FAQ 說中國版與國際版能力／互動接近，但模型、帳號與資料分開。[TRAE CN download](https://www.trae.cn/ide/download)、[TRAE 官方中文社群登入 FAQ](https://forum.trae.cn/t/topic/48)（查閱：2026-08-26）
- TRAE 2026 changelog 顯示集中 Diff View、Code Review 選項、terminal、skills 與 worktree 等 agentic workflow 已成熟；但這不代表她需要再學一套 primary。[TRAE changelog](https://www.trae.ai/changelog)（查閱：2026-08-26）
- TRAE 官方 2025 年報公布全球累計 600 萬使用者、月活超過 160 萬；這不是中國境內市占率證明，但在可核對的官方公開數據中，足以支持它是目前最受歡迎的中國原生候選。年報亦稱中國版與國際版全年各有超過 100 次迭代。[TRAE 2025 年度產品報告](https://forum.trae.cn/t/topic/239)（查閱：2026-08-26）
- TRAE 中國版於 2026-07-31 左右切換點數制。免費帳號的新戶贈點、每月通用點與 TRAE Work 每日簽到點，使它仍有相當大的免費入口；但 IDE 主要使用通用點，不能把 Work 專用點誤算成 IDE 額度。[TRAE 訂閱升級公告](https://forum.trae.cn/t/topic/173072)、[TRAE 新版計費說明](https://forum.trae.cn/t/topic/172264)（查閱：2026-08-26）
- Lingma 已於 2026-05-20 正式更名為 Qoder CN，個人 Pro 限免同日結束；目前個人體驗版為兩週試用與 300 Credits，Pro 為人民幣 59 元／月、2,000 Credits。因此舊官網的「個人免費」不能再解讀為完整 agentic workflow 長期不限量。[Qoder CN 計費說明](https://help.aliyun.com/zh/lingma/billing-description)（查閱：2026-08-26）
- Qoder CN agent 文件仍提供 plan、todo、多檔修改、snapshot rollback，以及 terminal 預設逐次確認；能力合格，但免費性已不再勝過 TRAE。[Qoder CN / Lingma agent mode](https://help.aliyun.com/zh/lingma/agent)（查閱：2026-08-26）

### B2. 週五先裝哪一個：TRAE 中國版

**推薦先安裝 TRAE 中國版。**

理由不是它在所有方面都贏，而是 fallback 的工作是「在 no-VPN 情況下可靠完成小任務」：

1. 它是兩者中唯一同時有大型官方使用數據與較大免費起始額度的候選；新戶 4,000 點也足以降低週五首次實作被額度截斷的風險。
2. VS Code 系介面、repo agent、terminal 與集中 Diff View，對 Antigravity 使用者的遷移摩擦較低。
3. 中國版有獨立官網、帳號與模型服務路線，符合 no-VPN fallback 的核心要求。
4. TRAE Work 的每日免費點可作額外的 agentic 任務入口；但課堂仍以本機 repo 與 TRAE IDE 為主，避免把產品線講複雜。
5. Qoder CN 能力合格，但其更名／帳號遷移與剛結束的限免，對本週新用戶反而增加摩擦。

但要誠實標示：**「600 萬註冊、160 萬月活」是 TRAE 全球數據，不是中國境內獨立 MAU；也沒有可信的跨產品同口徑榜單能證明絕對市占第一。** 本推薦是依公開人氣、免費額度、境內路線與 Antigravity 遷移成本的綜合判斷。若她週四無法建立／登入 TRAE 中國版帳號，或在廈門連線不能穩定完成 smoke test，才改測 Qoder CN。

### B3. 週五 TRAE 最小驗收

只用一個乾淨的小 repo，做與 Antigravity 相同的任務：

```text
先讀 README 和 package.json，不要修改。
告訴我啟動指令，以及為了把首頁副標題改成「我的廈門第一週」需要改哪 1–3 個檔案。
等我確認後，只做最小修改。
顯示 diff；執行安全的既有檢查；不要改部署、套件版本或 secrets。
```

通過標準：登入、repo context、1–3 檔 diff、terminal 確認、local run、rollback / Git restore 全部走一遍。完成後就停止，不再安裝 Qoder CN。

---

## 五、C Track：SpaceX 收購後的 Cursor

### C1. 最近真的改了什麼

SpaceX 收購不是傳聞。Cursor 官方在 **2026-08-14** 宣布交易完成，並表示將加入 SpaceXAI；官方同時把取得更大 GPU 能力、訓練更強且更低成本模型列為方向。[Cursor: joining SpaceX](https://cursor.com/blog/joining-spacex)（查閱：2026-08-26）

但要區分「已發生」與「未來承諾」：

- **已發生：** Cursor 仍是完整 coding-agent 產品；本機 Agent 能搜尋 repo、改多檔、跑 terminal、在 diff view 顯示變更並用 checkpoint 回復。[Cursor Agent mode](https://prod.cursor.com/help/ai-features/agent)（查閱：2026-08-26）
- **已發生：** Cloud Agents 可在隔離 VM 內從 GitHub / GitLab / Bitbucket / Azure DevOps clone repo、在分支工作、跑測試並交付 PR / artifacts；這是付費且依賴雲端與 source-control 的 workflow。[Cursor Cloud Agents](https://prod.cursor.com/docs/cloud-agent)（查閱：2026-08-26）
- **已發生：** Agent Review 可對本機 changes 執行專用 review，支援 quick / deep。[Cursor Agent Review](https://prod.cursor.com/docs/agent/agent-review)（查閱：2026-08-26）
- **尚不能推論：** 沒有官方證據顯示 Starlink、X、SpaceX 帳號或付款已與 Cursor 合併，也不能假設收購立刻改善中國大陸連線。

### C2. Grok / SpaceXAI 整合程度

Grok 的整合已相當深，但它是 **model integration**，不是整個 Cursor 變成 Grok IDE：

- `Cursor Grok 4.6` 是 Cursor 與 SpaceXAI 共同打造的 first-party Cursor model。
- 可用於 desktop、web / cloud agent、CLI、SDK、automations 與 iOS。
- 官方把它定位為困難、長時間、多步工具任務；日常速度／成本仍保留 Composer。
- Grok 4.6 目前列在每個付費方案，不是 Hobby 免費方案的明確保證。

來源：[Cursor Grok 4.6 docs](https://prod.cursor.com/help/models-and-usage/grok-4-6)（查閱：2026-08-26）

因此最準確的說法是：**Grok 已是一等公民模型；Cursor 的 editor、agent harness、diff、cloud runtime 仍是 Cursor 自己的產品層。** 這反而可以作為 Session 10 心智模型的旁證：換 model 不等於換 harness。

### C3. 目前價格、免費與學生資格

| 方案 | 2026-08-26 官方狀態 |
| --- | --- |
| Hobby | 免費、免信用卡；有限 Agent requests 與 Tab completions |
| Pro | US$20 / 月；較高 Agent 額度、frontier models、MCP / skills / hooks、Cloud Agents |
| Pro Plus | US$60 / 月 |
| Ultra | US$200 / 月 |
| Teams | US$40 / user / 月起 |

來源：[Cursor pricing](https://cursor.com/pricing)、[Models & Pricing](https://cursor.com/docs/models-and-pricing)（查閱：2026-08-26；稅與實際結帳幣別另計）。

學生方案已與過去不同。Cursor 當前官方學生頁只說任何人都可從免費版開始，升級折扣要留意校園／線上活動；**沒有可依賴的全球學生一年免費承諾。** [Cursor Students](https://cursor.com/students)（查閱：2026-08-26）

### C4. 中國大陸可用性、條款與付款 caveats

最精確的結論是「可能可用，但不能當 no-VPN 保證」：

- Cursor 官方 regions 文件明說不同 model provider 有地區限制；被限制的 model 會從 picker 消失，Auto 只會選仍可用模型。OpenAI、Anthropic、Google 的區域政策仍各自生效。[Cursor Regions](https://prod.cursor.com/docs/account/regions)（查閱：2026-08-26）
- Grok 4.6 文件只承諾在 Cursor 正常供應模型的國家可用，沒有單獨列出「中國大陸保證」。所以必須用她的 Xiamen IP 與帳號測試，不能從收購新聞推論。
- Cursor ToS 沒有在公開條文中把中國大陸直接列為禁止地區，但要求遵守出口／制裁規則；付款由 Stripe 處理，接受何種中國發行卡、帳單地址與風控結果只能以實際 checkout 為準。[Cursor Terms, updated 2026-08-13](https://cursor.com/en-US/terms-of-service)（查閱：2026-08-26）
- 免費 Hobby 不需信用卡，因此可以做低風險連線測試；但 Cloud Agents 需要付費方案與 source-control 連接，不適合作為本週學生 fallback。

### C5. Session 10 決定

Cursor 的確比過去更 agentic，Grok 也不是淺層下拉選項；它是值得老師追蹤的國際 coding-agent 平台。

但它**沒有理由取代**：

- 已熟悉且若能連線就不該遷移的 Antigravity；或
- 明確為 no-VPN continuity 選出的 TRAE 中國版。

它還會新增第三套 IDE、帳號、額度與地區測試，卻不解決本堂最重要的學習問題。因此結論應明寫：

> **Cursor 很有意思，但超出 Session 10 範圍。老師可用 3 分鐘提到「同一個 Cursor harness 現在可換上 first-party Grok」，不要讓 Azunyan 安裝。**

---

## 六、D Track：DeepSeek Harness feasibility spike（核心）

### D1. 它為什麼適合成為概念主角

DeepSeek Harness（DSH）在 2026-08 推出 developer preview，官方主張「Everything is a plugin」與「Agent = Model + Harness」。model、tools、skills、sessions、sandboxes、storage、loops、scheduling、UI 等都由插件提供，可透過 configuration 選擇、替換與組合，不必修改 Harness 核心。[DeepSeek Harness official launch page](https://www.deepseek.com/harness/en/)（查閱：2026-08-26）

這個題材對 Azunyan 的價值不是學框架，而是重新看懂前幾堂已做過的事：

```text
Gemini / DeepSeek / Grok             = Model（會推理與生成）
Antigravity / Cursor / TRAE / DSH    = Harness（給模型環境、loop、記憶與能力）
「會改檔、跑 terminal、查 web」      = Tools（Harness 暴露給 model 的動作）
可重用指令／流程                     = Skills / workflows
Model + Harness                      = 可在環境裡持續工作的 Agent
```

不要延伸成 Cordis fiber、dependency injection 或 MCP transport 課。這些只需要老師知道，不需要學生背。

### D2. 成熟度與版本判讀

這不是穩定教學產品。官方 repo 明示 developer preview 正快速迭代，**會有 breaking changes**。[DeepSeek Harness GitHub README](https://github.com/deepseek-ai/deepseek-harness)（查閱：2026-08-26）

查閱當日：

- npm 最新 tag：`@deepseek-ai/dsh@0.1.1-rc.2`。
- 官方 `master` HEAD：`b150a551b8d465e31e418e1b2eaf5e79bbb7d28e`。
- 週四應記錄實際成功版本與 commit；週五不更新、不 `git pull`、不使用浮動 `latest`。

這兩個 pin 只代表 2026-08-26 的可重現基線，不代表之後仍是最新版。[npm registry metadata](https://registry.npmjs.org/%40deepseek-ai%2Fdsh/latest)（查閱：2026-08-26）

### D3. macOS prerequisites

#### 最快 Web UI 路線

- macOS 的一般 terminal。
- Node.js。官方 quick start 只寫「安裝 Node.js」；為避免版本漂移，本課直接採 repo 明確支援的 **Node 22.19+ 或 Node 24+**。
- 可連 npm registry，以便 `npx` 第一次下載。
- 不需要 Docker；Web UI 預設只開在 `127.0.0.1:3080`。

#### 原始碼／官方插件教程路線

- Node.js `^22.19.0 || >=24.0.0`。
- Git 2.26+。
- Corepack-enabled pnpm；repo pin `pnpm@11.7.0`。
- 原始碼首次需 `pnpm install` 與 `pnpm run build`。
- DeepSeek API key 對 build / keyless tests 是 optional，但對真正 model 對話與官方 `greet` tool 示範是 required，除非改接其他可用 provider。

來源：[DSH development prerequisites](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/development.md)（查閱：2026-08-26）

### D4. 最快啟動路徑

官方最短命令是：

```bash
npx @deepseek-ai/dsh web
```

為週五可重現，建議使用週四已驗證的 pin：

```bash
npx @deepseek-ai/dsh@0.1.1-rc.2 web
```

它會在本機啟動 Web UI，預設網址為 `http://127.0.0.1:3080` 並打開瀏覽器。[DSH README — Run from npm](https://github.com/deepseek-ai/deepseek-harness#run)（查閱：2026-08-26）

**重要區分：** 這個命令能在沒有 DeepSeek 帳號、API key 或付款的情況下把 Harness server 與 Web UI 啟動；但 fresh UI 尚未選 workspace，也不能在沒有可用 model credential 的情況下完成 agent request。

### D5. 帳號、API key 與付款到底何時需要

| 動作 | DeepSeek account / key / balance |
| --- | --- |
| `npx ... web`、看到本機 UI | 不需要 |
| 選 workspace、看 settings / plugins 組成 | 不需要 |
| 用 DeepSeek model 發出第一個 agent request | 需要 DeepSeek Platform API key |
| 只做 source build、typecheck、keyless test | 不需要 |
| 改接 OpenAI / Anthropic / 自訂 endpoint | 不需要 DeepSeek key，但需要該 provider 自己的合法 credential / entitlement |

官方 Web guide 要求到 Settings → Models 儲存 DeepSeek API key；key 寫入 `$DSH_HOME/.credentials.yaml`，前端只取回遮罩後 descriptor。[DSH Web UI guide](https://deepseek-harness.github.io/deepseek-harness/en/guide/quickstart)、[Configure models](https://deepseek-harness.github.io/deepseek-harness/en/guide/providers)（查閱：2026-08-26）

DeepSeek API 是 token 計費，費用從儲值餘額或贈送餘額扣除；**不要假設新帳號一定有免費 API credits**。本課應由老師週四建立一把限課堂用途的 key、放少量餘額並設定使用邊界，學生不需在週五處理付款。[DeepSeek API pricing and deduction rules](https://api-docs.deepseek.com/quick_start/pricing/)（查閱：2026-08-26）

### D6. 可用 models / providers

DSH 不綁死 DeepSeek model。Web UI 的官方 model configuration 支援：

1. **Native DeepSeek provider**：查閱當日 API 價格頁列 `deepseek-v4-flash`、`deepseek-v4-pro`、`deepseek-v4-flash-vision-exp`；實際 picker 以週四帳號 entitlement 為準。
2. **Catalog providers**：例如 Anthropic、OpenAI。
3. **Native-auth routes**：Bedrock（AWS credentials + region）、Vertex（ADC project）、Azure（api-version）、Codex（OAuth）。
4. **Custom provider**：可填 lowercase provider ID、base URL、API protocol、credential 與至少一個 model，接公司 gateway、自架服務或 OpenAI-compatible endpoint。

不要在本堂展示五種 provider。週五只選一個已驗證、在廈門可達的 DeepSeek model；「可以換 model」用設定畫面說明即可。[DSH model configuration](https://deepseek-harness.github.io/deepseek-harness/en/guide/providers)（查閱：2026-08-26）

### D7. Standard / Minimal / Creator modes

| Mode | 官方定位 | 本堂用途 |
| --- | --- | --- |
| Standard | 完整 coding agent：file edit、shell、file / web search、skills、planning、goals、subagents、workflows | 先讓她認出平常 coding agent 的完整能力集合 |
| Minimal | 只有 persistent bash 與 `str_replace_editor` 兩個 model-facing tools | 對照「同一 model，Harness 給的能力少了，agent 行為就變」 |
| Creator | Standard 全能力 + runtime inspection、記憶體內 plugin experiments、preset authoring guidance | 老師 demo；不要要求學生理解 runtime internals |
| Code（補充） | Standard 能力，但讓 model 透過 Code Mode SDK 用一個 TypeScript 程式組合多步工具操作 | 本堂不教，避免把概念拉去 code orchestration |

來源：[DeepSeek Harness modes](https://www.deepseek.com/harness/en/)（查閱：2026-08-26）。

建議順序是先看 Standard，再開一個 Minimal session 比較 tool surface，最後才展示本機 tool plugin。Creator mode 只用 2–3 分鐘指出「Harness 甚至能檢查／重組自己」，不深入 Cordis。

### D8. 插件如何安裝、移除與生效

DSH 有兩條不同路線：

#### 1. 本機 overlay（本課推薦）

```bash
pnpm dsh web --patch ./scratch-plugin/cordis.yml
```

`--patch` 把本機 plugin row 疊在既有 Web profile 上；移除 `--patch` 並重啟，就回到原本 composition。這適合教學：不發布、不碰第三方供應鏈、不改 Harness 核心。

#### 2. 可安裝 bundle / profile（只講概念，老師可預演）

```bash
dsh plugin --profile demo add ./hello-plugin
dsh --profile demo --dump-config
dsh plugin --profile demo remove dsh-hello-plugin
```

外部 bundle 被放進 `$DSH_HOME/profiles/<name>` 的 profile manifest；add / remove 後要重啟該 profile。官方 CLI 也允許 npm package 或 Git spec，但 Git source 可能執行 `prepare` build script；pnpm 10+ 要明確 allow build。這等於允許第三方程式在 agent sandbox **之外**於本機執行，因此本堂不要即興安裝 community plugin。[Package and install a plugin](https://deepseek-harness.github.io/deepseek-harness/en/develop/basic/publish)、[CLI plugin management reference](https://github.com/deepseek-ai/deepseek-harness/blob/master/apps/cli/reference/README.md#plugin-management)（查閱：2026-08-26）

### D9. 推薦的 15–25 分鐘安全插件實驗

#### 實驗：讓 Harness 多出一個 `greet` tool，再把它拿掉

這是官方教程的最小 tool plugin，不使用 community package，不碰外部 API，不修改學生專案，也不修改 Harness 核心 source。只在 source checkout 裡新增 gitignored／課堂用 `scratch-plugin/` 與一個 overlay YAML。

**預期畫面：**

```text
掛載前：Tools 中沒有 greet
掛載後：terminal 顯示 plugin loaded；agent 的工具表／Trajectory 出現 greet
Prompt: Use the greet tool to greet Azunyan.
結果：可展開的 tool call / result 顯示 Hello, Azunyan!
移除 overlay 並重啟：greet 消失
```

建議時間：

| 分鐘 | 學生動作 |
| --- | --- |
| 0–3 | 看 Standard tool 列表，說出 model 與 tool 的不同 |
| 3–8 | 開 `my-plugin.ts`，只找 `name`、`description`、`execute` 三處 |
| 8–12 | 用 `--patch` 啟動已預建的 Web UI，看到 plugin loaded |
| 12–17 | 明確要求 agent 使用 `greet`，在 Trajectory 展開 tool call / result |
| 17–21 | 把回傳字串改成中日雙語或加一個 emoji，重載／重啟再試 |
| 21–25 | 不帶 overlay 重啟，確認 tool 消失；用自己的話完成 `Agent = Model + Harness` |

官方實作與 code 形狀見 [Your first plugin](https://deepseek-harness.github.io/deepseek-harness/en/develop/basic/) 與 [Build a tool](https://deepseek-harness.github.io/deepseek-harness/en/develop/basic/tool)（查閱：2026-08-26）。

#### 安全邊界

- workspace 使用一次性空白 lab，不開她的真實 repo。
- lab 不含 `.env`、SSH key、GitHub token、個資或家目錄資料。
- 不讓 agent 自由 browse web，也不安裝任何 community plugin。
- 除了啟動已預建服務，不授權 shell mutation；若 agent 要跑額外命令，一律拒絕。
- 不把「workspace-write」理解成絕對安全；developer preview 的 sandbox / permission 邊界仍應保守對待。
- 如果 tool call 不出現，老師直接展示週四錄好的 30–60 秒備份，不現場 debug Cordis。

### D10. 這個實驗是否修改 Harness source

**不修改。** `scratch-plugin/src/my-plugin.ts` 是獨立 extension module，`cordis.yml` 是外加 configuration overlay；`--patch` 掛載它。Harness 核心檔案不需改動，移除 overlay 即恢復原 composition。這正是本堂要傳達的「用 composition 增加能力」。

嚴格來說，官方教程把 `scratch-plugin/` 放在 source checkout 目錄內；它是新增的教學 scratch 檔，不是修改 `packages/`、`apps/` 或核心 source。為了避免污染，可將整個 checkout 放在專用 `session10-dsh-lab/`，課後整包封存或刪除。

### D11. 週五可能失敗的地方

| 失敗點 | 症狀 | 週四處理／週五 fallback |
| --- | --- | --- |
| preview breaking change | 昨天的命令／plugin API 今天變了 | pin npm version 與 Git commit；週五不更新 |
| Node / pnpm 不合 | engine error、Corepack 找不到 pnpm | 週四固定 Node 24 或 22.19+、repo pin pnpm 11.7.0 |
| npm / GitHub 在廈門慢 | `npx`、clone、install timeout | 週四在同一台 Mac 完成 cache、clone、install、build |
| DeepSeek key / 餘額 | `MISSING_CREDENTIAL`、401、quota / balance error | 週四真實發出兩次 request；準備少量餘額與備用 key |
| 3080 port 被占用 | server 起不來 | 週四確認；必要時用官方 `--port` 另選本機 port |
| workspace 未選 | composer disabled | 預先建立並加入 disposable lab workspace |
| model 不呼叫 `greet` | 直接用文字問候 | prompt 明寫 `Use the greet tool...`；必要時重開新 session |
| plugin overlay 路徑錯 | module resolve error | YAML 使用絕對路徑；週四不要搬動 checkout |
| macOS sandbox / terminal 差異 | 命令被拒或結果異常 | 實驗不依賴 agent shell；只靠 tool call 與 UI |
| 現場 debug 吃掉時間 | build / HMR / UI 無回應 | 5 分鐘 fail-fast，改播錄影並用靜態 before/after 截圖講概念 |

### D12. 週四晚上的 pre-cache / rehearsal

以下是準備清單，不是在本機現在執行的要求：

1. 在**授課那台 Mac**確認 OS、Apple Silicon、`node --version`、`git --version`。
2. 建立專用目錄與專用 Harness home，例如 `session10-dsh-lab/.dsh-home`；啟動時只把 `DSH_HOME` 指向這個精確路徑，避免污染日常 `~/.dsh`。
3. 先跑 pinned quick start：`npx @deepseek-ai/dsh@0.1.1-rc.2 web`，確認本機 UI、port 與瀏覽器。
4. clone 官方 repo，checkout 週四驗證的 exact commit；記錄 `git rev-parse HEAD`。
5. `corepack enable`，確認 pnpm 11.7.0；完成 `pnpm install`、`pnpm run build`。
6. 建立一次性 workspace、官方 `scratch-plugin`、absolute-path `cordis.yml`；跑 `pnpm dsh web --patch ...`。
7. 在 Settings → Models 存入教學 key，確認不是只有 UI 能開，而是連續兩次真正 request 與一次 `greet` tool call 成功。
8. 開 Standard、Minimal、Creator 各一個 session，截圖 tool surface 與 Trajectory；Creator 只保留老師 demo 畫面。
9. 測試完整移除：不帶 `--patch` 重啟，確認 `greet` 消失；再掛回一次。
10. 錄一段 30–60 秒無聲備份：掛載 → tool call → result → 移除。另存一張 `Agent = Model + Harness` 圖。
11. 停止 server 後再重新啟動一次，確保不是只在熱狀態可用。
12. 將所有會用到的命令放進老師 runbook；週五不從網頁複製新命令、不升級。

### D13. 課後卸載與清理

最乾淨的方式是從一開始就隔離：

1. `Ctrl+C` 正常停止 DSH server。
2. 若用 overlay：下次啟動不再帶 `--patch`；無 package uninstall。
3. 若真的安裝過本機 bundle：`dsh plugin --profile <name> remove <package-name>`，成功後重啟並用 `--dump-config` 確認 layer 已消失。
4. 在 DeepSeek Platform 撤銷課堂 API key；不要只刪本機檔案就當成 key 已失效。
5. 確認專用 `DSH_HOME` 的絕對路徑與內容後，再刪除／封存該單一 lab 目錄；預設 DSH home 若未隔離會是 `~/.dsh`，裡面含 credentials、settings、profiles 與 sessions，不可盲刪。
6. 專用 source checkout 與 disposable workspace 可整包刪除或留作下堂備份；不要清空整個 npm cache，因為會影響其他專案且沒有必要。

DSH profile 位於 `$DSH_HOME/profiles/<name>`，若未指定則 Harness home 預設為 `~/.dsh`。[DSH profile reference](https://github.com/deepseek-ai/deepseek-harness/blob/master/packages/boot/app-boot/README.md)（查閱：2026-08-26）

### D14. Feasibility verdict

| 問題 | 判定 |
| --- | --- |
| 能否在 macOS 快速啟動？ | **可以**，Node + pinned `npx` 即可看到本機 Web UI |
| 不付費能否「啟動」？ | **可以** |
| 不付費／無 key 能否完成 agent + tool 實驗？ | **通常不行**；需一個可用 provider credential，建議老師準備 DeepSeek key 與少量餘額 |
| 能否不改 Harness source 加能力？ | **可以**，用本機 plugin + `--patch` overlay |
| 能否讓學生 15–25 分鐘看到差異？ | **可以**，前提是週四已 build、配好 key 並錄好 fallback |
| 適合成為日常 primary IDE 嗎？ | **現在不建議**；developer preview、插件與安全邊界仍快速變動 |
| 適合成為 Session 10 概念 centerpiece 嗎？ | **非常適合**，但只做受控 lab，不做 source internals lecture |

---

## 七、Session 10 最終工具決策

### Primary workflow

```text
Antigravity + Gemini
→ 同一個既有 repo
→ 小任務 / constraints
→ diff
→ local run / expected vs actual
→ local git commit
```

前提是 Xiamen smoke test 完整通過。若通過，保持原樣；Session 10 不應為了新鮮感替換已有效的習慣。

### Fallback workflow

```text
TRAE 中國版（no-VPN）
→ 開同一個本機 repo
→ 同一份 task prompt / acceptance criteria
→ terminal 命令先看再允許
→ 集中 diff / Git restore
→ local run
→ local git commit
```

週五只先安裝 TRAE 中國版。Qoder CN 是 TRAE 登入／運作失敗時的老師預備 Plan B，不在課堂同時安裝。

### Conceptual centerpiece

DeepSeek Harness：Standard vs Minimal 的 capability 對照，加上官方本機 `greet` tool plugin 的掛載／移除實驗。

### Teacher-demo only

- Harness Creator mode 的 runtime / plugin inspection，只展示輪廓。
- Cursor + Cursor Grok 4.6：最多 3 分鐘說明 model 與 harness 可分離；不登入、不安裝、不付費。
- Harness 的 source build、API key、profile、plugin package add / remove：週四由老師準備；學生只操作已安全隔離的 scratch plugin。

### Azunyan personally installs / uses

- **繼續用：** Antigravity + Gemini（若連線通過）。
- **週五安裝：** TRAE 中國版，一個即可。
- **課堂體驗但不作日常承諾：** DeepSeek Harness local lab；若她課後沒有興趣做 harness developer，可清理掉。
- **不安裝：** Cursor、Qoder CN（除非 TRAE 的預定 fail condition 發生）。

---

## 八、建議的 2 小時 Session 10 大綱

這不是最終教材，而是課程決策草案。

| 時間 | 內容 | Azunyan 的動作 | 教學目的 |
| --- | --- | --- | --- |
| 0:00–0:10 | 接回 Session 1–9 | 用卡片把 Model / Tool / Agent / Harness 猜著配對 | 先喚起既有經驗，不先講定義 |
| 0:10–0:25 | Xiamen reality check | 在真實連線跑 Antigravity 12–15 分鐘 smoke test | 判定「保持 primary」或「fallback 升級」，不是評論國際政治／產品八卦 |
| 0:25–0:40 | 同一 repo、另一個 harness | 開已登入的 TRAE 中國版，用同 prompt 讀 repo、plan、只改一處 copy | 看見 repo 與 workflow 不屬於任何單一 IDE |
| 0:40–0:50 | 選 primary / fallback | 回答：哪個可日常用？哪個在斷線時救我？ | 延續 Session 5 的尺度與選擇能力 |
| 0:50–1:05 | 四個詞終於拆開 | 用 Antigravity、Gemini、terminal、Git、TRAE 當實例填表 | 建立 `Model != Agent != Harness != Tool` |
| 1:05–1:20 | DSH Standard vs Minimal | 看兩個 mode 的工具表／Trajectory，圈出多了與少了什麼 | 同一 model 不等於同一 agent 行為 |
| 1:20–1:43 | Safe plugin lab | 掛 `greet` → 呼叫 → 改一句中日文 → 移除 | 親眼看「能力是可組合 plugin」 |
| 1:43–1:50 | Creator mode teacher glimpse | 老師展示 runtime inspection；立即收回概念圖 | 知道可以重組，不教 Cordis internals |
| 1:50–1:55 | Cursor sidebar note | 看一張 Cursor Grok 4.6 圖：model 更換但 Cursor harness 還是 Cursor | 回扣收購新聞，不增加工具負擔 |
| 1:55–2:00 | Exit ticket | 她用自己的話補完三句 | 固化心智模型與個人 workflow |

Exit ticket：

```text
1. Gemini / DeepSeek / Grok 是 ______。
2. Antigravity / TRAE / Cursor / DSH 主要提供 ______。
3. 我的 primary 是 ______；不能用時，我會用 ______，repo 與 Git 不需要重來。
```

### 課堂成功標準

- 她能用白話分清 model、tool、harness、agent。
- 她在自己的 Xiamen 網路上得到 primary / fallback 的實證答案。
- 她只新增一個境內 IDE，不是裝滿工具。
- 她看過一次 plugin 掛載後能力出現、移除後能力消失。
- 她仍以 diff、local run、Git commit 作為完成定義。

## 九、最終一句話推薦

> **保留能工作的 Antigravity，不為搬到中國重學開發；用 TRAE 中國版補一條 no-VPN 生存線；用 DeepSeek Harness 的可插拔 tool 實驗，讓 Azunyan 第一次真正看懂「模型不是 agent，agent 是 model 加上 harness」；Cursor 雖因 SpaceX 與 Grok 4.6 變得更值得關注，但本週不值得佔用她的安裝與學習預算。**
