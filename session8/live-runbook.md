# Session 8 Live Runbook

> 這份是 Jones 上課時的現場決策卡。目標是讓 Session 8 不會因為 Record & Replay 權限、帳號、工具版本、登入狀態卡住就失去主軸。

---

## 課前檢查

### Jones 環境

- [ ] Codex app 可開啟
- [ ] Codex 已登入
- [ ] Computer Use 可用
- [ ] macOS Screen Recording permission 已授權
- [ ] macOS Accessibility permission 已授權
- [ ] Chrome extension 可用，或至少能示範概念
- [ ] 準備一張非敏感測試圖片
- [ ] 準備一段測試 caption
- [ ] 不使用真實密碼 / 2FA / 私密 DM 作為錄製內容

### Azunyan 環境

- [ ] 是否已買 ChatGPT Plus / Pro / 其他可用 Codex 方案
- [ ] 是否有 Mac 可以跑 Codex app
- [ ] 是否願意開 Screen Recording / Accessibility permission
- [ ] 是否有自己的網站 repo `DouceReverie`
- [ ] 本機可否 clone / pull / run 網站

如果任何一項不確定，今天就走 Demo + Website fallback，不硬錄。

---

## 開場講法

```text
今天不是要再多加幾個 button。

今天要學的是：
怎麼把一個創作者會重複做的流程，拆成 AI 可以學會的小 workflow。

如果工具順利，我們會看 Record & Replay 怎麼把示範變成 skill。
如果工具今天卡住，我們也不浪費時間，先把 workflow 設計好，放進妳的網站。
```

---

## 路線判斷

### Route A：工具都順，做 live demo

條件：

- Codex app 可用
- Record & Replay 可見
- Computer Use 權限正常
- 不需要處理登入 / 2FA

做法：

```text
1. Jones demo 一個 X / Threads dry-run post
2. 停在 publish 前
3. 讓 Codex 產生 skill
4. 讀 skill 草稿，看它學到了什麼
5. 問 Azunyan：如果是妳，妳要 AI 學哪個 workflow？
6. 回到 DouceReverie，加 AI Creator Workflow 頁面
```

### Route B：她有 Plus / Pro，但環境未準備好

條件：

- 她可能能用 Codex
- 但現場權限、Chrome extension、Record & Replay 入口不穩

做法：

```text
1. Jones demo 概念，不要求她馬上錄
2. 她負責設計自己的 workflow inputs / rules / success criteria
3. 把這份 workflow 放進 DouceReverie
4. 下次再用她自己的環境錄
```

### Route C：她還沒買方案或工具不可用

條件：

- 沒有 Codex app / Plus / Pro
- 或不想現場授權 macOS permissions

做法：

```text
1. 完全不硬錄
2. 用 Jyn Null 當案例講 creator workflow
3. 幫她做 DouceReverie 的 AI Creator Workflow 頁
4. 讓她寫自己的第一份 skill blueprint
5. 把購買 / 設定 Codex 留成課後選項
```

---

## 最小 demo workflow

建議不要用 Instagram 當第一個 demo。

優先順序：

```text
1. X compose dry-run
2. Threads compose dry-run
3. Website draft update
4. Instagram guarded demo only if already很順
```

### X / Threads dry-run

Input:

```text
image_path
caption
expected_account
publish_mode = dry-run
```

步驟：

```text
1. 打開 compose
2. 確認 account
3. 上傳圖片
4. 貼 caption
5. 檢查 preview
6. 停在 publish 前
7. 不按 publish
```

成功標準：

```text
帳號正確
圖片正確
caption 完整
沒有發出去
學生理解哪一步是人要確認
```

---

## DouceReverie 實作範圍

不要做太大。先選一種：

### Option 1：新增首頁 section

適合：

- 沒有 routing
- 專案很小
- 時間不夠

Section title:

```text
AI Creator Workflow
```

內容：

```text
My Content Themes
My Posting Checklist
My AI Tools
Things AI Should Never Do Without Asking Me
```

### Option 2：新增 route/page

適合：

- 專案已有 routing
- 網站結構清楚
- 時間足夠

Route:

```text
/creator-workflow
```

頁面：

```text
Creator Launch Page
Content themes
Posting workflow
AI safety rules
Future reusable skill
```

---

## 不要碰的坑

今天不要主動做：

- Firebase project setup
- Auth / login
- Database
- Security rules
- Real public post
- Multi-platform automation
- YouTube upload live demo
- Instagram first demo
- Password / 2FA recording
- 私人帳號 / DM / notification 操作

可以簡短說：

```text
這些都可以是未來課題，但今天先守住 creator workflow 的核心概念。
```

---

## 現場如果卡住

### Record & Replay 找不到

說法：

```text
工具今天可能還在 rollout 或權限沒準備好。
這不影響今天的主題。
我們先把 workflow 設計成 checklist，等工具準備好，下次就可以錄。
```

轉向：

```text
打開 creator-agent-prompts.md 的 Fallback prompt。
```

### 網站跑不起來

做法：

```text
1. 不硬解太久
2. 先請 Codex inspect project
3. 貼錯誤訊息
4. 只做最小修復
5. 如果超過 15 分鐘，改成只寫內容和頁面設計草稿
```

### 學生覺得太抽象

回到生活問題：

```text
如果妳每週都要發一篇旅遊照片，
AI 可以幫妳準備什麼？
妳想自己確認什麼？
哪一步最無聊？
```

---

## 收尾檢查

課程結束前確認：

- [ ] 她能用一句話解釋 creator workflow
- [ ] 她知道 AI 可以準備，但不該自己公開發文
- [ ] 她有一份自己的 workflow checklist
- [ ] `DouceReverie` 有新增或規劃 AI Creator Workflow 頁面
- [ ] 她知道下一次如果工具準備好，可以錄第一個 skill

最後一句：

```text
今天妳不是只學了網站功能。
妳開始學會把自己的創作流程變成 AI 可以幫妳運轉的系統。
```

