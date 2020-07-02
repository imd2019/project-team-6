import { icons } from "../screens/gameScreen.js";
import { runNextEvent, getUpcomingEvents } from "../game.js";
import { ConsequenceEvent } from "./consequenceEvent.js";

export class Choice {
  constructor(
    text,
    consequence,
    happiness = 0,
    money = 0,
    health = 0,
    chance = 1
  ) {
    this.text = text;
    this.consequence = consequence;
    this.happiness = happiness;
    this.money = money;
    this.health = health;
    this.chance = chance;
    this.width = 140;
    this.height = 50;
  }

  display(x, y) {
    push();
    fill(0, 0, 0, 50);
    //rect(x, y, this.width, this.height, 8);
    fill("white");
    text(this.text, x, y, this.width + 50, this.height - 10);
    pop();
  }

  mouseClicked(question, x, y) {
    if (this.hitTest(x, y, mouseX, mouseY)) {
      getUpcomingEvents().push(
        new ConsequenceEvent(this, question.x, question.y)
      );
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
}
