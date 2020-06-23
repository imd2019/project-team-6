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

export let timeline;

let button = new Button(0, -300, 0, 0, false, "Gestalte deinen Charakter", () =>
  setCurrentScreen("getGender")
);
let letsGo = new Button(0, 0, 200, 100, true, "Los", () =>
  setCurrentScreen("getGender")
);
function draw() {
  background("#1e1f3f");
  button.display();
  letsGo.display();
}

function mouseClicked() {
  letsGo.mouseClicked();
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

  timeline = loadImage("../../assets/timeline.png");
}

export function drawPlayer() {
  // TODO: Implement
}

export default { draw, mouseClicked, preload };
