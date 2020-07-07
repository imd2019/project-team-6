import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import { customizationClickSound } from "./startScreen.js";
import { mainFont } from "./customizationScreen.js";

let opacityText = 2;
let opacityChange = +2;

let yes = new Button(-80, 40, 20, 20, true, "Ja", () => {
  setCurrentScreen("game");
  customizationClickSound.play();
});

let no = new Button(80, 40, 40, 20, true, "Nein", () => {
  window.location.reload();
  customizationClickSound.play();
});

function draw() {
  push();
  background("#171D41");
  textAlign(CENTER);
  textFont(mainFont);
  fill(222, 70, 90, opacityText);
  textSize(20);
  text(
    "Manchmal ist das Leben nicht so leicht, wie man es sich machen will.\n Schaffst du es, als Kellner trotzdem durch die Pandemie zu kommen?",
    windowWidth / 2,
    windowHeight / 2 - 100
  );
  fill(245, 189, 197, opacityText);
  text(
    "Nimmst du die Herausforderung an?",
    windowWidth / 2,
    windowHeight / 2 + 20
  );

  opacityText += opacityChange;
  if (opacityText === 252) {
    opacityChange = 0;
    yes.display();
    no.display();
    yes.mouseOver();
    no.mouseOver();
  }
  pop();
}

function mouseClicked() {
  yes.mouseClicked();
  no.mouseClicked();
}

export default { draw, mouseClicked };
