import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import { female, male, diverse, noPic } from "./customizationScreen.js";
import { player } from "../game.js";

let headline = new Button(0, -300, 0, 0, false, "Wähle dein Geschlecht:");

let maleBtn = new Button(-350, 250, 300, 100, true, "Männlich", () => {
  setCurrentScreen("getJob");
  player.sex = "m";
});
let femaleBtn = new Button(0, 250, 300, 100, true, "Weiblich", () => {
  setCurrentScreen("getJob");
  player.sex = "f";
});
let diverseBtn = new Button(350, 250, 300, 100, true, "Diverse", () => {
  setCurrentScreen("getJob");
  player.sex = "d";
});

function draw() {
  background("#1e1f3f");

  headline.display();

  maleBtn.display();
  femaleBtn.display();
  diverseBtn.display();

  femaleBtn.showPicture(female, noPic);
  maleBtn.showPicture(male, noPic);
  diverseBtn.showPicture(diverse, noPic);
}

function mouseClicked() {
  maleBtn.mouseClicked();
  femaleBtn.mouseClicked();
  diverseBtn.mouseClicked();
}

export default { draw, mouseClicked };
