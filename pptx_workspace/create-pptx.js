const pptxgen = require("pptxgenjs");
const { html2pptx } = require("./html2pptx");

async function createPresentation() {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "Vibe Coding Workshop";
  pptx.title = "Vibe Coding Workshop - 講師訓練簡報";
  pptx.subject = "Training Deck for Instructors";

  const slides = [
    "slide01.html", "slide02.html", "slide03.html", "slide04.html",
    "slide05.html", "slide06.html", "slide07.html", "slide08.html",
    "slide09.html", "slide10.html", "slide11.html", "slide12.html",
    "slide13.html", "slide14.html", "slide15.html", "slide16.html",
    "slide17.html", "slide18.html", "slide19.html", "slide20.html",
    "slide21.html", "slide22.html", "slide23.html", "slide24.html",
    "slide25.html"
  ];

  for (const slideFile of slides) {
    console.log(`Processing ${slideFile}...`);
    await html2pptx(slideFile, pptx);
  }

  await pptx.writeFile({ fileName: "VibeCoding_TrainingDeck.pptx" });
  console.log("Presentation created: VibeCoding_TrainingDeck.pptx");
}

createPresentation().catch(console.error);
