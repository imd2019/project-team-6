import { timelinePic } from "../screens/customizationScreen.js";

export class Timeline {
  constructor(xOffset, yOffset, date, day) {
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.date = date;
    this.day = day;
    this.distance = 2;
    this.x = 0;
    this.y = 0;
  }
  display() {
    this.x = windowWidth / 2 + this.xOffset;
    this.y = windowHeight / 2 + this.yOffset;
    push();
    noStroke();
    rectMode(CENTER);
    fill(245, 189, 197);
    rect(this.x, this.y, 60, 60, 5);
    fill(222, 70, 90);
    rect(this.x, this.y - 20, 60, 20, 5, 5, 0);
    textAlign(CENTER);
    textSize(11);
    fill(245, 189, 197);
    text(this.day, this.x, this.y - 16);
    fill(222, 70, 90);
    textSize(24);
    text(this.date, this.x, this.y + 16);

    pop();
  }
  mouseOver() {
    if (this.hitTest(mouseX, mouseY)) {
      let dotChange = (this.date - 1) * 20;
      push();
      stroke(245, 189, 197);
      strokeWeight(2);
      line(this.x + 30, this.y, this.x + 600 * this.distance, this.y);

      line(
        this.x + 40 * this.distance,
        this.y - 15 * this.distance,
        this.x + 40 * this.distance,
        this.y + 15 * this.distance
      );
      line(
        this.x + 60 * this.distance,
        this.y - 10 * this.distance,
        this.x + 60 * this.distance,
        this.y + 10 * this.distance
      );
      line(
        this.x + 80 * this.distance,
        this.y - 10 * this.distance,
        this.x + 80 * this.distance,
        this.y + 10 * this.distance
      );
      line(
        this.x + 100 * this.distance,
        this.y - 10 * this.distance,
        this.x + 100 * this.distance,
        this.y + 10 * this.distance
      );
      line(
        this.x + 120 * this.distance,
        this.y - 10 * this.distance,
        this.x + 120 * this.distance,
        this.y + 10 * this.distance
      );
      line(
        this.x + 140 * this.distance,
        this.y - 10 * this.distance,
        this.x + 140 * this.distance,
        this.y + 10 * this.distance
      );
      line(
        this.x + 160 * this.distance,
        this.y - 10 * this.distance,
        this.x + 160 * this.distance,
        this.y + 10 * this.distance
      );

      line(
        this.x + 180 * this.distance,
        this.y - 15 * this.distance,
        this.x + 180 * this.distance,
        this.y + 15 * this.distance
      );
      line(
        this.x + 200 * this.distance,
        this.y - 10 * this.distance,
        this.x + 200 * this.distance,
        this.y + 10 * this.distance
      );
      line(
        this.x + 220 * this.distance,
        this.y - 10 * this.distance,
        this.x + 220 * this.distance,
        this.y + 10 * this.distance
      );
      line(
        this.x + 240 * this.distance,
        this.y - 10 * this.distance,
        this.x + 240 * this.distance,
        this.y + 10 * this.distance
      );
      line(
        this.x + 260 * this.distance,
        this.y - 10 * this.distance,
        this.x + 260 * this.distance,
        this.y + 10 * this.distance
      );
      line(
        this.x + 280 * this.distance,
        this.y - 10 * this.distance,
        this.x + 280 * this.distance,
        this.y + 10 * this.distance
      );
      line(
        this.x + 300 * this.distance,
        this.y - 10 * this.distance,
        this.x + 300 * this.distance,
        this.y + 10 * this.distance
      );

      line(
        this.x + 320 * this.distance,
        this.y - 15 * this.distance,
        this.x + 320 * this.distance,
        this.y + 15 * this.distance
      );
      line(
        this.x + 340 * this.distance,
        this.y - 10 * this.distance,
        this.x + 340 * this.distance,
        this.y + 10 * this.distance
      );
      line(
        this.x + 360 * this.distance,
        this.y - 10 * this.distance,
        this.x + 360 * this.distance,
        this.y + 10 * this.distance
      );
      line(
        this.x + 380 * this.distance,
        this.y - 10 * this.distance,
        this.x + 380 * this.distance,
        this.y + 10 * this.distance
      );
      line(
        this.x + 400 * this.distance,
        this.y - 10 * this.distance,
        this.x + 400 * this.distance,
        this.y + 10 * this.distance
      );
      line(
        this.x + 420 * this.distance,
        this.y - 10 * this.distance,
        this.x + 420 * this.distance,
        this.y + 10 * this.distance
      );
      line(
        this.x + 440 * this.distance,
        this.y - 10 * this.distance,
        this.x + 440 * this.distance,
        this.y + 10 * this.distance
      );

      line(
        this.x + 460 * this.distance,
        this.y - 15 * this.distance,
        this.x + 460 * this.distance,
        this.y + 15 * this.distance
      );
      line(
        this.x + 480 * this.distance,
        this.y - 10 * this.distance,
        this.x + 480 * this.distance,
        this.y + 10 * this.distance
      );
      line(
        this.x + 500 * this.distance,
        this.y - 10 * this.distance,
        this.x + 500 * this.distance,
        this.y + 10 * this.distance
      );
      line(
        this.x + 520 * this.distance,
        this.y - 10 * this.distance,
        this.x + 520 * this.distance,
        this.y + 10 * this.distance
      );
      line(
        this.x + 540 * this.distance,
        this.y - 10 * this.distance,
        this.x + 540 * this.distance,
        this.y + 10 * this.distance
      );
      line(
        this.x + 560 * this.distance,
        this.y - 10 * this.distance,
        this.x + 560 * this.distance,
        this.y + 10 * this.distance
      );
      line(
        this.x + 580 * this.distance,
        this.y - 10 * this.distance,
        this.x + 580 * this.distance,
        this.y + 10 * this.distance
      );
      fill(222, 70, 90);
      noStroke();
      ellipse(this.x + (40 + dotChange) * this.distance, this.y, 10, 10);
      pop();
    }
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
