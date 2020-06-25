import gameScreen from "./gameScreen.js";
import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";

let button = new Button(0, 0, 150, 60, true, "open", () => {
  setCurrentScreen("customization");
  document.body.requestFullscreen();
  gameScreen.onStart();
});

function draw() {
  background("#1e1f3f");
  button.display();
  document.getElementById("timelineAnimation-svg").style.display = "none";
}

function mouseClicked() {
  button.mouseClicked();
}

export default { draw, mouseClicked };
