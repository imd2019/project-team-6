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
    rect(this.x, this.y - 10, this.width, this.height, 30);
    fill("white");
    textSize(50);
    textAlign(CENTER);
    text(this.text, this.x, this.y);
  }

  mouseClicked() {
    if (this.hitTest(mouseX, mouseY)) {
      this.clicked();
    }
  }

  clicked() {
    console.log("hi");
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