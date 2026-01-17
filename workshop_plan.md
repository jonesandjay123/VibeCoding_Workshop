# Vibe Coding Workshop — Instructor Plan

> A practical guide for teaching non-coders to build and deploy a personal portfolio using AI collaboration.

---

## Core Teaching Philosophy

### This Is NOT a Coding Class

The fundamental shift: we're not teaching HTML/CSS/JavaScript. We're teaching **how to be a PM (Product Manager) + CD (Creative Director) who directs AI**.

The student's future competitive edge comes from **combinatorial ability**, not syntax memorization.

**Wrong framing:** "HTML / CSS is what?"
**Right framing:** "I have an idea → AI helps me turn it into a product → it goes live on the internet"

### AI Is Not an Answer Machine

The single most important mindset shift to instill:

> AI is like an extremely fast intern. It will make mistakes, it will confidently say wrong things. But it can give you 10 drafts in 3 minutes. Your job isn't to grade it—your job is to be the **director**: select, modify, set the tone.

Many beginners think "AI is wrong half the time" because they treat it like a fact-checker. The reframe:

- **Fact queries** (dates, API parameters) → Yes, check for correctness
- **Draft generation** (copy, layout, color) → No single right answer; evaluate by "do I like it?"
- **Synthesis tasks** (build a website, create animations) → You don't need to understand it; evaluate by "does it run? can I modify it?"

### README.md Is the Real Control Center

This is a 100% professional-level insight:

> First write the skeleton/plan/direction in the .md file → Let LLM refine the prompt → Let the IDE read the .md and execute

The README is not for humans to read—it's a **design document for AI** and for your future self.

### "I Made It" > "I Understand It"

The workshop's success metric is not comprehension. It's completion.

> Today we're not here to learn. We're here to **finish something**.

---

## Target Learner Profile

### Who This Is For
- **Background:** Zero coding experience. Design/creative students or professionals.
- **Mindset:** May feel "I'm not a tech person" or "AI gives wrong answers half the time"
- **Constraints:** No local development environment. Unfamiliar with terminal/CLI.
- **Language:** May prefer Japanese; comfortable reading Chinese but more fluent in Japanese

### Psychological Prep (Address Before Day 1)
- "Today is not an exam. It's a creative play session."
- "AI is your hands. You provide the brain."
- "The only success metric: you leave today with a shareable URL."

---

## Workshop Flow (3 Hours)

### Overview: The Layer Stacking Method

Each layer answers one question. Each layer adds one visible change.

| Layer | Question | Concept |
|:---:|:---|:---|
| 1 | What is the content? | HTML = Skeleton |
| 2 | What does it look like? | CSS = Appearance |
| 3 | How is it arranged? | Layout = Grid system |
| 4 | What about mobile? | RWD = Responsive |
| 5 | Does it feel polished? | Micro-interactions |
| 6 | Can the world see it? | Deploy = Go live |

**Key principle:** Don't aim for "looks like a finished product from the start." Aim for "she understands what was just added at every step."

---

### Phase 0: Shared Brain & Content Inventory (0:00–0:15)

**Goal:** Gather all raw materials, establish the vibe

**Actions:**
- Open Google Doc (title: `YYYY-MM-DD Portfolio Workshop`)
- Interview and fill in: name, tagline, bio, 3 work titles + descriptions
- Lock in the vibe: J-style clean, whitespace, low saturation

**Output:** Content materials (used in every subsequent step)

---

### Phase 1: Pure HTML — The "Ugly" Skeleton (0:15–0:35)

**Goal:** Show that a website is just text + structure

**Prompt (first version, single file only):**
> Please create a single-page portfolio using only pure HTML (no CSS, no JS): Hero/About/Works/Contact. Works should have 3 items. Use Japanese if preferred. Include semantic tags (header/main/section/footer).

**Expected result:** A "year 2000 website" — and that's the point.

**Teaching moment (one sentence only):**
- `<h1>` is a heading, `<p>` is a paragraph, `<a>` is a link

---

### Phase 2: First Deploy — The Dopamine Hit (0:35–0:55)

**Goal:** Get a live URL before it's pretty

**Critical insight:** This step makes her believe "I can do this."

**Actions:**
1. Create GitHub repo (e.g., `my-portfolio-2026`, set to Public)
2. Upload `index.html` via GitHub web UI (`Add file` → `Upload files`)
3. Enable GitHub Pages: `Settings` → `Pages` → Branch: `main` → `/root` → Save
4. Wait 1-2 minutes, refresh, get the URL

**Output:** First publicly accessible URL (ugly is fine)

---

### Phase 3: Add CSS — From Ugly to Presentable (0:55–1:25)

**Goal:** Show that CSS is "makeup"

**Prompt (keep HTML intact, only add style):**
> Without changing the HTML structure, create a style.css with a Japanese clean magazine style: whitespace, clear typography hierarchy, low saturation. Content centered, max-width 900–1000px. No shadows, use thin lines and spacing for separation.

**Key experience:** Same HTML, completely different world just by adding CSS.

**Teaching moment (one concept only):**
- `class` is "putting a label on an element" so CSS can select it

---

### Phase 4: Layout System — Grid & Cards (1:25–1:45)

**Goal:** Transform Works from a list into portfolio cards

**Prompt:**
> Convert the Works section to a card grid (desktop: 3 columns, tablet: 2, mobile: 1). Cards include image placeholder (4:3), title, description. Card border: 1px light gray, slight rounded corners. Keep the Japanese clean aesthetic.

**Output:** Now it looks like a real portfolio

---

### Phase 5: RWD — Responsive Design (1:45–2:05)

**Goal:** Show that mobile isn't "a smaller version"—it's a different layout

**Teach only one thing:** media query

**Prompt:**
> Add mobile optimization using media query (<= 600px): slightly larger font, more line height, Works becomes 1 column, buttons easier to tap. Add comments in CSS to explain.

**Output:** Opening on mobile feels like "wow, this actually works"

---

### Phase 6: Micro-interactions — Instant Polish (2:05–2:30)

**Goal:** Show that "fancy" doesn't require backend

**Add only two effects:**
1. **Hover:** Card lifts slightly
2. **Scroll reveal:** Fade in + slide up (lightweight)

**Prompt:**
> Add very restrained micro-interactions: Works cards lift 4px on hover with slight image scale; add simple scroll reveal (IntersectionObserver) so sections fade in + slide up when entering viewport. Animation duration 0.6–0.8s, not flashy.

**Output:** Instantly looks "professional"

---

### Phase 7: Maintainability — She Can Edit Later (2:30–2:55)

**Goal:** Enable her to continue playing at home without you

**Two approaches (choose based on her state):**

**A. Simplest (recommended for first session):**
- Add comments at the top of HTML marking "change name/bio/works here"
- Teach: edit text → Commit → wait 1 min → site updates

**B. Slightly advanced (still zero barrier):**
- Use a `const data = {...}` to centralize work items, JS renders Works
- She only needs to edit the data object to change content

---

### Phase 8: Easter Egg — Firebase Studio Demo (2:55–3:00)

**Optional 30-second demo**

Say one sentence to close:
> "What you just did manually—this tool automates the entire flow."

Then wrap up.

---

## Key Teaching Tricks

### The "Intentionally Ugly" First Version
Starting with raw HTML that looks like a 2000s website is **intentional**. It creates:
- Clear understanding: "HTML is just the skeleton"
- Anticipation gap: CSS addition creates a powerful "wow" moment
- Confidence: "I can see exactly what each layer added"

### Deploy Before Pretty
Getting a live URL at the 35-minute mark (while still ugly) is **crucial dopamine design**:
- Immediate achievement unlocked
- Fear of "I can't do this" eliminated
- Every subsequent step is "improving something that already exists"

**Suggested action:** Have her immediately share the URL with one friend: "Tell them: this is a site I'm building, it'll look better soon"

### The Three-Iteration Cycle
The main course isn't "generating the site" (that's fast). It's:

1. **Version 1:** AI generates randomly (5 min)
2. **Version 2:** She picks 3 things she doesn't like → you translate to prompt (15 min)
3. **Version 3:** Add her personal assets (photos/links/work images) → adjust vibe (20 min)

If she completes three rounds, she suddenly understands:
> "AI's value isn't being correct—it's letting me make what I want."

### The Director Reframe
When she says "AI is wrong half the time," respond:

> "The fact that you think it's wrong half the time means you already have taste. The question is: how do you learn to **direct it with your taste**?"

This instantly upgrades her from "criticized student" to "creative director."

---

## Intervention Protocol

When she gets stuck, assess your intervention level:

| Situation | Level | Action |
|:---|:---|:---|
| Small fix / layout tweak / copy edit | **Level 1 (Direct)** | Open her GitHub repo on YOUR computer, Edit file directly → Commit. She just refreshes. |
| AI doesn't understand prompt / can't generate what you want | **Level 2 (Proxy)** | Run AI on YOUR computer, paste good prompt or generated code to Google Doc. She just copies and pastes. |
| Everything broken / file structure messed up | **Level 3 (Reset)** | Clone her repo to your computer → major fix locally → push back. She doesn't touch Git commands at all. |

**Golden phrase:**
> "I'm fixing this directly right now because I don't want you stuck on tools. Let's focus on design."

---

## What to Emphasize

1. **"Completion over comprehension"** — Today's goal is a shareable URL, not understanding every line
2. **"You are the director"** — AI is the fast intern; you select, modify, set direction
3. **"README is your design document"** — Write what you want first, let AI execute
4. **"Same content, different layers"** — Each step adds one visible change
5. **"Deploy early, iterate often"** — Get the URL first, make it pretty later

---

## What to Avoid

1. **Don't install Node.js in session 1** — Installation issues will eat mental bandwidth and derail the session
2. **Don't install Git locally** — GitHub web UI is sufficient; Git CLI is for session 2
3. **Don't teach theory before practice** — Show the result first, explain minimally after
4. **Don't use Firebase Studio as the main tool** — It hides the process; use it only as an "easter egg" at the end
5. **Don't let her get stuck on tools** — Intervene quickly; the goal is design, not debugging
6. **Don't explain everything** — One concept per layer, maximum
7. **Don't make changes that aren't visually obvious** — Every iteration should have a visible "before/after"

---

## Definition of Done

She "graduates" when these 7 items are checked:

- [ ] Website displays correctly on mobile and desktop
- [ ] At least 3 work cards are present
- [ ] She can edit one piece of text herself and see the change
- [ ] GitHub repo has a README (including what was done today)
- [ ] GitHub Pages deployment successful
- [ ] She can share the URL with a friend
- [ ] She can explain "the AI collaboration flow" in one sentence

---

## Post-Workshop: What She Leaves With

1. Her own domain (GitHub Pages URL)
2. Her first portfolio project
3. Experience collaborating with AI
4. Understanding of what HTML / CSS / JS each do (roughly)

**Teaser for Session 2:**
> "Now your site is cool. Next time we'll teach you how to make AI change 10 pages at once (Gemini CLI), and how to do automation (Node.js)."

---

## Session 2 Preview (Future)

**Topics to introduce:**
- Git CLI basics (clone, commit, push)
- Node.js installation
- Gemini CLI for batch operations
- Multi-file refactoring
- Automation workflows

**Positioning:**
> "Session 1 was learning to drive and reaching the destination. Session 2 is opening the hood."

---

*This plan is instructor-facing. Keep it practical. Keep her moving forward.*
