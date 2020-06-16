import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import { female, male, diverse } from "./customizationScreen.js";

let sex;
let question = new Button(0, -300, 300, 100, "Wähle dein Geschlecht:");

let maleBtn = new Button(-250, 250, 300, 100, "Männlich", () => {
  setCurrentScreen("getChild");
  sex = "m";
});
let femaleBtn = new Button(0, 250, 300, 100, "Weiblich", () => {
  setCurrentScreen("getChild");
  sex = "w";
});
let diverseBtn = new Button(250, 250, 300, 100, "diverse", () => {
  setCurrentScreen("getChild");
  sex = "d";
});

function draw() {
  background("black");

  question.display();

  maleBtn.display();
  femaleBtn.display();
  diverseBtn.display();

  femaleBtn.showPicture(female);
  maleBtn.showPicture(male);
  diverseBtn.showPicture(diverse);
}

function mouseClicked() {
  maleBtn.mouseClicked();
  femaleBtn.mouseClicked();
  diverseBtn.mouseClicked();
}

export default { draw, mouseClicked, sex };
