import { timelinePic } from "../screens/customizationScreen.js";

export class Timeline {
  constructor(xOffset, yOffset, day) {
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.day = 10;

    this.x = 0;
    this.y = 0;
  }
  display() {
    this.x = windowWidth / 2 + this.xOffset;
    this.y = windowHeight / 2 + this.yOffset;

    fill(245, 189, 197);
    ellipse(this.x, this.y, 40, 40);
    fill(222, 70, 90);
    textAlign(CENTER);
    textSize(23);
    text(this.day, this.x, this.y + 8);
    imageMode(CENTER);
    noStroke();

    image(timelinePic, this.x + 460, this.y);
  }
}
