import { VinduEvent } from "./event.js";
import { runNextEvent, getCurrentDay } from "../game.js";
import { Button } from "./button.js";
import { tutorial } from "../screens/gameScreen.js";

export class NewsEvent extends VinduEvent {
  constructor(imgPath, daysUntil, xOffset, yOffset) {
    super(daysUntil);

    this.x = 0;
    this.y = 0;
    // this.text = text;
    this.img = loadImage(imgPath);
    this.xOffset = xOffset;
    this.yOffset = yOffset;

    this.okBtn = new Button(
      this.x + 10,
      this.y + 260,
      20,
      20,
      false,
      "Ok",
      () => {
        console.log(getCurrentDay());
        if (getCurrentDay() === 0) {
          tutorial.mode = true;
        }
        runNextEvent();
      }
    );
    this.okBtn.textColor = color(222, 70, 90);
    this.okBtn.textSize = 22;
  }

  display() {
    super.display();
    this.x = windowWidth / 2 + this.xOffset;
    this.y = windowHeight / 2 + this.yOffset;
    push();
    background(19, 19, 37, 220);
    noStroke();
    image(this.img, windowWidth / 2, windowHeight / 2);

    // fill(19, 19, 37, 220);
    // rectMode(CENTER);
    // rect(this.x, this.y, windowWidth, windowHeight + 200);

    // fill(222, 70, 90);
    // textSize(16);
    // textFont(boldFont);
    // textAlign(LEFT);
    // text(this.text, this.x - 60, this.y - 60);

    this.okBtn.mouseOver();
    this.okBtn.display();
    pop();
  }

  mouseClicked() {
    this.okBtn.mouseClicked();
  }
}
