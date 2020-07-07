import { Button } from "../model/button.js";
import {
  mainFont,
  caritasPic,
  tafelPic,
  caritasStroke,
  tafelStroke,
} from "./customizationScreen.js";
import { setCurrentScreen } from "../../sketch.js";
import { Pictures } from "../model/imagePosition.js";

let opacityText = 0;
let opacityChange = +5;

let againBtn = new Button(150, 250, 80, 20, true, "Nochmal?", () =>
  window.location.reload()
);

let backBtn = new Button(-70, 250, 60, 20, true, "Zurück", () => {
  setCurrentScreen("result");
});

let tafel = new Button(-60, 20, 80, 30, true, "T A F E L", () => {
  // createA("http://www.tafel.de/spenden/", TAFEL, _self);
  window.open("http://www.tafel.de/spenden/", "_blank");
});
let caritas = new Button(135, 20, 110, 30, true, "C A R I T A S", () => {
  window.open(
    "https://www.caritas.de/spendeundengagement/sie-wollen-helfen",
    "_blank"
  );
});
let caritasImg = new Pictures(75, 100, 70, 70, () => {
  window.open(
    "https://www.caritas.de/spendeundengagement/sie-wollen-helfen",
    "_blank"
  );
});

let tafelImg = new Pictures(-95, 100, 70, 70, () => {
  // createA("http://www.tafel.de/spenden/", TAFEL, _self);
  window.open("http://www.tafel.de/spenden/", "_blank");
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

export function draw() {
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

    caritasImg.mouseOver(caritasStroke);
    tafelImg.mouseOver(tafelStroke);
    caritasImg.display(caritasPic);
    tafelImg.display(tafelPic);

    textFont(mainFont);
    textSize(20);
    fill("#f5bdc5");
    textAlign(CENTER);
    text("oder", windowWidth / 2, windowHeight / 2 + 270);

    againBtn.display();
    againBtn.mouseOver();
    backBtn.display();
    backBtn.mouseOver();
  }
  pop();
}

function mouseClicked() {
  tafel.mouseClicked();
  tafelImg.mouseClicked();
  caritas.mouseClicked();
  caritasImg.mouseClicked();
  tafelPic.mouseClicked();
  againBtn.mouseClicked();
  backBtn.mouseClicked();
}

export default { textContent, draw, mouseClicked };
