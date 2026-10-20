# 加餐 Session：AI 做 PPT 工具推荐（Dori 推荐）

> 整理日期：2026-10-20  
> 本文合并 Dori 的两轮建议：通用 AI 简报工具选择，以及 Antigravity IDE／Gemini 的搭配方式。  
> 依据：官方文档与 GitHub 项目说明。**尚未安装实测，也没有用同一份素材进行质量对比。** 以下是试用优先级，不是效果排行榜。

[Muse 推荐版](../session-ppt-muse-recommended/)可以作为另一份独立建议对照阅读。本文不评价或改写 Muse 的内容。

## 一、先看结论

不必先搭一个平台，也不必为了做简报更换自己熟悉的 AI 工具。

| 你的主要需求 | Dori 建议先试 | 为什么 |
| --- | --- | --- |
| 最快得到一份有设计感的初稿，不想处理环境 | Gamma | 网页操作，生成后调整，再导出 PPTX |
| 已经在用 Claude，只是偶尔做一份报告 | Claude 网页版内置 PowerPoint 功能 | 先试现有能力，不必先安装 GitHub 项目 |
| 已经使用 Claude Code／Codex，希望读文件、套模板、反复修改 PPTX | PPT Master | 为具备文件和命令执行能力的 Agent 准备的工作流 |
| 主要使用 Antigravity，想留在 IDE 里完成 | Antigravity＋PPT Master | 架构上可行，值得先做小规模验证；不是已经实测成功 |
| 主要使用 Gemini，只想尽快完成一份简报 | Gemini Apps Canvas → Google Slides → PPTX | 不需要 GitHub 或 IDE 配置 |
| 经常做简报，希望有自己的图形界面和自动化服务 | Presenton | 有编辑界面、模板与 API／MCP，但配置和维护更多 |

**最重要的选择标准不是 stars，而是：内容是否正确、修改是否方便、最终交付格式是否符合需求。**

## 二、四个主要候选

### 1. PPT Master：优先尝试的 Agent 工作流

- 项目：[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)
- 本次查阅页面约 **6.4 万 stars**，只是当时的近似热度，不代表质量保证。
- 支持从主题或文档生成原生可编辑 PPTX，并支持自己的 PPTX 模板。
- 它不是另一个模型，而是让 Claude Code、Codex 等 Agent 使用的流程和工具。作者表示 Claude Code 是开发、测试最多的环境。
- 需要 Python 和依赖；云端环境还要确认能安装依赖、执行脚本并取回结果。

适合已经习惯“把材料交给 Agent，让它完成一件事”的人。第一次先验证 5 页，不要把“支持可编辑 PPTX”理解成每种复杂效果都能完美保留。

### 2. Gamma：不想折腾时的省事路线

- 产品：[Gamma](https://gamma.app/)
- 输入主题或材料，生成后在网页中调整，支持导出 PPTX。
- 免费方案导出会带 Gamma 标志。
- 部分视觉效果导出后可能变化，交付前仍要用目标软件打开检查。

适合快速初稿。若目标只是完成简报，优先直接使用网页，不必先绕一圈让 IDE Agent 模拟点击整个网站。

来源：[Gamma 官方导出说明](https://help.gamma.app/en/articles/8022861-what-s-the-easiest-way-to-export-my-gamma)。

### 3. Claude 内置功能／官方 PPTX skill：先利用已有能力

- Claude 网页版开启“代码执行与文件创建”后，可以按任务使用内置 PowerPoint 功能。
- Anthropic 另公开了 [PPTX skill](https://github.com/anthropics/skills/tree/main/skills/pptx)，用于创建、读取和修改简报。
- **网页版内置，不等于每个 Claude Code 环境已经装好。** 使用公开 skill 时，仍需确认依赖和执行环境。

偶尔做一份报告，可以先试网页版直接生成；需要文件夹、脚本和可重复流程时，再考虑 Code＋skill。

来源：[Claude 官方 Skills 说明](https://support.claude.com/en/articles/12512180-use-skills-in-claude)。

### 4. Presenton：更像完整的 AI 简报软件

- 项目：[presenton/presenton](https://github.com/presenton/presenton)
- 提供图形界面、模板、拖曳修改和可编辑 PPTX 导出。
- 可以接云端模型，也支持 Ollama、LM Studio 等模型来源。
- 适合经常制作简报、需要固定界面的人；自架仍有环境配置、模型费用和维护成本。
- 使用云端模型时，材料仍可能发送给模型供应商，不能因为“自架”就认为全程离线。

**接入 Agent 的关键限制：** 支持的 Web／Docker 部署提供 API／MCP；官方明确说明 Electron 桌面版不开放外部 API／MCP。不能把“装好桌面版”当成“IDE 已能直接调用”。

来源：[Presenton API／MCP 说明](https://github.com/presenton/presenton#api-and-mcp-authentication)。

## 三、主要使用 Antigravity IDE，该怎么选？

### 推荐起点：Antigravity＋PPT Master

不需要为了做 PPT 换成 Claude Code，也不必额外找 Claude 模型来操作。

可以把它理解为三层：

1. **Gemini 等模型**：理解材料、组织内容、决定如何修改。
2. **Antigravity Agent**：读取工作区、执行获准的命令、调用工具。
3. **PPT Master**：提供简报工作流与导出工具，生成 PPTX 文件。

这条路线不是必须打开 PowerPoint 窗口并模拟鼠标操作。

### 哪些已经确认，哪些仍待验证？

| 判断 | 当前证据与边界 |
| --- | --- |
| Antigravity 支持 Skills | 官方文档确认，skill 可包含说明、脚本与资源 |
| Antigravity 可以接 MCP | 官方文档确认 |
| PPT Master 不绑定 Claude 模型 | 项目描述面向具有文件读写、命令执行能力的 Agent |
| Antigravity＋PPT Master 值得尝试 | 根据以上能力作出的兼容性判断 |
| 这个组合已经在目标电脑跑通 | **没有验证，不能这样宣称** |
| PPT Master 明确点名认证 Antigravity | 本次查阅的 README 中未看到，不应当作官方认证 |

第一次应先确认 Python、依赖、文件路径、生成命令和输出结果。不要直接照搬其他 IDE 的安装指令，假定它们在 Antigravity 中完全相同。

官方参考：[Antigravity Skills](https://antigravity.google/docs/skills?app=antigravity-ide)、[Antigravity MCP](https://www.antigravity.google/docs/mcp)。

### 其他候选如何结合？

- **Presenton**：可以评估通过 MCP／API 调用，前提是使用提供这些接口的部署版本，并完成必要的连接与认证。它比直接使用 PPT Master 多一层服务，暂不作为最简单起点。
- **Anthropic PPTX skill**：可评估移植到支持 Skills 的 Antigravity，但需检查脚本路径、依赖和预装假设。支持相同 skill 格式，不保证所有环境假设都兼容。
- **Gamma**：本次没有验证 Antigravity 专用接入。需要快速制作时，直接使用其网页通常更简单，不把浏览器自动化作为默认路线。

## 四、Gemini 4 能不能直接做 PPT？

**可以通过 Gemini 产品中的简报功能完成，但不能只看模型名称。**

Google 已发布 Gemini 4 Argon；Gemini Apps 的 Canvas 官方文档也明确支持创建简报。不过，这两件事不等于“Antigravity 里选了 Gemini 4，就自动拥有 Canvas 的全部导出按钮”。

这里要区分：

- **模型能力**：理解、写作、推理和生成代码。
- **产品能力**：提供画布、文件生成、Google Slides 接入或 PPTX 导出。
- **具体环境**：当前账户和工具是否开放这些功能、是否具备所需依赖。

对普通 Gemini Apps，本文推荐的路径是：

1. 在 Gemini 网页版打开 Canvas。
2. 提供主题或材料，明确要求制作简报。
3. 生成后选择 **Export to Slides**。
4. 在 Google Slides 中选择 **文件 → 下载 → Microsoft PowerPoint（.pptx）**。
5. 打开下载的文件，检查字体、布局和可编辑性。

这不是承诺每一页、每一个图形都能无损转换，也不是声称普通 Canvas 已有直接下载 PPTX 的同名按钮。它与 Antigravity 内执行简报脚本是两条不同路线。

来源：[Gemini Canvas 官方说明](https://support.google.com/gemini/answer/16047321?hl=en)、[Gemini 4 Argon 官方公告](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/)、[Microsoft：Google Slides 转 PowerPoint](https://support.microsoft.com/en-gb/office/quick-tips-create-and-open-a-powerpoint-presentation-9401a8fb-a164-4d9f-97d5-9d72c1deb1a0)。

## 五、先做一次 5 页小测试，再决定长期方案

### 测试组合

- 已有 Claude：比较 **Claude 网页版直接生成** 与 **Claude Code＋PPT Master**。
- 主要使用 Antigravity：比较 **Gemini Canvas** 与 **Antigravity＋PPT Master**。
- 不想配置环境：先看 **Gamma**，不必一次试完所有工具。

给两条路线相同的材料、页数、语言、受众和时间限制，避免拿不同任务比较效果。

### 建议验收项目

- [ ] **内容**：没有编造事实、数字或引用；能追溯到输入材料。
- [ ] **字体**：简体／繁体中文或日文没有缺字、替换异常。
- [ ] **布局**：没有文字溢出、遮挡、字号过小或过度拥挤。
- [ ] **可编辑性**：文字能修改，而不只是整页截图。
- [ ] **图表**：若需要改数据，确认是可编辑数据的图表；能移动形状不等于能编辑图表数据。
- [ ] **模板**：有品牌或学校模板要求时，确认颜色、版式和页码符合要求。
- [ ] **交付**：在实际使用的 PowerPoint／Google Slides 中打开检查。
- [ ] **成本与时间**：记录配置时间、生成时间及人工修正量。

公开 repo 中不要放私人作业、同学数据、账户凭证或未经许可的材料。开源工具也不代表模型调用和图片生成一定免费。

## 六、Dori 的最终建议

**偶尔做简报，先用现成产品；经常做、需要可重复流程，再用 Agent＋工具。**

对主要使用 Antigravity 的人：

- 想今天就完成：先试 Gemini Canvas。
- 想留在 IDE，读取多份材料、套模板、反复修改 PPTX：先验证 PPT Master。
- 暂时不为这个需求另架 Presenton 服务，也不因为一个工具较热门就更换熟悉的 IDE。

本文只完成资料整理与选型建议，未安装软件、连接账户、执行生成或作出质量验收。下一步应由一份小型真实材料测试来决定，而不是继续增加候选清单。
