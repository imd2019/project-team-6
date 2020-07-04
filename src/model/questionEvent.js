import { VinduEvent } from "./event.js";

export class QuestionEvent extends VinduEvent {
  constructor(question, daysUntil) {
    super(daysUntil, question.backgroundPath);
    this.question = question;
  }

  display() {
    this.question.display();
  }

  mouseClicked() {
    this.question.mouseClicked();
  }
}
