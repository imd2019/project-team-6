import { Question } from "../model/question.js";
import { Choice } from "../model/choice.js";
import { Icons } from "../model/icons.js";
import { Timeline } from "../model/timeline.js";
import { player, runNextEvent, getCurrentEvent } from "../game.js";
import { Button } from "../model/button.js";

let runButton = new Button(
  0,
  200,
  400,
  100,
  true,
  "run next event",
  runNextEvent
);

let timeline = new Timeline(-windowWidth / 2.2, +windowHeight / 2.6);

let icons;

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
  if (!icons) {
    icons = new Icons(-windowWidth / 2.2, -windowHeight / 2.6, player.money);
  }

  // question.display();
  // // gif_createImg.size(windowWidth, windowHeight);
  // // gif_createImg.show();

  // vid.size(windowWidth, windowHeight);
  // vid.show();

  // // console.log(player);
  icons.display();
  runButton.display();
  timeline.display();
  if (getCurrentEvent()) {
    getCurrentEvent().question.display();
  }

  document.getElementById("timelineAnimation-svg").style.display = "block";

  // document
  //   .getElementById("timelineAnimation-svg")
  //   .contentDocument.getElementById("e5cr2dpkonuq1")
  //   .dispatchEvent(new Event("hover"));

  // document.getElementById("timelineAnimation-svg").src =
  //   "../../assets/timelineAnimation.svg";
}

function mouseClicked() {
  runButton.mouseClicked();
  icons.animate(-25, -25, 5);
  // getCurrentEvent().question.mouseClicked();
}

export default { draw, mouseClicked, onStart };
