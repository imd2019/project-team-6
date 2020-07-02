import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";

export let male;
export let female;
export let diverse;

export let child;

export let maleConsultant;
export let femaleConsultant;
export let diverseConsultant;

export let maleWaiter;
export let femaleWaiter;
export let diverseWaiter;

export let maleStroke;
export let femaleStroke;
export let diverseStroke;

export let townPic;
export let cityPic;

export let noPic;
export let moneyLarge;

export let moneyIcon;
export let happinessIcon;
export let healthIcon;

export let mainFont;

export let timelinePic;

export let tafelPic;
export let caritasPic;

export let closedVindu;
export let openVindu;

export let fallbackFont;

let opacityText = 2;
let opacityChange = +2;

let yes = new Button(-80, 40, 20, 20, true, "Ja", () =>
  setCurrentScreen("getGender")
);

let no = new Button(80, 40, 40, 20, true, "Nein", () =>
  window.location.reload()
);

function content() {
  push();
  textAlign(CENTER);
  textFont(mainFont);
  fill(222, 70, 90, opacityText);
  textSize(20);
  text(
    "Pandemien wie Corona betreffen alle Menschen.\n Aber manche trifft es härter als andere.\n\nSchlüpfe in VINDU in die Schuhe eines Anderen und versuche vier Wochen \ndurch eine simulierte Pandemie durchzukommen.\nDu wirst auf Situationen treffen, bei denen du vielleicht schwere Entscheidungen treffen musst. \nBehalte dabei dein Geld, deine Gesundheit und deine Zufriedenheit im Auge.",
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
  maleStroke = loadImage("../../assets/maleStroke.png");
  femaleStroke = loadImage("../../assets/femaleStroke.png");
  diverseStroke = loadImage("../../assets/diverseStroke.png");

  male = loadImage("../../assets/male.png");
  female = loadImage("../../assets/female.png");
  diverse = loadImage("../../assets/diverse.png");

  child = loadImage("../../assets/child.png");

  maleConsultant = loadImage("../../assets/maleConsultant.png");
  femaleConsultant = loadImage("../../assets/femaleConsultant.png");
  diverseConsultant = loadImage("../../assets/diverseConsultant.png");

  maleWaiter = loadImage("../../assets/maleWaiter.png");
  femaleWaiter = loadImage("../../assets/femaleWaiter.png");
  diverseWaiter = loadImage("../../assets/diverseWaiter.png");

  cityPic = loadImage("../../assets/cityPic.png");
  townPic = loadImage("../../assets/townPic.png");

  noPic = loadImage("../../assets/noPic.png");

  moneyLarge = loadImage("../../assets/moneyLarge.png");

  moneyIcon = loadImage("../../assets/money.png");
  happinessIcon = loadImage("../../assets/happiness.png");
  healthIcon = loadImage("../../assets/health.png");

  mainFont = loadFont("../../assets/Semplicita_Medium.otf");

  timelinePic = loadImage("../../assets/timeline.png");

  caritasPic = loadImage("../../assets/caritasPic.svg");
  tafelPic = loadImage("../../assets/tafelPic.svg");

  closedVindu = loadImage("../../assets/fenster_geschlossen.png");

  fallbackFont = loadFont("../../assets/seguiemj.ttf");
}

export function drawPlayer() {
  // TODO: Implement
}

export default { draw, mouseClicked, preload };
