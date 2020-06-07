export class QuestionEvent extends Event {
  constructor(question, daysUntil) {
    super(daysUntil);
    this.question = question;
  }

  run() {
    console.log("not implemented");
  }
}
