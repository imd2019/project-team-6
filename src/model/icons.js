import {
  happinessIcon,
  healthIcon,
  moneyIcon,
} from "../screens/customizationScreen.js";

export class Icons {
  constructor(xOffset, yOffset, width, height) {
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.width = width;
    this.height = height;
    this.money = null;

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
    text(this.money + "€", this.x + 50, this.y + 5);
    text("Gesundheit", this.x + 50, this.y + 95);
    text("Zufriedenheit", this.x + 50, this.y + 195);
    noFill();
    stroke(245, 189, 197);
    rect(this.x + 110, this.y + 110, this.width, this.height, 10);
    rect(this.x + 110, this.y + 210, this.width, this.height, 10);
  }
}
