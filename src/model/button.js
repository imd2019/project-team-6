export class Button {
  constructor(xOffset, yOffset, width, height, text, clicked) {
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.text = text;
    this.clicked = clicked;
  }

  display() {
    this.x = windowWidth / 2 + this.xOffset;
    this.y = windowHeight / 2 + this.yOffset;

    fill(21, 21, 21, 150);
    rectMode(CENTER);
    rect(this.x, this.y - 10, this.width, this.height, 30);
    fill("white");
    textSize(50);
    textAlign(CENTER);
    text(this.text, this.x, this.y);
  }

  showPicture(pic) {
    rectMode(CENTER);
    image(
      pic,
      this.x - this.width / 2,
      this.y - this.height - 388,
      1750 / 5.5,
      2475 / 5.5
    );
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
