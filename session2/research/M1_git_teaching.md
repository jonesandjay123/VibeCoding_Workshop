# M1: git 初學者教學資源與比喻

> **模組:** M1_git_teaching  
> **Phase:** 1 (基礎研究)  
> **完成時間:** 2026-02-03 ~21:05 EST  
> **Brave API 搜尋:** 5 次  
> **目標學生:** 櫻井妹妹 (Azunyan) — 大二東亞史，中日雙語，Mac 用戶

---

## 一、最佳比喻集（針對非技術背景學生）

### 🎮 電玩存檔比喻（最推薦！）

**來源:** Medium (Kyle Hayes), freeCodeCamp (Bob Ziroll), Reddit 多篇

這是目前最廣泛使用、對初學者最有效的比喻：

| Git 概念 | 電玩比喻 | 說明 |
|----------|---------|------|
| **Repository** | 遊戲本身 | 整個遊戲世界，所有進度都在這裡 |
| **git init** | 開始新遊戲 | 建立一個全新的存檔空間 |
| **Working Directory** | 目前在玩的畫面 | 你正在做的所有事情 |
| **git add** | 選擇要存檔的東西 | 「我要存這個進度」（準備階段） |
| **git commit** | 按下存檔鍵 | 正式記錄當前狀態，附上一句備忘 |
| **git push** | 上傳到雲端存檔 | 把進度同步到 GitHub（線上備份） |
| **git pull** | 下載雲端存檔 | 從 GitHub 拿回最新進度 |
| **git clone** | 下載朋友的遊戲存檔 | 把別人的專案複製一份到自己電腦 |
| **Branch** | 平行世界 / 分支路線 | 「如果我走另一條路會怎樣？」 |
| **Merge** | 合併路線 | 把兩條路線的進度合在一起 |

**教學話術建議：**
> 「你知道打 RPG 的時候，打 Boss 前會先存檔嗎？git 就是幫你的程式碼做這件事。每次存檔（commit）都會記住那個瞬間的狀態，萬一搞砸了可以回到那個存檔點。」

### 📸 相簿比喻（補充用）

**來源:** freeCodeCamp

- 寫程式 = 拍照（可以拍很多張，不影響相簿）
- git add = 選出要放進相簿的照片（staging）
- git commit = 把照片黏到相簿上，寫上日期和說明
- 之後隨時可以翻回去看那一頁

**適合說明 staging area 的概念**：「不是所有改動都要存，你可以選要存哪些」

### 📝 Google Docs 版本歷史比喻

**適合有用過 Google Docs 的學生：**
> 「你知道 Google Docs 可以看到每次修改的歷史嗎？git 就像一個更強大的版本，不只是文字，任何檔案都可以追蹤。而且你可以自己決定什麼時候『拍一張快照』。」

---

## 二、推薦教學資源

### 互動式學習（上課可以 demo）

1. **Learn Git Branching** — https://learngitbranching.js.org/
   - ⭐ 最推薦的互動工具
   - 視覺化展示 commit 和 branch
   - 有中文介面
   - **上課用法：** 打開來 demo，讓她看到每個指令的效果

2. **Oh My Git!** — https://ohmygit.org/
   - 遊戲化學 Git，卡牌式操作
   - 對超級初學者友好
   - **適合課後推薦**

3. **A Grip On Git** — https://agripongit.vincenttunru.com/
   - 簡潔的互動式視覺教學
   - 每一步都有動畫

### 日文資源（Azunyan 可用）

4. **サル先生のGit入門** — https://backlog.com/ja/git-tutorial/
   - ⭐ 日文最知名的 Git 教學
   - 用猴子角色圖解，超級可愛
   - 分入門/發展/PR 三個程度
   - **教學建議：** 課後推薦給她「先看入門編就好」

5. **Qiita 圖解 Git 完全版** — https://qiita.com/Sicut_study/items/0318cc136c189b179b7f
   - 一篇就涵蓋所有基礎
   - 圖解豐富

6. **YouTube 圖解 Git 入門** — https://www.youtube.com/watch?v=jztTXY5AJjs
   - 日文影片教學
   - 視覺化說明

### 文科生/設計師視角（共鳴感高）

7. **Web デザイナーが Git を始めた話** — https://techracho.bpsinc.jp/nishi/2018_01_26/51459
   - 非工程師文系設計師的 Git 學習心得
   - **關鍵引言：** 「コマンドラインや英文を見ると頭痛がするタイプ」（看到命令列和英文就頭痛的類型）
   - **共鳴點：** Azunyan 可能有同感，用來說明「不只有工程師在用 git」

8. **デザイナーにも Git/GitHub を使ってもらう話** — https://paiza.hatenablog.com/entry/2017/12/21/
   - 公司讓設計師開始用 Git 後發現好處多多
   - **教學切入：** 「連設計師都在用了，做品牌/KOL 更需要」

---

## 三、針對 Azunyan 的教學策略建議

### 她已經會的
- GitHub（手動上傳檔案）
- HTML/CSS 基礎
- 有實際作品 azunyan.hp

### 課堂目標（最小可行知識）
只教 **6 個指令**，其他不需要：
```
git clone    → 下載專案
git status   → 看現在狀態
git add .    → 選擇要存的東西
git commit -m "訊息"  → 存檔
git push     → 上傳到 GitHub
git pull     → 下載最新版
```

### 教學流程建議
1. **從她的作品開始**：先 clone 她的 azunyan.hp repo
2. **做一個小改動**：改一行 HTML（比如改標題文字）
3. **走完 add → commit → push 流程**：讓她在自己的 repo 看到改動
4. **重複一次**：加一張圖片或改 CSS 顏色
5. **展示 commit history**：「看，這就是你的存檔紀錄」

### 避免的坑
- ❌ 不要教 branch（第二堂課太早）
- ❌ 不要講 merge conflict
- ❌ 不要解釋 HEAD、detached head 等術語
- ❌ 不要用 git rebase
- ✅ 全程用 Terminal.app（Mac 內建）
- ✅ 鼓勵她用中文或日文寫 commit message

---

## 四、教學小道具

### commit message 範例（她能理解的語氣）
```
git commit -m "改了首頁標題"
git commit -m "加了新的照片"
git commit -m "CSS 顏色從粉紅改成紫色"
git commit -m "修正了 typo"
```

### 概念圖（可以畫在投影片上）
```
你的電腦                    GitHub（雲端）
┌─────────┐   git push →   ┌──────────┐
│ 工作目錄  │               │  Repository │
│ (你在改的)│   ← git pull  │  (備份)     │
└─────────┘               └──────────┘
     ↓
  git add
     ↓
  暫存區 (staging)
     ↓
  git commit
     ↓
  本地存檔 ✓
```

---

## Handoff Notes（給下一個模組的筆記）

- **電玩存檔比喻** 是最有效的教學工具，後續模組（S2_git_script）應以此為核心敘事
- **サル先生のGit入門** 是日文最佳推薦，可以放進課後資源清單（P4_resource_list）
- Azunyan 已經會用 GitHub 手動上傳，所以重點是「為什麼要用 CLI」→ 答案是「更快、更專業、commit 有記錄」
- 6 個核心指令已定義，S2 教學腳本應按此設計
- Learn Git Branching 適合上課 demo，但只展示 commit 部分，不要碰 branch
