const pptxgen = require("pptxgenjs");

const pptx = new pptxgen();
pptx.layout = "LAYOUT_16x9";
pptx.author = "Vibe Coding Workshop";
pptx.title = "Vibe Coding Workshop - 講師訓練簡報";
pptx.subject = "Training Deck for Instructors";

// Color scheme
const colors = {
  primary: "2C3E50",
  blue: "3498DB",
  green: "27AE60",
  greenLight: "2ECC71",
  purple: "9B59B6",
  purpleDark: "8E44AD",
  orange: "E67E22",
  orangeDark: "D35400",
  red: "E74C3C",
  redDark: "C0392B",
  teal: "1ABC9C",
  tealDark: "16A085",
  muted: "ECF0F1",
  text: "34495E",
  white: "FFFFFF"
};

// Slide data
const slides = [
  // Slide 1 - Title
  {
    type: "title",
    headerColor: colors.primary,
    title: "Vibe Coding Workshop",
    subtitle: "講師訓練簡報",
    chapter: "第一章：開場與心理建設"
  },
  // Slide 2
  {
    headerColor: colors.primary,
    accentColor: colors.blue,
    slideTitle: "Slide 1：歡迎頁",
    concept: "核心概念：今天不是來上課，是來完成一個作品",
    tips: [
      "講：「唯一的成功標準是離開時有一個可以分享的網址」",
      "講：「AI 是你的手，你負責出腦」",
      "做：觀察學生表情，必要時破冰"
    ]
  },
  // Slide 3
  {
    headerColor: colors.primary,
    accentColor: colors.blue,
    slideTitle: "Slide 2：今天你的角色",
    concept: "核心概念：你是 PM + 創意總監，不是工程師",
    tips: [
      "講：「我們不是來學寫程式的，你的工作是指揮 AI」",
      "講：「就像導演不用自己演戲，但要知道怎麼說戲」",
      "做：若學生說「我不會寫程式」，回應「太好了，今天本來就不用你寫」"
    ]
  },
  // Slide 4
  {
    headerColor: colors.primary,
    accentColor: colors.blue,
    slideTitle: "Slide 3：AI 不是答題機",
    concept: "核心概念：AI 是超快的實習生，不是百科全書",
    tips: [
      "講：三種任務——查事實（驗證對錯）、產草稿（喜不喜歡）、做你不會的事（能不能跑）",
      "講：「你覺得它錯，代表你有品味」",
      "做：舉例「請實習生做海報，做得醜不叫錯，叫再改」"
    ]
  },
  // Slide 5 - Chapter 2
  {
    headerColor: colors.green,
    accentColor: colors.greenLight,
    slideTitle: "Slide 4：網頁的本質是什麼？",
    chapter: "第二章：HTML — 網頁的骨架",
    concept: "核心概念：網頁 = 文字 + 結構，就這樣",
    tips: [
      "講：「所有網站，底層都是純文字檔」",
      "Demo：展示完全沒有 CSS 的 HTML 頁面（Level 0）",
      "做：讓學生打開範例網站，切換到 Level 0 看「裸體 HTML」"
    ]
  },
  // Slide 6
  {
    headerColor: colors.green,
    accentColor: colors.greenLight,
    slideTitle: "Slide 5：HTML 骨架三兄弟",
    concept: "核心概念：每個 HTML 都有固定的外殼結構",
    tips: [
      "講：<html> 是整棟房子、<head> 是屋頂閣樓、<body> 是客廳",
      "Demo：打開 index.html，指認這三個標籤",
      "做：只講「這三個一定會有」，不深入細節"
    ]
  },
  // Slide 7
  {
    headerColor: colors.green,
    accentColor: colors.greenLight,
    slideTitle: "Slide 6：內容三劍客",
    concept: "核心概念：最常用的三個標籤：標題、段落、連結",
    tips: [
      "講：<h1> 大標題、<p> 段落、<a> 連結",
      "Demo：展示三個標籤的程式碼範例",
      "做：請學生在範例中找到這三種標籤"
    ]
  },
  // Slide 8
  {
    headerColor: colors.green,
    accentColor: colors.greenLight,
    slideTitle: "Slide 7：表格結構",
    concept: "核心概念：表格是「結構最直觀」的 HTML 元素",
    tips: [
      "講：<table> 整張表、<tr> 一橫排、<td> 一格",
      "講：「就像 Excel，一格一格，只是用文字寫出來」",
      "做：一起數一個表格有幾個 <tr>、幾個 <td>"
    ]
  },
  // Slide 9
  {
    headerColor: colors.green,
    accentColor: colors.greenLight,
    slideTitle: "Slide 8：其他常見標籤",
    concept: "核心概念：還有很多標籤，但今天不用全部學會",
    tips: [
      "講：快速帶過 <img>、<div>、<span>、<ul>/<li>",
      "講：「這些以後 AI 會幫你用，你認得就好」",
      "做：若學生問細節，回答「很好的問題，之後問 AI」"
    ]
  },
  // Slide 10
  {
    headerColor: colors.green,
    accentColor: colors.greenLight,
    slideTitle: "Slide 9：<head> 裡的東西",
    concept: "核心概念：<head> 放的是給瀏覽器和搜尋引擎看的資訊",
    tips: [
      "講：<title> 是分頁標題、<meta> 是各種設定",
      "講：「這些是讓網站在手機上正常顯示的魔法咒語，AI 會幫你寫」",
      "做：只讓學生知道這東西存在，不解釋 viewport 或 charset"
    ]
  },
  // Slide 11 - Chapter 3
  {
    headerColor: colors.purple,
    accentColor: colors.purpleDark,
    slideTitle: "Slide 10：同一個 HTML，完全不同的世界",
    chapter: "第三章：CSS — 網頁的化妝術",
    concept: "核心概念：CSS 是化妝，不是整形",
    tips: [
      "講：「HTML 是骨架，CSS 是皮膚和衣服」",
      "Demo：現場切換 Level 0 → Level 1，停頓 3 秒",
      "做：問「內容有變嗎？」（沒有）「那變的是什麼？」（外觀）"
    ]
  },
  // Slide 12
  {
    headerColor: colors.purple,
    accentColor: colors.purpleDark,
    slideTitle: "Slide 11：顏色與背景",
    concept: "核心概念：改顏色是最快產生「我做到了」感覺的方式",
    tips: [
      "講：color 文字顏色、background-color 背景顏色",
      "Demo：展示改顏色的 CSS 程式碼",
      "做：讓學生選一個喜歡的顏色，請 AI 幫忙改"
    ]
  },
  // Slide 13
  {
    headerColor: colors.purple,
    accentColor: colors.purpleDark,
    slideTitle: "Slide 12：間距的魔法",
    concept: "核心概念：間距決定「擠」還是「舒服」",
    tips: [
      "講：padding 內距、margin 外距",
      "講：「留白不是浪費空間，是讓眼睛休息」",
      "做：把某個區塊的 padding 從 10px 改成 40px，看差異"
    ]
  },
  // Slide 14
  {
    headerColor: colors.purple,
    accentColor: colors.purpleDark,
    slideTitle: "Slide 13：卡片感三件套",
    concept: "核心概念：三個屬性讓任何東西變成「卡片」",
    tips: [
      "講：border 邊框、border-radius 圓角、box-shadow 陰影",
      "Demo：切換到 Level 2 看卡片效果",
      "做：讓學生觀察「卡片感」的視覺變化"
    ]
  },
  // Slide 15
  {
    headerColor: colors.purple,
    accentColor: colors.purpleDark,
    slideTitle: "Slide 14：class 是什麼？",
    concept: "核心概念：class 是幫元素「貼標籤」，讓 CSS 找得到它",
    tips: [
      "講：HTML 寫 class=\"card\"，CSS 寫 .card { }",
      "講：「.」就是「找 class 叫這個名字的元素」",
      "做：不講 id、不講 selector 優先級"
    ]
  },
  // Slide 16
  {
    headerColor: colors.purple,
    accentColor: colors.purpleDark,
    slideTitle: "Slide 15：CSS 不用背，問 AI 就好",
    concept: "核心概念：CSS 屬性有幾百個，沒人全部記得",
    tips: [
      "講：「你只需要會說『我想要什麼效果』，然後問 AI」",
      "Demo：示範 prompt「請幫我把按鈕變成圓角、有陰影、hover 時顏色變深」",
      "做：讓學生用自己的話描述一個想要的效果，一起問 AI"
    ]
  },
  // Slide 17 - Chapter 4
  {
    headerColor: colors.orange,
    accentColor: colors.orangeDark,
    slideTitle: "Slide 16：Layer 0 → Layer 1 → Layer 2",
    chapter: "第四章：從醜到美的蛻變",
    concept: "核心概念：同一個內容，三種「解析度」",
    tips: [
      "講：Level 0 裸體 HTML、Level 1 基本 CSS、Level 2 精緻 UI",
      "Demo：來回切換三個 Level",
      "做：每切換一次，問「內容變了嗎？功能變了嗎？那變的是什麼？」"
    ]
  },
  // Slide 18
  {
    headerColor: colors.orange,
    accentColor: colors.orangeDark,
    slideTitle: "Slide 17：Hover 效果",
    concept: "核心概念：滑鼠移上去時的小動畫，讓網站「活起來」",
    tips: [
      "講：transition 讓變化平滑、:hover 滑鼠移上去時",
      "講：「卡片上移 + 陰影加深 = 專業感」",
      "做：在 Level 2 把滑鼠移到卡片上"
    ]
  },
  // Slide 19 - Chapter 5
  {
    headerColor: colors.red,
    accentColor: colors.redDark,
    slideTitle: "Slide 18：什麼是「上線」？",
    chapter: "第五章：讓世界看見 — 部署上線",
    concept: "核心概念：把檔案放到網路上，讓別人打開網址就能看",
    tips: [
      "講：「現在網站只存在你的電腦裡」",
      "講：「GitHub Pages 就是 GitHub 免費借你的那台 24 小時開機的電腦」",
      "做：用「借電腦」的比喻讓概念變得親切"
    ]
  },
  // Slide 20
  {
    headerColor: colors.red,
    accentColor: colors.redDark,
    slideTitle: "Slide 19：GitHub Pages 上線步驟",
    concept: "核心概念：三個步驟，拿到你的網址",
    tips: [
      "講：上傳 index.html → Settings → Pages → Branch: main → Save → 等 1-2 分鐘",
      "Demo：一起操作完整流程",
      "做：讓學生拿到網址後立刻傳給一個朋友"
    ]
  },
  // Slide 21
  {
    headerColor: colors.red,
    accentColor: colors.redDark,
    slideTitle: "Slide 20：改一個字，世界就更新",
    concept: "核心概念：部署的魔法：改 → 存 → 自動更新",
    tips: [
      "講：「你剛剛改變了一個在網路上的東西」",
      "Demo：在 GitHub 上直接編輯、Commit、重新整理網址",
      "做：讓學生改自己網站的一個字，看到更新"
    ]
  },
  // Slide 22 - Chapter 6
  {
    headerColor: colors.teal,
    accentColor: colors.tealDark,
    slideTitle: "Slide 21：今天你完成了什麼",
    chapter: "第六章：收尾與展望",
    concept: "核心概念：盤點成就，強化信心",
    tips: [
      "講：可分享的網址 / HTML 是骨架、CSS 是外觀 / 指揮 AI 的工作流 / 自己改網站內容",
      "做：慢慢講，讓學生有「我真的做到了」的感覺",
      "做：請學生分享網址，互相看看"
    ]
  },
  // Slide 23
  {
    headerColor: colors.teal,
    accentColor: colors.tealDark,
    slideTitle: "Slide 22：回家能做什麼",
    concept: "核心概念：給學生「下課後的方向」",
    tips: [
      "講：改內容在 GitHub 編輯、改樣式問 AI、加功能問 AI",
      "講：「不用怕弄壞，GitHub 有歷史紀錄，隨時能救回來」",
      "做：降低學生「回家繼續玩」的恐懼"
    ]
  },
  // Slide 24
  {
    headerColor: colors.teal,
    accentColor: colors.tealDark,
    slideTitle: "Slide 23：下一堂課預告",
    concept: "核心概念：埋下期待的種子",
    tips: [
      "講：「今天是手動版，下次教你自動化」",
      "講：預告 Git CLI、Gemini CLI、Node.js",
      "做：若時間允許，快速展示 Firebase Studio"
    ]
  },
  // Slide 25
  {
    headerColor: colors.teal,
    accentColor: colors.tealDark,
    slideTitle: "Slide 24：Q&A 與結語",
    concept: "核心概念：回答問題，正式收尾",
    tips: [
      "講：「你今天已經比 90% 的人更了解網站是怎麼運作的」",
      "講：「記得把網址分享給朋友」",
      "做：準備 FAQ 答案，可拍合照或螢幕截圖"
    ]
  }
];

// Create slides
slides.forEach((data, index) => {
  const slide = pptx.addSlide();

  if (data.type === "title") {
    // Title slide
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: 0, y: 0, w: "100%", h: "100%",
      fill: { color: data.headerColor }
    });

    slide.addText(data.title, {
      x: 0.5, y: 2, w: 9, h: 1.2,
      fontSize: 48, fontFace: "Arial", color: colors.white, bold: true, align: "center"
    });

    slide.addText(data.subtitle, {
      x: 0.5, y: 3.2, w: 9, h: 0.6,
      fontSize: 24, fontFace: "Arial", color: "BDC3C7", align: "center"
    });

    slide.addText(data.chapter, {
      x: 0.5, y: 4.8, w: 9, h: 0.4,
      fontSize: 14, fontFace: "Arial", color: "95A5A6", align: "center"
    });
  } else {
    // Content slide
    // Header bar
    slide.addShape(pptx.shapes.RECTANGLE, {
      x: 0, y: 0, w: "100%", h: 1.1,
      fill: { color: data.headerColor }
    });

    // Title
    slide.addText(data.slideTitle, {
      x: 0.4, y: 0.2, w: 9.2, h: 0.6,
      fontSize: 28, fontFace: "Arial", color: colors.white, bold: true
    });

    // Chapter subtitle (if exists)
    if (data.chapter) {
      slide.addText(data.chapter, {
        x: 0.4, y: 0.7, w: 9.2, h: 0.3,
        fontSize: 12, fontFace: "Arial", color: "D5DBDB"
      });
    }

    // Concept box
    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: 0.4, y: 1.3, w: 9.2, h: 0.7,
      fill: { color: data.accentColor },
      rectRadius: 0.1
    });

    slide.addText(data.concept, {
      x: 0.6, y: 1.4, w: 8.8, h: 0.5,
      fontSize: 18, fontFace: "Arial", color: colors.white, bold: true
    });

    // Tips box
    slide.addShape(pptx.shapes.ROUNDED_RECTANGLE, {
      x: 0.4, y: 2.2, w: 9.2, h: 2.8,
      fill: { color: colors.muted },
      rectRadius: 0.1
    });

    // Tips header
    slide.addText("講師提示：", {
      x: 0.6, y: 2.35, w: 8.8, h: 0.4,
      fontSize: 14, fontFace: "Arial", color: colors.primary, bold: true
    });

    // Tips list
    const tipsText = data.tips.map(tip => ({
      text: tip,
      options: { bullet: { type: "bullet" }, paraSpaceBefore: 6, paraSpaceAfter: 6 }
    }));

    slide.addText(tipsText, {
      x: 0.6, y: 2.7, w: 8.8, h: 2.2,
      fontSize: 14, fontFace: "Arial", color: colors.text, valign: "top"
    });
  }
});

pptx.writeFile({ fileName: "VibeCoding_TrainingDeck.pptx" })
  .then(() => console.log("Created: VibeCoding_TrainingDeck.pptx"))
  .catch(err => console.error(err));
