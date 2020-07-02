import { VinduEvent } from "./event.js";
import { icons } from "../screens/gameScreen.js";
import { runNextEvent } from "../game.js";
import { mainFont } from "../screens/customizationScreen.js";
import { Button } from "../model/button.js";

export class ConsequenceEvent extends VinduEvent {
  constructor(choice, x, y) {
    super(0);
    this.choice = choice;
    this.x = x;
    this.y = y;
    this.boxWidth = 650;
    this.okBtn = new Button(
      x - windowWidth / 2,
      y + 30 - windowHeight / 2,
      20,
      20,
      false,
      "Ok",
      () => {
        icons.animate(
          this.choice.health,
          this.choice.happiness,
          this.choice.money
        );
        runNextEvent();
      }
    );
    this.okBtn.textColor = color(255);
  }

  display() {
    push();
    noStroke();
    fill(21, 21, 21, 150);
    rectMode(CENTER);
    rect(this.x, this.y, this.boxWidth, 220, 50);
    fill("white");
    textSize(16);
    textFont(mainFont);
    textAlign(CENTER);
    text(this.choice.consequence, this.x, this.y - 40, this.boxWidth - 50, 200);

    this.okBtn.display();
    pop();
  }

  mouseClicked() {
    this.okBtn.mouseClicked();
    this.okBtn.mouseOver();
  }
}
