import { mainFont } from "../screens/customizationScreen.js";

export class Question {
  constructor(text, choices, clicked) {
    this.text = text;
    this.choices = choices;
    this.clicked = clicked;
    this.firstChoiceX = 0;
    this.firstChoiceY = 0;
    this.secondChoiceX = 0;
    this.secondChoiceY = 0;
    this.thirdChoiceX = 0;
    this.thirdChoiceY = 0;
    this.width = 100;
    this.height = 20;
  }
  display() {
    push();
    noStroke();
    //frage
    fill(21, 21, 21, 150);
    rectMode(CENTER);
    rect(windowWidth / 1.25, windowHeight / 6, 500, 200, 30);
    fill("white");
    textSize(14);
    textFont(mainFont);
    textAlign(CENTER);
    text(this.text, windowWidth / 1.25, windowHeight / 6 - 50);

    //1 antwort
    if (this.choices.length === 1) {
      this.firstChoiceX = windowWidth / 1.25;
      this.firstChoiceY = windowHeight / 6 + 50;
      this.width = 120;
      this.height = 50;
      //erste im array
      fill("#d5d5d5");
      rect(this.firstChoiceX, this.firstChoiceY, this.width, this.height);
      fill("black");
      text(this.choices[0].text, this.firstChoiceX, this.firstChoiceY);
    }

    //2 antworten
    if (this.choices.length === 2) {
      this.firstChoiceX = windowWidth / 1.25 + 100;
      this.firstChoiceY = windowHeight / 6 + 50;
      this.secondChoiceX = windowWidth / 1.25 - 100;
      this.secondChoiceY = windowHeight / 6 + 50;
      this.width = 120;
      this.height = 50;

      //erste im array
      fill("#d5d5d5");
      rect(this.firstChoiceX, this.firstChoiceY, this.width, this.height);
      fill("black");
      text(this.choices[0].text, this.firstChoiceX, this.firstChoiceY);

      //zweite im array
      fill("#d5d5d5");
      rect(this.secondChoiceX, this.secondChoiceY, this.width, this.height);
      fill("black");
      text(this.choices[1].text, this.secondChoiceX, this.secondChoiceY);
    }
    //3 antworten
    if (this.choices.length === 3) {
      this.firstChoiceX = windowWidth / 1.25 + 150;
      this.firstChoiceY = windowHeight / 6 + 50;
      this.secondChoiceX = windowWidth / 1.25;
      this.secondChoiceY = windowHeight / 6 + 50;
      this.thirdChoiceX = windowWidth / 1.25 - 150;
      this.thirdChoiceY = windowHeight / 6 + 50;
      this.width = 120;
      this.height = 50;

      //erste im array
      fill("#d5d5d5");
      rect(this.firstChoiceX, this.firstChoiceY, this.width, this.height);
      fill("black");
      text(this.choices[0].text, this.firstChoiceX, this.firstChoiceY);

      //zweite im array
      fill("#d5d5d5");
      rect(this.secondChoiceX, this.secondChoiceY, this.width, this.height);
      fill("black");
      text(this.choices[1].text, this.secondChoiceX, this.secondChoiceY);

      //dritte im array
      fill("#d5d5d5");
      rect(this.thirdChoiceX, this.thirdChoiceY, this.width, this.height);
      fill("black");
      text(this.choices[2].text, this.thirdChoiceX, this.thirdChoiceY);
      pop();
    }
  }
  mouseClicked() {
    if (this.hitTest(mouseX, mouseY)) {
      // this.clicked();
      console.log("hey");
    }
  }

  hitTest(x, y) {
    return (
      (x >= this.firstChoiceX - this.width / 2 &&
        x <= this.firstChoiceX + this.width / 2 &&
        y >= this.firstChoiceY - this.height / 2 &&
        y <= this.firstChoiceY + this.height / 2) ||
      (x >= this.secondChoiceX - this.width / 2 &&
        x <= this.secondChoiceX + this.width / 2 &&
        y >= this.secondChoiceY - this.height / 2 &&
        y <= this.secondChoiceY + this.height / 2) ||
      (x >= this.thirdChoiceX - this.width / 2 &&
        x <= this.thirdChoiceX + this.width / 2 &&
        y >= this.thirdChoiceY - this.height / 2 &&
        y <= this.thirdChoiceY + this.height / 2)
    );
  }
}
