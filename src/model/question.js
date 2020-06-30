import { mainFont } from "../screens/customizationScreen.js";

export class Question {
  constructor(text, choices) {
    this.text = text;
    this.choices = choices;
    this.boxWidth = 600;
    this.choices.push(this.choices[0]);

    //this.choices.splice(0, 1);
  }
  display() {
    push();
    noStroke();
    //frage
    fill(21, 21, 21, 150);
    rectMode(CENTER);
    rect(windowWidth / 2, windowHeight / 2 - 10, this.boxWidth, 220, 50);
    fill("white");
    textSize(14);
    textFont(mainFont);
    textAlign(CENTER);
    text(this.text, windowWidth / 2, windowHeight / 2 - 130);

    for (let i in this.choices) {
      let choice = this.choices[i];

      choice.display(this.getQuestionX(i), windowHeight / 2 + 30);
    }
  }

  mouseClicked() {
    for (let i in this.choices) {
      let choice = this.choices[i];

      choice.mouseClicked(this.getQuestionX(i), windowHeight / 2 - 10);
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

    return (
      windowWidth / 2 - offset / 2 + (this.boxWidth / this.choices.length) * i
    );
  }
}
