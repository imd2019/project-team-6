import { VinduEvent } from "./event.js";
import { runNextEvent, player } from "../game.js";
import { mainFont } from "../screens/customizationScreen.js";
import { Button } from "./button.js";
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
    });
    this.okBtn.textColor = color(255);
    this.childCosts = 30;
    this.foodCosts = 35 + this.hamsterCosts;
  }

  display() {
    fill(245, 189, 197, 180);
    rectMode(CENTER);
    rect(windowWidth / 2 + 30, windowHeight / 2, 500, 227, 35);
    imageMode(CENTER);
    image(moneyLarge, windowWidth / 2 - 200, windowHeight / 2);

    fill(222, 70, 90);
    textAlign(RIGHT);
    textSize(24);
    text("Deine Finanzen: ", windowWidth / 2 + 65, windowHeight / 2 - 300);
    fill("black");
    textSize(20);
    textFont(mainFont);
    text("letzter Kontostand: ", windowWidth / 2 + 105, windowHeight / 2 - 60);
    text("Trinkgeld: ", windowWidth / 2 + 105, windowHeight / 2 - 30);
    text("Wöchentl. Einkauf: ", windowWidth / 2 + 105, windowHeight / 2);
    text("Dein Kontostand: ", windowWidth / 2 + 105, windowHeight / 2 + 30);

    text(
      "+" + player.money + "€",
      windowWidth / 2 + 175,
      windowHeight / 2 - 60
    );

    text("+" + this.tips + "€", windowWidth / 2 + 175, windowHeight / 2 - 30);
    text("-" + this.foodCosts + "€", windowWidth / 2 + 175, windowHeight / 2);
    if (player.hasChild === true) {
      let foodWithChild = this.childCosts + this.foodCosts;
      text("-" + foodWithChild + "€", windowWidth / 2 + 175, windowHeight / 2);
    }

    text(player.money + "€", windowWidth / 2 + 175, windowHeight / 2 + 30);
    strokeWeight(2);
    stroke("black");
    line(
      windowWidth / 2 - 75,
      windowHeight / 2 + 15,
      windowWidth / 2 + 180,
      windowHeight / 2 + 15
    );

    this.okBtn.mouseOver();
    this.okBtn.display();
    pop();
  }

  mouseClicked() {
    this.okBtn.mouseClicked();
  }
}
