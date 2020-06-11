import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";

let button = new Button(0, 0, 300, 100, "open vindu", () => {
  setCurrentScreen("customization");
  document.body.requestFullscreen();
});

function draw() {
  background("black");
  button.display();
}

function mouseClicked() {
  button.mouseClicked();
}

export default { draw, mouseClicked };
