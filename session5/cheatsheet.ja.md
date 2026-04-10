# Session 1-4 コマンドチートシート 📋

> 櫻井さん用 / 日本語版
> （中国語版は [`cheatsheet.md`](./cheatsheet.md) を参照）

## 🖥️ Bash / ターミナル

| コマンド | 説明 | 例 |
|------|------|------|
| `cd` | フォルダを移動する | `cd my-project` |
| `cd ..` | 一つ上の階層に戻る | |
| `ls` | ここに何があるか見る | `ls -la`(隠しファイルも表示) |
| `mkdir` | 新しいフォルダを作る | `mkdir my-app` |
| `rm` | ファイルを削除する | `rm file.txt` |
| `rm -rf` | フォルダを削除する(⚠️ 要注意!) | `rm -rf node_modules` |
| `cp` | コピーする | `cp a.txt b.txt` |
| `mv` | 移動 / 名前変更 | `mv old.txt new.txt` |
| `cat` | ファイルの中身を見る | `cat package.json` |
| `pwd` | 今どこにいる? | |
| `clear` | 画面をきれいにする | |

## 🔀 Git

| コマンド | 説明 | いつ使う? |
|------|------|-----------|
| `git status` | どこを変更したか見る | いつでも |
| `git add .` | 変更を「保存待ち」に入れる | commit の前 |
| `git commit -m "メッセージ"` | バージョンを一つ保存する | 機能を作り終えたとき |
| `git push` | GitHub にアップする | commit の後 |
| `git pull` | GitHub から最新を取ってくる | 作業を始める前 |
| `git log --oneline` | 履歴を見る | 振り返りたいとき |
| `git branch` | ブランチ一覧を見る | |
| `git checkout -b 名前` | 新しいブランチを作る | 実験したいとき |

### Git のワークフロー(コードを変更するたびに)
```
コードを変更 → git add . → git commit -m "何をしたか" → git push
```

## 📦 npm

| コマンド | 説明 | いつ使う? |
|------|------|-----------|
| `npm install` | 必要なものを全部インストール | clone した直後 |
| `npm run dev` | 開発用サーバーを起動する | コードを書いているとき |
| `npm run build` | 本番用にパッケージ化する | デプロイの前 |

## 📂 プロジェクト構成 (Vite + React)

```
my-project/
├── package.json      ← プロジェクトの設定(名前・依存・コマンド)
├── vite.config.js    ← Vite の設定
├── index.html        ← 入口の HTML
├── .gitignore        ← git にアップしないものを書く場所
├── .env              ← パスワード / API key(アップしない!)
├── .env.template     ← パスワードのテンプレート(アップしてOK)
├── node_modules/     ← 依存ファイル(アップしない! npm install で生成)
├── dist/             ← ビルド結果(アップしない! npm run build で生成)
└── src/
    ├── main.jsx      ← React の入口
    ├── App.jsx       ← メインページ
    ├── App.css       ← スタイル
    └── data/
        └── cards.json ← データ(ここを直す → 画面が変わる!)
```

## 🔑 大事な概念

| 概念 | 一言で言うと |
|------|--------|
| JSON | コンピュータが読むデータの形式(食材リストみたいなもの) |
| React | データを画面に変えてくれる道具(シェフみたいなもの) |
| API | 他のサービスにデータをお願いする(出前を電話で頼むみたいなもの) |
| `.env` | パスワードを入れる金庫(GitHub にアップしない) |
| `.gitignore` | git に「これは気にしないで」と伝えるもの |
| `localhost` | 自分のパソコンの中のサーバー(自分にしか見えない) |
| `npm run build` | ネットに置けるバージョンにコードをパッケージ化する |
| GitHub Pages | 無料でウェブサイトをネットに公開する仕組み |

## 🐛 デバッグの手順

```
1. Chrome DevTools を開く(F12 または Cmd+Option+I)
2. Console に赤い文字がないかチェック
3. エラーメッセージを読む(どのファイルの何行目か書いてある)
4. エラーメッセージを AI に貼り付ける → 直してもらう
5. 直ったら保存 → 動くか確認
```
