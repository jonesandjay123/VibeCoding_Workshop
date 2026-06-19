# Session 8 Creator Agent Prompts

> 這份是課堂現場可直接使用的 prompt sheet。重點是：把 creator workflow 拆成小步，讓 AI agent 幫忙準備，但公開發佈前一定停下來給人確認。

---

## 0. 開場探索 Prompt

```text
I am designing my first AI creator workflow.

Please interview me like a beginner-friendly product coach.

Ask me one question at a time about:
1. What kind of content I want to create
2. Which platforms I might use
3. Which steps feel repetitive
4. Which steps I want AI to help prepare
5. Which steps AI should never do without asking me

Keep the language simple.
After the interview, summarize my first workflow idea.
```

---

## 1. Jyn Null Demo Explainer Prompt

```text
Please explain this creator workflow to a beginner student.

Workflow:
- Find an idea or news topic
- Write a short post
- Generate or choose an image
- Prepare platform-specific versions for X / Instagram / Threads
- Upload the image
- Paste the caption
- Stop before publishing
- Review and approve
- Verify the public post after publishing

Explain:
1. Which parts are creative decisions
2. Which parts are repetitive operations
3. Which parts AI can help with
4. Which parts should always require human confirmation

Tone:
- Friendly
- Beginner-friendly
- Suitable for a creator, not just an engineer
```

---

## 2. Record & Replay Skill Planning Prompt

```text
We want to create a safe Record & Replay workflow for preparing a social media post.

Goal:
Prepare a post in the browser and stop before publishing.

Inputs:
- image_path
- caption
- platform
- expected_account
- publish_mode = dry-run

Please design a beginner-friendly workflow with:
1. Steps to demonstrate
2. What Codex should learn
3. What should be variable next time
4. Safety rules
5. Success criteria
6. What to do if the account is wrong
7. What to do if the image or caption does not appear correctly

Important:
- Never publish without human confirmation.
- Never enter passwords.
- Do not browse feeds or DMs.
- Stop if a login or security challenge appears.
```

---

## 3. X / Threads Dry-Run Skill Draft

```text
Please draft a Codex skill concept for this workflow.

Skill name:
prepare-social-post-dry-run

Purpose:
Prepare a social media image post in the browser, verify the preview, and stop before publishing.

Inputs:
- image_path
- caption
- platform: X or Threads
- expected_account

Rules:
- Confirm the account before composing.
- Upload the provided image.
- Paste the provided caption exactly.
- Verify the image and caption in the preview.
- Stop before pressing Publish/Post.
- Ask the user to review.
- Never publish unless the user explicitly asks in the same task.
- Never enter passwords or 2FA codes.
- Stop if the wrong account is active.
- Stop if the platform asks for a login challenge.

Please return:
1. A concise skill description
2. Step-by-step instructions
3. Safety checks
4. Success criteria
5. Failure handling
```

---

## 4. DouceReverie Project Inspect Prompt

```text
Please inspect this beginner website project before editing.

Goal:
We want to add an "AI Creator Workflow" page or section to the DouceReverie website.

Do not modify files yet.

Please tell us:
1. What framework or structure this project uses
2. Which files likely control the homepage or routing
3. Whether it is safer to add a new route or a new homepage section
4. The smallest visible change we should make first
5. How to run and preview the site

Keep the explanation beginner-friendly.
```

---

## 5. Add AI Creator Workflow Page / Section Prompt

```text
Please add a beginner-friendly "AI Creator Workflow" page or section to this website.

Goal:
Make the site feel like a small creator home base, not just a portfolio.

Content sections:
- My Content Themes
- My Posting Checklist
- My AI Tools
- My First Reusable Workflow
- Things AI Should Never Do Without Asking Me

Rules:
- Keep the current visual style.
- Make the smallest safe change.
- Do not redesign the whole site.
- Do not add Firebase, login, auth, database, or new backend services.
- Do not add a large dependency.
- Keep the text easy to edit later.

After editing:
1. List changed files.
2. Explain how to preview the page.
3. Explain what the student should customize.
```

---

## 6. Student Personalization Prompt

```text
Please help me personalize my AI Creator Workflow page.

My content interests:
[fashion / travel / language learning / food / daily diary / music / anime / study abroad / other]

Platforms I might use:
[Instagram / X / Threads / YouTube / TikTok / blog / personal website]

Tone:
[cute / calm / dreamy / stylish / funny / serious / bilingual / other]

Please write beginner-friendly copy for:
1. My Content Themes
2. My Posting Checklist
3. My AI Tools
4. My First Reusable Workflow
5. Things AI Should Never Do Without Asking Me

Keep it short and suitable for a personal website.
```

---

## 7. Fallback: Record & Replay 卡住時

```text
Record & Replay is not ready in our environment today.

Please help us turn the workflow into a clear checklist instead.

Workflow idea:
[describe the workflow]

Please create:
1. Inputs
2. Step-by-step checklist
3. Safety rules
4. Success criteria
5. A future skill name
6. What we should record next time when the tool is ready

Tone:
- Encouraging
- Beginner-friendly
- This is preparation, not failure
```

---

## 8. Debug Prompt for Website Changes

```text
The website change did not work as expected.

Expected:
[what we expected to see]

Actual:
[what we see instead]

Terminal / browser error:
[paste error if any]

Please:
1. Explain the likely cause in beginner-friendly terms.
2. Propose the smallest fix.
3. Do not redesign unrelated parts.
4. Do not add Firebase / login / backend.
5. List exactly what to test after the fix.
```

---

## 9. Wrap-up Reflection Prompt

```text
We just completed a beginner AI Creator Agent lesson.

What happened:
- We discussed creator workflows.
- We learned that AI can help prepare repetitive steps.
- We designed a safe dry-run posting workflow.
- We added or planned an AI Creator Workflow page for the student's website.

Please write a short reflection for the student:
1. What the human decided
2. What the AI helped prepare
3. Why public publishing needs human confirmation
4. What her next AI creator workflow could be

Tone:
- Friendly
- Encouraging
- Suitable for a non-engineering student
```

