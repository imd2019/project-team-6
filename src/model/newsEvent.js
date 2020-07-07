import { VinduEvent } from "./event.js";
import { runNextEvent } from "../game.js";
import { mainFont, newsPic, boldFont } from "../screens/customizationScreen.js";
import { Button } from "./button.js";

export class NewsEvent extends VinduEvent {
  constructor(text, daysUntil, xOffset, yOffset) {
    super(daysUntil);

    this.x = 0;
    this.y = 0;
    this.text = text;
    this.xOffset = xOffset;
    this.yOffset = yOffset;

    this.okBtn = new Button(
      this.x - 140,
      this.y - 30,
      20,
      20,
      false,
      "Ok",
      () => {
        runNextEvent();
      }
    );
    this.okBtn.textColor = color(255);
  }

  display() {
    super.display();
    this.x = windowWidth / 2 + this.xOffset;
    this.y = windowHeight / 2 + this.yOffset;
    push();
    background(19, 19, 37, 220);
    noStroke();
    image(newsPic, windowWidth / 2, windowHeight / 2);

    // fill(19, 19, 37, 220);
    // rectMode(CENTER);
    // rect(this.x, this.y, windowWidth, windowHeight + 200);
    fill(222, 70, 90);
    textSize(16);
    textFont(boldFont);
    textAlign(LEFT);
    text(this.text, this.x - 60, this.y - 60);

    this.okBtn.mouseOver();
    this.okBtn.display();
    pop();
  }

  mouseClicked() {
    this.okBtn.mouseClicked();
  }
}
