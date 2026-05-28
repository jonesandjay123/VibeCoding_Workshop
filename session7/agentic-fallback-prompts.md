# Session 7 Agentic / Fallback Prompts

> 這些 prompt 是課堂保命用。工具還能跑時，讓 agent 小步改。Agent 額度爆掉時，用網頁 LLM 回完整檔案，再手動貼回 Xcode。

---

## 0. 超短 Emergency Prompt

```text
I am teaching a beginner. Please help us make the smallest safe change.

Context:
[paste current file, current screen, or error]

Goal:
[paste one small goal]

Rules:
- Keep it beginner-friendly.
- Do not redesign everything.
- Do not add APIs.
- Return only the code or steps we need.
```

---

## 1. 檢查專案，不修改

```text
Please inspect this SwiftUI iOS project and explain the current structure in beginner-friendly terms.

Do not modify files yet.

Focus on:
- Which file controls the main screen
- Where the phrase card data is defined
- Where visible text appears
- What would be the safest first small change
```

---

## 2. Rename / Re-theme 小步修改

```text
Please make only one small change:
Rename the app concept from Korean Phrase Buddy to Vietnam Phrase Buddy.

Requirements:
- Update visible UI text only.
- Keep the current data model.
- Do not add API integration.
- Do not change the project structure.
- Make sure the app still builds.

After editing, summarize exactly what files you changed.
```

---

## 3. 加越南文欄位，不接 API

```text
Add a Vietnamese translation field to each phrase card.

Requirements:
- Do not call any API.
- When the user adds a Japanese phrase, create a card with the Japanese text and a placeholder Vietnamese text like "Vietnamese translation goes here".
- Keep the data model simple.
- Keep the UI beginner-friendly.
- Make sure the app still builds.

Please keep the change as small as possible.
```

---

## 4. 加 Copy Button

```text
Only modify the main SwiftUI screen file.

Add a copy button next to each Vietnamese translation.

Requirements:
- The button should copy the Vietnamese text to the clipboard.
- Do not change the app structure.
- Do not add API integration.
- Do not redesign the whole screen.
- Keep the code beginner-friendly.

After editing, explain how to test it in Xcode.
```

---

## 5. 外部 LLM 翻譯流程

```text
Add an "Export Translation Prompt" feature.

Goal:
The app should generate a prompt that the user can copy into ChatGPT or Gemini to translate all untranslated Japanese phrases into natural Vietnamese.

Requirements:
- Do not use any API key.
- The exported prompt should ask the LLM to return JSON.
- The JSON format should include each card id and Vietnamese translation.
- Keep the feature simple and beginner-friendly.
- If adding import is too large, only implement export first.

Please make the smallest safe change.
```

---

## 6. JSON 匯入修復

```text
The app cannot import this JSON:

[paste JSON here]

Expected format:
[
  {
    "id": "...",
    "vietnamese": "..."
  }
]

Please explain what is wrong in beginner-friendly terms.
Then return corrected JSON only.
```

---

## 7. Xcode Build Error 修復

```text
The app no longer builds in Xcode.

Here is the error message:

[paste the important error lines here]

Please:
1. Explain the likely cause in simple terms.
2. Suggest the smallest safe fix.
3. Avoid rewriting the whole app unless necessary.
4. If code changes are needed, tell me exactly which file to edit.
```

---

## 8. Agent 額度用完時：完整檔案替換模式

```text
You are helping a beginner modify a simple SwiftUI iOS app.

I will paste the current ContentView.swift below.

Please make the requested change and return the full updated ContentView.swift file only.

Requirements:
- Keep the code beginner-friendly.
- Do not introduce extra files.
- Do not use external APIs.
- Do not change the project structure.
- Make sure the file can compile in Xcode.

Requested change:
[write one small change here]

Current ContentView.swift:
[paste the full file here]
```

---

## 9. 即興想法拆解 Prompt

```text
I am teaching a beginner AI-native creation class.
The student has this idea:

[paste idea]

Please help us turn it into a small 60-90 minute prototype plan.

Return:
1. One-sentence product concept
2. Target user
3. MVP features
4. What to avoid today
5. Best tool path
6. Fallback path if coding agents run out of quota
7. First three tiny tasks

Keep it beginner-friendly and practical.
```

---

## 10. App 包裝 Prompt

```text
We made a small prototype app:

[describe app]

Please create:
1. A friendly app name
2. A one-line slogan
3. A short landing page hero text
4. An iOS app icon prompt
5. Three possible first social posts introducing the app

Tone:
- Friendly
- Beginner-friendly
- Not too corporate
- Suitable for a student project
```
