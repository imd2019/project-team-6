import { Question } from "./model/question";
import { Choice } from "./model/choice";

let week1Questions = [
  new Question(
    "Deine Mutter liegt krank im Altersheim. Um sie zu besuchen musst du dich krankschreiben lassen. Was machst du?",
    [
      new Choice("Ich besuche sie und bringe was mit.", 5, -45),
      new Choice("Ich gehe arbeiten.", -5),
    ]
  ),
];
let week2Questions = [];
let week3Questions = [];
let week4Questions = [];

export class Game {
  constructor(player) {
    this.currentTime = 0;
    this.player = player;
    this.events = [];
  }
}
