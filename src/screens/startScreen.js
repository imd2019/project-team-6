export default function () {
  background("black");
  fill(21, 21, 21, 150);
  rectMode(CENTER);
  rect(width / 2, height / 2 - 10, 300, 100, 30);
  fill("white");
  textSize(50);
  textAlign(CENTER);
  text("open vindu", width / 2, height / 2);
}

class Button {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  onClick() {}
}
