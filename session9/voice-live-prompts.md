# Session 9：GPT Voice Live 與 Spark Distiller Prompt 卡

## GPT Voice Live：創意副導演（日文）

開始 Voice Live 後可直接念出或貼上：

```text
あなたは今日のクリエイティブ・ディレクターです。
私たちはAIがクリエイターやブランドづくりをどう手伝えるかを考えます。

ルール：
- 日本語で、短く自然に話してください。
- 一回に質問は一つだけにしてください。
- 私たちが曖昧なことを言ったら、具体例かA/B/Cの選択肢で聞き返してください。
- 代わりに決めないでください。最後の決定は私たちがします。
- 面白い別案があれば、丁寧に途中で提案しても大丈夫です。
- 10分後に、決まったこと、まだ決まっていないこと、次に試せる小さな実験をまとめてください。
```

## GPT Voice Live：討論題目

從一題開始，不要一次全問。

```text
1. AIは、これから始めるクリエイターのどの作業を助けられる？
2. DouceReverie は今どんなブランドに見える？もっと本物らしくするには何が足りない？
3. 旅行中のAIは何を手伝ってほしい？逆に、何を勝手に決めてほしくない？
```

## 轉交 Spark Distiller 前的人工作法

不要直接上傳完整 Voice 逐字稿。先把雙方同意要保留的 5–10 分鐘內容整理成短 Markdown：

```md
## 1. Azunyan
我希望 AI 可以幫忙想內容，但不要替我決定要不要公開。

## 2. GPT Voice
那我們可以把「準備內容」和「發布決定」分開。哪一個準備工作最煩？

## 3. Azunyan
可能是把同一個想法改成日文、中文、英文。

## 4. Jones
所以第一個小實驗可以是：AI 先產三種語言草稿，但人最後選語氣與發布版本。
```

建立 session 後，請學生一起看四件事：

```text
今天真正決定了什麼？
哪一個原本的假設被改掉？
什麼事情仍然沒有答案？
下一個最小、可真的試一次的實驗是什麼？
```

## 視覺生成選配：讓一個 spark 變具體

若需要圖像／影片段，先由學生做選擇，再讓 AI 寫 prompt。範例：

```text
Create one vertical fashion-film key visual for a fictional brand called Douce Reverie.
Mood: quiet dreamlike Tokyo rain at dusk.
Subject: a fictional model wearing an ivory coat; no real person.
Composition: editorial close-up, warm ivory and muted blush palette,
subtle rain on glass, elegant but not luxurious-logo-heavy.
No text, no readable brand logo, no copied real brand styling.
```

影片只加一個動作：

```text
Turn this reference image into a 8-second vertical fashion-film shot.
The camera slowly pushes toward the subject through rain-speckled glass.
The coat moves subtly in a light breeze. Keep the person and outfit consistent.
No dialogue, no on-screen text, one continuous shot.
```

生成後的必問題：

```text
哪個地方最符合原本的感覺？
哪個地方一看就覺得怪、假或太普通？
如果它真的要代表品牌，妳會讓它公開嗎？為什麼？
```
