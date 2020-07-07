import { Button } from "../model/button.js";
import { mainFont, caritasPic, tafelPic } from "./customizationScreen.js";

let opacityText = 0;
let opacityChange = +5;

let nochmalBtn = new Button(0, 0, 30, 10, true, "Nochmal?", () =>
  window.location.reload()
);

let tafel = new Button(-80, 20, 50, 30, true, "T A F E L", () => {
  // createA("http://www.tafel.de/spenden/", TAFEL, _self);
  window.open("http://www.tafel.de/spenden/", "_blank");
});
let caritas = new Button(80, 20, 60, 30, true, "C A R I T A S", () => {
  window.open(
    "https://www.caritas.de/spendeundengagement/sie-wollen-helfen",
    "_blank"
  );
});

function textContent() {
  push();
  textAlign(CENTER);
  textFont(mainFont);
  textSize(20);
  fill(222, 70, 90, opacityText);
  text(
    "Was für dich ein Spiel war, ist für viele Menschen Realität.\nWenn du möchtest, kannst du ihnen helfen.\n\nUnter diesen Links findest du Möglichkeiten zu Spenden\nund Informationen über Hilfsorganisationen, die sich gegen\n Armut in Deutschland einsetzen:",
    windowWidth / 2,
    windowHeight / 3
  );
  pop();
}

function draw() {
  nochmalBtn.display();
  nochmalBtn.mouseOver();
  push();
  background("#1e1f3f");
  textContent();
  if (opacityText <= 250) {
    opacityText += opacityChange;
  }

  if (opacityText >= 251) {
    tafel.display();
    caritas.display();
    tafel.mouseOver();
    caritas.mouseOver();
    imageMode(CENTER);
    image(tafelPic, windowWidth / 2 - 95, windowHeight / 2 + 100, 70, 70);
    image(caritasPic, windowWidth / 2 + 75, windowHeight / 2 + 100, 70, 70);
  }
  pop();
}

function mouseClicked() {
  tafel.mouseClicked();
  caritas.mouseClicked();
  nochmalBtn.mouseClicked();
}

export default { textContent, draw, mouseClicked };
