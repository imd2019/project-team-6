import {
  happinessIcon,
  healthIcon,
  moneyIcon,
} from "../screens/customizationScreen.js";

export class Icons {
  constructor(xOffset, yOffset, money) {
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.money = money;
    this.x = 0;
    this.y = 0;
    this.width = 75;
    this.height = 75;
  }
  display() {
    this.x = windowWidth / 2 + this.xOffset;
    this.y = windowHeight / 2 + this.yOffset;
    imageMode(CENTER);
    noStroke();
    image(moneyIcon, this.x, this.y, this.width, this.height);
    image(healthIcon, this.x, this.y + 100, this.width, this.height);
    image(happinessIcon, this.x, this.y + 200, this.width, this.height);
    fill(245, 189, 197);
    textSize(18);
    textAlign(LEFT);
    text(this.money + "€", this.x + 50, this.y + 5);
    text("Gesundheit", this.x + 50, this.y + 95);
    text("Zufriedenheit", this.x + 50, this.y + 195);
    noFill();
    stroke(245, 189, 197);
    rect(this.x + 110, this.y + 110, 130, 20, 10);
    rect(this.x + 110, this.y + 210, 130, 20, 10);
  }
}
