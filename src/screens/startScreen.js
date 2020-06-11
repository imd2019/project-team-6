import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";

let button = new Button(
  windowWidth / 2,
  windowHeight / 2,
  300,
  100,
  "open vindu",
  () => {
    setCurrentScreen("customization");
    document.body.requestFullscreen();
  }
);

function draw() {
  // background("black");
  button.display();
}

function mouseClicked() {
  button.mouseClicked();
}

export default { draw, mouseClicked };
