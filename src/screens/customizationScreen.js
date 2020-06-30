import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import { player } from "../game.js";

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

let opacityText = 0;
let opacityChange = +2;

let yes = new Button(-50, 150, 50, 20, false, "Ja", () =>
  setCurrentScreen("getGender")
);

let no = new Button(50, 150, 50, 20, false, "Nein", () =>
  setCurrentScreen("start")
);

function textContent() {
  textAlign(CENTER);
  textFont(mainFont);
  fill(222, 70, 90, opacityText);
  textSize(20);
  text(
    "Pandemien wie Corona betreffen alle Menschen.\n Aber manche trifft es härter als andere.\n\nSchlüpfe in VINDU in die Schuhe eines Anderen und versuche vier Wochen \ndurch eine simulierte Pandemie durchzukommen.\nDu wirst auf Situationen treffen, bei denen du vielleicht schwere Entscheidungen treffen musst. \nBehalte dabei dein Geld, deine Gesundheit und deine Zufriedenheit im Auge.",
    windowWidth / 2,
    windowHeight / 3
  );
  fill(245, 189, 197, opacityText);
  text(
    "Nimmst du die Herausforderung an?",
    windowWidth / 2,
    (windowHeight / 3) * 1.8
  );
}
function draw() {
  clear();
  background("#1e1f3f");
  if (opacityText <= 250) {
    opacityText += opacityChange;
  }
  textContent();
  if (opacityText >= 250) {
    yes.display();
    no.display();
  }
}

function mouseClicked() {
  yes.mouseClicked();
  no.mouseClicked();
}

function preload() {
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
}

export function drawPlayer() {
  // TODO: Implement
}

export default { textContent, draw, mouseClicked, preload };
