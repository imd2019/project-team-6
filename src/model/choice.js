export class Choice {
  constructor(
    text,
    consequence,
    happiness = 0,
    money = 0,
    health = 0,
    chance = 1
  ) {
    this.text = text;
    this.consequence = consequence;
    this.happiness = happiness;
    this.money = money;
    this.health = health;
    this.chance = chance;
    this.width = 140;
    this.height = 50;
  }

  display(x, y) {
    fill("black");
    rect(x, y, this.width, this.height, 8);
    fill("white");
    text(this.text, x, y + 3);
  }
  mouseClicked(x, y) {
    if (this.hitTest(x, y, mouseX, mouseY)) {
      console.log(this.text);
    }
  }

  hitTest(x, y, mouseX, mouseY) {
    return (
      mouseX >= x - this.width / 2 &&
      mouseX <= x + this.width / 2 &&
      mouseY >= y - this.height / 2 &&
      mouseY <= y + this.height / 2
    );
  }

  displayConsequence() {}
}
