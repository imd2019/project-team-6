import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import { customizationClickSound } from "./startScreen.js";

export let male;
export let female;
export let diverse;

export let maleStroke;
export let femaleStroke;
export let diverseStroke;

export let maleConsultant;
export let femaleConsultant;
export let diverseConsultant;

export let maleWaiter;
export let femaleWaiter;
export let diverseWaiter;

export let maleWaiterStroke;
export let femaleWaiterStroke;
export let diverseWaiterStroke;

export let maleConsultantStroke;
export let femaleConsultantStroke;
export let diverseConsultantStroke;

export let maleWaiterChild;
export let femaleWaiterChild;
export let diverseWaiterChild;

export let maleConsultantChild;
export let femaleConsultantChild;
export let diverseConsultantChild;

export let maleWaiterChildStroke;
export let femaleWaiterChildStroke;
export let diverseWaiterChildStroke;

export let maleConsultantChildStroke;
export let femaleConsultantChildStroke;
export let diverseConsultantChildStroke;

export let townPic;
export let cityPic;
export let townPicStroke;
export let cityPicStroke;

export let moneyLarge;

export let moneyIcon;
export let happinessIcon;
export let healthIcon;
export let timelinePic;
export let newsPic;

export let mainFont;
export let fallbackFont;
export let boldFont;

export let tafelPic;
export let tafelStroke;
export let caritasPic;
export let caritasStroke;

export let closedVindu;
export let openVindu;

export let endbg;

export let dGgHg;
export let dGgHm;
export let dGgHs;
export let dGmHg;
export let dGmHm;
export let dGmHs;
export let dGsHg;
export let dGsHm;
export let dGsHs;

export let fGgHg;
export let fGgHm;
export let fGgHs;
export let fGmHg;
export let fGmHm;
export let fGmHs;
export let fGsHg;
export let fGsHm;
export let fGsHs;

export let mGgHg;
export let mGgHm;
export let mGgHs;
export let mGmHg;
export let mGmHm;
export let mGmHs;
export let mGsHg;
export let mGsHm;
export let mGsHs;

export let zG;
export let zM;
export let zS;

let opacityText = 2;
let opacityChange = +2;

let yes = new Button(-80, 40, 20, 20, true, "Ja", () => {
  setCurrentScreen("getGender");
  customizationClickSound.play();
});

let no = new Button(80, 40, 40, 20, true, "Nein", () => {
  window.location.reload();
  customizationClickSound.play();
});

function content() {
  push();
  textAlign(CENTER);
  textFont(mainFont);
  fill(222, 70, 90, opacityText);
  textSize(20);
  text(
    "Pandemien wie Corona betreffen alle Menschen.\n Aber manche trifft es härter als andere.\n\nSchlüpfe mit VINDU in die Schuhe eines Anderen\nund versuche dich vier Wochen lang durch eine simulierte Pandemie zu kämpfen.\nDu wirst auf Situationen treffen, bei denen du vielleicht schwere Entscheidungen treffen musst. \nBehalte dabei dein Geld, deine Gesundheit und deine Zufriedenheit im Auge.",
    windowWidth / 2,
    windowHeight / 2 - 100
  );
  fill(245, 189, 197, opacityText);
  text(
    "Nimmst du die Herausforderung an?",
    windowWidth / 2,
    windowHeight / 2 + 20
  );
  pop();
}
function draw() {
  clear();
  background("#1e1f3f");
  opacityText += opacityChange;
  content();

  //Fehler nicht gefunden, wenn if Satz existiert, richtet er sich erst aus , wenn ifsatz erfüllt ist
  if (opacityText === 252) {
    opacityChange = 0;
    yes.display();
    no.display();
    yes.mouseOver();
    no.mouseOver();
  }
}

function mouseClicked() {
  yes.mouseClicked();
  no.mouseClicked();
}

function preload() {
  maleStroke = loadImage("./assets/character/maleStroke.png");
  femaleStroke = loadImage("./assets/character/femaleStroke.png");
  diverseStroke = loadImage("./assets/character/diverseStroke.png");

  male = loadImage("./assets/character/male.png");
  female = loadImage("./assets/character/female.png");
  diverse = loadImage("./assets/character/diverse.png");

  maleConsultantChild = loadImage("./assets/character/maleConsultantChild.png");
  femaleConsultantChild = loadImage(
    "./assets/character/femaleConsultantChild.png"
  );
  diverseConsultantChild = loadImage(
    "./assets/character/diverseConsultantChild.png"
  );

  maleConsultantChildStroke = loadImage(
    "./assets/character/maleConsultantChildStroke.png"
  );
  femaleConsultantChildStroke = loadImage(
    "./assets/character/femaleConsultantChildStroke.png"
  );
  diverseConsultantChildStroke = loadImage(
    "./assets/character/diverseConsultantChildStroke.png"
  );

  maleWaiterChild = loadImage("./assets/character/maleWaiterChild.png");
  femaleWaiterChild = loadImage("./assets/character/femaleWaiterChild.png");
  diverseWaiterChild = loadImage("./assets/character/diverseWaiterChild.png");

  maleWaiterChildStroke = loadImage(
    "./assets/character/maleWaiterChildStroke.png"
  );
  femaleWaiterChildStroke = loadImage(
    "./assets/character/femaleWaiterChildStroke.png"
  );
  diverseWaiterChildStroke = loadImage(
    "./assets/character/diverseWaiterChildStroke.png"
  );

  maleConsultant = loadImage("./assets/character/maleConsultant.png");
  femaleConsultant = loadImage("./assets/character/femaleConsultant.png");
  diverseConsultant = loadImage("./assets/character/diverseConsultant.png");

  maleConsultantStroke = loadImage(
    "./assets/character/maleConsultantStroke.png"
  );
  femaleConsultantStroke = loadImage(
    "./assets/character/femaleConsultantStroke.png"
  );
  diverseConsultantStroke = loadImage(
    "./assets/character/diverseConsultantStroke.png"
  );

  maleWaiter = loadImage("./assets/character/maleWaiter.png");
  femaleWaiter = loadImage("./assets/character/femaleWaiter.png");
  diverseWaiter = loadImage("./assets/character/diverseWaiter.png");

  maleWaiterStroke = loadImage("./assets/character/maleWaiterStroke.png");
  femaleWaiterStroke = loadImage("./assets/character/femaleWaiterStroke.png");
  diverseWaiterStroke = loadImage("./assets/character/diverseWaiterStroke.png");

  cityPic = loadImage("./assets/character/cityPic.png");
  townPic = loadImage("./assets/character/townPic.png");
  cityPicStroke = loadImage("./assets/character/cityPicStroke.png");
  townPicStroke = loadImage("./assets/character/townPicStroke.png");

  moneyLarge = loadImage("./assets/ui/moneyLarge.png");

  moneyIcon = loadImage("./assets/ui/money.png");
  happinessIcon = loadImage("./assets/ui/happiness.png");
  healthIcon = loadImage("./assets/ui/health.png");
  newsPic = loadImage("./assets/ui/news.png");

  mainFont = loadFont("./assets/fonts/Semplicita_Medium.otf");
  fallbackFont = loadFont("./assets/fonts/seguiemj.ttf");
  boldFont = loadFont("./assets/fonts/Semplicita_Bold.otf");

  timelinePic = loadImage("./assets/ui/timeline.png");

  caritasPic = loadImage("./assets/ui/caritasPic.png");
  caritasStroke = loadImage("./assets/ui/caritasPicStroke.png");
  tafelPic = loadImage("./assets/ui/tafelPic.png");
  tafelStroke = loadImage("./assets/ui/tafelPicStroke.png");

  closedVindu = loadImage("./assets/ui/Startscreen.png");

  endbg = loadImage("./assets/endBGs/end_bg.png");

  dGgHg = loadImage("./assets/endBGs/diverse/D_Gg-Hg-02.png");
  dGgHm = loadImage("./assets/endBGs/diverse/D_Gg-Hm-02.png");
  dGgHs = loadImage("./assets/endBGs/diverse/D_Gg-Hs-02.png");
  dGmHg = loadImage("./assets/endBGs/diverse/D_Gm-Hg-02.png");
  dGmHm = loadImage("./assets/endBGs/diverse/D_Gm-Hm-02.png");
  dGmHs = loadImage("./assets/endBGs/diverse/D_Gm-Hs-02.png");
  dGsHg = loadImage("./assets/endBGs/diverse/D_Gs-Hg-02.png");
  dGsHm = loadImage("./assets/endBGs/diverse/D_Gs-Hm-02.png");
  dGsHs = loadImage("./assets/endBGs/diverse/D_Gs-Hs-02.png");

  fGgHg = loadImage("./assets/endBGs/female/W_Gg-Hg-02.png");
  fGgHm = loadImage("./assets/endBGs/female/W_Gg-Hm-02.png");
  fGgHs = loadImage("./assets/endBGs/female/W_Gg-Hs-02.png");
  fGmHg = loadImage("./assets/endBGs/female/W_Gm-Hg-02.png");
  fGmHm = loadImage("./assets/endBGs/female/W_Gm-Hm-02.png");
  fGmHs = loadImage("./assets/endBGs/female/W_Gm-Hs-02.png");
  fGsHg = loadImage("./assets/endBGs/female/W_Gs-Hg-02.png");
  fGsHm = loadImage("./assets/endBGs/female/W_Gs-Hm-02.png");
  fGsHs = loadImage("./assets/endBGs/female/W_Gs-Hs-02.png");

  mGgHg = loadImage("./assets/endBGs/male/M_Gg-Hg-02.png");
  mGgHm = loadImage("./assets/endBGs/male/M_Gg-Hm-02.png");
  mGgHs = loadImage("./assets/endBGs/male/M_Gg-Hs-02.png");
  mGmHg = loadImage("./assets/endBGs/male/M_Gm-Hg-02.png");
  mGmHm = loadImage("./assets/endBGs/male/M_Gm-Hm-02.png");
  mGmHs = loadImage("./assets/endBGs/male/M_Gm-Hs-02.png");
  mGsHg = loadImage("./assets/endBGs/male/M_Gs-Hg-02.png");
  mGsHm = loadImage("./assets/endBGs/male/M_Gs-Hm-02.png");
  mGsHs = loadImage("./assets/endBGs/male/M_Gs-Hs-02.png");

  zG = loadImage("./assets/endBGs/happiness/Zg-03.png");
  zM = loadImage("./assets/endBGs/happiness/Zm-03.png");
  zS = loadImage("./assets/endBGs/happiness/Zs-03.png");
}

export function drawPlayer() {
  // TODO: Implement
}

export default { draw, mouseClicked, preload };
