/*
  Vibe Coding Workshop Demo (Vanilla JS)
  這支檔案只做兩件事：
  1) 讓「輸入框 / 勾選框」的內容同步更新到頁面預覽
  2) 讓 UI Level 下拉選單可以切換不同的 CSS 檔案
*/

// 等 HTML 都載入完成後再開始抓元素（避免抓不到）
document.addEventListener("DOMContentLoaded", () => {
  // -----------------------------
  // 1) UI Level 切換（動態換 CSS 檔）
  // -----------------------------
  const uiLevelSelect = document.getElementById("uiLevelSelect");
  const uiStylesheet = document.getElementById("uiStylesheet");

  // 這個 map 用來把下拉選單的值，對應到 CSS 檔案路徑
  const levelToCssHref = {
    0: "styles/level0.css",
    1: "styles/level1.css",
    2: "styles/level2.css",
  };

  function switchUiLevel(levelValue) {
    const nextHref = levelToCssHref[levelValue];
    if (!nextHref) return;

    // Level 2 會用到淡出/淡入（透過 body[data-switching]）
    // 其他 level 不會壞（因為沒有對應 CSS 就不會有動畫）
    document.body.setAttribute("data-switching", "true");

    // 換 CSS 檔，等 link onload 後再取消淡出狀態
    uiStylesheet.onload = () => {
      document.body.removeAttribute("data-switching");
    };
    uiStylesheet.setAttribute("href", nextHref);
  }

  // 初始狀態（依 HTML 的預設選項）
  switchUiLevel(uiLevelSelect.value);

  // 當使用者切換下拉選單時，切換 CSS
  uiLevelSelect.addEventListener("change", (e) => {
    switchUiLevel(e.target.value);
  });

  // -----------------------------
  // 2) Shared Brain：輸入 → 預覽 → Prompt
  // -----------------------------
  const inputName = document.getElementById("inputName");
  const inputTagline = document.getElementById("inputTagline");
  const inputSkill = document.getElementById("inputSkill");
  const inputDirection = document.getElementById("inputDirection");

  const previewName = document.getElementById("previewName");
  const previewTagline = document.getElementById("previewTagline");
  const previewIdentity = document.getElementById("previewIdentity");
  const previewKeywords = document.getElementById("previewKeywords");

  const work1Title = document.getElementById("work1Title");
  const work1Desc = document.getElementById("work1Desc");
  const work2Title = document.getElementById("work2Title");
  const work2Desc = document.getElementById("work2Desc");
  const work3Title = document.getElementById("work3Title");
  const work3Desc = document.getElementById("work3Desc");

  const work1TitlePreview = document.getElementById("work1TitlePreview");
  const work1DescPreview = document.getElementById("work1DescPreview");
  const work2TitlePreview = document.getElementById("work2TitlePreview");
  const work2DescPreview = document.getElementById("work2DescPreview");
  const work3TitlePreview = document.getElementById("work3TitlePreview");
  const work3DescPreview = document.getElementById("work3DescPreview");

  const promptPreview = document.getElementById("promptPreview");
  const copyPromptBtn = document.getElementById("copyPromptBtn");
  const copyStatus = document.getElementById("copyStatus");

  // 找到所有 keyword 的 checkbox
  const keywordCheckboxes = Array.from(
    document.querySelectorAll('input[type="checkbox"][name="keyword"]')
  );

  function getSelectedKeywords() {
    return keywordCheckboxes
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
  }

  function renderKeywordChips(keywords) {
    // 這裡直接把 chips 清空再重建，讓程式更直覺
    previewKeywords.innerHTML = "";

    if (keywords.length === 0) {
      previewKeywords.textContent = "（尚未選擇）";
      return;
    }

    keywords.forEach((text) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = text;
      previewKeywords.appendChild(chip);
    });
  }

  function buildIdentitySentence(name, skill, direction) {
    return `我是 ${name}，擅長 ${skill}，正在往 ${direction} 發展。`;
  }

  function buildPromptText(data) {
    const worksLines = data.works
      .map((w, idx) => `${idx + 1}. Title: ${w.title}\n   Desc: ${w.desc}`)
      .join("\n");

    const keywordLine =
      data.keywords.length > 0 ? data.keywords.join(" / ") : "（尚未選擇）";

    // 這段 Prompt 會故意「可讀」：讓初學者看得懂，工作坊也好示範
    return [
      "# Shared Brain (Workshop Prompt)",
      "",
      "## 1. 我的定位 (Identity)",
      `Name: ${data.name}`,
      `Tagline: ${data.tagline}`,
      buildIdentitySentence(data.name, data.skill, data.direction),
      "",
      "## 2. 網站 Vibe (Keywords)",
      keywordLine,
      "",
      "## 3. 核心內容 (Content)",
      "- Works: 作品集展示",
      "- Now: 最近在做什麼 / 關注什麼（本 demo 先略）",
      "- Contact: 聯絡方式（本 demo 先略）",
      "",
      "## 4. 作品清單 (Works)",
      worksLines,
      "",
      "## 5. 請 AI 幫我做什麼？",
      `請用以上資訊，幫我產出一個「日系清爽、留白充足」的單頁作品集網站設計建議。`,
    ].join("\n");
  }

  function updateAll() {
    const name = inputName.value.trim() || "（未填）";
    const tagline = inputTagline.value.trim() || "（未填）";
    const skill = inputSkill.value.trim() || "（未填）";
    const direction = inputDirection.value.trim() || "（未填）";
    const keywords = getSelectedKeywords();

    // Hero
    previewName.textContent = name;
    previewTagline.textContent = tagline;

    // Identity sentence
    previewIdentity.textContent = buildIdentitySentence(name, skill, direction);

    // Keywords chips
    renderKeywordChips(keywords);

    // Works preview cards
    const works = [
      { title: work1Title.value.trim() || "（未填）", desc: work1Desc.value.trim() || "（未填）" },
      { title: work2Title.value.trim() || "（未填）", desc: work2Desc.value.trim() || "（未填）" },
      { title: work3Title.value.trim() || "（未填）", desc: work3Desc.value.trim() || "（未填）" },
    ];

    work1TitlePreview.textContent = works[0].title;
    work1DescPreview.textContent = works[0].desc;
    work2TitlePreview.textContent = works[1].title;
    work2DescPreview.textContent = works[1].desc;
    work3TitlePreview.textContent = works[2].title;
    work3DescPreview.textContent = works[2].desc;

    // Prompt preview
    promptPreview.textContent = buildPromptText({
      name,
      tagline,
      skill,
      direction,
      keywords,
      works,
    });
  }

  // 任何輸入改變，都更新一次
  [
    inputName,
    inputTagline,
    inputSkill,
    inputDirection,
    work1Title,
    work1Desc,
    work2Title,
    work2Desc,
    work3Title,
    work3Desc,
  ].forEach((el) => {
    el.addEventListener("input", updateAll);
  });

  keywordCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateAll);
  });

  // Copy to clipboard
  copyPromptBtn.addEventListener("click", async () => {
    copyStatus.textContent = "";

    try {
      await navigator.clipboard.writeText(promptPreview.textContent);
      copyStatus.textContent = "已複製到剪貼簿。";
    } catch (err) {
      // 有些瀏覽器/環境（例如檔案直接開啟）可能不允許 clipboard API
      copyStatus.textContent =
        "無法自動複製（可能是瀏覽器限制）。請手動全選 Prompt 後複製。";
    }
  });

  // 第一次載入時先渲染一次
  updateAll();
});

