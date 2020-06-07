export class Choice {
  constructor(text, happiness = 0, money = 0, health = 0, chance = 1) {
    this.text = text;
    this.happiness = happiness;
    this.money = money;
    this.health = health;
    this.chance = chance;
  }
}
