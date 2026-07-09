# Session 9: AI 對話、創作與思考蒸餾實驗室

> **日期：** 2026-07-10（暫定）  
> **場景：** 不滿三小時、Zoom 視訊  
> **對象：** 櫻井妹妹（Azunyan）  
> **定位：** 不把重點放在繼續寫網站；用幾個真實、目前可用的 AI 工作流，讓學生親眼理解 AI 能討論、創作、整理思考到什麼程度。

---

## 一句話版本

```text
和 GPT Voice Live 一起討論一個題目
-> 看 AI 把討論變成圖片／短片的可能性
-> 用 Spark Distiller 把對話變成可延續的思考資產
-> 由人挑出真正想保留的方向
```

這堂課的成果不必是一個新網站或完成品；成果是她親身經歷一次「人提出感覺與判斷、AI 協助產生選項並整理過程」的工作流。

## 為什麼暫停 DouceReverie 網站開發

`DouceReverie` 已經是有多語系、商品列表、互動與品牌視覺的 Next.js prototype。第七、八堂已累積不少網站製作經驗；若現場仍主要由老師分享螢幕操作 coding agent，學生看到的會是成品變化，而較難感受到自己能怎麼使用 AI。

本堂仍可借用 DouceReverie 當題材：它是現成的品牌世界觀、圖片與討論材料；但不需要改 code。

## 三條可選路線

### A. AI Creative Director：從品牌概念到短片

**適合：** 想讓她看見圖像、影片、聲音生成的能力；希望畫面效果最強。

以 DouceReverie 或一個虛構品牌作為題材。不是要發布真的廣告，而是用「如果這個品牌有一支 10 秒開場影片，它看起來會如何？」作為一個短、可視覺化的創作題目。

```text
選情緒／題材／鏡頭
-> 圖像生成或編輯
-> image-to-video
-> 音效或旁白
-> 人挑選與評論結果
```

可展示的概念：reference image、局部編輯、人物／商品一致性、鏡頭運動、同步聲音，以及生成結果為什麼仍需要人挑選。

建議工具：ChatGPT Images、Google Flow / Veo、Adobe Firefly。工具帳號、地區與 credits 必須先驗證；影片輸出應有事先準備好的備份。

### B. GPT Voice Live 圓桌：AI 可以參與討論

**適合：** 想讓學生直接感受到 AI interaction 的變化；不想把課變成老師單向 demo。

ChatGPT Voice 的 Live 模式可讓人與 AI 更自然地來回說話、互相打斷。可把它設定成日文為主的「創意副導演」或「提問型訪談主持人」。

討論題目可以選一個：

- AI 可以怎麼幫助一個剛起步的 creator？
- DouceReverie 現在像什麼？若變得更真實，最缺少的是什麼？
- 未來旅行時，AI 最應該幫忙什麼、又不應該替人決定什麼？

AI 的任務是追問、整理選項、挑戰太籠統的想法；不要由 AI 代替學生決定。

### C. Spark Distiller：把一段對話留下來

**適合：** 想展示一個真實、每天會使用的 AI system，而不是只有聊天或炫技。

Spark Distiller 可將 Markdown 對話轉成結構化 thinking assets：thesis、turning points、killed assumptions、live hypotheses、sparks、routes、open questions。這讓學生看見一段會議／對話也可以變成後續能使用的東西。

最適合放在 Voice Live 後面：

```text
Voice 對話
-> 短 transcript（先人工整理、去除私人資訊）
-> Spark Distiller
-> 今天真正的結論／還沒決定的事／下一個小實驗
```

現場要同時準備一份已經 ready 的匿名範例。live session 可以跑，但課程節奏不能等它完成。

## 主推薦：B + C 作為骨架，A 作為可視覺化延伸

第九堂最穩的設計不是三種工具各 demo 一次，而是讓三者回答同一個問題：

```text
人怎麼跟 AI 一起把一個模糊的想法變清楚？
```

1. **Voice Live** 讓她用口頭方式提出感覺、改口、被追問。
2. **Spark Distiller** 讓她看到對話如何變成可保存的結論與下一步。
3. **圖像／短片生成（可選）** 把其中一個方向變成具體視覺，讓她再練一次「人挑選、AI 產生」。

這樣即使影片工具臨時不可用，主題仍完整；如果她對視覺生成有反應，再把剩餘時間投入 A。

## 學生角色與老師角色

| 學生 | AI | Jones |
| --- | --- | --- |
| 選題、說感覺、選 A/B/C、指出不喜歡之處、保留或否決點子 | 問問題、整理選項、生成視覺、蒸餾對話 | 控節奏、操作帳號與工具、追問「為什麼」、守住安全與時間 |

為了適合目前較被動的上課狀態，每 10–15 分鐘讓她做一次小選擇即可。避免問「妳想做什麼？」這種從零開始的題目；改用三選一：

```text
夢幻／詭異／高級？
推近／環繞／拉遠？
這三張哪一張最像真的？為什麼？
這個結論妳想保留、刪除，還是先觀察？
```

## 技術與安全邊界

- Voice Live 使用普通 ChatGPT，不是在 Codex desktop app 裡使用。
- 不使用學生真人臉、私人帳號、密碼、2FA、私人對話或 voice clone。
- Spark Distiller 僅放入已取得同意、去除私人資訊的短 transcript；ready 後可刪除 source。
- 生成影片時不冒充真實人物／品牌、不公開發布。
- 任何輸出都要加上「AI 做得好的地方／不可信或需要人修正的地方」的討論。

## 課前準備

見 [`live-runbook.md`](./live-runbook.md) 的開場、分流與時間表，以及 [`voice-live-prompts.md`](./voice-live-prompts.md) 的可直接貼上／念出的 prompt。

## 官方參考

- [ChatGPT Voice：Live 與 Advanced 的功能與可用性](https://help.openai.com/en/articles/20001274/)
- [ChatGPT Images：生成與編輯圖片](https://help.openai.com/en/articles/11084440/im)
- [Google Flow 使用條件](https://support.google.com/flow/answer/16353333?hl=en)
- [Google Veo 3.1：reference images、直式影片與一致性](https://blog.google/innovation-and-ai/technology/ai/veo-3-1-ingredients-to-video/)
- [Adobe Firefly：文字與語音 timing 生成音效](https://helpx.adobe.com/firefly/web/firefly-video-editor/generate-audio/generate-sound-effects.html)
- [Gemini：驗證 Google AI 生成影片](https://blog.google/innovation-and-ai/products/verify-google-ai-videos-gemini-app/)
