import { VinduEvent } from "./event.js";
import { runNextEvent } from "../game.js";
import { mainFont, newsPic } from "../screens/customizationScreen.js";
import { Button } from "./button.js";

export class NewsEvent extends VinduEvent {
  constructor(text, daysUntil) {
    super(daysUntil);
    this.x = windowWidth / 2;
    this.y = windowHeight / 2;
    this.text = text;
    this.okBtn = new Button(
      this.x - windowWidth / 2,
      this.y - 40,
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
    push();
    background(19, 19, 37, 220);
    noStroke();
    image(newsPic, windowWidth / 2, windowHeight / 2);

    // fill(19, 19, 37, 220);
    // rectMode(CENTER);
    // rect(this.x, this.y, windowWidth, windowHeight + 200);
    fill(0);
    textSize(16);
    textFont(mainFont);
    textAlign(CENTER);
    text(this.text, this.x, this.y - 40);

    this.okBtn.mouseOver();
    this.okBtn.display();
    pop();
  }

  mouseClicked() {
    this.okBtn.mouseClicked();
  }
}
