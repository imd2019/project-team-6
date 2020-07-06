import { VinduEvent } from "./event.js";
import { runNextEvent, player } from "../game.js";
import { mainFont } from "../screens/customizationScreen.js";
import { Button } from "./button.js";
import { icons } from "../screens/gameScreen.js";
import { moneyLarge } from "../screens/customizationScreen.js";

export class Tutorial {
  constructor(xOffset, yOffset, mode) {
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.mode = mode;
    this.x = 0;
    this.y = 0;
    this.okBtn = new Button(0, 300, 100, 20, true, "Verstanden", () => {
      this.mode = false;
    });
  }

  display() {
    this.x = windowWidth / 2 + this.xOffset;
    this.y = windowHeight / 2 + this.yOffset;
    if (this.mode === true) {
      push();
      fill(0, 0, 0, 100);
      rectMode(CENTER);
      rect(this.x, this.y, windowWidth, windowHeight);

      textSize(12);
      textFont(mainFont);
      textAlign(CENTER);
      //frage box
      noFill();
      strokeWeight(2);
      stroke(222, 70, 90);
      text("Die Fragen", this.x + 300, this.y - 60);
      rect(this.x + 300, this.y + 120, 650, 220, 50);
      line(this.x + 300, this.y + 10, this.x + 300, this.y - 50);

      //choices
      rect(this.x + 472, this.y + 170, 135, 30, 5);
      text("Die Antwortmöglichkeiten", this.x + 300, this.y + 260);
      rect(this.x + 150, this.y + 170, 100, 30, 5);
      line(this.x + 472, this.y + 185, this.x + 300, this.y + 250);
      line(this.x + 150, this.y + 185, this.x + 300, this.y + 250);

      //exit
      rect(this.x + 605, this.y - 330, 50, 30, 5);
      text("Spiel ist zu schwer?", this.x + 490, this.y - 330);
      line(this.x + 500, this.y - 330, this.x + 580, this.y - 330);

      //timeline
      rect(this.x - 600, this.y + 320, 75, 75, 5);
      text("Der Tag", this.x - 600, this.y + 260);
      line(this.x - 600, this.y + 270, this.x - 600, this.y + 282.25);

      textAlign(LEFT);
      //Geld
      rect(this.x - 540, this.y - 320, 175, 50, 5);
      text("Dein Geld", this.x - 400, this.y - 320);
      line(this.x - 450.25, this.y - 320, this.x - 390, this.y - 320);
      //happiness
      rect(this.x - 540, this.y - 270, 175, 50, 5);
      text("Deine Zufriedenheit", this.x - 400, this.y - 270);
      line(this.x - 450.25, this.y - 270, this.x - 390, this.y - 270);
      //healt
      rect(this.x - 540, this.y - 220, 175, 50, 5);
      text("Deine Gesundheit", this.x - 400, this.y - 220);
      line(this.x - 450.25, this.y - 220, this.x - 390, this.y - 220);

      this.okBtn.mouseOver();
      this.okBtn.display();
      pop();
    }
  }

  mouseClicked() {
    this.okBtn.mouseClicked();
  }
}
