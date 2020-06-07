export class Button {
  constructor(x, y, width, height, text) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
  }
  display() {
    fill(21, 21, 21, 150);
    rectMode(CENTER);
    rect(this.x / 2, this.y / 2 - 10, this.width, this.height, 30);
    fill("white");
    textSize(50);
    textAlign(CENTER);
    text(this.text, this.x / 2, this.y / 2);
  }
  clicked() {
    console.log("hi");
  }
  mouseClicked() {
    console.log("hi");
    if (this.hitTest(mouseX, mouseY)) {
      this.clicked();
    }
  }
  hitTest(x, y) {
    if (
      x > this.x / 2 - this.width / 2 &&
      x < this.x / 2 + this.width / 2 &&
      y > this.y / 2 - 10 - this.height / 2 &&
      y < this.y / 2 - 10 + this.height / 2
    ) {
      return true;
    }
    return false;
  }
}
