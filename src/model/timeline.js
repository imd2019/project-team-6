import { timeline } from "../screens/customizationScreen.js";

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
    ellipse(this.x, this.y, 75, 75);
    fill(222, 70, 90);
    textAlign(CENTER);
    text(this.day, this.x, this.y + 15);
    imageMode(CENTER);
    noStroke();

    image(timeline, this.x + 480, this.y);
  }
}
