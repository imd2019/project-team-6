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
export let childStroke;

export let maleWaiterStroke;
export let femaleWaiterStroke;
export let diverseWaiterStroke;

export let maleConsultantStroke;
export let femaleConsultantStroke;
export let diverseConsultantStroke;

export let townPic;
export let cityPic;

export let noPic;
export let moneyLarge;

export let moneyIcon;
export let happinessIcon;
export let healthIcon;
export let timelinePic;
export let newsPic;

export let mainFont;
export let fallbackFont;

export let tafelPic;
export let caritasPic;

export let closedVindu;
export let openVindu;

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
  maleStroke = loadImage("./assets/character/maleStroke.png");
  femaleStroke = loadImage("./assets/character/femaleStroke.png");
  diverseStroke = loadImage("./assets/character/diverseStroke.png");
  childStroke = loadImage("./assets/character/childStroke.png");

  male = loadImage("./assets/character/male.png");
  female = loadImage("./assets/character/female.png");
  diverse = loadImage("./assets/character/diverse.png");

  child = loadImage("./assets/character/child.png");

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

  noPic = loadImage("./assets/character/noPic.png");

  moneyLarge = loadImage("./assets/ui/moneyLarge.png");

  moneyIcon = loadImage("./assets/ui/money.png");
  happinessIcon = loadImage("./assets/ui/happiness.png");
  healthIcon = loadImage("./assets/ui/health.png");
  newsPic = loadImage("./assets/ui/news.png");

  mainFont = loadFont("./assets/fonts/Semplicita_Medium.otf");
  fallbackFont = loadFont("./assets/fonts/seguiemj.ttf");

  timelinePic = loadImage("./assets/ui/timeline.png");

  caritasPic = loadImage("./assets/ui/caritasPic.svg");
  tafelPic = loadImage("./assets/ui/tafelPic.svg");

  closedVindu = loadImage("./assets/ui/fenster_geschlossen.png");
}

export function drawPlayer() {
  // TODO: Implement
}

export default { draw, mouseClicked, preload };
