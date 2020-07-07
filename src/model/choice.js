import { runNextEvent, getUpcomingEvents } from "../game.js";
import { ConsequenceEvent } from "./consequenceEvent.js";
import { fallbackFont } from "../screens/customizationScreen.js";
import { choiceClickSound } from "../screens/startScreen.js";

export class Choice {
  constructor(
    text,
    consequence,
    happiness = 0,
    money = 0,
    health = 0,
    chance = 1,
    followUpQuestion = null
  ) {
    this.text = text;

    if (chance != 1) {
      if (!followUpQuestion) {
        followUpQuestion = [];
      }
      if (random(0, 1) <= chance) {
        this.consequence = consequence[0];
        this.happiness = happiness[0];
        this.money = money[0];
        this.health = health[0];
        this.followUpQuestion = followUpQuestion[0];
      } else {
        this.consequence = consequence[1];
        this.happiness = happiness[1];
        this.money = money[1];
        this.health = health[1];
        this.followUpQuestion = followUpQuestion[1];
      }
    } else {
      this.consequence = consequence;
      this.happiness = happiness;
      this.money = money;
      this.health = health;
      this.followUpQuestion = followUpQuestion;
    }

    this.width = 140;
    this.height = 50;
    this.textTriangle = "";
  }

  display(x, y) {
    push();
    // fill(0, 0, 0, 80);
    // rect(x, y, this.width, this.height, 8);
    fill("white");
    text(this.text, x, y, this.width + 20, this.height + 20);
    textFont(fallbackFont);
    text(this.textTriangle, x - (this.width / 3) * 2, y);
    pop();
  }

  mouseClicked(question, x, y) {
    if (this.hitTest(x, y, mouseX, mouseY)) {
      getUpcomingEvents().unshift(
        new ConsequenceEvent(this, question.x, question.y)
      );
      choiceClickSound.play();
      runNextEvent();
    }
  }

  hitTest(x, y, mouseX, mouseY) {
    return (
      mouseX >= x - this.width / 2 &&
      mouseX <= x + this.width / 2 &&
      mouseY >= y - this.height / 2 &&
      mouseY <= y + this.height / 2
    );
  }

  mouseOver(x, y) {
    if (this.hitTest(x, y, mouseX, mouseY)) {
      this.textTriangle = "▶";
    } else {
      this.textTriangle = "";
    }
  }
}
