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
  }

  display(x, y) {
    fill("#d5d5d5");
    rect(x, y, 140, 50, 8);
    fill("black");
    text(this.text, x, y + 3);
  }
  mouseClicked(x, y) {}

  displayConsequence() {}
}
