import {
  happinessIcon,
  healthIcon,
  moneyIcon,
  mainFont,
} from "../screens/customizationScreen.js";

export class Icons {
  constructor(xOffset, yOffset, money) {
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.width = 100;
    this.height = 15;
    this.money = money;
    this.health = 0;
    this.happiness = 0;
    this.moneyChange = 0;
    this.healthChange = 0;
    this.happinessChange = 0;
    this.healthRound = 0;
    this.happinessRound = 0;

    this.x = 0;
    this.y = 0;
  }
  display() {
    this.x = windowWidth / 2 + this.xOffset;
    this.y = windowHeight / 2 + this.yOffset;

    push();
    imageMode(CENTER);
    noStroke();

    image(moneyIcon, this.x, this.y, 40, 40);
    image(healthIcon, this.x, this.y + 60, 40, 40);
    image(happinessIcon, this.x, this.y + 120, 40, 40);
    fill(245, 189, 197);
    textFont(mainFont);
    textSize(16);
    // text("Gesundheit", this.x + 50, this.y + 50);
    // text("Zufriedenheit", this.x + 50, this.y + 110);

    rectMode(CORNER);
    // rect(this.x + 40, this.y + 62, this.width, this.height, 10);
    // rect(this.x + 40, this.y + 122, this.width, this.height, 10);

    fill("#1e1f3f");
    strokeWeight(5);
    stroke("#1e1f3f");
    rect(this.x + 40, this.y + 55, this.width, this.height, 10);
    rect(this.x + 40, this.y + 115, this.width, this.height, 10);

    this.changeValues();

    noStroke();
    fill(245, 189, 197);
    textSize(20);
    text(this.money + "€", this.x + 40, this.y);

    if (this.health === 100) {
      this.healthRound = 10;
    } else if (this.health < 99) {
      this.healthRound = 0;
    }
    if (this.happiness === 100) {
      this.happinessRound = 10;
    } else if (this.happiness < 99) {
      this.happinessRound = 0;
    }

    rect(
      this.x + 40,
      this.y + 55,
      this.health,
      this.height,
      10,
      this.healthRound,
      this.healthRound,
      10
    );
    rect(
      this.x + 40,
      this.y + 115,
      this.happiness,
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

    for (let i = 0; i < Math.round(Math.abs(this.moneyChange) / 10) + 1; i++) {
      if (this.moneyChange > 0) {
        this.money++;
        this.moneyChange--;
      } else if (this.moneyChange < 0) {
        this.money--;
        this.moneyChange++;
      }
    }
  }
}
