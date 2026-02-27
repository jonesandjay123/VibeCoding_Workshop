# S4：Git Branch 教學腳本 — 平行宇宙

> **對應 Block 4（2:00 – 2:40）**  
> **核心體驗：** 切換 branch 時看到檔案出現/消失

---

## 🎯 教學目標

學完這段，她能：
1. 說出「Branch 是安全實驗空間」
2. 建立、切換、合併 branch
3. 用 `git log --oneline` 看專案時間軸

---

## 📖 教學流程

### Step 1：比喻建構

> 💬 Jones：「你有玩過『選擇會影響結局』的遊戲嗎？在選擇點存檔，先試 A 路線，不喜歡就回到存檔點走 B。Branch 就是這個——平行宇宙。」

```
main ─────●──────────────────── 正式版（安全）
           ╲
            ╲─── ● ─── ● ──── 實驗區（隨便搞）
```

> 💬 Jones：「main 是正式版。Branch 是實驗室。搞砸了 main 不受影響。」

---

### Step 2：基本指令

| 指令 | 遊戲比喻 | 說明 |
|------|---------|------|
| `git branch` | 我在哪個宇宙？ | 看所有 branch，星號 = 目前位置 |
| `git checkout -b 名稱` | 開一個新宇宙 | 建立 + 切換到新 branch |
| `git checkout main` | 回到正式版 | 切回 main |
| `git merge 名稱` | 把實驗成果搬回正式版 | 合併 branch |

---

### Step 3：實作流程

#### 3a — 確認起點
```bash
cd ~/Desktop/azunyan.hp
git pull                    # 拿最新版
git branch                  # 確認在 main
```

#### 3b — 建立 Branch
```bash
git checkout -b feature-json-storage
git branch                  # 星號在新 branch 了！
```

#### 3c — 做改動 + commit
加入打卡頁面檔案，然後：
```bash
git add .
git commit -m "加入打卡功能（localStorage 版）"
```

#### 3d — 切換的魔法 🔥
```bash
git checkout main           # 切回 main
# → 用 Finder 看：打卡檔案不見了！

git checkout feature-json-storage  # 切回 branch
# → 打卡檔案又回來了！
```

> 💬 Jones：「這就是平行宇宙。兩邊互不影響。」

#### 3e — Merge
```bash
git checkout main
git merge feature-json-storage
# → main 也有打卡功能了！
```

#### 3f — 看時間軸
```bash
git log --oneline
```

---

### Step 4：Merge Conflict（只帶過）

> 💬 Jones：「有時候兩個 branch 改了同一行，Git 會說『你們在吵架，我不知道聽誰的』。這叫 merge conflict。今天不深入，遇到再教你。」

---

## ⚠️ 不要教的

- ❌ `git rebase`
- ❌ detached HEAD
- ❌ `git stash`
- ❌ remote branch / tracking
- ❌ merge conflict 的解法（只帶概念）
- ❌ Pull Request（下次可以教）

---

## 🛠️ 備用方案

| 問題 | 應對 |
|------|------|
| checkout 時有 uncommitted changes | 先 `git add . && git commit -m "WIP"` |
| 她忘了 git add/commit | 帶她回顧 Session 2 的流程 |
| Finder 沒即時更新 | 按 Cmd+Shift+. 顯示隱藏檔，或重新打開資料夾 |
