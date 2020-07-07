import {
  happinessIcon,
  healthIcon,
  moneyIcon,
  mainFont,
  boldFont,
} from "../screens/customizationScreen.js";

export class Icons {
  constructor(xOffset, yOffset, player) {
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.width = 100;
    this.height = 15;
    this.moneyChange = 0;
    this.healthChange = 0;
    this.happinessChange = 0;
    this.healthRound = 0;
    this.happinessRound = 0;

    this.player = player;

    this.healthText = "";
    this.happinessText = "";

    this.x = 0;
    this.y = 0;
  }
  display() {
    this.changeValues();
    this.x = windowWidth / 2 + this.xOffset;
    this.y = windowHeight / 2 + this.yOffset;

    push();
    imageMode(CENTER);
    noStroke();

    rectMode(CORNER);
    fill(17, 21, 37, 220);
    //fill(255);
    rect(this.x - 40, this.y - 40, 210, 190, 0, 0, 30, 0);

    image(moneyIcon, this.x, this.y, 40, 40);
    image(healthIcon, this.x, this.y + 50, 40, 40);
    image(happinessIcon, this.x, this.y + 100, 40, 40);
    fill(245, 189, 197);
    textFont(mainFont);
    textSize(13);
    textAlign(CENTER);
    text(this.healthText, this.x + 90, this.y + 32);
    text(this.happinessText, this.x + 90, this.y + 82);

    // rect(this.x + 40, this.y + 62, this.width, this.height, 10);
    // rect(this.x + 40, this.y + 122, this.width, this.height, 10);

    fill("#28294f");
    strokeWeight(5);
    stroke("#28294f");
    rect(this.x + 40, this.y + 45, this.width, this.height, 10);
    rect(this.x + 40, this.y + 95, this.width, this.height, 10);

    noStroke();
    fill(245, 189, 197);
    textSize(20);
    textAlign(CORNER);
    text(this.player.money + "€", this.x + 40, this.y);

    if (this.player.health === 100) {
      this.healthRound = 10;
    } else if (this.player.health < 99) {
      this.healthRound = 0;
    }
    if (this.player.happiness === 100) {
      this.happinessRound = 10;
    } else if (this.player.happiness < 99) {
      this.happinessRound = 0;
    }

    rect(
      this.x + 40,
      this.y + 45,
      this.player.health,
      this.height,
      10,
      this.healthRound,
      this.healthRound,
      10
    );
    rect(
      this.x + 40,
      this.y + 95,
      this.player.happiness,
      this.height,
      10,
      this.happinessRound,
      this.happinessRound,
      10
    );
    pop();
  }

  animate(healthChange, happinessChange, moneyChange) {
    this.healthChange = healthChange;
    this.happinessChange = happinessChange;
    this.moneyChange = moneyChange;
  }

  changeValues() {
    if (this.healthChange > 0) {
      this.player.health++;
      this.healthChange--;
    }
    if (this.healthChange < 0) {
      this.player.health--;
      this.healthChange++;
    }

    if (this.happinessChange > 0) {
      this.player.happiness++;
      this.happinessChange--;
    }
    if (this.happinessChange < 0) {
      this.player.happiness--;
      this.happinessChange++;
    }

    for (let i = 0; i < Math.round(Math.abs(this.moneyChange) / 10) + 1; i++) {
      if (this.moneyChange > 0) {
        this.player.money++;
        this.moneyChange--;
      } else if (this.moneyChange < 0) {
        this.player.money--;
        this.moneyChange++;
      }
    }
  }
  hitTest(x, y) {
    return (
      x >= this.x - 40 &&
      x <= this.x - 40 + 210 &&
      y >= this.y - 40 &&
      y <= this.y - 40 + 190
    );
  }
  mouseOver() {
    if (this.hitTest(mouseX, mouseY)) {
      this.healthText = "Gesundheit";
      this.happinessText = "Zufriedenheit";
      push();
      fill(222, 70, 90);
      textAlign(CENTER);
      textSize(11);
      textFont(boldFont);
      text(this.player.health + "/100", this.x + 90, this.y + 52);
      text(this.player.happiness + "/100", this.x + 90, this.y + 102);
      pop();
    } else {
      this.healthText = "";
      this.happinessText = "";
    }
  }
}
