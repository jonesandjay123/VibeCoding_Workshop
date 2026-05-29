# Session 7 Agentic Tool-Making Prompts

> 這些 prompt 是課堂用的「指揮 AI agent」範本。重點不是讓 AI 一次做完整 app，而是讓學生練習：描述需求、限制範圍、跑起來驗收、用錯誤訊息 debug。

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
- Do not rewrite the whole project.
- Do not add APIs.
- Return only the code or steps we need.
```

---

## 1. Inspect First, Do Not Modify

```text
Please inspect this beginner SwiftUI iOS project and explain it in beginner-friendly terms.

Do not modify files yet.

Focus on:
- Which file controls the main screen
- Where visible text appears
- Where sample phrases or examples are defined
- What would be the safest first small remix task
- How we can test the change in Xcode Simulator
```

---

## 2. Minimal App Remix Prompt

```text
We are remixing this beginner SwiftUI app into a small personal tool.

Goal:
Change it from a Korean study buddy into [Fashion Phrase Buddy / Creator Caption Buddy / Travel Korea Buddy v2].

Please make the smallest useful change:
- Change the visible title and subtitle.
- Replace the sample examples with 3-5 examples for this theme.
- Add one simple scene/category if the app already has categories.

Rules:
- Do not rewrite the whole app.
- Do not change the project structure.
- Do not add API integration.
- Keep the code beginner-friendly.
- After editing, list exactly which files changed.
- Explain how I can test the change in Xcode Simulator.
```

---

## 3. Visible Text Only

```text
Please make only one small change:
Update the visible UI copy so the app feels like [chosen theme].

Requirements:
- Update visible text only.
- Keep the data model the same.
- Do not add API integration.
- Do not change the project structure.
- Do not rename files or targets.
- Make sure the app still builds.

After editing:
- Summarize exactly what changed.
- Tell me what I should see in the Simulator.
```

---

## 4. Add One Scene / Category

```text
Please add one new scene/category to the existing app:
[Cafe / Shopping / Content Shoot / Outfit Check / Airport]

Requirements:
- Reuse the app's existing category or example pattern.
- Add only 3-5 beginner-friendly example phrases.
- Do not redesign the UI.
- Do not add API integration.
- Keep the change small enough for a beginner to review.

After editing:
1. List the changed files.
2. Explain where the new examples appear.
3. Explain how to test in Xcode Simulator.
```

---

## 5. Debugging Prompt

```text
The app no longer works as expected.

Error / problem:
[paste the important Xcode error lines or describe the screen problem]

Context:
- This is a beginner SwiftUI app.
- We only want the smallest necessary fix.
- Do not rewrite the whole project.
- Do not add new architecture.

Please:
1. Explain the likely cause in simple terms.
2. Tell me which file needs to change.
3. Fix only the minimum necessary part.
4. List how to confirm the fix in Xcode Simulator.
```

---

## 6. Expected vs Actual Mismatch Prompt

```text
The app builds, but the result does not match what I expected.

Expected:
[describe what I wanted to see]

Actual:
[describe what I actually see in the Simulator]

Please:
- Explain the difference in beginner-friendly terms.
- Propose the smallest change to make the app match the expected behavior.
- Do not rewrite unrelated parts.
- If you need to edit code, say which file and why.
```

---

## 7. AI Changed Too Much

```text
The agent changed more files than I expected.

Here is the git status / changed file list:
[paste git status or file list]

Original goal:
[paste the small task]

Please help me review:
1. Which changes are necessary for the goal?
2. Which changes look unrelated or risky?
3. What is the safest next step for a beginner?

Do not suggest a big rewrite. Focus on controlling scope.
```

---

## 8. Agent 額度用完時：完整檔案替換模式

```text
You are helping a beginner modify a simple SwiftUI iOS app.

I will paste the current file below.

Please make the requested change and return the full updated file only.

Requirements:
- Keep the code beginner-friendly.
- Do not introduce extra files.
- Do not use external APIs.
- Do not change the project structure.
- Make sure the file can compile in Xcode.

Requested change:
[write one small change here]

Current file:
[paste the full file here]
```

---

## 9. Product Owner Prompt

```text
I am teaching a beginner AI-native tool-making class.
The student wants to remix a Korean study app into this tool:

[paste idea]

Please help us turn it into a 45-60 minute beginner-friendly remix plan.

Return:
1. One-sentence tool concept
2. Target user
3. The smallest visible change we should make first
4. 2-3 sample categories or scenes
5. What to avoid today
6. First three tiny AI-agent tasks
7. How to validate each task in the Simulator

Keep it practical and do not assume deep iOS knowledge.
```

---

## 10. Wrap-up Reflection Prompt

```text
We just completed a beginner AI-agent coding lesson.

What happened:
[briefly describe the tool remix and any errors]

Please create a short reflection for the student:
- What the human decided
- What the AI agent executed
- How we validated the result
- What to do next time when starting a new tool idea

Tone:
- Friendly
- Beginner-friendly
- Not too corporate
- Suitable for a student learning Vibe Coding
```
