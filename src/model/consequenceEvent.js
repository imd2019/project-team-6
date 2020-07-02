import { VinduEvent } from "./event.js";

export class ConsequenceEvent extends VinduEvent {
  constructor(choice, daysUntil) {
    super(daysUntil);
    this.choice = choice;
  }
  mouseclicked() {
    icons.animate();
    runNextEvent();
  }
}
