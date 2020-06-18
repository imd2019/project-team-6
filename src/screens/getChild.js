import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import { female, male, diverse, child, noPic } from "./customizationScreen.js";
import { player } from "../game.js";

let headline = new Button(0, -300, 0, 0, false, "Wähle deinen Familienstand:");

let hasChild = new Button(-200, 250, 320, 100, true, "Mit Kind", () => {
  player.hasChild = true;

  setCurrentScreen("getJob");
});

let noChild = new Button(200, 250, 320, 100, true, "Alleine", () => {
  player.hasChild = false;

  setCurrentScreen("getJob");
});

function draw() {
  background("#1e1f3f");
  headline.display();
  hasChild.display();
  noChild.display();
  if (player.sex === "f") {
    hasChild.showPicture(female, child);
    noChild.showPicture(female, noPic);
  } else if (player.sex === "m") {
    hasChild.showPicture(male, child);
    noChild.showPicture(male, noPic);
  } else if (player.sex === "d") {
    hasChild.showPicture(diverse, child);
    noChild.showPicture(diverse, noPic);
  }
}

function mouseClicked() {
  hasChild.mouseClicked();
  noChild.mouseClicked();
}

export default { draw, mouseClicked };
