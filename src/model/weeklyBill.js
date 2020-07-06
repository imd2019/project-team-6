import { VinduEvent } from "./event.js";
import { runNextEvent, player, getCurrentDay } from "../game.js";
import { mainFont } from "../screens/customizationScreen.js";
import { Button } from "./button.js";
import { tutorial } from "../screens/gameScreen.js";
import { icons } from "../screens/gameScreen.js";
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
      icons.animate(0, 0, -100);
      if (getCurrentDay() === 1) {
        tutorial.mode = true;
      }
    });
    this.okBtn.textColor = color(255);
    this.childCosts = 30;
    this.foodWithChild = 65;
    this.foodCosts = 35 + this.hamsterCosts;
  }

  display() {
    push();
    fill(245, 189, 197, 180);
    rectMode(CENTER);
    rect(windowWidth / 2 + 30, windowHeight / 2, 500, 227, 35);
    imageMode(CENTER);
    image(moneyLarge, windowWidth / 2 - 200, windowHeight / 2);

    textFont(mainFont);
    fill("black");
    textAlign(CENTER);
    textSize(20);
    text("Deine Finanzen ", windowWidth / 2 + 65, windowHeight / 2 - 90);

    textAlign(RIGHT);
    textSize(20);
    text("Letzter Kontostand: ", windowWidth / 2 + 105, windowHeight / 2 - 60);
    text("Trinkgeld: ", windowWidth / 2 + 105, windowHeight / 2 - 30);
    text("Wöchentl. Einkauf: ", windowWidth / 2 + 105, windowHeight / 2);
    text("Dein Kontostand: ", windowWidth / 2 + 105, windowHeight / 2 + 30);

    text(
      "+" + player.money + "€",
      windowWidth / 2 + 175,
      windowHeight / 2 - 60
    );

    text("+" + this.tips + "€", windowWidth / 2 + 175, windowHeight / 2 - 30);
    if (player.hasChild === false) {
      text("-" + this.foodCosts + "€", windowWidth / 2 + 175, windowHeight / 2);
    }
    if (player.hasChild === true) {
      text(
        "-" + this.foodWithChild + "€",
        windowWidth / 2 + 175,
        windowHeight / 2
      );
    }

    text(player.money + "€", windowWidth / 2 + 175, windowHeight / 2 + 30);
    strokeWeight(2);
    stroke("black");
    line(
      windowWidth / 2 - 75,
      windowHeight / 2 + 20,
      windowWidth / 2 + 180,
      windowHeight / 2 + 20
    );

    this.okBtn.mouseOver();
    this.okBtn.display();
    pop();
  }

  mouseClicked() {
    this.okBtn.mouseClicked();
  }
}
