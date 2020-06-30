import gameScreen from "./gameScreen.js";
import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import { closedVindu } from "./customizationScreen.js";

let button = new Button(0, 0, 100, 40, true, "open", () => {
  setCurrentScreen("customization");
  document.body.requestFullscreen();
  gameScreen.onStart();
});

function draw() {
  clear();
  background("#1e1f3f");
  imageMode(CENTER);
  image(closedVindu, windowWidth / 2, windowHeight / 2);

  button.display();
  button.mouseOver();
}

function mouseClicked() {
  button.mouseClicked();
}

export default { draw, mouseClicked };
