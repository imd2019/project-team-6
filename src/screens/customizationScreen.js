import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";

let button = new Button(0, 0, 300, 100, "customize", () =>
  setCurrentScreen("getSex")
);

function draw() {
  background("black");
  button.display();
}

function mouseClicked() {
  button.mouseClicked();
}

export default { draw, mouseClicked };
