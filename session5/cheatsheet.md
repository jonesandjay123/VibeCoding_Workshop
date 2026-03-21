# Session 1-4 指令速查卡 📋

## 🖥️ Bash / Terminal

| 指令 | 說明 | 例子 |
|------|------|------|
| `cd` | 移動到資料夾 | `cd my-project` |
| `cd ..` | 回上一層 | |
| `ls` | 看這裡有什麼 | `ls -la`（含隱藏檔） |
| `mkdir` | 建新資料夾 | `mkdir my-app` |
| `rm` | 刪除檔案 | `rm file.txt` |
| `rm -rf` | 刪除資料夾（⚠️ 小心！） | `rm -rf node_modules` |
| `cp` | 複製 | `cp a.txt b.txt` |
| `mv` | 移動 / 改名 | `mv old.txt new.txt` |
| `cat` | 看檔案內容 | `cat package.json` |
| `pwd` | 我在哪裡？ | |
| `clear` | 清畫面 | |

## 🔀 Git

| 指令 | 說明 | 什麼時候用 |
|------|------|-----------|
| `git status` | 看有什麼改動 | 隨時 |
| `git add .` | 把改動加入暫存 | commit 前 |
| `git commit -m "訊息"` | 存一個版本 | 改完一個功能 |
| `git push` | 推到 GitHub | commit 後 |
| `git pull` | 從 GitHub 拉最新 | 開始工作前 |
| `git log --oneline` | 看歷史紀錄 | 想回顧時 |
| `git branch` | 看有哪些分支 | |
| `git checkout -b 名稱` | 建新分支 | 想實驗時 |

### Git 工作流（每次改 code）
```
改 code → git add . → git commit -m "做了什麼" → git push
```

## 📦 npm

| 指令 | 說明 | 什麼時候用 |
|------|------|-----------|
| `npm install` | 安裝所有依賴 | clone 後第一次 |
| `npm run dev` | 啟動開發伺服器 | 寫 code 時 |
| `npm run build` | 打包成上線版 | 部署前 |

## 📂 專案結構（Vite + React）

```
my-project/
├── package.json      ← 專案設定（名稱、依賴、指令）
├── vite.config.js    ← Vite 設定
├── index.html        ← 入口 HTML
├── .gitignore        ← 告訴 git 不要上傳的東西
├── .env              ← 密碼/API key（不上傳！）
├── .env.template     ← 密碼範本（可上傳）
├── node_modules/     ← 依賴（不上傳！npm install 生成）
├── dist/             ← 打包結果（不上傳！npm run build 生成）
└── src/
    ├── main.jsx      ← React 進入點
    ├── App.jsx       ← 主頁面
    ├── App.css       ← 樣式
    └── data/
        └── cards.json ← 資料（改這裡 → 頁面變！）
```

## 🔑 重要觀念

| 觀念 | 一句話 |
|------|--------|
| JSON | 電腦看的資料格式（像食材清單） |
| React | 把資料變成畫面的工具（像廚師） |
| API | 跟別人的服務要資料（像打電話訂外賣） |
| `.env` | 放密碼的保險箱（不上傳 GitHub） |
| `.gitignore` | 告訴 git「這些不要管」 |
| `localhost` | 你自己電腦上的伺服器（只有你看得到） |
| `npm run build` | 把 code 打包成可以放到網路上的版本 |
| GitHub Pages | 免費把網站放到網路上 |

## 🐛 Debug 步驟

```
1. 打開 Chrome DevTools（F12 或 Cmd+Option+I）
2. 看 Console 有沒有紅字
3. 讀錯誤訊息（通常會說哪個檔案、哪一行）
4. 把錯誤訊息貼給 AI → 讓它幫你修
5. 修完存檔 → 看有沒有好
```
