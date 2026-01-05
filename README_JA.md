# Vibe Coding Workshop マスターガイド (Master Guide)
[繁體中文](README.md) | [日本語](README_JA.md)

> **対象者**：コーディング経験のない学生（大二など）
> **目標**：3時間以内に「個人ポートフォリオサイト」を完成させ、公開する
> **核心概念**：コードの書き方を教えるのではなく、「PM (Product Manager) + CD (Creative Director) としてAIをどう指揮するか」を学ぶ

---

## 📅 事前準備 (Pre-flight Checklist)

### 学生の準備 (Student)
- [ ] **Google Pro アカウント** (学生向けの12ヶ月無料版を強く推奨。Gemini Advancedが利用可能になります)
- [ ] **GitHub アカウント** (登録のみ。Gitのインストールは現時点では不要)
- [ ] **素材の用意**：
    - 作品画像 3〜6枚 (JPG/PNG)
    - 自己紹介文 (日本語 80〜120文字程度)
    - プロフィール写真、またはスタイルに合った画像 1枚
- [ ] **マインドセット**：「今日はテストではなく、クリエイティブな遊び。AIは自分の『手』であり、自分は『脳』を担当する。」

### メンターの準備 (Mentor)
- [ ] **Google Doc (共有脳)**：新しいGoogleドキュメントを作成し、タイトルを `YYYY-MM-DD Portfolio Workshop` とします。
- [ ] **GitHub 権限の確認**：緊急時に備え、リポジトリにコラボレーターを追加する方法を確認しておきます。

---

## 🛠️ コア素材パック (The Toolkit)

### 1. Google Doc 共有脳テンプレート (Shared Brain)
*以下の内容をコピーしてGoogleドキュメントに貼り付けてください。当日の「コントロールパネル」になります。*

```markdown
# 2026-XX-XX Portfolio Vibe Coding Workshop

## 1. 自分のポジショニング (Identity)
私は [名前] です。[スキル] が得意で、現在は [方向性] を目指しています。

## 2. サイトの雰囲気 (Keywords)
*以下のキーワードから3つ選んでください：*
[ ] 清潔感 (Clean)    [ ] 静か (Quiet)     [ ] かわいい (Kawaii)
[ ] 知的 (Smart)      [ ] 信頼 (Reliable)  [ ] シャープ (Sharp)
[ ] 優しい (Gentle)    [ ] プロフェッショナル (Pro)

## 3. 主要コンテンツ (Content)
- **Works**: 作品ギャラリー
- **Now**: 最近の活動 / 興味があること
- **Contact**: 連絡先

## 4. 作品リスト (Works)
*3つの作品を記入してください*
1. タイトル: 
   説明: 
2. タイトル:
   説明:
3. タイトル:
   説明:

## 5. Prompt Staging (AI 指示エリア)
*(ここでプロンプトを練ってからAIに貼り付けます)*
```

### 2. 学生用 Repo README テンプレート (The Blueprint)
*これはAI向けの「設計図」です。GitHubで新規リポジトリ作成後、`README.md`を作成してこれを貼り付けます。*

```markdown
# J-Style Clean Portfolio (One Page)

## Goal
Build a clean, Japanese-magazine-style personal portfolio website.
Must be deployed and shareable today.

## Style / Vibe
- **Style**: Japanese clean magazine layout.
- **Visuals**: Spacious whitespace, minimal colors, low saturation.
- **Typography**: Noto Sans JP (primary), Inter (fallback).
- **Interactions**: Subtle hover effects and scroll reveal animations.

## Sections
1. **Hero**: Name, one-line tagline, small social icons/buttons.
2. **About**: Short bio (JP), interests.
3. **Works**: 3-6 cards grid. Image on top, title/desc below. High-end look.
4. **Now**: What I’m doing recently.
5. **Contact**: Email + Social links.

## Technical Constraints (Strict)
- Use **HTML / CSS / JavaScript** only (Single file index.html or separate files).
- **No Node.js** setup required.
- **No Build steps** required.
- Make it responsive (Mobile friendly).
- Code should be easy for a beginner to edit (use comments).

## Content (Fill these in)
[Student Name]: 
[Tagline]: 
[Bio]: 
[Social Links]: 
```

### 3. 日系クリーン・スタイル専用プロンプト集 (The Spells)
*学生が行き詰まった時や、さらにブラッシュアップしたい時にGoogleドキュメントに共有してください。*

**フェーズ 1：初版の生成**
> "この README.md の仕様に基づいて、シングルページの『日系クリーン・スタイル』のポートフォリオサイトを生成してください。index.html と style.css のコードを全て提供してください。日本のデザイン雑誌のような、余白を活かしたスタイルにしてください。"

**フェーズ 2：ブラッシュアップ (Vibe Check)**
> **より日本らしく、クリーンに**：
> "さらに日本のデザイン雑誌のような雰囲気にしてください。フォントサイズの階層をはっきりさせ、余白 (padding/margin) を1.5倍に広げ、色数は白・黒・グレー＋メインカラー1色に絞ってください。影 (shadow) は使わず、細い線 (border) で区切るようにしてください。"

> **カードのデザインを高級に**：
> "Worksセクションのカードをより洗練させてください。画像比率は4:3にし、テキストは画像の下に配置。画像にマウスを乗せた時 (hover)、少しだけ拡大 (scale 1.05) し、明るくしてください。太い枠線は使わないでください。"

> **動き (Scroll Reveal) を追加**：
> "全てのセクションに『Scroll Reveal』効果を追加してください。スクロールしてそのセクションが表示された時に、コンテンツがふわっと浮き上がるように (fade-up) してください。アニメーションは0.8秒で、優雅な動きにしてください。"

**フェーズ 3：機能の補強**
> **スマホ表示の最適化**：
> "スマホでの表示をチェックしてください。Heroセクションの文字はスマホでも読みやすく少し大きくし、Worksのカードは1カラムで表示。ハンバーガーメニューはタップしやすいサイズにしてください。"

> **ダークモード (オプション)**：
> "右上にダークモード切り替えボタンを追加してください（システム設定に追従）。ダークモードの色は真っ黒ではなく、深みのあるグレー (Dark Grey) にしてください。"

---

## ⏱️ 3時間の流れ (The Runbook)

### 0:00 - 0:20 マインドセット確立 (Mindset)
- **Showcase**: 自分のGitHubや、いくつかオシャレな靜態サイトを見せる。
- **Concept**: 
    - 「GitHubは、自分の『人生プロジェクト』を保管する倉庫だよ。」
    - 「ウェブサイトは『技術』ではなく、自分の『アイデア』を形にしたもの。」
    - 「AIはあなたの優秀なアシスタント。あなたはディレクターとして指示を出すだけ。」

### 0:20 - 0:50 企画と設定 (Setup)
1. **Google Doc**: テンプレートを開き、10分ほどヒアリングしながら「Identity」「Vibe」「作品リスト」を埋める。
2. **GitHub Repo**: 
    - GitHubへの登録/ログインをサポート。
    - 右上の `+` -> `New repository`。
    - 名前を決める (例: `my-portfolio-2026`)、**Public** に設定。
    - **Add a README file** にチェックを入れる。
3. **Blueprint**: 
    - `README.md` を編集 (鉛筆アイコン)。
    - 上記の **[学生用 Repo README テンプレート]** を貼り付ける。
    - Googleドキュメントの内容を反映させる。
    - `Commit changes` で保存。

### 0:50 - 1:40 Vibe Coding ループ (The Loop)
*「生成 -> テスト -> フィードバック」のサイクルを回します*

1. **初回の生成**: 
    - READMEの内容をコピー。
    - Gemini/Antigravity に貼り付け: "Hi, これが私のサイトの設計図です。一版目の index.html と styles.css を書いてください"。
2. **アップロードとテスト**:
    - GitHubのリポジトリページ -> `Add file` -> `Create new file`。
    - ファイル名 `index.html` -> コードを貼り付け -> Commit。
    - (CSSファイルも同様に作成)。
3. **GitHub Pages の有効化 (ドーパミン・タイム！)**:
    - `Settings` -> `Pages` に移動。
    - Branch を `main` -> `/root` にして Save。
    - 1〜2分待ってページを更新し、URLをゲット！(自分のサイトが世界に公開された瞬間、彼女は感動するはずです)
4. **ブラッシュアップ (Iterate)**:
    - 「どこか気に入らないところはある？」「もっとこうしたい、って部分はある？」と聞く。
    - **[プロンプト集]** の指示を使ってAIに修正させる。
    - 繰り返し：コードをコピー -> GitHubで編集 -> Commit -> ページを更新して確認。
    - *目標：少なくとも3回は修正ループを回す。*

### 1:40 - 2:20 画像與內容替換 (Manual Polish)
- GitHubの畫面上で `Upload files` から画像をアップロードする方法を教える。
- `index.html` 内の `<img>` タグを見て、`src` をアップロードしたファイル名に書き換える方法を教える。
- *このステップで「自分でもコードを少し修正できる」という感覚を持ってもらいます。*

### 2:20 - 3:00 仕上げと公開 (Closing)
- 最終版が正しく表示されているか確認。
- **SEO設定**: `title` タグや `meta description` を追加。
- **READMEの更新**: READMEの最後に "What I learned today" (今日学んだこと) を追加。
- **シェア**: URLを友達に送ったり、SNS (IGなど) でシェア。

---

## 🚑 介入ガイド (Intervention Protocol)

彼女が困っている時は、以下のレベルに応じてサポートしてください。

| 狀況 | 介入レベル | 正解のアクション |
| :--- | :--- | :--- |
| **小さなミス / デザインの微調整 / 文言修正** | **Level 1 (Direct)** | **あなたのPC**で彼女のリポジトリ (GitHub Web) を開き、直接ファイルを修正して Commit。彼女はブラウザを更新するだけ。 |
| **AIが指示を理解しない / 期待通りにならない** | **Level 2 (Proxy)** | **あなたのPC**でAIを走らせ、良いプロンプトや生成されたコードをGoogleドキュメントに渡す。彼女はコピー＆ペーストするだけ。 |
| **全体が壊れた / ファイル構造がめちゃくちゃ** | **Level 3 (Reset)** | あなたが本機で Clone して修正 -> Push。彼女に Git 指令を触らせる必要はありません。 |

> **決め台詞**: 「今、私が直接直したのは、ツールで詰まって欲しくないからだよ。私たちはデザインの方に集中しよう。」

---

## 💡 次のステップ (Next Steps)
今回で、彼女は以下のものを手に入れました：
1. 自分専用のドメイン (GitHub Pages)
2. 最初のポートフォリオ・プロジェクト
3. AIと協働してものを作る経験

**次回予告**：
「サイトがカッコよくなったね！次はAIを使って10ページ一気に書き換えたり (Gemini CLI)、自動化の魔法 (Node.js) を教えるよ。」
