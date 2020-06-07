import { Question } from "../model/question.js";
let question = new Question(
  "Das ist ein Test für die Fragen. \n Deshalb mache ich jetzt eine etwas lännger\n um nachzuschauen ob alles klappt wie ich möchte",
  ["ich brauche wörter", "ich brauche wörter"]
);
export default function () {
  background("black");
  question.display();
}
