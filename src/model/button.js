import { mainFont, fallbackFont } from "../screens/customizationScreen.js";

export class Button {
  constructor(xOffset, yOffset, width, height, headline, text, clicked) {
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height + 20;
    this.headline = headline;
    this.text = text;
    this.clicked = clicked;
    this.textTriangle = "";
    this.textColor = "#f5bdc5";
    this.textSize = 16;
  }

  display() {
    this.x = windowWidth / 2 + this.xOffset;
    this.y = windowHeight / 2 + this.yOffset;

    noFill();
    noStroke();
    // fill(0);
    rectMode(CORNER);
    rect(this.x - this.width, this.y, this.width, this.height, 30);

    if (this.headline === false) {
      textSize(this.textSize);
    }
    if (this.headline === true) {
      textSize(this.textSize + 4);
    }
    textAlign(LEFT, CENTER);
    fill(this.textColor);
    textFont(mainFont);
    text(this.text, this.x - this.width, this.y + 20);

    textFont(fallbackFont);
    text(this.textTriangle, this.x - this.width - 40, this.y + 20);
  }

  mouseClicked() {
    if (this.hitTest(mouseX, mouseY)) {
      this.clicked();
    }
  }

  hitTest(x, y) {
    return (
      x >= this.x - this.width &&
      x <= this.x &&
      y >= this.y &&
      y <= this.y + this.height
    );
  }
  mouseOver() {
    if (this.hitTest(mouseX, mouseY)) {
      this.textTriangle = "▶";
    } else {
      this.textTriangle = "";
    }
  }
}
