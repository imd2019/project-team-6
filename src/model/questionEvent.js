import { VinduEvent } from "./event.js";

export class QuestionEvent extends VinduEvent {
  constructor(question, daysUntil) {
    super(daysUntil);
    this.question = question;
  }

  run() {
    console.log("not implemented");
  }
}
