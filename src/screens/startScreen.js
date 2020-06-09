import { Button } from "../model/button.js";

let button = new Button(
  windowWidth / 2,
  windowHeight / 2,
  300,
  100,
  "open vindu"
);

export function mouseClicked() {
  button.mouseClicked();
}

export default function () {
  background("black");
  button.display();
}
