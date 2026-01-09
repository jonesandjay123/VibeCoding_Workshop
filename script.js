/*
  Vibe Coding Workshop Demo (Vanilla JS)
  這支檔案只做兩件事：
  1) 讓「輸入框 / 勾選框」的內容同步更新到頁面預覽
  2) 讓 UI Level 下拉選單可以切換不同的 CSS 檔案
*/

// 等 HTML 都載入完成後再開始抓元素（避免抓不到）
document.addEventListener("DOMContentLoaded", () => {
  // -----------------------------
  // 0) Language 切換（固定文案 i18n）
  // -----------------------------
  const langSelect = document.getElementById("langSelect");

  // 兩種語言的固定文案（給初學者看的：全部明寫，不做花俏抽象）
  const I18N = {
    ja: {
      uiLevelLabel: "UI Level",
      uiLevel0: "Level 0: Bare HTML",
      uiLevel1: "Level 1: Clean CSS",
      uiLevel2: "Level 2: Polished UI",
      langLabel: "Language",
      topbarHint: "同じ内容で、UI の質感だけを 3 段階で見せる（ワークショップ用）",
      heroKicker: "Vibe Coding Workshop",

      identityTitle: "1. 自分のポジショニング (Identity)",
      identityHelp:
        "ここは「一文で自分を紹介する」ための情報（上の Hero にも反映されます）。",
      labelName: "名前",
      labelTagline: "一行キャッチコピー",
      labelSkill: "得意 / スキル",
      labelDirection: "目指す / 方向性",
      previewLabel: "プレビュー：",

      keywordsTitle: "2. サイトの雰囲気 (Keywords)",
      keywordsHelp: "キーワードを 3 つ選んでください（複数選択OK）。",
      keywordsLegend: "Vibe keywords（3つ選ぶ）",
      selectedLabel: "選択中：",
      noneSelected: "（未選択）",

      kwClean: "清潔感 (Clean)",
      kwQuiet: "静か (Quiet)",
      kwKawaii: "かわいい (Kawaii)",
      kwSmart: "知的 (Smart)",
      kwReliable: "信頼 (Reliable)",
      kwSharp: "シャープ (Sharp)",
      kwGentle: "優しい (Gentle)",
      kwPro: "プロ (Pro)",

      contentTitle: "3. 主要コンテンツ (Content)",
      contentHelp:
        "このワークショップのサイトは通常この3つで構成します（この Demo では Now / Contact は次の版で追加）。",
      contentWorks: "作品ギャラリー（このページで実装済み）",
      contentNow: "最近の活動 / 興味（次の版で追加）",
      contentContact: "連絡先（次の版で追加）",

      worksTitle: "4. 作品リスト (Works)",
      worksHelp: "作品を 3 つ入力（タイトル + 短い説明）。",
      workHeading1: "Work 1",
      workHeading2: "Work 2",
      workHeading3: "Work 3",
      labelWorkTitle: "Title",
      labelWorkDesc: "Desc",

      promptTitle: "5. Prompt Staging (AI 指示エリア)",
      promptHint: "This information can be sent to an AI as a prompt",
      copyBtn: "Prompt をコピー",
      copySuccess: "クリップボードにコピーしました。",
      copyFail:
        "自動コピーできません（ブラウザの制限かもしれません）。Prompt を手動で選択してコピーしてください。",
      footerNote:
        "これは学習用デモです：同じ内容を、3つの CSS（UI Level）で見せています。",
    },

    "zh-Hant": {
      uiLevelLabel: "UI Level",
      uiLevel0: "Level 0: Bare HTML",
      uiLevel1: "Level 1: Clean CSS",
      uiLevel2: "Level 2: Polished UI",
      langLabel: "語言",
      topbarHint: "同一份內容，換不同 UI 質感（適合工作坊示範）",
      heroKicker: "Vibe Coding Workshop",

      identityTitle: "1. 我的定位 (Identity)",
      identityHelp: "這一段會放你「一句話介紹自己」的版本（也會同步到上面的 Hero）。",
      labelName: "名字",
      labelTagline: "一句話 Tagline",
      labelSkill: "擅長 / 技能",
      labelDirection: "正在往 / 方向",
      previewLabel: "預覽：",

      keywordsTitle: "2. 網站 Vibe (Keywords)",
      keywordsHelp: "請選 3 個關鍵詞（可多選，工作坊示範用）。",
      keywordsLegend: "Vibe keywords（選 3 個）",
      selectedLabel: "已選：",
      noneSelected: "（尚未選擇）",

      kwClean: "乾淨 (Clean)",
      kwQuiet: "安靜 (Quiet)",
      kwKawaii: "可愛 (Kawaii)",
      kwSmart: "聰明 (Smart)",
      kwReliable: "可靠 (Reliable)",
      kwSharp: "俐落 (Sharp)",
      kwGentle: "溫柔 (Gentle)",
      kwPro: "專業 (Pro)",

      contentTitle: "3. 核心內容 (Content)",
      contentHelp:
        "這個工作坊的網站內容通常包含以下三塊（本 Demo 先把 Now / Contact 留成提示文字）。",
      contentWorks: "作品集展示（本頁已實作）",
      contentNow: "最近在做什麼 / 關注什麼（可在下一版加上）",
      contentContact: "聯絡方式（可在下一版加上）",

      worksTitle: "4. 作品清單 (Works)",
      worksHelp: "填寫 3 個作品（標題 + 簡短描述）。",
      workHeading1: "Work 1",
      workHeading2: "Work 2",
      workHeading3: "Work 3",
      labelWorkTitle: "Title",
      labelWorkDesc: "Desc",

      promptTitle: "5. Prompt Staging (AI 指令區)",
      promptHint: "This information can be sent to an AI as a prompt",
      copyBtn: "複製 Prompt",
      copySuccess: "已複製到剪貼簿。",
      copyFail: "無法自動複製（可能是瀏覽器限制）。請手動全選 Prompt 後複製。",
      footerNote: "這是一個教學用 Demo：同一份內容，用不同 CSS 呈現 3 個 UI Level。",
    },
  };

  // 這些是「範例預設文字」。如果使用者還沒改過，我們會跟著語言切換一起換。
  const DEFAULTS = {
    ja: {
      name: "あなたの名前",
      tagline: "一行キャッチコピー（例：日系クリーン、静かでプロ）",
      skill: "AIと協働してクリーンなポートフォリオを作る",
      direction: "フロントエンドデザインとコンテンツ設計",
      work1Desc:
        "純粋な HTML/CSS/JS だけで、日系クリーンな1ページポートフォリオを作成。GitHub Pages でそのまま公開できる。",
      work2Desc:
        "Identity / Keywords / Works を、AI に貼れる読みやすい Prompt にまとめて、共同作業と改善をしやすくする。",
      work3Desc:
        "控えめな hover / transition だけでカードの質感を上げつつ、読みやすさと上品さを保つ。",
    },
    "zh-Hant": {
      name: "你的名字",
      tagline: "一句話 Tagline（例如：日系清爽、安靜專業）",
      skill: "使用 AI 協作做出清爽作品集網站",
      direction: "前端設計與內容策展",
      work1Desc: "用純 HTML/CSS/JS 做出日系清爽單頁作品集，適合 GitHub Pages 直接上線。",
      work2Desc: "把 Identity / Keywords / Works 轉成一段可貼給 AI 的 Prompt，方便協作與迭代。",
      work3Desc: "用非常克制的 hover / transition，讓作品卡片質感提升，但保持優雅與可讀性。",
    },
  };

  // 目前語言（預設日文）
  let currentLang = "ja";

  function setTextByI18n(lang) {
    const dict = I18N[lang];
    if (!dict) return;

    // 1) 更新所有 data-i18n 的文字
    const nodes = Array.from(document.querySelectorAll("[data-i18n]"));
    nodes.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      if (dict[key] == null) return;
      el.textContent = dict[key];
    });

    // 2) 更新文件語言屬性（對輔助工具與語系很重要）
    document.documentElement.setAttribute("lang", lang);
  }

  function maybeSwapIfStillDefault(el, prevDefault, nextDefault) {
    // 若使用者沒有改過（仍是上一語言的預設），才幫他換成新語言的預設
    if (!el) return;
    if (el.value === prevDefault) {
      el.value = nextDefault;
    }
  }

  function applyLanguage(lang) {
    const prevLang = currentLang;
    currentLang = lang;

    setTextByI18n(lang);

    // Keywords：讓 checkbox 的「值」也跟著語言切換
    // （chips 與 Prompt 會使用 checkbox.value）
    const dict = I18N[lang] || I18N.ja;
    keywordCheckboxes.forEach((checkbox) => {
      const kwId = checkbox.getAttribute("data-kw");
      if (!kwId) return;
      const key = `kw${kwId.charAt(0).toUpperCase()}${kwId.slice(1)}`;
      if (dict[key] == null) return;
      checkbox.value = dict[key];
    });

    // 如果使用者還沒改過範例文字，才跟著語言換範例
    maybeSwapIfStillDefault(inputName, DEFAULTS[prevLang].name, DEFAULTS[lang].name);
    maybeSwapIfStillDefault(
      inputTagline,
      DEFAULTS[prevLang].tagline,
      DEFAULTS[lang].tagline
    );
    maybeSwapIfStillDefault(inputSkill, DEFAULTS[prevLang].skill, DEFAULTS[lang].skill);
    maybeSwapIfStillDefault(
      inputDirection,
      DEFAULTS[prevLang].direction,
      DEFAULTS[lang].direction
    );

    maybeSwapIfStillDefault(work1Desc, DEFAULTS[prevLang].work1Desc, DEFAULTS[lang].work1Desc);
    maybeSwapIfStillDefault(work2Desc, DEFAULTS[prevLang].work2Desc, DEFAULTS[lang].work2Desc);
    maybeSwapIfStillDefault(work3Desc, DEFAULTS[prevLang].work3Desc, DEFAULTS[lang].work3Desc);

    // 切完語言後，讓 Prompt 也跟著更新
    updateAll();
  }

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
      previewKeywords.textContent = (I18N[currentLang] || I18N.ja).noneSelected;
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
    if (currentLang === "ja") {
      return `私は ${name} です。${skill} が得意で、現在は ${direction} を目指しています。`;
    }
    return `我是 ${name}，擅長 ${skill}，正在往 ${direction} 發展。`;
  }

  function buildPromptText(data) {
    const t = I18N[currentLang] || I18N.ja;
    const worksLines = data.works
      .map((w, idx) => `${idx + 1}. Title: ${w.title}\n   Desc: ${w.desc}`)
      .join("\n");

    const keywordLine =
      data.keywords.length > 0 ? data.keywords.join(" / ") : t.noneSelected;

    // 這段 Prompt 會故意「可讀」：讓初學者看得懂，工作坊也好示範
    if (currentLang === "ja") {
      return [
        "# Shared Brain (Workshop Prompt)",
        "",
        "## 1. 自分のポジショニング (Identity)",
        `Name: ${data.name}`,
        `Tagline: ${data.tagline}`,
        buildIdentitySentence(data.name, data.skill, data.direction),
        "",
        "## 2. サイトの雰囲気 (Keywords)",
        keywordLine,
        "",
        "## 3. 主要コンテンツ (Content)",
        "- Works: 作品ギャラリー",
        "- Now: 最近の活動 / 興味（この demo では省略）",
        "- Contact: 連絡先（この demo では省略）",
        "",
        "## 4. 作品リスト (Works)",
        worksLines,
        "",
        "## 5. AI にお願いしたいこと",
        "上の情報を使って、「日系クリーンで余白が多い」1ページのポートフォリオサイトのデザイン提案をください。",
      ].join("\n");
    }

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
      copyStatus.textContent = (I18N[currentLang] || I18N.ja).copySuccess;
    } catch (err) {
      // 有些瀏覽器/環境（例如檔案直接開啟）可能不允許 clipboard API
      copyStatus.textContent = (I18N[currentLang] || I18N.ja).copyFail;
    }
  });

  // 語言下拉選單：預設是日文（HTML 已經 selected=ja）
  currentLang = langSelect.value || "ja";
  applyLanguage(currentLang);
  langSelect.addEventListener("change", (e) => {
    applyLanguage(e.target.value);
  });

  // 第一次載入時先渲染一次
  updateAll();
});

