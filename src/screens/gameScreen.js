import { Question } from "../model/question.js";
import { Choice } from "../model/choice.js";
import { Icons } from "../model/icons.js";
import { player } from "../game.js";

let icons = new Icons(-windowWidth / 2.2, -windowHeight / 2.6, 100, 20);

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

//weiß nicht, ob es tatsächlich drauf zugreift
let happinesChange = question.choices.happiness;
let healthChange = question.choices.health;

//let gif_createImg;
let vid;

function onStart() {
  // gif_createImg = createImg("../../assets/testScreen.gif", "test screen");
  // gif_createImg.position(0, 0);
  // gif_createImg.hide();
  vid = createVideo("../../assets/frage_05.mp4", () => vid.loop());
  vid.position(0, 0);
  vid.hide();

  setTimeout(() => {
    vid.src = "../../assets/frage_26.mp4";
    vid.loop();
  }, 1000 * 10);
}

function draw() {
  clear();
  icons.money = player.money;
  question.display();
  // gif_createImg.size(windowWidth, windowHeight);
  // gif_createImg.show();

  // vid.size(windowWidth, windowHeight);
  // vid.show();

  // console.log(player);
  icons.display();
}

function mouseClicked() {
  icons.animate(happinesChange, healthChange, 0);
}

export default { draw, mouseClicked, onStart };
