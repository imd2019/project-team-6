import gameScreen from "./gameScreen.js";
import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";

let button = new Button(0, 0, 100, 40, true, "open", () => {
  setCurrentScreen("customization");
  document.body.requestFullscreen();
  gameScreen.onStart();
});

function draw() {
  clear();
  background("#1e1f3f");

  button.display();
  button.mouseOver();
  document.getElementById("timelineAnimation-svg").style.display = "none";
}

function mouseClicked() {
  button.mouseClicked();
}

export default { draw, mouseClicked };
