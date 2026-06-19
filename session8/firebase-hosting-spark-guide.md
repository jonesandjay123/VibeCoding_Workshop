# Session 8 Firebase Hosting + Spark 操作手冊

> 目標：把 `DouceReverie` 從 localhost 變成公開網址，同時避開社群自動化與平台封號風險。  
> 建議定位：今天不是做登入、資料庫、後端，而是讓學生完成第一次正式網站部署。

---

## 一句話版本

```text
DouceReverie 現在可以走 Firebase Hosting + Spark。

做法是：
Next.js static export -> out/ -> Firebase Hosting
```

今天只使用 Firebase Hosting 當作「放靜態網站檔案的地方」，所以不需要把 Firebase SDK 參數貼回 repo，也不需要升級 Blaze。

---

## 今天為什麼改成 Firebase Hosting

原本想教 creator automation，但公開平台有帳號風險。現在更安全、也更適合初學者的主題是：

```text
先建立自己可控制的網站資產。
```

可以這樣跟學生說：

```text
今天我們先不做社群平台自動化。

公開平台有自己的規則，也可能誤判或限制帳號。
所以創作者第一個安全的 base，不是自動發文，
而是先有一個自己可以控制、可以分享、可以慢慢長大的網站。

今天的目標很簡單：
把 DouceReverie 從 localhost 發布成網路上可以打開的網站。
```

---

## Spark / Blaze 邊界

### 今天只做 Hosting：可以用 Spark

Firebase Hosting 的 Spark 免費方案適合這種初期作品網站：

- 靜態首頁
- 商品展示頁
- 作品集
- 個人品牌網站
- 沒有登入
- 沒有資料庫讀寫
- 沒有後端函式
- 沒有大量圖片或影片上傳

Firebase Hosting 的官方說明是：用 Firebase CLI 把本機目錄部署到 Hosting servers，並透過 CDN 提供內容。官方也說 Hosting optimized for static and single-page web apps。

參考：

- [Firebase Hosting](https://firebase.google.com/docs/hosting)
- [Firebase Hosting usage, quotas, and pricing](https://firebase.google.com/docs/hosting/usage-quotas-pricing)
- [Firebase CLI](https://firebase.google.com/docs/cli)

### 不要跟學生說「Firebase 全部免費」

比較準確的說法：

```text
今天我們只用 Firebase Hosting 的免費 Spark 方案。
對這種靜態網站很適合。
以後如果要加登入、資料庫、圖片上傳或後端功能，再另外學成本、權限和安全規則。
```

Hosting 免費額度要注意：

- Hosting storage 免費到 10 GB
- Data transfer 免費到 10 GB/month
- Spark 超過免費額度後不會自動收費，但可能無法繼續部署，或網站被暫停到下個月
- Blaze 是 pay-as-you-go，超過免費額度會按量計費

### 今天不要碰這些

```text
Cloud Functions
Cloud Run
Firebase App Hosting
Firestore
Storage
Authentication
Firebase Admin SDK
Service account key
```

這些都可以是未來課題，但不是今天的主菜。

---

## Public Repo 會不會有安全問題

### Hosting-only：通常沒有問題

如果只是：

```text
Next.js static export
-> out/
-> Firebase Hosting
```

source code 不需要知道 Firebase project 的 `apiKey`、`authDomain`、`projectId` 等 SDK config。

也就是說，今天不需要把這段貼進 repo：

```ts
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
```

這段是之後要在前端程式裡使用 Firebase SDK 時才需要，例如：

- Firebase Auth
- Firestore
- Storage
- Analytics
- Remote Config

### 可以放進 public repo 的檔案

```text
next.config.ts
firebase.json
.firebaserc
README / deploy guide
```

`.firebaserc` 可能會像這樣：

```json
{
  "projects": {
    "default": "douce-reverie-xxxxx"
  }
}
```

這通常不是秘密。它只是告訴 Firebase CLI：這個 repo 預設 deploy 到哪個 Firebase project。

真正控制 deploy 權限的是：

```text
Firebase project 權限 + firebase login 的 Google 帳號
```

不是 `.firebaserc` 本身。

### 不要 commit 的東西

```text
.env
.env.local
*.local
serviceAccountKey.json
*-firebase-adminsdk-*.json
Google Cloud service account private key
OpenAI API key
Stripe secret key
任何 token / refresh token / credential json
```

如果之後有機會調整 repo，可以確認 `.gitignore` 包含：

```gitignore
.env
.env.local
*.local
serviceAccountKey.json
*-firebase-adminsdk-*.json
```

---

## 權限怎麼分

GitHub 和 Firebase 是兩套權限。

| 權限 | 控制什麼 | 在哪裡管理 |
| --- | --- | --- |
| GitHub collaborator | 誰可以改 source code、push repo | GitHub repo |
| Firebase project member | 誰可以 deploy / 管 Hosting | Firebase / Google Cloud IAM |
| Firebase CLI login | 本機現在用哪個 Google 帳號 deploy | `firebase login` |

所以：

```text
你有 GitHub collaborator 權限：
可以幫她改 code、push repo。

你不一定有 Firebase deploy 權限：
除非她把你的 Google account 加到 Firebase project。
```

最乾淨的課堂做法：

```text
她建立 Firebase project。
她在自己的電腦上 firebase login。
她自己 firebase deploy。
你幫她準備 repo、解釋指令、看錯誤訊息。
```

這樣網站和 Firebase project 都屬於她。

---

## DouceReverie 現況判斷

目前 `DouceReverie` 是 Next.js App Router 專案。它不是手寫純 HTML，但內容可以靜態化：

- 多語系首頁：`/zh-CN`、`/ja`、`/en`、`/zh-TW`
- 多語系商品頁：`/[locale]/products`
- 商品資料在 `lib/products.ts`
- 文字資料在 `messages/*.json`
- 沒有 API route
- 沒有 server action
- 沒有登入
- 沒有資料庫
- 購物車數字、wishlist、search overlay 都是瀏覽器前端 state

結論：

```text
這個網站適合做 static export，再部署到 Firebase Hosting Spark。
```

但 repo 需要一點 deploy-ready 設定。

---

## Repo 需要的設定

### 1. Next.js 靜態輸出

修改 `next.config.ts`：

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true
};

export default nextConfig;
```

`output: "export"` 會讓 `next build` 產生 `out/` 靜態輸出資料夾。

參考：

- [Next.js Static Exports](https://nextjs.org/docs/pages/guides/static-exports)

### 2. Firebase Hosting 設定

新增 `firebase.json`：

```json
{
  "hosting": {
    "public": "out",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "redirects": [
      {
        "source": "/",
        "destination": "/zh-CN/",
        "type": 302
      }
    ]
  }
}
```

說明：

- `public: "out"`：Firebase Hosting 只部署 Next.js build 出來的靜態檔
- `redirects`：把首頁 `/` 導到預設語系 `/zh-CN/`

### 3. 關於 `proxy.ts`

`DouceReverie` 目前用 `proxy.ts` 把 `/` redirect 到 `/zh-CN`。

這在 Next server 裡可以運作，但 Firebase Hosting 靜態部署不會跑 Next proxy / middleware。

所以靜態部署時要用 `firebase.json` 的 redirect，或改成真正的靜態首頁。

上課建議用 `firebase.json` redirect，概念最簡單。

---

## 從零開始的課堂操作流程

### Step 0：確認 Node / npm

```bash
node -v
npm -v
```

如果沒有 Node，先安裝 Node.js LTS。

### Step 1：進入專案

```bash
cd /path/to/DouceReverie
```

如果是她的電腦：

```bash
git clone https://github.com/azunyanchannel/DouceReverie.git
cd DouceReverie
```

### Step 2：安裝網站依賴

```bash
npm install
```

### Step 3：本機預覽

```bash
npm run dev
```

打開：

```text
http://localhost:3000/zh-CN
```

確認網站可以跑，再停止 dev server。

### Step 4：安裝 Firebase CLI

```bash
npm install -g firebase-tools
```

確認安裝成功：

```bash
firebase --version
```

### Step 5：登入 Firebase

```bash
firebase login
```

這會打開瀏覽器，請她登入自己的 Google 帳號。

可以測試 CLI 是否看得到專案：

```bash
firebase projects:list
```

### Step 6：建立 Firebase project

到 Firebase Console：

```text
https://console.firebase.google.com/
```

操作：

```text
Add project
-> 輸入 project name
-> Google Analytics 可先關掉或略過
-> 不升 Blaze
-> 建立完成
```

建議 project name：

```text
douce-reverie
```

Project ID 可能會自動變成：

```text
douce-reverie-xxxxx
```

### Step 7：初始化 Hosting

在 repo 根目錄執行：

```bash
firebase init hosting
```

選項建議：

```text
Which Firebase features?
-> Hosting: Configure files for Firebase Hosting

Use an existing project?
-> 選她剛剛建立的 Firebase project

What do you want to use as your public directory?
-> out

Configure as a single-page app?
-> No

Set up automatic builds and deploys with GitHub?
-> No
```

如果 CLI 問要不要 overwrite `firebase.json`：

```text
如果我們已經手動做好 firebase.json，選 No。
如果還沒做，讓 CLI 產生後再修改。
```

### Step 8：產生靜態網站

```bash
npm run build
```

成功後應該會看到 `out/` 資料夾。

可以檢查：

```bash
ls out
```

### Step 9：部署

```bash
firebase deploy --only hosting
```

成功後 CLI 會顯示網址，通常會有：

```text
https://PROJECT_ID.web.app
https://PROJECT_ID.firebaseapp.com
```

請她用手機也打開一次。

### Step 10：更新後再次部署

之後每次改完網站：

```bash
git pull
npm install
npm run build
firebase deploy --only hosting
```

如果只是她本機已經是最新：

```bash
npm run build
firebase deploy --only hosting
```

---

## 現場排錯

### `firebase: command not found`

代表 Firebase CLI 沒裝好。

```bash
npm install -g firebase-tools
```

如果還是不行，重開 terminal 再試。

### `firebase login` 卡住

可能是瀏覽器或 localhost callback 問題。

可以試：

```bash
firebase login --no-localhost
```

### `firebase deploy` 說沒有權限

原因通常是：

```text
現在 firebase login 的 Google 帳號，不是 Firebase project member。
```

解法：

- 確認 `firebase login` 的帳號
- 請 project owner 在 Firebase Console / Google Cloud IAM 加入該帳號
- 或改用 project owner 自己的電腦部署

### deploy 成功但 `/` 看不到正確頁面

確認 `firebase.json` 有 redirect：

```json
"redirects": [
  {
    "source": "/",
    "destination": "/zh-CN/",
    "type": 302
  }
]
```

然後重新部署：

```bash
npm run build
firebase deploy --only hosting
```

### 語系頁面 404

確認：

```text
next.config.ts 有 output: "export"
next.config.ts 有 trailingSlash: true
npm run build 有成功產生 out/zh-CN/index.html
firebase.json 的 public 是 out
```

### 不小心被問到 Blaze

今天回答：

```text
今天不需要 Blaze。
我們只部署靜態 Hosting。
之後做 database、backend、large storage 或 custom backend 時，再另外學 billing。
```

---

## 課堂收尾講法

```text
今天妳做的不是一個小功能。

妳把自己的網站從電腦裡，送到了真正的網路上。

localhost 是練習作品；
公開網址才是可以分享、可以展示、可以慢慢長大的作品。

下一步我們可以再加：
- 自己的 domain
- Creator workflow page
- Login
- Database
- Draft bank

但今天最重要的是：
妳已經有一個自己控制的 creator home base。
```

---

## 今天可以直接貼給 Codex 的 prompt

```text
Please prepare this Next.js project for Firebase Hosting static deployment.

Goal:
Deploy the site on Firebase Hosting using the Spark plan.

Context:
- This is a public repo.
- We only need static Hosting.
- Do not add Firebase SDK config.
- Do not add Auth, Firestore, Storage, Cloud Functions, Cloud Run, or App Hosting.
- Keep the change beginner-friendly.

Please:
1. Inspect the project first.
2. Confirm whether static export is appropriate.
3. Update next.config.ts for static export if appropriate.
4. Add firebase.json with public directory set to out.
5. Redirect / to the default locale path.
6. Run npm run build.
7. Explain the exact Firebase CLI deploy steps.
```
