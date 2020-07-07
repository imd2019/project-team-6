export class Pictures {
  constructor(xOffset, yOffset, width, height, clicked) {
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.clicked = clicked;
  }

  display(pic) {
    this.x = windowWidth / 2 + this.xOffset;
    this.y = windowHeight / 2 + this.yOffset;

    noFill();
    noStroke();
    // fill(0);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height, 30);
    imageMode(CENTER);
    image(pic, this.x, this.y);
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
  mouseOver(pic) {
    push();
    if (this.hitTest(mouseX, mouseY)) {
      imageMode(CENTER);
      image(pic, this.x, this.y);
    }
    pop();
  }
}
