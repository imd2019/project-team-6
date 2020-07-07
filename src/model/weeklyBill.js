import { VinduEvent } from "./event.js";
import { runNextEvent, player, getCurrentDay } from "../game.js";
import { mainFont, boldFont } from "../screens/customizationScreen.js";
import { Button } from "./button.js";
import { tutorial, icons } from "../screens/gameScreen.js";
import { moneyLarge } from "../screens/customizationScreen.js";

export class WeeklyBillEvent extends VinduEvent {
  constructor(daysUntil, tips, hamsterCosts) {
    super(daysUntil);
    this.tips = tips;
    this.hamsterCosts = hamsterCosts;
    this.x = windowWidth / 2;
    this.y = windowHeight / 2;
    this.boxWidth = 650;
    this.okBtn = new Button(0, 200, 40, 20, true, "Ok", () => {
      runNextEvent();
      if (player.hasChild === false) {
        let totalDeduction = 0;
        totalDeduction += this.tips - this.foodCosts;
        icons.animate(0, 0, totalDeduction);
      }
      if (player.hasChild === true) {
        let totalDeduction = 0;
        totalDeduction += this.tips - this.foodWithChild;
        icons.animate(0, 0, totalDeduction);
      }

      if (getCurrentDay() === 1) {
        tutorial.mode = true;
      }
    });
    this.okBtn.textColor = color(255);
    this.foodWithChild = 65;
    this.foodCosts = 35 + this.hamsterCosts;
  }

  display() {
    push();
    background("#1e1f3f");
    fill(245, 189, 197, 180);
    rectMode(CENTER);
    rect(windowWidth / 2 + 30, windowHeight / 2, 500, 227, 35);
    imageMode(CENTER);
    image(moneyLarge, windowWidth / 2 - 200, windowHeight / 2);

    textFont(boldFont);
    fill("#1e1f3f");
    textAlign(CENTER);
    textSize(22);
    text(
      "Deine wöchentl. Ausgaben",
      windowWidth / 2 + 70,
      windowHeight / 2 - 70
    );

    textFont(mainFont);
    textAlign(RIGHT);
    textSize(20);

    text("Trinkgeld: ", windowWidth / 2 + 105, windowHeight / 2 - 10);
    text("Einkauf: ", windowWidth / 2 + 105, windowHeight / 2 + 20);

    text("+" + this.tips + "€", windowWidth / 2 + 175, windowHeight / 2 - 10);
    if (player.hasChild === false) {
      text(
        "-" + this.foodCosts + "€",
        windowWidth / 2 + 175,
        windowHeight / 2 + 20
      );
    }
    if (player.hasChild === true) {
      text(
        "-" + this.foodWithChild + "€",
        windowWidth / 2 + 175,
        windowHeight / 2 + 20
      );
    }

    this.okBtn.mouseOver();
    this.okBtn.display();
    pop();
  }

  mouseClicked() {
    this.okBtn.mouseClicked();
  }
}
