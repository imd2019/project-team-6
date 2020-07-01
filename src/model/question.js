import { mainFont } from "../screens/customizationScreen.js";

export class Question {
  constructor(text, choices, xOffset, yOffset) {
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.x = 0;
    this.y = 0;
    this.text = text;
    this.choices = choices;
    this.boxWidth = 600;
    this.choiceY = this.y - 50;
  }
  display() {
    push();
    this.x = windowWidth / 2 + this.xOffset;
    this.y = windowHeight / 2 + this.yOffset;
    push();
    noStroke();
    //frage
    fill(21, 21, 21, 150);
    rectMode(CENTER);
    rect(this.x, this.y, this.boxWidth, 220, 50);
    fill("white");
    textSize(16);
    textFont(mainFont);
    textAlign(CENTER);
    text(this.text, this.x, this.y + 10, this.boxWidth - 50, 200);

    for (let i in this.choices) {
      let choice = this.choices[i];

      choice.display(this.getQuestionX(i), this.choiceY);
    }
    pop();
  }

  mouseClicked() {
    for (let i in this.choices) {
      let choice = this.choices[i];

      choice.mouseClicked(this.getQuestionX(i), this.choiceY);
    }
  }

  getQuestionX(i) {
    let offset;

    if (this.choices.length === 1) {
      offset = 0;
    } else if (this.choices.length === 2) {
      offset = 300;
    } else if (this.choices.length === 3) {
      offset = 400;
    }

    return this.x - offset / 2 + (this.boxWidth / this.choices.length) * i;
  }
}
