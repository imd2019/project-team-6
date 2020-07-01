import { Button } from "../model/button.js";
import { mainFont, caritasPic, tafelPic } from "./customizationScreen.js";

let opacityText = 0;
let opacityChange = +5;

let tafel = new Button(-80, 0, 50, 30, false, "TAFEL");

let caritas = new Button(80, 0, 60, 30, false, "CARITAS");

function textContent() {
  textAlign(CENTER);
  textFont(mainFont);
  textSize(20);
  fill(222, 70, 90, opacityText);
  text(
    "Was für dich ein Spiel war, ist für viele Menschen Realität.\nWenn du möchtest, kannst du ihnen helfen.\n\nUnter diesen Links findest du Möglichkeiten zu Spenden\nund Informationen über Hilfsorganisationen, die sich gegen\n Armut in Deutschland einsetzen:",
    windowWidth / 2,
    windowHeight / 3
  );
}
function draw() {
  clear();

  background("#1e1f3f");
  textContent();
  if (opacityText <= 250) {
    opacityText += opacityChange;
  }

  if (opacityText >= 251) {
    tafel.display();
    caritas.display();
    imageMode(CENTER);
    image(caritasPic, windowWidth / 2 + 80, windowHeight / 2 + 40, 50, 50);
    image(tafelPic, windowWidth / 2 - 80, windowHeight / 2 + 40, 50, 50);
  }
}

function mouseClicked() {
  tafel.mouseClicked();
  caritas.mouseClicked();
}

export default { textContent, draw, mouseClicked };
