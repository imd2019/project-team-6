export class Question {
  constructor(text, choices) {
    this.text = text;
    this.choices = choices;
  }
  display() {
    push();
    noStroke();
    //frage
    fill(21, 21, 21, 150);
    rectMode(CENTER);
    rect(windowWidth / 2, windowHeight / 2 - 10, 500, 200, 30);
    fill("white");
    textSize(14);
    textAlign(CENTER);
    text(this.text, windowWidth / 2, windowHeight / 2 - 130);

    //1 antwort
    if (this.choices.length === 1) {
      //erste im array
      fill("#d5d5d5");
      rect(windowWidth / 2, windowHeight / 2 - 10, 140, 50, 3);
      fill("black");
      text(this.choices[0].text, windowWidth / 2, windowHeight / 2 - 7);
    }

    //2 antworten
    if (this.choices.length === 2) {
      //erste im array
      fill("#d5d5d5");
      rect(windowWidth / 2 - 90, windowHeight / 2 - 10, 140, 50, 3);
      fill("black");
      text(this.choices[0].text, windowWidth / 2 - 90, windowHeight / 2 - 7);

      //zweite im array
      fill("#d5d5d5");
      rect(windowWidth / 2 + 90, windowHeight / 2 - 10, 140, 50, 3);
      fill("black");
      text(this.choices[1].text, windowWidth / 2 + 90, windowHeight / 2 - 7);
    }
    //3 antworten
    if (this.choices.length === 3) {
      //erste im array
      fill("#d5d5d5");
      rect(windowWidth / 2 - 175, windowHeight / 2 - 10, 140, 50, 3);
      fill("black");
      text(this.choices[0].text, windowWidth / 2 - 175, windowHeight / 2 - 7);

      //zweite im array
      fill("#d5d5d5");
      rect(windowWidth / 2, windowHeight / 2 - 10, 140, 50, 3);
      fill("black");
      text(this.choices[1].text, windowWidth / 2, windowHeight / 2 - 7);

      //dritte im array
      fill("#d5d5d5");
      rect(windowWidth / 2 + 175, windowHeight / 2 - 10, 140, 50, 3);
      fill("black");
      text(this.choices[2].text, windowWidth / 2 + 175, windowHeight / 2 - 7);
      pop();
    }
  }
}
