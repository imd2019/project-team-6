import { VinduEvent } from "./event.js";
import { runNextEvent, player } from "../game.js";
import { mainFont } from "../screens/customizationScreen.js";
import { Button } from "./button.js";
import { icons } from "../screens/gameScreen.js";

export class WeeklyBillEvent extends VinduEvent {
  constructor(text, daysUntil) {
    super(daysUntil);
    this.x = windowWidth / 2;
    this.y = windowHeight / 2;
    this.text = text;
    this.boxWidth = 650;
    this.okBtn = new Button(
      this.x - windowWidth / 2,
      this.y - 40 - windowHeight / 2,
      20,
      20,
      false,
      "Ok",
      () => {
        runNextEvent();
        icons.animate(0, 0, -100);
      }
    );
    this.okBtn.textColor = color(255);
  }

  display() {
    push();
    background(19, 19, 37, 220);
    noStroke();
    //fill(19, 19, 37, 220);
    rectMode(CENTER);
    // rect(this.x, this.y, this.boxWidth, 220, 50);
    fill("white");
    textSize(16);
    textFont(mainFont);
    textAlign(CENTER);
    text(this.text, this.x, this.y - 40, this.boxWidth - 50, 200);

    this.okBtn.mouseOver();
    this.okBtn.display();
    pop();
  }

  mouseClicked() {
    this.okBtn.mouseClicked();
  }
}
