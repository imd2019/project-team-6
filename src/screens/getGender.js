import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import { female, male, diverse, noPic } from "./customizationScreen.js";
import { player } from "../game.js";

let headline = new Button(0, -370, 0, 0, true, "Wähle dein Geschlecht:");

let maleBtn = new Button(-350, 250, 120, 50, true, "Männlich", () => {
  setCurrentScreen("getJob");
  player.sex = "m";
});
let femaleBtn = new Button(0, 250, 120, 50, true, "Weiblich", () => {
  setCurrentScreen("getJob");
  player.sex = "f";
});
let diverseBtn = new Button(350, 250, 120, 50, true, "Divers", () => {
  setCurrentScreen("getJob");
  player.sex = "d";
});

let maleBtnImg = new Button(-360, -50, 100, 400, true, "", () => {
  setCurrentScreen("getJob");
  player.sex = "m";
});
let femaleBtnImg = new Button(0, -50, 120, 400, true, "", () => {
  setCurrentScreen("getJob");
  player.sex = "f";
});
let diverseBtnImg = new Button(340, -50, 150, 400, true, "", () => {
  setCurrentScreen("getJob");
  player.sex = "d";
});

let backBtn = new Button(0, 350, 120, 50, true, "<",, () => {
  setCurrentScreen("customization");
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

  backBtn.display();

  femaleBtn.showPicture(female, noPic);
  maleBtn.showPicture(male, noPic);
  diverseBtn.showPicture(diverse, noPic);

  maleBtnImg.display();
  femaleBtnImg.display();
  diverseBtnImg.display();
}

function mouseClicked() {
  maleBtn.mouseClicked();
  femaleBtn.mouseClicked();
  diverseBtn.mouseClicked();
  backBtn.mouseClicked();

  maleBtnImg.mouseClicked();
  femaleBtnImg.mouseClicked();
  diverseBtnImg.mouseClicked();
}

export default { draw, mouseClicked };
