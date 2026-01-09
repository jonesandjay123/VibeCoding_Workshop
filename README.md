# Vibe Coding Workshop マスターガイド
[繁體中文](README_ZH.md) | [日本語](README.md)

> ⚠️ 本ワークショップの唯一の成功基準：
> 「今日、必ず公開・シェアできるURLを手に入れること」

> **対象者**：コーディング未経験者
> **目標**：3時間以内に「個人ポートフォリオサイト」を完成させ、公開する
> **核心コンセプト**：コードの書き方を教えるのではなく、「PM (Product Manager) + CD (Creative Director) としてAIをどう指揮するか」を学ぶ

---

## 🧠 コア教育メソッド：レイヤー積み上げ法

このメソッドの本質は：**まず「最小理解単位」で理解させ、一層ずつ魔法を重ねていく**。

### 6つのLayer、各層が1つの問いに答える：

| Layer | 問い | コンセプト |
| :---: | :--- | :--- |
| 1 | 内容は何？ | **HTML = 骨格** |
| 2 | 見た目は？ | **CSS = 外観** |
| 3 | どう並べる？ | **Layout = レイアウトシステム** |
| 4 | スマホでは？ | **RWD = レスポンシブ** |
| 5 | 質感は？ | **Micro-interactions = 小さな動き** |
| 6 | 世界に見せる | **Deploy = 公開** |

> 🎯 目指すのは「最初から完成品に見える」ではなく
> 「彼女が毎ステップで『今追加したのは何か』を理解できる」こと。

---

## 📅 事前準備 (Pre-flight Checklist)

### 学生の準備 (Student)
- [ ] **Google Pro アカウント** (学生向けの12ヶ月無料版を強く推奨。Gemini Advancedが利用可能になります)
- [ ] **GitHub アカウント** (登録のみ。Gitのインストールは現時点では不要)
- [ ] **素材の用意**：
    - 作品画像 3〜6枚 (JPG/PNG)
    - 自己紹介文 (80〜120文字程度)
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
4. **Now**: What I'm doing recently.
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

---

## ⏱️ 3時間「レイヤー積み上げ」フロー (The Runbook)

### 🎯 一行バージョン —— 当日のコントロールパネル
> Step 1：HTMLだけ（ダサくてOK）→ Step 2：公開してURLゲット → Step 3：CSS追加で日系に → Step 4：作品カードgrid → Step 5：スマホ最適化 → Step 6：hover + scroll reveal → Step 7：「帰宅後も編集できる」ようにマーク

---

### 0:00–0:15 共有脳 & コンテンツ整理

**目標**：素材を全て準備し、vibeを決定

**やること**：
- Google Docテンプレートを開く
- 10-15分かけてヒアリング：名前、tagline、bio、3つの作品のtitle+desc
- vibeを決める：日系クリーン、余白、低彩度

✅ **成果物**：コンテンツ素材（以降のすべてのステップで使用）

---

### 0:15–0:35 Layer 1：純粋なHTML（骨格、わざと「ダサく」）

**目標**：「ウェブサイトは実はテキスト＋構造だけ」と理解させる

**Prompt（最初は1ファイルだけ）**：
> 純粋なHTMLだけを使って（CSSなし、JSなし）、シングルページのポートフォリオを作ってください：Hero/About/Works/Contact。Worksは3項目で。言語は日本語で。適切なセマンティックタグ（header/main/section/footer）を使ってください。

彼女が見るのは「2000年代のウェブページ」—— これがポイント：
✅ 「なるほど、HTMLはコンテンツの骨格なんだ」と理解できる

**ミニ教育ポイント（一言だけ）**：
- `<h1>` は見出し、`<p>` は段落、`<a>` はリンク

---

### 0:35–0:55 まず公開する（超重要なドーパミン！）

**目標**：きれいにする前に、まずURLを手に入れる

**やること**：
1. GitHubでrepo作成（名前は `my-portfolio-2026` など、Publicに設定）
2. `index.html` をアップロード (`Add file` → `Create new file` または `Upload files`)
3. GitHub Pagesを有効化：
   - `Settings` → `Pages`
   - Branchを `main` → `/root` に設定 → Save
   - 1〜2分待ってページを更新、URLゲット！

✅ **成果物**：最初の公開URL（ダサくてもOK）

> 💡 このステップで「私にもできる」と信じられるようになる。

---

### 0:55–1:25 Layer 2：CSS追加（ダサい→見れるへ）

**目標**：「CSSはメイクアップ」と理解させる

**Prompt（HTMLはそのまま、styleだけ追加）**：
> HTMLの構造を変更せずに、style.cssを新規作成してください。日系クリーンな雑誌風：余白、フォント階層明確、低彩度。全体幅は中央寄せ、最大幅900–1000px。影は使わず、細い線と余白で区切りを。

彼女に体験してもらうのは：
✅ **同じHTML、CSSを追加するだけで別世界に**

**ミニ教育ポイント（概念1つだけ）**：
- `class` は「要素にラベルを貼る」こと、CSSが選択できるようになる

---

### 1:25–1:45 Layer 3：レイアウトシステム（Grid / カード）

**目標**：作品リストから「作品カード」へ

**Prompt**：
> Worksセクションをカードgridに変更してください（デスクトップ3列、タブレット2列、スマホ1列）。カードには画像placeholder（4:3）、タイトル、説明を含む。カードの境界線は1px薄グレー、角丸は控えめに。全体的に日系クリーンを維持。

✅ **成果物**：本物のポートフォリオに見える

---

### 1:45–2:05 Layer 4：RWDレスポンシブ

**目標**：スマホは「縮小版」ではなく「別のレイアウト」と理解させる

教えるのは1つだけ：**media query**

**Prompt**：
> media queryを使ってスマホ最適化（<= 600px）：フォント少し大きく、段落の行間を広く、Worksは1列に、ボタンはタップしやすく。CSS内にコメントで説明を追加してください。

✅ **成果物**：スマホで開くと「わあ、本当に使える」と感じる

---

### 2:05–2:30 Layer 5：小さな動き（質感が一気にアップ）

**目標**：「おしゃれにするのにバックエンドは要らない」と理解させる

追加する動きは2種類だけ：
1. **hover**：カードが少し上に浮く
2. **scroll reveal**：フェードイン＆上へ（軽量）

**Prompt**：
> 非常に控えめなmicro-interactionsを追加：Worksカードはhover時に4px上に移動、画像は少し拡大。IntersectionObserverを使ったシンプルなscroll revealで、sectionが画面に入る時にフェードイン＆上に浮く。アニメーション時間0.6–0.8s、派手にしない。

✅ **成果物**：すぐに「プロの作品」に見える

---

### 2:30–2:55 Layer 6：メンテナンス可能に（帰宅後も自分で編集できる）

**目標**：帰宅後も一人で触れるようにする

**2つの方法から選択**（現場での状態を見て）：

#### A. 最もシンプル（最初のレッスンにおすすめ）
- HTMLの最初にコメントで「ここで名前/bio/worksを変更」とマーク
- 教える：テキスト変更 → Commit → 1分待つ → サイト更新完了

#### B. 少し進んだ方法（でもハードルは低い）
- `const data = {...}` で作品データを集約、JSでWorksをレンダリング
- 彼女はdataオブジェクトを変更するだけでコンテンツ更新

---

### 2:55–3:00 ボーナス（オプション）：Firebase Studio 30秒デモ

締めの一言：
> 「今日やったことは、実はこういうツールが自動化してくれる流れなんだよ。」

そして終了 🎉

---

## 📚 分解教育の原則（今後ずっと使える）

1. **各ステップで新しい概念は1つだけ**
2. **きれいにする前にまず公開**（先にURLゲット）
3. **毎回の変更は目に見える違いを**（分からない微調整はしない）
4. **いつでも戻れる状態を維持**（GitHub history / コピーでバックアップ）

---

## 🚑 介入ガイド (Intervention Protocol)

彼女が困っている時は、以下のレベルに応じてサポートしてください。

| 状況 | 介入レベル | アクション |
| :--- | :--- | :--- |
| **小さなミス / デザイン微調整 / 文言修正** | **Level 1 (Direct)** | **あなたのPC**で彼女のリポジトリ (GitHub Web) を開き、直接ファイルを修正して Commit。彼女はブラウザを更新するだけ。 |
| **AIが指示を理解しない / 期待通りにならない** | **Level 2 (Proxy)** | **あなたのPC**でAIを走らせ、良いプロンプトや生成されたコードをGoogleドキュメントに渡す。彼女はコピー＆ペーストするだけ。 |
| **全体が壊れた / ファイル構造がめちゃくちゃ** | **Level 3 (Reset)** | あなたがローカルで Clone して修正 → Push。彼女は Git コマンドを触る必要なし。 |

> **決め台詞**: 「今、私が直接直したのは、ツールで詰まって欲しくないからだよ。私たちはデザインの方に集中しよう。」

---

## 💡 次のステップ (Next Steps)

今回で、彼女は以下のものを手に入れました：
1. 自分専用のドメイン (GitHub Pages)
2. 最初のポートフォリオ・プロジェクト
3. AIと協働してものを作る経験
4. HTML / CSS / JS それぞれの役割の理解

**次回予告**：
> 「サイトがカッコよくなったね！次はAIを使って10ページ一気に書き換えたり (Gemini CLI)、自動化の魔法 (Node.js) を教えるよ。」