import {
  happinessIcon,
  healthIcon,
  moneyIcon,
} from "../screens/customizationScreen.js";

export class Icons {
  constructor(xOffset, yOffset, money) {
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.width = 100;
    this.height = 20;
    this.money = money;
    this.health = 100;
    this.happiness = 100;
    this.moneyChange = 0;
    this.healthChange = 0;
    this.happinessChange = 0;

    this.x = 0;
    this.y = 0;
  }
  display() {
    this.x = windowWidth / 2 + this.xOffset;
    this.y = windowHeight / 2 + this.yOffset;

    imageMode(CENTER);
    noStroke();

    image(moneyIcon, this.x, this.y);
    image(healthIcon, this.x, this.y + 100);
    image(happinessIcon, this.x, this.y + 200);
    fill(245, 189, 197);
    textSize(18);
    textAlign(LEFT);
    textSize(14);
    text("Gesundheit", this.x + 50, this.y + 95);
    text("Zufriedenheit", this.x + 50, this.y + 195);
    noFill();
    stroke(245, 189, 197);
    strokeWeight(2);
    rectMode(CORNER);
    rect(this.x + 50, this.y + 110, this.width, this.height, 10);
    rect(this.x + 50, this.y + 210, this.width, this.height, 10);
    noStroke();
    fill("#1e1f3f");
    rect(this.x + 50, this.y + 110, this.width, this.height, 10);
    rect(this.x + 50, this.y + 210, this.width, this.height, 10);

    rectMode(CORNER);

    this.changeValues();

    fill(245, 189, 197);
    textSize(18);
    text(this.money + "€", this.x + 50, this.y + 5);

    fill(245, 189, 197);
    rect(this.x + 50, this.y + 110, this.health, this.height, 10);
    rect(this.x + 50, this.y + 210, this.happiness, this.height, 10);
  }

  animate(healthChange, happinessChange, moneyChange) {
    this.healthChange = healthChange;
    this.happinessChange = happinessChange;
    this.moneyChange = moneyChange;
  }

  changeValues() {
    if (this.healthChange > 0) {
      this.health++;
      this.healthChange--;
    }
    if (this.healthChange < 0) {
      this.health--;
      this.healthChange++;
    }

    if (this.happinessChange > 0) {
      this.happiness++;
      this.happinessChange--;
    }
    if (this.happinessChange < 0) {
      this.happiness--;
      this.happinessChange++;
    }

    for (let i = 0; i < Math.round(this.moneyChange / 10) + 1; i++) {
      if (this.moneyChange > 0) {
        this.money++;
        this.moneyChange--;
      }
      if (this.moneyChange < 0) {
        this.money--;
        this.moneyChange++;
      }
    }
  }
}
