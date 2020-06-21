import { mainFont } from "../screens/customizationScreen.js";

export class Button {
  constructor(xOffset, yOffset, width, height, color, text, clicked) {
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.color = color;
    this.text = text;
    this.clicked = clicked;
  }

  display() {
    this.x = windowWidth / 2 + this.xOffset;
    this.y = windowHeight / 2 + this.yOffset;

    if (this.color === true) {
      // fill(222, 70, 90, 150);
      fill(245, 189, 197);
    }
    if (this.color === false) {
      noFill();
    }
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y - 10, this.width, this.height, 30);

    if (this.color === true) {
      fill("#1e1f3f");
    }
    if (this.color === false) {
      fill("#f5bdc5");
    }
    textSize(50);
    textAlign(CENTER);
    textFont(mainFont);
    text(this.text, this.x, this.y + 2);
  }

  showPicture(picAdult, picChild) {
    imageMode(CENTER);
    image(picAdult, this.x, this.y - 300);
    image(picChild, this.x - 100, this.y - this.height - 100);
  }

  mouseClicked() {
    if (this.hitTest(mouseX, mouseY)) {
      this.clicked();
    }
  }

  hitTest(x, y) {
    return (
      x >= this.x - this.width / 2 &&
      x <= this.x + this.width / 2 &&
      y >= this.y - this.height / 2 &&
      y <= this.y + this.height / 2
    );
  }
}
