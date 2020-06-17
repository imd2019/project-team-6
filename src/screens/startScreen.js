import gameScreen from "./gameScreen.js";
import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";

let button = new Button(0, 0, 300, 100, "open vindu", () => {
  setCurrentScreen("customization");
  document.body.requestFullscreen();
  gameScreen.onStart();
});

function draw() {
  background("#171d41");
  button.display();
}

function mouseClicked() {
  button.mouseClicked();
}

export default { draw, mouseClicked };
