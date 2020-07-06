import { Button } from "../model/button.js";
import {
  mainFont,
  happinessIcon,
  healthIcon,
  moneyIcon,
} from "./customizationScreen.js";
import { player } from "../game.js";

let nextBtn = new Button(0, 200, 40, 20, true, "Weiter", () => {
  setCurrentScreen("end");
});

let firstCoronaSallery = 1570;
let secondCoronaSallery = 895;

function money() {
  push();

  imageMode(CENTER);
  image(moneyIcon, windowWidth / 2 - 200, windowHeight / 2 - 100);

  textAlign(CENTER);
  textFont(mainFont);
  textSize(16);
  fill("#f5bdc5");

  if (player.money - secondCoronaSallery < 0) {
    text("gut", windowWidth / 2 - 250, windowHeight / 2 - 20, 100);
  }
  if (player.money - secondCoronaSallery === 0) {
    text("mittel", windowWidth / 2 - 250, windowHeight / 2 - 20, 100);
  }
  if (player.money - secondCoronaSallery > 0) {
    text("schlecht", windowWidth / 2 - 250, windowHeight / 2 - 20, 100);
  }
  pop();
}
function health() {
  push();

  imageMode(CENTER);
  image(healthIcon, windowWidth / 2, windowHeight / 2 - 100);

  textAlign(CENTER);
  textFont(mainFont);
  textSize(16);
  fill("#f5bdc5");
  if (player.health > 70) {
    text("gut", windowWidth / 2 - 50, windowHeight / 2 - 20, 100);
  }
  if (player.health >= 40 && player.health >= 70) {
    text("mittel", windowWidth / 2 - 50, windowHeight / 2 - 20, 100);
  }
  if (player.health < 40) {
    text("schlecht", windowWidth / 2 - 50, windowHeight / 2 - 20, 100);
  }

  pop();
}
function happiness() {
  push();

  imageMode(CENTER);
  image(happinessIcon, windowWidth / 2 + 200, windowHeight / 2 - 100);

  textAlign(CENTER);
  textFont(mainFont);
  fill("#f5bdc5");
  textSize(16);
  if (player.happiness > 70) {
    text("gut", windowWidth / 2 + 150, windowHeight / 2 - 20, 100);
  }
  if (player.happiness >= 40 && player.happiness >= 70) {
    text("mittel", windowWidth / 2 + 150, windowHeight / 2 - 20, 100);
  }
  if (player.happiness < 40) {
    text("schlecht", windowWidth / 2 + 150, windowHeight / 2 - 20, 100);
  }
  pop();
}

function draw() {
  push();
  background("#1e1f3f");
  happiness();
  health();
  money();
  nextBtn.display();
  pop();
}

function mouseClicked() {
  nextBtn.mouseClicked();
}

export default { health, happiness, money, draw, mouseClicked };
