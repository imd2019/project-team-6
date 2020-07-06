import { VinduEvent } from "./event.js";
import { runNextEvent, player } from "../game.js";
import { mainFont } from "../screens/customizationScreen.js";
import { Button } from "./button.js";
import { icons } from "../screens/gameScreen.js";
import { moneyLarge } from "../screens/customizationScreen.js";

export class Tutorial {
  constructor(xOffset, yOffset) {
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.x = 0;
    this.y = 0;
    this.okBtn = new Button(0, 300, 70, 20, true, "Verstanden", () => {});
  }

  display() {
    this.x = windowWidth / 2 + this.xOffset;
    this.y = windowHeight / 2 + this.yOffset;

    push();
    fill(0, 0, 0, 100);
    rectMode(CENTER);
    rect(this.x, this.y, windowWidth, windowHeight);

    textSize(12);
    textFont(mainFont);
    //frage box
    noFill();
    strokeWeight(2);
    stroke(222, 70, 90);

    rect(this.x + 300, this.y + 120, 650, 220, 50);
    //choices
    rect(this.x + 472, this.y + 170, 135, 30, 5);
    rect(this.x + 150, this.y + 170, 100, 30, 5);

    //exit
    rect(this.x + 605, this.y - 330, 50, 30, 5);

    //Geld
    rect(this.x - 540, this.y - 320, 175, 50, 5);
    //happiness
    rect(this.x - 540, this.y - 260, 175, 50, 5);
    //healt
    rect(this.x - 540, this.y - 200, 175, 50, 5);

    //timeline -600, 320
    rect(this.x - 600, this.y + 320, 75, 75, 5);

    this.okBtn.mouseOver();
    this.okBtn.display();
    pop();
  }

  mouseClicked() {
    this.okBtn.mouseClicked();
  }
}
