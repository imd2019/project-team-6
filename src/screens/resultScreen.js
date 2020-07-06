import { Button } from "../model/button.js";
import {
  mainFont,
  happinessIcon,
  healthIcon,
  moneyIcon,
} from "./customizationScreen.js";

let nextBtn = new Button(0, 200, 40, 20, true, "Weiter", () => {
  setCurrentScreen("end");
});

function money() {
  push();

  imageMode(CENTER);
  image(moneyIcon, windowWidth / 2 - 200, windowHeight / 2 - 100);

  textAlign(CENTER);
  textFont(mainFont);
  textSize(16);

  text(
    "jabfvkjfbdlvbdsv bduhvbhsdbvhsbdv sdvsudbv lisdbvhsbdv bdvlhsd gvlsbdv",
    windowWidth / 2 - 300,
    windowHeight / 2 - 20,
    100
  );
  pop();
}
function health() {
  push();

  imageMode(CENTER);
  image(healthIcon, windowWidth / 2, windowHeight / 2 - 100);

  textAlign(CENTER);
  textFont(mainFont);
  textSize(16);
  text(
    "jabfvkjfbdlvbdsv bduhvbhsdbvhsbdv sdvsudbv lisdbvhsbdv bdvlhsd gvlsbdv",
    windowWidth / 2 - 100,
    windowHeight / 2 - 20,
    100
  );
  pop();
}
function happiness() {
  push();

  imageMode(CENTER);
  image(happinessIcon, windowWidth / 2 + 200, windowHeight / 2 - 100);

  textAlign(CENTER);
  textFont(mainFont);
  textSize(16);
  text(
    "jabfvkjfbdlvbdsv bduhvbhsdbvhsbdv sdvsudbv lisdbvhsbdv bdvlhsd gvlsbdv",
    windowWidth / 2 + 100,
    windowHeight / 2 - 20,
    100
  );
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
