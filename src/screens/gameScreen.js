import { Question } from "../model/question.js";
import { Choice } from "../model/choice.js";
let question = new Question(
  "Deine Mutter liegt krank im Altersheim. Um sie zu besuchen musst du dich krankschreiben lassen. Was machst du?",
  [
    new Choice(
      "Ich besuche sie und bringe was mit.",
      "blumen, trinkgeld, wär schön mit mama",
      0,
      0,
      0,
      1
    ),
    new Choice("Ich gehe arbeiten.", "schlechtes gewissen", 0, 0, 0, 1),
    new Choice("Ich gehe arbeiten.", "schlechtes gewissen", 0, 0, 0, 1),
  ]
);

let gif_createImg;

function preload() {
  gif_createImg = createImg("../../assets/testScreen.gif", "test screen");
  console.log(gif_createImg);
  gif_createImg.position(0, 0);
  gif_createImg.hide();
}

function draw() {
  clear();
  question.display();
  gif_createImg.size(windowWidth, windowHeight);
  gif_createImg.show();
}

function mouseClicked() {}

export default { draw, mouseClicked, preload };
