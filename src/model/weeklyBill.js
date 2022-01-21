import { VinduEvent } from "./event.js";
import { runNextEvent, player, getCurrentDay } from "../game.js";
import { mainFont, boldFont } from "../screens/customizationScreen.js";
import { Button } from "./button.js";
import { icons } from "../screens/gameScreen.js";
import { moneyLarge } from "../screens/customizationScreen.js";

export class WeeklyBillEvent extends VinduEvent {
  constructor(daysUntil, tips) {
    super(daysUntil);
    this.tips = tips;
    this.x = windowWidth / 2;
    this.y = windowHeight / 2;
    this.boxWidth = 650;
    this.foodWithChild = 65;
    this.foodCosts = 35;
    this.gasMoney = 10;

    this.okBtn = new Button(0, 200, 40, 20, true, "Ok", () => {
      runNextEvent();

      let totalDeduction = 0;
      totalDeduction += this.tips;
      if (player.apartment.needsCar === true) {
        totalDeduction -= this.gasMoney;
      }

      if (player.hasChild) {
        totalDeduction -= this.foodWithChild;
      } else {
        totalDeduction -= this.foodCosts;
      }

      icons.animate(0, 0, totalDeduction);
    });

    this.okBtn.textColor = color(255);
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
      windowWidth / 2 + 80,
      windowHeight / 2 - 70
    );

    textFont(mainFont);
    textAlign(RIGHT);
    textSize(20);

    text("Trinkgeld: ", windowWidth / 2 + 150, windowHeight / 2 - 10);
    text("Einkauf: ", windowWidth / 2 + 150, windowHeight / 2 + 20);
    if (player.apartment.needsCar === true) {
      text("Tankgeld: ", windowWidth / 2 + 150, windowHeight / 2 + 50);
    }
    text("+" + this.tips + "€", windowWidth / 2 + 220, windowHeight / 2 - 10);
    if (!player.hasChild) {
      text(
        "-" + this.foodCosts + "€",
        windowWidth / 2 + 220,
        windowHeight / 2 + 20
      );
    }
    if (player.hasChild) {
      text(
        "-" + this.foodWithChild + "€",
        windowWidth / 2 + 220,
        windowHeight / 2 + 20
      );
    }
    if (player.apartment.needsCar === true) {
      text(
        "-" + this.gasMoney + "€",
        windowWidth / 2 + 220,
        windowHeight / 2 + 50
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
