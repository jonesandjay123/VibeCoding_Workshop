# 加餐 Session：AI 做 PPT 工具全景与选型（Muse 推荐）

> **标注：本文件由 Muse 整理推荐**（2026-10-20），内容经公开资料查证后统整。
> 姐妹文件夹：`session-ppt-dori-recommended/`（Dori 推荐专区）。
> 适合谁：想用 AI 做简报、又不想被单一厂商绑定的同学。文末有 Antigravity IDE 的结合方式，针对主要使用 Antigravity 的同学。

---

## 一、先看全景：现在做 PPT 有三条路线

| 路线 | 代表 | 一句话 |
| :--- | :--- | :--- |
| AI Agent 直接生成 | Claude Cowork、Codex | 下指令，agent 读你的文件、直接产出 .pptx |
| GitHub 开源 repo | Presenton、Marp、Slidev | 自己架一台「简报工厂」，数据不出门 |
| SaaS／原生 AI | Gamma、Gemini 原生功能 | 打开就能用，最快上手，按月付费或绑生态 |

### 路线一：AI Agent 直接生成

官方都已把简报做成内建工作流，不必再自己写 python-pptx 脚本从零拼。

- **Claude Cowork**：能读本机文件夹，一次产出上百页投影片，成品是货真价实的 .pptx，每一页打开 PowerPoint 都能正常编辑文字、改颜色、换版型。繁体中文内容深度是目前实测最强的一家。缺点：慢（10 页约 22 分钟），视觉偏朴素（纯文字＋图标，文件感重）。
- **Claude for PowerPoint**：直接嵌入 PowerPoint 右侧栏，自动套用公司母版与品牌色，支持单页局部编辑、原生可编辑图表，Pro 方案也已开放。
- **Codex**：同样能读本机文件夹，并能把整套工作流程存成可重复使用的 Skill；输出可选纯图片或可编辑 PPTX 两种形式。适合需要自动化、客制化工作流的重度使用者。

### 路线二：GitHub 开源 repo

- **Presenton**（约 1.1 万星，Apache-2.0）：目前开源简报生成器的第一名，定位就是「开源版 Gamma」。Docker 一行自架，或安装桌面 App（Mac／Windows／Linux）；可接 OpenAI、Anthropic、Gemini、Ollama 等十余家模型供应商，也可以全本地运行。输出可编辑的 PPTX 与 PDF，内置 API 与 MCP server，还能上传自己的 PPTX 范本学习版式。缺点：仍挂 beta（v0.9.x），默认设计较朴素。
- **ALLWEONE/presentation-ai**：另一个 Gamma 风格的开源生成器，名气小一截。
- **Slidev／Marp**：老牌开发者路线——用 Markdown 写投影片，版本控制友好；Marp 能直接转 PPTX／PDF／HTML。它们不是 AI 生成工具，而是「写代码式做投影片」，胜在稳定、可控。

### 路线三：SaaS 与 Gemini 原生

- **Gamma**：最快、最漂亮（10 页不到 2 分钟）。但本质是网页式简报，PPTX 导出弱，又要订阅。
- **Gemini 原生（重点：不用装任何东西，现在就能用）**
  1. **Gemini App 的 Canvas**：把大纲丢进 Canvas 生成投影片，产出是可编辑的文字＋图片素材，可直接导出成 Google 简报，或下载成 PPTX。
  2. **Google 简报内置 Gemini**：在 Google 简报里直接生成单页、一键美化旧草稿，全版面可编辑；需要 Google Workspace 的 Gemini 方案或 Google One AI Premium 订阅。
  3. **NotebookLM**（2026 年 7 月已改名为 **Gemini Notebook**）：丢来源资料生成简报，内容严格依据来源、较不易产生幻觉；2026 年 4 月起支持 **PPTX 导出**，免费版就能用。代价：本质是图片式简报，文字不能直接修改。

---

## 二、Antigravity IDE 能操控哪些

Antigravity 完整支持 MCP（设定文件为 `~/.gemini/config/mcp_config.json`，stdio 与远程 SSE 都支持），它自己的 agent 也能写程序、跑终端机。所以上面清单里：

| 工具 | 能否给 Antigravity 操控 | 说明 |
| :--- | :--- | :--- |
| Presenton | ✅ 可以 | 有 MCP server 与 API，挂进 Antigravity 即可用自然语言调用；但需要 Docker＋API key，门槛偏高 |
| Marp／Slidev | ✅ 可以，最轻 | 本质是命令行工具：agent 写好 Markdown，直接跑命令转 PPTX／PDF，本机生成，文件还能进 Git 版控 |
| python-pptx | ✅ 可以 | agent 直接写脚本生成 .pptx，不用装任何 repo |
| NotebookLM MCP | ✅ 可以（加分项） | 社区项目 `notebooklm-mcp-cli`：把 Gemini Notebook 挂进 Antigravity，在 IDE 里用自然语言建笔记本、生成 slide deck、下载成 PPTX |
| Claude Cowork／Claude for PowerPoint／Codex | ❌ 不行 | 分属 Anthropic 与 OpenAI 自家生态，进不了 Antigravity |

---

## 三、选型建议

**一般情况：**

1. **临时要一份简报** → Claude Cowork 或 Codex＋Skill：内容质量最好，PPTX 原生可编辑，慢一点但不用再转档。
2. **长期自架、数据不出门、或批量自动生成** → Presenton：自架在自己的机器上，接本地 Ollama 就是全离线，还有 MCP 可以让 agent 直接调用。

**给主要使用 Antigravity 的同学（樱井同学）：**

1. **做作业交差** → 先用 Gemini Canvas 或 NotebookLM：零设定、打开就能用，先求有。
2. **课堂上练** → Antigravity agent＋Marp 或 python-pptx：这正是 Vibe Coding 的核心心智模型（下指令 → agent 写文件 → 本机产出），而且生成在本机跑，不像云端简报那样吃网络稳定性。
3. **Presenton 先缓缓** → 等 Marp 那套顺手了，再当进阶专题，由老师带着装一次就好。

---

## 四、参考链接

- Presenton GitHub：https://github.com/presenton/presenton
- Presenton 官网：https://presenton.ai/
- 《经理人》AI 简报全攻略（Claude、ChatGPT、NotebookLM、Gemini 教学）：https://www.managertoday.com.tw/articles/view/72462
- 2026 AI 简报工具实测对比（Gamma、ChatGPT、Claude、Gemini）：https://maplefeather.com/article/ai-presentation-tools-gamma-gemini-claude-chatgpt-2026
- NotebookLM／Gemini Notebook 2026 中文教学：https://grenade.tw/blog/notebooklm-google-ai-notebook/
- Antigravity MCP 服务器目录：https://www.stackaitools.com/antigravity-mcp
- NotebookLM MCP 整合 Antigravity 教学：https://dev.to/gde/integrate-notebooklm-with-gemini-cli-google-antigravity-or-other-agents-with-mcp-1m1f
