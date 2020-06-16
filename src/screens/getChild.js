import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import { male } from "./customizationScreen.js";
import { player } from "../game.js";

let question = new Button(0, -300, 300, 100, "Wähle deinen Familienstand:");

let child = new Button(-200, 250, 320, 100, "Alleine", () => {
  player.hasChild = false;

  setCurrentScreen("getJob");
});

let noChild = new Button(200, 250, 320, 100, "Mit Kind", () => {
  player.hasChild = true;

  setCurrentScreen("getJob");
});

function draw() {
  background("black");
  question.display();
  child.display();
  noChild.display();
  child.showPicture(male);
  noChild.showPicture(male);

  //erstmal nur für die Form
  // if(sex=w ){
  //   child.showPicture(femaleChild);
  //   noChild.showPicture(female);
  // else if(sex=m ){
  //   child.showPicture(maleChild);
  //   noChild.showPicture(male);
  // else if(sex=d ){
  //   child.showPicture(diverseChild);
  //   noChild.showPicture(diverse);
}

function mouseClicked() {
  child.mouseClicked();
  noChild.mouseClicked();
}

export default { draw, mouseClicked };
