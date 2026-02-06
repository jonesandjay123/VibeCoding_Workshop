# S2: Git CLI 教學腳本
## 🎯 Jones 照著唸/做就能教 Azunyan

> **對象：** Azunyan（大二東亞史，Mac 用戶，有 azunyan.hp repo）  
> **前提：** 她已經會在 GitHub 網頁上傳檔案，但沒用過 Terminal 的 git  
> **核心比喻：** 🎮 電玩存檔  
> **預計時間：** 40–50 分鐘  
> **涵蓋指令：** `git clone` → `git status` → `git diff` → `git add` → `git commit` → `git log` → `git push`

---

## 📋 課前準備（Jones 自己做）

上課前確認：

1. Azunyan 的 Mac 有 git（Terminal 打 `git --version`，如果跳出安裝提示就裝）
2. Azunyan 已經登入 GitHub（瀏覽器）
3. 確認 GitHub 身份驗證可用（SSH key 或 HTTPS token 已設好）
   - 如果還沒設，先帶她設 SSH key（見附錄 A）
4. 準備好 Terminal.app（Mac 內建，Spotlight 搜尋 "Terminal"）

---

## STEP 0：開場 — 為什麼要學這個？
**⏱️ 3 分鐘**

### 🗣️ Jones 說：

> 「你之前是不是都在 GitHub 網頁上一個一個檔案上傳？」

（等她回應）

> 「那其實有點像⋯⋯你每次要交作業，都用 email 一個一個附件夾、一個一個寄。但其實你可以用一個更快的方式——就像 Google Drive 一樣，改完直接同步上去。」
>
> 「今天我教你用 Terminal 來操作 git。聽起來很嚇人對不對？但其實就只有 6 個指令，學完之後你以後改網站只要 10 秒就可以更新到 GitHub 上。」

### 🎮 核心比喻（整堂課都會用到）：

> 「你有打過 RPG 嗎？或是任何有存檔功能的遊戲？」
>
> 「git 就是幫你的程式碼存檔的工具。每次你覺得『好，這個進度我要記住』，就可以存一個檔。萬一改壞了，隨時可以回到上一個存檔點。」
>
> 「而 GitHub 就是你的雲端存檔——像 Nintendo Switch 的雲端備份一樣，電腦壞了，進度還在。」

### 📝 畫一張簡單的圖（可以用紙或白板）：

```
你的電腦                     GitHub（雲端）
┌──────────┐   git push →   ┌──────────┐
│  你在改的  │               │   備份     │
│  檔案們   │   ← git pull   │  （安全）   │
└──────────┘               └──────────┘
```

### ❓ 學生可能會問：

**Q：「我之前在 GitHub 上傳不也可以嗎？為什麼要學這個？」**
> A：「可以啊，但你想想——如果你改了 5 個檔案，你要一個一個上傳。用 git 的話，一行指令就全部同步了。而且 git 會幫你記錄『每一次改了什麼』，以後想回到之前的版本隨時可以。就像遊戲的存檔列表。」

**Q：「Terminal 好可怕⋯⋯」**
> A：「我一開始也這樣覺得！但你今天只要學打 6 行字就好，而且每一行我都會帶你打。你就把 Terminal 當成⋯⋯比較聽話的 Siri。你跟它說什麼，它就做什麼。」

---

## STEP 1：打開 Terminal
**⏱️ 2 分鐘**

### 🗣️ Jones 說：

> 「來，先打開 Terminal。你可以按 `Cmd + 空白鍵`，然後打 Terminal，按 Enter。」

### ⌨️ 操作：

用 Spotlight 開啟 Terminal.app

### 👀 預期畫面：

出現一個黑底（或白底）的視窗，有一行像這樣的文字：
```
azunyan@MacBook ~ %
```

### 🗣️ Jones 說：

> 「這個就是 Terminal。那個 `%` 後面就是你打指令的地方。每打完一行就按 Enter，它就會執行。」
>
> 「你可以把它想成⋯⋯跟電腦傳 LINE。你打一句，它回你一句。」

### ❓ 學生可能會問：

**Q：「那個 `~` 是什麼意思？」**
> A：「那是你的 Home 資料夾，就是你打開 Finder 看到的那個小房子圖示。所有東西的起點。」

---

## STEP 2：git clone — 把你的網站下載到電腦
**⏱️ 5 分鐘**

### 🗣️ Jones 說：

> 「好，現在我們要把你 GitHub 上的網站下載到電腦裡。這個動作叫 `git clone`——clone 就是『複製一份』的意思。」
>
> 「🎮 用遊戲來比喻的話，這就像是『下載朋友的遊戲存檔到你的主機上』。不過這次是下載你自己的。」

### ⌨️ 指令：

```bash
cd ~/Desktop
```

```bash
git clone https://github.com/azunyanchannel/azunyan.hp.git
```

> ⚠️ **Jones 注意：** 如果她設了 SSH key，改用：
> `git clone git@github.com:azunyanchannel/azunyan.hp.git`

### 👀 預期輸出：

```
Cloning into 'azunyan.hp'...
remote: Enumerating objects: 24, done.
remote: Counting objects: 100% (24/24), done.
remote: Compressing objects: 100% (20/20), done.
remote: Total 24 (delta 2), reused 18 (delta 1), pack-reused 0
Receiving objects: 100% (24/24), 856.00 KiB | 2.10 MiB/s, done.
Resolving deltas: 100% (2/2), done.
```

### 🗣️ Jones 說：

> 「看到了嗎？它下載完了！你桌面現在應該多了一個叫 `azunyan.hp` 的資料夾。」
>
> 「我們進去看看：」

### ⌨️ 指令：

```bash
cd azunyan.hp
```

```bash
ls
```

### 👀 預期輸出：

```
2026.jpeg    about.html   index.html   sns.html     todo.html
```

### 🗣️ Jones 說：

> 「看！這些就是你的網站檔案。跟你在 GitHub 上看到的一模一樣。現在它們在你電腦上了，你可以隨便改。」

### ❓ 學生可能會問：

**Q：「clone 跟 download ZIP 有什麼不一樣？」**
> A：「download ZIP 只是拿到檔案的『照片』——那個瞬間的樣子。但 clone 拿到的是整個『遊戲存檔歷史』。之後你可以存新的進度、回到舊的進度、同步到 GitHub，全都可以。」

**Q：「cd 是什麼意思？」**
> A：「cd 就是 change directory——『移動到那個資料夾』。就像你在 Finder 裡面雙擊打開資料夾一樣。」

**Q：「ls 呢？」**
> A：「ls 就是 list——『列出這個資料夾裡有什麼』。就像打開資料夾看看裡面有什麼東西。」

---

## STEP 3：做一個小改動
**⏱️ 5 分鐘**

### 🗣️ Jones 說：

> 「好，現在我們來改一點東西。我們改你首頁的標題——這樣等一下可以看到 git 怎麼追蹤你的改動。」
>
> 「你可以用任何你喜歡的編輯器打開 index.html。最簡單的方式：」

### ⌨️ 指令：

```bash
open index.html
```

> 這會用 Mac 預設的文字編輯器（TextEdit）打開。如果她有 VS Code：
> ```bash
> code index.html
> ```

### 🗣️ Jones 說：

> 「找到 `<title>` 那行，或是任何你想改的文字。比如說，我們在 `<title>` 後面加一點東西：」
>
> 「把它改成像這樣⋯⋯」

### 📝 改動範例：

找到類似這行：
```html
<title>AZUNYAN</title>
```

改成：
```html
<title>AZUNYAN ✨ 2026</title>
```

> **或者任何她想改的小東西都可以！** 重點是有改動就好。

### 🗣️ Jones 說：

> 「改好了嗎？記得存檔（`Cmd + S`）！」
>
> 「好，改動完成了。但是！你的電腦知道你改了東西嗎？git 知道嗎？我們來問問看。」

### ❓ 學生可能會問：

**Q：「我可以改別的嗎？不一定要改 title？」**
> A：「當然可以！你想改什麼都行。CSS 顏色、文字、加一行字⋯⋯隨便你。重點是等一下 git 會告訴你哪裡不一樣了。」

---

## STEP 4：git status — 問 git「現在什麼狀況？」
**⏱️ 5 分鐘**

### 🗣️ Jones 說：

> 「好，回到 Terminal。我們來問 git 一個問題：『嘿，我剛剛改了東西，你有注意到嗎？』」
>
> 「這個指令叫 `git status`——就像問遊戲『我現在有沒有未存檔的進度？』」

### ⌨️ 指令：

```bash
git status
```

### 👀 預期輸出：

```
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes)

	modified:   index.html

no changes added to commit (use "git add" to track)
```

### 🗣️ Jones 說：

> 「看到那個紅色的 `modified: index.html` 了嗎？git 在說：『我注意到你改了 index.html，但你還沒告訴我要不要存檔喔。』」
>
> 「🎮 就像遊戲裡會跳出一個提示：『你有未儲存的進度！』」

### 🎯 重點解說：

> 「git status 是你最常用的指令。任何時候搞不清楚現在什麼狀況，就打 `git status`。它不會改任何東西，只是告訴你現在的狀態。就像按 pause 看一下目前進度。」

### ❓ 學生可能會問：

**Q：「紅色代表什麼？」**
> A：「紅色代表 git 看到了改動，但你還沒『選好要存檔的東西』。等一下我們用 `git add` 選好之後，它就會變成綠色。」

**Q：「如果我改了很多檔案呢？」**
> A：「那 git status 就會列出所有你改過的檔案。一目了然！」

---

## STEP 5：git diff — 看看到底改了什麼
**⏱️ 5 分鐘**

### 🗣️ Jones 說：

> 「git 說你改了 index.html。但到底改了哪裡呢？我們來看看。」
>
> 「🎮 這就像遊戲裡的『查看變更紀錄』——你上次存檔到現在，哪些東西不一樣了。」

### ⌨️ 指令：

```bash
git diff
```

### 👀 預期輸出：

```diff
diff --git a/index.html b/index.html
index abc1234..def5678 100644
--- a/index.html
+++ b/index.html
@@ -3,7 +3,7 @@
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
-    <title>AZUNYAN</title>
+    <title>AZUNYAN ✨ 2026</title>
     <link rel="stylesheet" href="style.css">
 </head>
```

### 🗣️ Jones 說：

> 「看！紅色那行（前面有 `-` 的）是你**刪掉的**舊內容。綠色那行（前面有 `+` 的）是你**新加的**內容。」
>
> 「所以 git 非常精確地知道：你把 `AZUNYAN` 改成了 `AZUNYAN ✨ 2026`。」
>
> 「📸 你可以把 diff 想成修圖前後的對比照——左邊是修之前，右邊是修之後。git 幫你自動比給你看。」

### ⌨️ 離開 diff 畫面：

> 如果 diff 內容很長，Terminal 會進入一個可以上下捲動的模式。

> 「如果你看到畫面底下有個 `:` 冒號，按 `q` 就可以退出。」

### ❓ 學生可能會問：

**Q：「那些 `@@` 和 `index abc1234` 是什麼？」**
> A：「那是 git 內部的定位資訊，你不用管它。重要的是看 `+` 和 `-` 的那幾行就好。」

**Q：「如果我只想看某一個檔案的 diff 呢？」**
> A：「可以！打 `git diff index.html` 就只看那一個檔案。」

---

## STEP 6：git add — 選擇要存檔的東西
**⏱️ 5 分鐘**

### 🗣️ Jones 說：

> 「好！你確認改動沒問題了。現在我們要告訴 git：『對，這個改動我要存。』」
>
> 「🎮 這一步就像你在遊戲裡選擇『要存到哪個存檔槽』之前，先勾選要存什麼內容。」
>
> 「📸 或者用相簿來想：你拍了很多照片，現在要選出要放進相簿的那幾張。`git add` 就是在選照片。」

### ⌨️ 指令：

```bash
git add index.html
```

> 或者如果她改了多個檔案，想全部加：
> ```bash
> git add .
> ```
> （那個 `.` 代表「所有改動都要」）

### 🗣️ Jones 說：

> 「好，加好了。我們再看一次 status：」

### ⌨️ 指令：

```bash
git status
```

### 👀 預期輸出：

```
On branch main
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)

	modified:   index.html
```

### 🗣️ Jones 說：

> 「看！index.html 變成**綠色**了！這代表它已經在『準備存檔』的區域了——git 叫這個叫 staging area，但你就記得是『已勾選、準備存檔』就好。」
>
> 「🎮 就像你已經選好要存的進度，接下來就是按下那個『存檔』按鈕了。」

### ❓ 學生可能會問：

**Q：「為什麼不直接存？幹嘛還要先 add？」**
> A：「好問題！因為有時候你改了 5 個檔案，但你只想存其中 3 個的進度。`git add` 讓你選擇要存哪些。就像你拍了 20 張照片，但只想挑 5 張放 IG 一樣。」

**Q：「`git add .` 的那個點是什麼？」**
> A：「那個 `.` 代表『這個資料夾裡所有的改動』。如果你確定全部都要存，用這個最快。」

---

## STEP 7：git commit — 正式存檔！
**⏱️ 5 分鐘**

### 🗣️ Jones 說：

> 「來了來了，最重要的一步！我們要正式存檔了。」
>
> 「🎮 這就是按下存檔鍵的那一刻！而且 git 會要你寫一句備忘——就像遊戲存檔時寫一句『打完第三關 Boss 了』那樣。」
>
> 「這句話叫 commit message，就是一句話描述你做了什麼。」

### ⌨️ 指令：

```bash
git commit -m "首頁標題加上 2026"
```

> **Jones 注意：** commit message 用中文、日文、英文都可以！讓她用自己最自然的語言寫。

### 👀 預期輸出：

```
[main abc1234] 首頁標題加上 2026
 1 file changed, 1 insertion(+), 1 deletion(-)
```

### 🗣️ Jones 說：

> 「存檔成功！🎉」
>
> 「看到 `1 file changed, 1 insertion(+), 1 deletion(-)` 了嗎？它在告訴你：『改了 1 個檔案，加了 1 行新的，刪了 1 行舊的。』」
>
> 「那個 `-m` 後面引號裡的就是你的存檔備忘。以後你回頭看的時候，一看就知道這次存檔做了什麼。」

### 📝 commit message 的小技巧：

> 「寫 commit message 就像發 LINE 一樣，一句話講清楚你做了什麼就好：」
>
> - `"改了首頁標題"`
> - `"加了新的照片"`
> - `"CSS 顏色從粉紅改成紫色"`
> - `"トップページのタイトル変更"`
>
> 「不用寫得很正式，但要讓未來的自己看得懂。」

### ❓ 學生可能會問：

**Q：「如果我忘了打 `-m` 會怎樣？」**
> A：「它會開一個文字編輯器要你打 message。如果突然跳出很奇怪的畫面（通常是 vim），不要慌——按 `Esc`，然後打 `:q!` 再按 Enter 就可以跳出來。然後重新打一次加 `-m` 就好。」

**Q：「commit 之後還能改嗎？」**
> A：「可以，但現在不用學。就像遊戲存檔之後你可以繼續玩再存一個新的就好。」

---

## STEP 8：git log — 看看你的存檔紀錄
**⏱️ 3 分鐘**

### 🗣️ Jones 說：

> 「好，我們來看看你的存檔紀錄！🎮 就像在遊戲裡打開存檔列表。」

### ⌨️ 指令：

```bash
git log --oneline
```

### 👀 預期輸出：

```
abc1234 (HEAD -> main) 首頁標題加上 2026
def5678 first commit
```

（可能會有更多行，取決於她之前有多少 commit）

### 🗣️ Jones 說：

> 「看！最上面那行就是你剛剛的存檔！前面那串亂碼 `abc1234` 是每個存檔的唯一編號——就像存檔的 ID。」
>
> 「下面的是你之前的存檔。每一行就是一次存檔。以後你改越多次，這個列表就會越長。」
>
> 「如果存檔很多需要捲動，一樣按 `q` 退出。」

### 🎯 加碼展示（如果時間夠）：

```bash
git log
```

> 「這是完整版的 log，可以看到每次存檔的作者、時間、完整 message。`--oneline` 只是精簡版而已。」

### ❓ 學生可能會問：

**Q：「HEAD 是什麼？」**
> A：「HEAD 就是『你現在在這裡』的標記。就像遊戲裡那個小箭頭指著你目前載入的存檔。不用深究，知道就好。」

---

## STEP 9：git push — 上傳到 GitHub！
**⏱️ 5 分鐘**

### 🗣️ Jones 說：

> 「最後一步！我們要把你電腦上的存檔同步到 GitHub 上——你的雲端備份。」
>
> 「🎮 就像把遊戲存檔上傳到雲端。這樣就算電腦壞了，你的進度都在。」

### ⌨️ 指令：

```bash
git push
```

> **Jones 注意：** 第一次 push 可能需要驗證身份。
> - HTTPS：可能會要求輸入帳號密碼或 Personal Access Token
> - SSH：如果已設好 SSH key，應該直接成功

### 👀 預期輸出：

```
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 350 bytes | 350.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
To https://github.com/azunyanchannel/azunyan.hp.git
   def5678..abc1234  main -> main
```

### 🗣️ Jones 說：

> 「成功了！🎉🎉🎉」
>
> 「你可以現在打開 GitHub 看看——」

### ⌨️ 指令（開瀏覽器）：

```bash
open https://github.com/azunyanchannel/azunyan.hp
```

### 🗣️ Jones 說：

> 「看到了嗎？你的改動已經在 GitHub 上了！而且如果你點 commit 紀錄，會看到你剛剛寫的那句 commit message。」
>
> 「以後你不用再一個一個檔案上傳了。改好東西之後，就是 **add → commit → push** 三步驟——10 秒搞定。」

### ❓ 學生可能會問：

**Q：「push 會覆蓋掉 GitHub 上的東西嗎？」**
> A：「不會！它是把你的新存檔『加上去』。之前的存檔都還在。就像遊戲的新存檔不會刪掉舊存檔一樣。」

**Q：「如果 push 失敗了怎麼辦？」**
> A：「通常是身份驗證的問題。我來幫你看看。」（→ 見附錄 A）

---

## STEP 10：複習 — 再走一次！
**⏱️ 8 分鐘**

### 🗣️ Jones 說：

> 「好，我們再走一次。這次換你來操作，我在旁邊看就好。」
>
> 「你去改一個東西——隨便改什麼都好。改個 CSS 顏色、加一行文字、什麼都可以。」

### 📝 引導她自己打完整個流程：

1. **她自己改一個東西**（例如改 about.html 的某段文字，或改 CSS 顏色）
2. 回到 Terminal：

```bash
git status          # ← 看看改了什麼
git diff            # ← 確認改動內容
git add .           # ← 全部選好
git commit -m "（她自己寫的 message）"   # ← 存檔
git push            # ← 上傳雲端
```

### 🗣️ Jones 在她操作時說：

> 「很好很好！你看，這個流程以後會變成肌肉記憶：改東西 → status → diff → add → commit → push。就像彈吉他的和弦一樣，一開始要想，後來手指自己就知道要去哪了。」

### 🗣️ 完成後：

> 「恭喜！🎉 你現在已經會用 git 了！這可是全世界的工程師每天都在用的工具誒。」
>
> 「你學了：」
> - `git clone` — 下載專案
> - `git status` — 查看狀態
> - `git diff` — 看改了什麼
> - `git add` — 選擇要存的
> - `git commit` — 正式存檔
> - `git log` — 看存檔紀錄
> - `git push` — 上傳到雲端
>
> 「一共 7 個指令。你的 git 技能樹第一層已經點亮了 ✨」

---

## 📌 課堂 Cheat Sheet（給 Azunyan 帶走）

印出來或傳給她：

```
🎮 Git 存檔小抄
═══════════════════════════════════

git clone <url>        下載專案到電腦
git status             查看現在狀態（隨時可以打！）
git diff               看改了什麼
git add .              全部加入（準備存檔）
git commit -m "訊息"    存檔！寫一句備忘
git log --oneline      看存檔紀錄
git push               上傳到 GitHub

═══════════════════════════════════
日常流程：改東西 → status → add → commit → push
═══════════════════════════════════
```

---

## 📚 課後資源推薦

> 「如果你想自己複習，推薦你看這個：」

1. **🐵 サル先生のGit入門**（日文最佳！）— https://backlog.com/ja/git-tutorial/
   - 「用猴子教 git，超可愛的。先看入門篇就好。」
2. **Learn Git Branching**（互動練習）— https://learngitbranching.js.org/
   - 「有中文介面，可以看到每個指令的視覺效果。」

---

## 附錄 A：SSH Key 設定（如果需要的話）

> **Jones 注意：** 如果 `git push` 失敗、跳出要求帳號密碼，幫她設 SSH key。

### 🗣️ Jones 說：

> 「我們來設一個 SSH key。這就像幫你的電腦辦一張通行證，以後 push 就不用每次輸入密碼了。」

### ⌨️ 步驟：

```bash
# 1. 產生 SSH key
ssh-keygen -t ed25519 -C "她的email@example.com"
# 一直按 Enter（用預設路徑，不設密碼也行）

# 2. 複製公鑰
pbcopy < ~/.ssh/id_ed25519.pub
# （已經複製到剪貼簿了）

# 3. 到 GitHub 貼上
open https://github.com/settings/ssh/new
# Title: 打「My Mac」
# Key: 直接 Cmd+V 貼上
# 按 Add SSH key

# 4. 測試連線
ssh -T git@github.com
# 應該看到: Hi azunyanchannel! You've successfully authenticated

# 5. 把 repo 的 remote 改成 SSH
git remote set-url origin git@github.com:azunyanchannel/azunyan.hp.git
```

---

## 附錄 B：常見問題排解

### 「git 不是指令」（command not found: git）
→ 需要安裝 Xcode Command Line Tools：
```bash
xcode-select --install
```
然後跟著提示安裝，大約 5 分鐘。

### push 時出現 "rejected"
→ 通常是 GitHub 上有新的改動（可能她之前在網頁上改過東西）：
```bash
git pull --rebase
git push
```

### commit 時跳出奇怪的編輯器（vim）
→ 按 `Esc`，打 `:q!`，按 Enter。然後重新打 `git commit -m "你的訊息"`。

→ 預防措施（幫她設預設編輯器）：
```bash
git config --global core.editor "nano"
```

### 需要設定 git 使用者資訊
如果 commit 時出現要求設定 name/email：
```bash
git config --global user.name "Azunyan"
git config --global user.email "她的email@example.com"
```

---

> **腳本版本：** v1.0  
> **依據研究：** M1_git_teaching.md  
> **核心教學策略：** 電玩存檔比喻 + 從自己的 repo 開始 + 最小可行知識（7 個指令）
