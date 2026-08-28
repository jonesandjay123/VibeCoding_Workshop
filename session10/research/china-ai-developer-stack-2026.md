# China AI Developer Stack 2026：Azunyan 在廈門可長期使用的工作流研究

> **文件狀態：背景研究，不是 Session 10 現行教案。** 目前課堂方向已改為「IDE 可用性測試作暖身，主課建立 model-agnostic 的人脈維護 Web App」。請以 [`../README.md`](../README.md) 與 [`../live-runbook.md`](../live-runbook.md) 為準；本文保留作工具選擇、區域風險與長期工作流參考。

> **研究日期：2026-08-26（America/New_York）**  
> **適用情境：** 已有 Web / React / Git / terminal / AI-agent 經驗、即將升大四的非資工學生；macOS；剛搬到廈門。
> **結論的使用方式：** 網路政策、產品配額、登入與付款規則會變。本文把「官方支援」與「社群實測」分開；上課當天仍要以她自己的網路、帳號與校園 Wi-Fi 做 15 分鐘驗證，不能把任何 VPN 路線當作保證或課程前提。

## 1. Executive Summary

Azunyan 不需要為了搬到中國而重學程式，也不應把「找一個中國版 ChatGPT」當成答案。她已經會的核心循環仍成立：

```text
想法 / 需求 → 與 AI 對話 → 小步修改 repo → 本機執行與驗收 → git commit → 可分享的部署
```

真正改變的是每一環的**可靠度與備援**。Google、OpenAI、Anthropic 的一般個人服務在中國大陸並非穩定、正式支援的基礎：Gemini 的官方頁面雖列出「Mainland China (Workspace only)」，不是一般個人 Gemini；OpenAI 和 Anthropic 的支援地區清單均未列中國大陸 [S1][S2][S3]。因此把 Antigravity + Gemini、ChatGPT/Codex、Claude/Claude Code 作為「可用時很強的國際層」合理，但不適合當她唯一能交作業的工作流。

對她最務實的基線是：**保留標準開發工具與 GitHub 習慣，將中國境內 AI agent 補成 primary，並把部署從 GitHub Pages/Firebase 改為可在境內驗收的靜態部署選項。** 本報告的預設組合是：

```text
VS Code 或 TRAE / Lingma IDE
  + 通義靈碼（第一個要實測的 repo agent）
  + DeepSeek / Kimi / Qwen chat（思考、讀文件、第二意見）
  + Git（本機一定可用）
  + GitHub（遠端主 repo；可能慢，不能取代本機 commit）
  + GitHub Pages 作國際展示 + 一個中國境內靜態部署 fallback
```

這不是宣稱某一工具「全面勝出」。TRAE、通義靈碼、CodeBuddy 都應在她自己現有的 `DouceReverie` 或小 React repo 上做同一個 20–30 分鐘試題；選擇那個能穩定登入、能讀 repo、能清楚顯示 diff、能在本機跑起來、且她願意天天打開的工具作 primary。另一個保留為 backup。

### 對 Antigravity 的直接答案

**IDE 本體能否打開，不等於 Antigravity 工作流可用。** macOS app 與本機檔案、Git CLI 理論上仍可啟動；但 Google login、Gemini model/backend、agent request、模型/extension download 都依賴 Google 服務。Google 的官方一般 Gemini 支援並不涵蓋中國大陸個人帳號 [S1]，而 2026 年中國開發者社群中持續出現「地區限制、登入轉圈、需要代理」的 Antigravity 排障帖 [S20][S21]。所以：

- **不開 VPN/proxy：** 不應期待登入後的 Gemini agent 能穩定工作；不能當 primary。
- **VPN/proxy 正常、帳號原本已可用：** 可保留為她熟悉的 international layer；每次課前仍要檢查 login、agent request 與 GitHub remote。
- **遷移成本最低：** 不要先搬 repo。先保留原目錄、Git、Node、VS Code 快捷鍵與 `package.json`；在同一 repo 安裝通義靈碼或 TRAE，完成一個小 diff。她學的是「同一份程式碼可換 agent」，不是「換 IDE 就要從零開始」。

## 2. Existing Stack Audit

判讀：**直接可用**＝中國境內一般網路可作為日常基線；**不穩定**＝常能連上但跨境/DNS/CDN/下載可能失敗；**VPN/proxy**＝沒有它不應安排核心課程；**帳號／付款限制**＝即便網路通，註冊、地區、手機、信用卡或服務條款仍可能阻塞。

| 原有項目 | 2026-08 大陸實際判讀 | 為學生工作流的建議 |
| --- | --- | --- |
| Antigravity | app 可安裝/啟動不代表 agent 可用；Google login 與 Gemini backend 通常需要 VPN/proxy，亦有區域登入失敗回報 [S1][S20] | **不作唯一 primary**；保留為 VPN 正常時的熟悉選項 |
| Google Gemini | 個人一般服務非正式大陸支援；官方僅寫 Mainland China 為 Workspace only [S1] | VPN/proxy + 合規既有帳號時使用；不以它安排必做作業 |
| Google AI Studio / Gemini API | API region/Google endpoint 與帳單均有區域門檻；跨境可達性與帳號 eligibility 是雙重風險 [S4] | 不作中國境內 student default；舊專案先保留 key，但準備國產 API 替代 |
| GitHub | 沒有針對中國大陸的一般平台禁令；官方服務全球提供的表述亦未將中國列為制裁區 [S5]。但 `github.com`、raw、release、Actions、LFS 在跨境網路可能不同步地慢或失敗 | **保留主 repo**；每完成一小步先本機 commit，push 視網路重試；重要 deadline 不只依賴 GitHub Pages |
| GitHub Pages | 可部署但同樣依賴 GitHub/跨境 CDN；訪客在大陸的載入與更新可預期不如境內靜態站穩定 | 當國際 portfolio/demo；另備中國境內 preview/deploy |
| npm / npm registry | `registry.npmjs.org` 可達但 package install、二進位下載、GitHub-hosted dependency 可能慢或失敗 | lockfile 不變；必要時只在本機設定 `npmmirror` 作 install fallback，並記錄切換；勿把未知第三方鏡像當 supply-chain 信任來源 [S6] |
| VS Code | desktop editor、本機 terminal、Git、Node 都可直接使用；extension marketplace/更新下載在跨境網路可能慢 | **推薦保留**為穩定的 editor baseline；不綁定任一模型 |
| Firebase | console、Auth、Firestore/hosting SDK 均高度依賴 Google endpoints；對大陸一般網路不適合作業的唯一後端 | 既有 prototype 可在 VPN 正常時維護；新課程避免把 Firebase 當必要依賴 [S7] |
| Cloudflare | 一般全球服務不等於「中國網路」；Cloudflare 的 China Network 是另行由合作方提供、面向 Enterprise 的產品 [S8] | Pages/Workers 可作國際層或測試；不要承諾境內訪客速度/可達性；課堂準備本機與境內 deploy fallback |
| ChatGPT | OpenAI 官方 supported list 未列中國大陸，並明言從未列地區使用可能導致 blocked/suspended [S2] | VPN/proxy 正常且帳號合法可留作 high-quality chat；不作唯一教學工具 |
| Codex | 使用 OpenAI 帳號與服務可達性；因此承受 ChatGPT 同一區域、付款與網路風險 | VPN hybrid 的 coding agent；學生不應因一堂課被迫訂昂貴方案 |
| Claude | Anthropic 的 Claude.ai/API 支援清單未列中國大陸 [S3] | VPN/proxy 時可作第二意見；不作 no-VPN baseline |
| Claude Code | CLI、本機 repo/terminal 可存在，但認證/API/模型請求依賴 Anthropic；同樣有服務區域與付費/帳號限制 | VPN hybrid 的強力 agent；不是大陸唯一可交作業的方案 |

### GitHub、npm、部署的操作原則

1. **本機是第一個真相來源。** 每個可用狀態先 `git status`、`git add`、`git commit`；push 失敗不是丟失作品。
2. **不要在 session 現場換 registry 當魔法修復。** 先看 `npm config get registry`、保留 `package-lock.json`，再針對安裝問題切換；避免將 token、私有 registry 或未驗證鏡像混在一起。
3. **網站需要兩個「看得到」的出口。** 開發時 `npm run dev` / localhost；需要分享時，GitHub Pages 可以保留給日本與全球同學，另選一個她可在中國帳號/網路下建立的靜態託管作 fallback。若日後公開面向大陸使用者，需另行確認域名、ICP 與服務商規則，這不是本堂課要即興處理的事。

## 3. China-native AI Landscape

### General AI：對話、研究、讀文件、構思

| 服務 | 適合做什麼 | 對 Azunyan 的位置 | 注意事項 |
| --- | --- | --- | --- |
| DeepSeek | 中文問答、推理、程式片段、API experiment | 低成本的日常「先想清楚」層；也能當 agent 背後模型的候選 | 不等於完整 IDE agent；不要把敏感 repo 或 API key 貼入 chat。API 以實際帳戶價格頁為準 [S9] |
| 豆包 / Doubao | 中文對話、文件、圖片/多模態、學校生活與內容構思 | 中文 UX 很順手的 general companion | API、模型、免費額度與產品線變動很快；它不是自動等於 repo agent [S10] |
| Kimi | 長文件、研究、中文/英文閱讀與複雜推理 | 很好的「先讀 README/需求、再寫任務規格」候選 | 官方 API 文件目前列出 1M context 的 Kimi K3，且有 code model；web app 與 API entitlement 分開看 [S11] |
| 通義千問 / Qwen | 中文、英文、多模態、開源模型生態與 API | 可作 general AI，也可接上 coding/terminal agent 路線 | Qwen Chat、DashScope、Qwen Code、通義靈碼是不同產品面；不要把帳號/免費額度混為一談 [S12][S13] |
| 智譜清言 / GLM | 中文研究、coding/model alternative | 當備用 general model；CodeGeeX/GLM coding 生態可觀察 | 先用同一試題驗證日文與 repo 任務，不需要一次訂閱 |

### AI Coding：能理解 repo、改多檔、跑 terminal、debug 的候選

| 工具 | Agentic 能力（以官方資料） | macOS / IDE / Git | 帳號與成本的實務預期 | 適合的角色 |
| --- | --- | --- | --- | --- |
| **Qoder CN（原通義靈碼 / Lingma）** | 官方列工程感知、文件編輯、終端命令、問題排查與 coding agent [S13] | IDE 與主流 IDE integration 需於當日確認；以 Git repo 開啟即可驗證 | 2026-05-20 結束個人 Pro 限免；免費體驗為兩週與 300 Credits，之後能力有限 | 能力合格，但目前不再是免費額度優先候選 |
| **TRAE 中國版** | 官方定位為 AI coding engineer；IDE / SOLO 可讀 repo、改檔、跑 terminal、review diff [S14] | 有 macOS 版；VS Code 系介面對 Antigravity 使用者遷移摩擦較低 | 2026-07-31 起採點數制；新戶 4,000 點，另有每月通用點與 TRAE Work 每日簽到點 | **No-VPN 第一個 agent 測試者** |
| **CodeBuddy（騰訊）** | 中國本地 code assistant/IDE agent 產品；以其目前官方版本的 agent/IDE 說明為準 [S15] | macOS/VS Code family integration 要用她的電腦驗證 | 可能偏向 QQ/微信/騰訊雲帳號與中國手機；學生版與雲資源不要假定免費 | 與 Lingma 並列的備選，而非預設多裝一堆 |
| **Qwen Code + Qwen3-Coder** | 開源 terminal coding agent；GitHub 說明為「lives in your terminal」，Apache-2.0 [S12] | 最接近 Codex/Claude Code 的 terminal mental model；可連 compatible API 或可用模型端點 | CLI 免費不代表模型 inference 免費；需要 Node、API key/帳戶或合適的本地/雲端模型 | **想保留 international developer ecosystem 手感的第二階段選項** |
| **Kimi code model / API** | 官方文件列 Kimi K2.7 Code：256K context、文字/圖像/影片輸入；K3 支援 Claude Code agent 場景與 1M context [S11] | 主要是 model/API 層，可配合 compatible client/agent | API 付費是 token-based；註冊與實名規則以當日平台為準 | 長 context / repo reasoning 的模型備用，非零設定新手 IDE |
| **Baidu Comate / CodeGeeX / GLM coding** | CodeGeeX4 開源頁列 repo Q&A、code interpreter、function calling 等能力 [S16] | 插件/IDE/模型層各異，需單獨驗證 | 常見中國帳號/手機門檻；free tier 會變 | 當前三者無法登入、模型品質不合適時的第三候選 |

### 這些工具不是同一類東西

「有 1M context」不代表它能安全修改妳的 repo；「有 IDE」也不代表它能自己跑測試；「免費」通常也不等於不限速、不需要帳號。選擇時拆成四件可觀察的能力：

```text
Chat / research：能否讀需求、提出選項？
Repo agent：能否定位檔案、提出小 diff、說明改了什麼？
Local execution：能否（在授權後）跑 npm / test，並回報錯誤？
Version safety：能否在 commit 前讓人看 diff、撤銷錯改？
```

## 4. Coding Agent Comparison：從 Azunyan 的角度

以下不是 benchmark 排名，而是她在第一週應實際填寫的比較卡。所有「免費」均指產品宣傳或可取得的個人起點，**不是永久配額承諾**；登入、實名與學生身份條件應在她自己的帳號畫面確認。

| 準則 | Antigravity + Gemini | Lingma | TRAE | CodeBuddy | Qwen Code / Kimi API |
| --- | --- | --- | --- | --- | --- |
| 中國境內可靠度 | 低；依 Google/代理 | 高的候選，需校園網實測 | 高的候選，需校園網實測 | 高的候選，需校園網實測 | 取決於模型 endpoint/帳戶；CLI 本機穩 |
| 初始成本 | 既有資格可低；但服務/付款風險 | 官方稱個人免費 [S13] | 配額/政策需確認 | 配額/政策需確認 | CLI 開源；API 按量或平台額度 |
| 中國手機/實名 | Google 帳號/付款可能更是障礙 | 預期需中國帳號/手機；實名依功能 | 預期需中國手機/帳號 | 預期需騰訊帳號/手機 | API 平台常需中國手機；實名/付費另看 |
| Mac | 有，但 agent 依網路 | 應在 macOS 安裝頁驗證 | 有 macOS 路線，實測 | 安裝方式要實測 | 終端最跨平台 |
| Repo / terminal | 強，但不穩 | 官方明列工程/terminal [S13] | 產品定位為 agentic IDE [S14] | 需以產品版實測 | 取決於 agent client，最接近 CLI mental model |
| GitHub integration | GitHub/API 可達性仍是第二個風險 | 可操作本機 Git；push 仍受 GitHub 網路影響 | 同左 | 同左 | 同左 |
| 中文 / 日文 / 英文 | 三語均強；中文網路問題 | 中文最自然；日英要用真題測 | 中文 UX 優勢；日英要測 | 中文 UX 優勢；日英要測 | Qwen/Kimi 可中英；日文輸出需真題測 |
| 多模態 / context | 模型能力強但不可當可用承諾 | 依版本 | 依版本 | 依版本 | Kimi 官方列 K3 1M、K2.7 Code 256K + 多模態 [S11] |
| privacy | 程式碼上傳至 Google | 程式碼/telemetry 送阿里雲服務的條款須讀 | 送字節相關服務的條款須讀 | 送騰訊相關服務的條款須讀 | API 內容會送模型供應商；key 絕不可 commit |

### 共同的 privacy 規則

- 課堂 repo 用公開範例或不含個資、學校帳號 token、支付資料的專案。
- `.env`、`*.pem`、service-account JSON、GitHub token 一律不貼入 chat、agent context 或 commit。
- 先讀工具的資料保留、training/opt-out、企業資料條款；「中國本地」不是「不會上傳」，「國際」也不是「自動更私密」。
- 讓 agent 有 terminal 權限前，先看它是否會列出命令並要求確認；初學者應避免一鍵 `rm`、全域 package install、批次改檔。

## 5. Antigravity in Mainland China Investigation

### 元件拆開看

| 層 | VPN 關閉的預期 | VPN/proxy 正常時的預期 | 課前 5 分鐘驗收 |
| --- | --- | --- | --- |
| IDE binary / 開既有資料夾 | 本機通常可開；更新/下載未必 | 應可開 | 開舊 repo、`git status`、`npm run dev` |
| Google login | 非正式個人支援，常見阻塞/登入循環 | 可能可登入，但仍取決於帳號/地區/風險判定 | 登出/重新整理不要在課堂才做；確認帳號已在 IDE 顯示 |
| Gemini backend / agent request | 不應假定可用 | 可用才視為 international layer | 請它只讀 README，回覆一句摘要 |
| model / extension download | Google/CDN 依賴，易失敗或慢 | 可下載但跨境品質仍有波動 | 不在上課現場第一次下載大檔 |
| GitHub interaction | IDE 端可有 Git，但 remote access 另計 | 同左 | `git fetch` 或小型 `git push` 到測試 branch |

官方證據只足以說明它的 Gemini 層沒有把中國大陸個人使用者列為一般支援；不能從官方清單推論每次都必然無法連。相反地，社群文章 [S20][S21] 可證明使用者確實遇到區域限制/登入轉圈並採取代理或區域設定處理，**但它們不是 Google 支援文件，也不是對安全、合規或長期穩定性的背書。**

### 低遷移方案

1. 保留 Antigravity、現有 repo、GitHub account、`package-lock.json`；不做「把專案轉格式」的遷移。
2. 安裝 VS Code（基線）與一個國產 agent（首測 Lingma 或 TRAE）。用同一個 repo 開啟。
3. 用完全相同 prompt 做小修改，例如：「只改首頁 welcome copy、加一個 campus note card；請先列會改哪些檔案，完成後跑既有 dev/test 指令，不要重構。」
4. 比較結果只看：登入是否順、diff 是否小而清楚、能否 run、她能否用日文/中文把問題說清楚、能否 revert。
5. 成功的一個成為 primary；另一個保留。Antigravity 等 VPN 穩定後再作同題比較，不倒過來。

## 6. Primary / Backup Stack Recommendation

### Stack A — China-native / No-VPN Survival Stack

這套的目標是「即使 VPN 完全不可用，仍能把一個學生 project 做完」，不是複製國際 SaaS 的每個功能。

```text
Idea / research       DeepSeek、Kimi 或 Qwen Chat（任選一個 daily chat + 一個 backup）
AI discussion         同上；把需求整理成 acceptance criteria
Coding agent          先測 TRAE 中國版；只有登入或實測失敗才改測 Qoder CN
Editor / local run    VS Code 或選中的 IDE + Node.js + terminal
Version control       Git 本機 commit；GitHub push 可用時同步
Deploy                localhost 驗收 → 國內可註冊的靜態託管 fallback；GitHub Pages 作額外國際展示
```

**第一週設定順序（不要一次安裝十個工具）：**

1. 確認 Node、Git、VS Code 與現有 repo 都在；`npm install` / `npm run dev` 能跑。
2. 註冊一個 general AI（建議從她介面最願意用的 DeepSeek/Kimi/Qwen 開始），用它讀 repo README 並寫出一個小任務規格。
3. 安裝 TRAE 中國版，完成一次 1–3 檔的小 diff、畫面驗收、`git diff`、commit。
4. 只有 TRAE 登入或實測失敗時才裝 Qoder CN；不要為了比較而同時安裝。
5. 建一個 `WORKFLOW.md`（日後可再教）記錄：primary、backup、登入方式、常用 run command、deploy URL、不能交給 agent 的資料。

### Stack B — International Hybrid Stack

若 VPN/proxy 與她的原有帳號在大陸可正常、合規且穩定使用，**不應為了「中國化」而丟掉已熟悉且品質高的 Antigravity/Gemini、Codex 或 Claude Code。** 但要改成有 fallback 的形狀：

```text
International best-work layer   Antigravity + Gemini，或 Codex / Claude Code（選她已付費且最熟的一個）
China-native continuity layer   Lingma 或 TRAE（能在 VPN 失效時完成小任務）
Discussion / research           ChatGPT/Claude/Gemini 可用時使用；DeepSeek/Kimi/Qwen 作境內 backup
Repo & local                    VS Code + Git + Node（不依賴任一 agent）
Deploy                          GitHub Pages/Cloudflare 作國際層；本機與境內靜態 deploy 為大陸驗收層
```

規則很簡單：任何專案的第一個 commit、`npm run dev`、build 與本機資料都不依賴 VPN；國際 agent 是加速器，不是 single point of failure。她也不必同時買 ChatGPT、Claude、Gemini 三份訂閱：先用現有帳號，月末依實際用量再決定。

## 7. Risks / VPN Dependencies

| 風險 | 為何會發生 | 預防 / fallback |
| --- | --- | --- |
| 課堂一開始就卡登入 | Google/OpenAI/Anthropic 未將中國大陸個人列一般支援 [S1][S2][S3]；中國產品也可能要手機驗證 | 提前 24 小時完成帳戶登入；課堂不以「註冊國際帳號」為活動 |
| AI agent 改太多 | 非工程背景學生容易把「幫我做 app」交成大改 | 每次只一件 user-visible change；先要求 plan/files；看 diff；run；commit |
| GitHub/registry 斷續 | 跨境路由、CDN、release/raw URL 與 registry 不同 | repo 本機、lockfile、local commit；備好已 `npm install` 過的 starter；不在 deadline 前才裝依賴 |
| Firebase/Cloudflare demo 打不開 | Google/跨境 service 或 China Network 不是一般 consumer product [S7][S8] | Localhost 先驗收；展示 URL 有第二入口；把後端課題與本堂分開 |
| 付款/實名措手不及 | 中國產品常有手機/實名/支付；國際產品有地區/卡/ToS | 不要求學生為課購買多份方案；用個人 free tier + 老師 demo；付費前確認條款 |
| code/privacy 外流 | agent 為讀 repo/跑任務須上傳 context | 使用乾淨 classroom repo；remove secrets；讀條款；關閉不必要 telemetry（若產品提供） |

## 8. Recommended Session 10 Teaching Direction

### 為何是「建立能工作的 stack」，不是工具導覽

Session 5 教她先把大想法切小、自己選一個做得到的；Session 7 明確把她放在 product owner/director，而 AI 是小步執行者；Session 8 再把重複流程拆為 inputs、steps、success criteria、human approval。新加入的 Session 9 把重點從繼續寫網站移到「人提出感覺與判斷、AI 產生選項並蒸餾對話、最後仍由人保留或否決」；它也刻意用 A/B/C 小選擇照顧較被動的課堂狀態。Session 10 應把這四個能力用在她自己的新環境：

```text
我的限制（網路、帳號、預算）
→ 我設計可驗收的工具試驗
→ 我做選擇而不是被工具選擇
→ 我有 primary，也知道失敗時怎麼完成
```

課堂提問也應沿用 Session 9 的低壓選擇方式：不要從「妳想用哪個 AI？」開始，而是讓她在已登入的兩個候選中，以同一個小任務回答「哪個 diff 比較看得懂？」「哪個比較像妳願意下週再打開的工具？」「這個結果要保留、修改，還是不用？」這讓 stack selection 本身成為她練習判斷與驗收，而不是老師替她選工具。

### 約 2 小時課程骨架（是教學方向，不是本次要建立的教材）

| 時間 | 學生做什麼 | 老師守住什麼 |
| --- | --- | --- |
| 0:00–0:15 | 畫出她原本的 Japan stack；標出「本機」「需要帳號」「需要網路」 | 不是考工具名；讓她說出已經會的 Git/React/agent 經驗 |
| 0:15–0:30 | 寫自己的 success criteria：能登入、讀 repo、改 1–3 檔、run、commit | 把「能打開 app」和「能完成 workflow」分開 |
| 0:30–0:55 | 在 no-VPN（或視同 no-VPN）的實際網路測一個中國 agent | 用已登入工具；不要把註冊/實名卡住變成主菜 |
| 0:55–1:20 | 用相同 mini task 比較第二個 agent 或她的 Antigravity（若可用） | 同一 acceptance criteria；她評估可理解度與可靠度，不做模型八卦 |
| 1:20–1:45 | 選 primary + fallback；寫 6 行 personal `WORKFLOW.md`；用 primary 完成小 modification | 一次只改小步，先 diff、run、驗收 |
| 1:45–2:00 | `git status` → commit → push（可行則 push）→ 回顧失敗時怎麼繼續 | commit 是完成定義的一部分；push/部署失敗也要能說明 fallback |

可直接給她的 agent prompt：

```text
We are testing whether you can be my reliable coding assistant.

First inspect this repository and tell me:
1. what command starts the project,
2. which 1–3 files would need to change for this task,
3. how I can verify it.

Task: [her chosen small change]

Rules:
- make the smallest useful change;
- do not rewrite the app or change the stack;
- do not touch secrets or deployment settings;
- show me the diff before any irreversible step;
- after editing, run the existing check if it is safe and explain expected vs actual.
```

這堂的完成品不是「安裝了最多工具」，而是：她能說出「我的 primary 是 X，X 不能用時我會 Y；我的 repo 還在、本機能 run、我已經 commit」。這正延續 Session 5 的尺度感、Session 7 的 director 角色、Session 8 的可重複 workflow 設計。

## 9. Three Small Project Candidates

以下只提供候選，不替 Azunyan 決定。共同規格：React/static 小 repo、1–3 個 visible changes、localStorage 可選、不必接 API、不含登入/付款/真實個資；目的是測 stack，不是追求完整產品。

1. **XMU First-Week Survival Board**  
   三欄卡片：`to do / ask / discovered`，可新增、拖移或勾選一項，資料存在 localStorage。很貼近剛到廈大的一週，也能驗證 JSON/data flow、UI 修改與本機 run。

2. **廈門散步 / 食堂 / 校園發現卡片集**  
   做一個能新增照片 placeholder、地點、日文/中文一句備註與 tag 的卡片頁；先只做 fake data 和 filter。它讓她測試多語文案、資料結構與 creator-style UI，而不依賴地圖或外部 API。

3. **日中英「要問的話」Phrase Pocket**  
   為宿舍、選課、銀行、校園生活建立 phrase cards：日文原句、中文說法、英文備援、使用情境。先新增/分類/搜尋/收藏，不做翻譯 API。它延續 KoreanPhraseBuddy，但外殼回到她真實的新生活。

## 10. Sources

所有連結於 **2026-08-26** 查詢；產品計價、模型名、配額、註冊與區域資格可能之後變更。官方頁面支持產品能力/區域聲明；社群頁面只作「有人遇到此問題」的旁證。

- **[S1] Google Help — Where you can use the Gemini web app**（官方；列出 *Mainland China (Workspace only)*，個人一般服務判讀依此）：<https://support.google.com/gemini/answer/13575153?hl=en>
- **[S2] OpenAI Help — ChatGPT Supported Countries**（官方；未列中國大陸，並說明未支援地區的存取風險）：<https://help.openai.com/en/articles/7947663-chatgpt-supported-countries>
- **[S3] Anthropic — Supported countries and regions**（官方；Claude.ai/API 清單未列中國大陸）：<https://www.anthropic.com/supported-countries>
- **[S4] Google AI for Developers — Gemini API available regions**（官方 product eligibility reference；查詢時頁面有 redirect behavior，課前應再次確認）：<https://ai.google.dev/gemini-api/docs/available-regions>
- **[S5] GitHub Docs — GitHub and Trade Controls**（官方；GitHub service/export controls）：<https://docs.github.com/en/site-policy/other-site-policies/github-and-trade-controls>
- **[S6] npmmirror**（鏡像服務首頁；僅作中國 npm fallback 的存在證據，不等於安全背書）：<https://npmmirror.com/>
- **[S7] Firebase — Learn about Firebase projects / Google Cloud dependencies**（官方架構資料；本報告的「不作大陸唯一後端」是基於 Google endpoint 依賴與 [S1] 的風險設計）：<https://firebase.google.com/docs/projects/learn-more>
- **[S8] Cloudflare — China Network**（官方；China Network 為獨立 Enterprise/partner offering）：<https://www.cloudflare.com/network/china/>
- **[S9] DeepSeek Platform — API pricing**（官方，價格須以 live page 為準）：<https://platform.deepseek.com/api-docs/pricing>
- **[S10] 火山引擎 — 豆包**（官方產品入口）：<https://www.volcengine.com/product/doubao>
- **[S11] Kimi Platform — Quick start / models**（官方；OpenAI-compatible API、K3 1M context、K2.7 Code 256K/multimodal 的當前宣告）：<https://platform.kimi.com/docs/overview.md>
- **[S12] Qwen Code GitHub**（官方開源 repo；terminal coding agent、Apache-2.0）：<https://github.com/QwenLM/qwen-code>
- **[S13] 通義靈碼官方**（官方；個人免費、工程感知、檔案編輯與 terminal/agent 能力）：<https://lingma.aliyun.com/>
- **[S14] TRAE 官方**（官方產品入口）：<https://www.trae.ai/>
- **[S15] CodeBuddy 官方**（官方產品入口）：<https://www.codebuddy.cn/>
- **[S16] CodeGeeX4 GitHub**（官方開源 repo；repo Q&A/code interpreter/function calling 等定位）：<https://github.com/zai-org/CodeGeeX4>
- **[S20] CSDN — Antigravity 地區限制登入的中國使用者排障文**（社群經驗，非官方、非推薦 proxy 指引）：<https://blog.csdn.net/qq_46987323/article/details/162188897>
- **[S21] Linux.do — Antigravity / Gemini Pro 使用討論**（社群經驗，非官方、不可作可用性保證）：<https://linux.do/t/topic/1423250>
