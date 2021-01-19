import { mainFont } from "../screens/customizationScreen.js";

export class Timeline {
  constructor(xOffset, yOffset) {
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.x = 0;
    this.y = 0;
  }
  display(day, date) {
    this.x = windowWidth / 2 + this.xOffset;
    this.y = windowHeight / 2 + this.yOffset;
    push();
    textFont(mainFont);
    noStroke();
    rectMode(CENTER);
    fill(245, 189, 197);
    rect(this.x, this.y, 60, 60, 5);
    fill(222, 70, 90);
    rect(this.x, this.y - 20, 60, 20, 5, 5, 0);
    textAlign(CENTER);
    textSize(14);
    fill(245, 189, 197);
    text(day, this.x, this.y - 20);
    fill(222, 70, 90);
    textSize(26);
    text(date, this.x, this.y + 10);

    pop();
  }
  hitTest(x, y) {
    return (
      x >= this.x - 30 &&
      x <= this.x + 30 &&
      y >= this.y - 30 &&
      y <= this.y + 30
    );
  }
}
