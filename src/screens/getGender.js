import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import {
  female,
  male,
  diverse,
  femaleStroke,
  maleStroke,
  diverseStroke,
} from "./customizationScreen.js";
import { player, pushCoronaQuestions } from "../game.js";
import { Pictures } from "../model/imagePosition.js";
import { customizationClickSound } from "./startScreen.js";

let headline = new Button(100, -320, 200, 20, true, "Wähle dein Geschlecht:");

let maleBtn = new Button(-310, 250, 80, 20, true, "Männlich", () => {
  setCurrentScreen("getJob");
  player.sex = "m";
  pushCoronaQuestions();
  customizationClickSound.play();
});
let femaleBtn = new Button(40, 250, 80, 20, true, "Weiblich", () => {
  setCurrentScreen("getJob");
  player.sex = "f";
  customizationClickSound.play();
});
let diverseBtn = new Button(380, 250, 60, 20, true, "Divers", () => {
  setCurrentScreen("getJob");
  player.sex = "d";
  pushCoronaQuestions();
  customizationClickSound.play();
});

let backBtn = new Button(0, 300, 10, 10, true, "<", () => {
  setCurrentScreen("customization");
  customizationClickSound.play();
});

let malePicture = new Pictures(-350, 0, 100, 400, () => {
  setCurrentScreen("getJob");
  player.sex = "m";
  pushCoronaQuestions();
  customizationClickSound.play();
});
let femalePicture = new Pictures(0, 0, 120, 400, () => {
  setCurrentScreen("getJob");
  player.sex = "f";
  pushCoronaQuestions();
  customizationClickSound.play();
});
let diversePicture = new Pictures(350, 0, 150, 400, () => {
  setCurrentScreen("getJob");
  player.sex = "d";
  pushCoronaQuestions();
  customizationClickSound.play();
});

function draw() {
  background("#1e1f3f");

  headline.display();
  maleBtn.display();
  femaleBtn.display();
  diverseBtn.display();
  maleBtn.mouseOver();
  femaleBtn.mouseOver();
  diverseBtn.mouseOver();

  malePicture.mouseOver(maleStroke);
  malePicture.display(male);

  femalePicture.mouseOver(femaleStroke);
  femalePicture.display(female);

  diversePicture.mouseOver(diverseStroke);
  diversePicture.display(diverse);

  backBtn.display();
}

function mouseClicked() {
  maleBtn.mouseClicked();
  femaleBtn.mouseClicked();
  diverseBtn.mouseClicked();
  backBtn.mouseClicked();

  malePicture.mouseClicked();
  femalePicture.mouseClicked();
  diversePicture.mouseClicked();
}

export default { draw, mouseClicked };
