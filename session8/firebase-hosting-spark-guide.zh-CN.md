# Session 8 Firebase Hosting + Spark 操作手册

> 目标：把 `DouceReverie` 从 localhost 变成公开网址，同时避开社区自动化与平台封号风险。  
> 建议定位：今天不是做登录、数据库、后端，而是让学生完成第一次正式网站部署。

---

## 一句话版本

```text
DouceReverie 现在可以走 Firebase Hosting + Spark。

做法是：
Next.js static export -> out/ -> Firebase Hosting
```

今天只使用 Firebase Hosting 当作「放静态网站文件的地方」，所以不需要把 Firebase SDK 参数贴回 repo，也不需要升级 Blaze。

---

## 今天为什么改成 Firebase Hosting

原本想教 creator automation，但公开平台有帐号风险。现在更安全、也更适合初学者的主题是：

```text
先创建自己可控制的网站资产。
```

可以这样跟学生说：

```text
今天我们先不做社区平台自动化。

公开平台有自己的规则，也可能误判或限制帐号。
所以创作者第一个安全的 base，不是自动发文，
而是先有一个自己可以控制、可以分享、可以慢慢长大的网站。

今天的目标很简单：
把 DouceReverie 从 localhost 发布成网络上可以打开的网站。
```

---

## Spark / Blaze 边界

### 今天只做 Hosting：可以用 Spark

Firebase Hosting 的 Spark 免费方案适合这种初期作品网站：

- 静态首页
- 商品展示页
- 作品集
- 个人品牌网站
- 没有登录
- 没有数据库读写
- 没有后端函数
- 没有大量图片或视频上传

Firebase Hosting 的官方说明是：用 Firebase CLI 把本机目录部署到 Hosting servers，并透过 CDN 提供内容。官方也说 Hosting optimized for static and single-page web apps。

参考：

- [Firebase Hosting](https://firebase.google.com/docs/hosting)
- [Firebase Hosting usage, quotas, and pricing](https://firebase.google.com/docs/hosting/usage-quotas-pricing)
- [Firebase CLI](https://firebase.google.com/docs/cli)

### 不要跟学生说「Firebase 全部免费」

比较准确的说法：

```text
今天我们只用 Firebase Hosting 的免费 Spark 方案。
对这种静态网站很适合。
以后如果要加登录、数据库、图片上传或后端功能，再另外学成本、权限和安全规则。
```

Hosting 免费额度要注意：

- Hosting storage 免费到 10 GB
- Data transfer 免费到 10 GB/month
- Spark 超过免费额度后不会自动收费，但可能无法继续部署，或网站被暂停到下个月
- Blaze 是 pay-as-you-go，超过免费额度会按量计费

### 今天不要碰这些

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

这些都可以是未来课题，但不是今天的主菜。

---

## Public Repo 会不会有安全问题

### Hosting-only：通常没有问题

如果只是：

```text
Next.js static export
-> out/
-> Firebase Hosting
```

source code 不需要知道 Firebase project 的 `apiKey`、`authDomain`、`projectId` 等 SDK config。

也就是说，今天不需要把这段贴进 repo：

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

这段是之后要在前端程序里使用 Firebase SDK 时才需要，例如：

- Firebase Auth
- Firestore
- Storage
- Analytics
- Remote Config

### 可以放进 public repo 的文件

```text
next.config.ts
firebase.json
.firebaserc
README / deploy guide
```

`.firebaserc` 可能会像这样：

```json
{
  "projects": {
    "default": "douce-reverie-xxxxx"
  }
}
```

这通常不是秘密。它只是告诉 Firebase CLI：这个 repo 预设 deploy 到哪个 Firebase project。

真正控制 deploy 权限的是：

```text
Firebase project 权限 + firebase login 的 Google 帐号
```

不是 `.firebaserc` 本身。

### 不要 commit 的东西

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

如果之后有机会调整 repo，可以确认 `.gitignore` 包含：

```gitignore
.env
.env.local
*.local
serviceAccountKey.json
*-firebase-adminsdk-*.json
```

---

## 权限怎么分

GitHub 和 Firebase 是两套权限。

| 权限 | 控制什么 | 在哪里管理 |
| --- | --- | --- |
| GitHub collaborator | 谁可以改 source code、push repo | GitHub repo |
| Firebase project member | 谁可以 deploy / 管 Hosting | Firebase / Google Cloud IAM |
| Firebase CLI login | 本机现在用哪个 Google 帐号 deploy | `firebase login` |

所以：

```text
你有 GitHub collaborator 权限：
可以帮她改 code、push repo。

你不一定有 Firebase deploy 权限：
除非她把你的 Google account 加到 Firebase project。
```

最干净的课堂做法：

```text
她创建 Firebase project。
她在自己的电脑上 firebase login。
她自己 firebase deploy。
你帮她准备 repo、解释指令、看错误消息。
```

这样网站和 Firebase project 都属于她。

---

## DouceReverie 现况判断

目前 `DouceReverie` 是 Next.js App Router 项目。它不是手写纯 HTML，但内容可以静态化：

- 多语系首页：`/zh-CN`、`/ja`、`/en`、`/zh-TW`
- 多语系商品页：`/[locale]/products`
- 商品数据在 `lib/products.ts`
- 文字数据在 `messages/*.json`
- 没有 API route
- 没有 server action
- 没有登录
- 没有数据库
- 购物车数字、wishlist、search overlay 都是浏览器前端 state

结论：

```text
这个网站适合做 static export，再部署到 Firebase Hosting Spark。
```

但 repo 需要一点 deploy-ready 设置。

---

## Repo 需要的设置

### 1. Next.js 静态输出

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

`output: "export"` 会让 `next build` 产生 `out/` 静态输出文件夹。

参考：

- [Next.js Static Exports](https://nextjs.org/docs/pages/guides/static-exports)

### 2. Firebase Hosting 设置

添加 `firebase.json`：

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

说明：

- `public: "out"`：Firebase Hosting 只部署 Next.js build 出来的静态档
- `redirects`：把首页 `/` 导到预设语系 `/zh-CN/`

### 3. 关于 `proxy.ts`

`DouceReverie` 目前用 `proxy.ts` 把 `/` redirect 到 `/zh-CN`。

这在 Next server 里可以运作，但 Firebase Hosting 静态部署不会跑 Next proxy / middleware。

所以静态部署时要用 `firebase.json` 的 redirect，或改成真正的静态首页。

上课建议用 `firebase.json` redirect，概念最简单。

---

## 从零开始的课堂操作流程

### Step 0：确认 Node / npm

```bash
node -v
npm -v
```

如果没有 Node，先安装 Node.js LTS。

### Step 1：进入项目

```bash
cd /path/to/DouceReverie
```

如果是她的电脑：

```bash
git clone https://github.com/azunyanchannel/DouceReverie.git
cd DouceReverie
```

### Step 2：安装网站依赖

```bash
npm install
```

### Step 3：本机预览

```bash
npm run dev
```

打开：

```text
http://localhost:3000/zh-CN
```

确认网站可以跑，再停止 dev server。

### Step 4：安装 Firebase CLI

```bash
npm install -g firebase-tools
```

确认安装成功：

```bash
firebase --version
```

### Step 5：登录 Firebase

```bash
firebase login
```

这会打开浏览器，请她登录自己的 Google 帐号。

可以测试 CLI 是否看得到项目：

```bash
firebase projects:list
```

### Step 6：创建 Firebase project

到 Firebase Console：

```text
https://console.firebase.google.com/
```

操作：

```text
Add project
-> 输入 project name
-> Google Analytics 可先关掉或略过
-> 不升 Blaze
-> 创建完成
```

建议 project name：

```text
douce-reverie
```

Project ID 可能会自动变成：

```text
douce-reverie-xxxxx
```

### Step 7：初始化 Hosting

在 repo 根目录运行：

```bash
firebase init hosting
```

选项建议：

```text
Which Firebase features?
-> Hosting: Configure files for Firebase Hosting

Use an existing project?
-> 选她刚刚创建的 Firebase project

What do you want to use as your public directory?
-> out

Configure as a single-page app?
-> No

Set up automatic builds and deploys with GitHub?
-> No
```

如果 CLI 问要不要 overwrite `firebase.json`：

```text
如果我们已经手动做好 firebase.json，选 No。
如果还没做，让 CLI 产生后再修改。
```

### Step 8：产生静态网站

```bash
npm run build
```

成功后应该会看到 `out/` 文件夹。

可以检查：

```bash
ls out
```

### Step 9：部署

```bash
firebase deploy --only hosting
```

成功后 CLI 会显示网址，通常会有：

```text
https://PROJECT_ID.web.app
https://PROJECT_ID.firebaseapp.com
```

请她用手机也打开一次。

### Step 10：更新后再次部署

之后每次改完网站：

```bash
git pull
npm install
npm run build
firebase deploy --only hosting
```

如果只是她本机已经是最新：

```bash
npm run build
firebase deploy --only hosting
```

---

## 现场排错

### `firebase: command not found`

代表 Firebase CLI 没装好。

```bash
npm install -g firebase-tools
```

如果还是不行，重开 terminal 再试。

### `firebase login` 卡住

可能是浏览器或 localhost callback 问题。

可以试：

```bash
firebase login --no-localhost
```

### `firebase deploy` 说没有权限

原因通常是：

```text
现在 firebase login 的 Google 帐号，不是 Firebase project member。
```

解法：

- 确认 `firebase login` 的帐号
- 请 project owner 在 Firebase Console / Google Cloud IAM 加入该帐号
- 或改用 project owner 自己的电脑部署

### deploy 成功但 `/` 看不到正确页面

确认 `firebase.json` 有 redirect：

```json
"redirects": [
  {
    "source": "/",
    "destination": "/zh-CN/",
    "type": 302
  }
]
```

然后重新部署：

```bash
npm run build
firebase deploy --only hosting
```

### 语系页面 404

确认：

```text
next.config.ts 有 output: "export"
next.config.ts 有 trailingSlash: true
npm run build 有成功产生 out/zh-CN/index.html
firebase.json 的 public 是 out
```

### 不小心被问到 Blaze

今天回答：

```text
今天不需要 Blaze。
我们只部署静态 Hosting。
之后做 database、backend、large storage 或 custom backend 时，再另外学 billing。
```

---

## 课堂收尾讲法

```text
今天你做的不是一个小功能。

你把自己的网站从电脑里，送到了真正的网络上。

localhost 是练习作品；
公开网址才是可以分享、可以展示、可以慢慢长大的作品。

下一步我们可以再加：
- 自己的 domain
- Creator workflow page
- Login
- Database
- Draft bank

但今天最重要的是：
你已经有一个自己控制的 creator home base。
```

---

## 今天可以直接贴给 Codex 的 prompt

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
