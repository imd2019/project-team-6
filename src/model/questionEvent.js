import { VinduEvent } from "./event.js";
import { player } from "../game.js";

export class QuestionEvent extends VinduEvent {
  constructor(question, daysUntil) {
    super(
      daysUntil,
      "assets/questionBGs/" + player.sex + "/" + question.backgroundPath
    );
    this.question = question;
  }

  display() {
    this.question.display();
  }

  mouseClicked() {
    this.question.mouseClicked();
  }
}
