import { mainFont } from "../screens/customizationScreen.js";

export class Question {
  constructor(text, choices, xOffset, yOffset, backgroundPath = "") {
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.x = 0;
    this.y = 0;
    this.text = text;
    this.choices = choices;
    this.boxWidth = 650;
    this.choiceY = 0;
    this.backgroundPath = backgroundPath;
  }
  display() {
    this.x = windowWidth / 2 + this.xOffset;
    this.y = windowHeight / 2 + this.yOffset;
    this.choiceY = this.y + 50;
    push();

    //frage
    strokeWeight(3);
    stroke(255);
    fill(19, 19, 37, 220);
    rectMode(CENTER);
    rect(this.x, this.y, this.boxWidth, 220, 50);
    noStroke();
    fill("white");
    textSize(16);
    textFont(mainFont);
    textAlign(CENTER);
    text(this.text, this.x, this.y - 50, this.boxWidth - 50, 200);

    for (let i in this.choices) {
      let choice = this.choices[i];

      choice.mouseOver(this.getQuestionX(i), this.choiceY);
      choice.display(this.getQuestionX(i), this.choiceY);
    }
    pop();
  }

  mouseClicked() {
    for (let i in this.choices) {
      let choice = this.choices[i];

      choice.mouseClicked(this, this.getQuestionX(i), this.choiceY);
    }
  }

  getQuestionX(i) {
    let offset;

    if (this.choices.length === 1) {
      offset = 0;
    } else if (this.choices.length === 2) {
      offset = 300;
    } else if (this.choices.length === 3) {
      offset = 430;
    }

    return this.x - offset / 2 + (this.boxWidth / this.choices.length) * i;
  }
}
