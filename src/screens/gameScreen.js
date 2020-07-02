import { Icons } from "../model/icons.js";
import { Timeline } from "../model/timeline.js";
import { player, runNextEvent, getCurrentEvent } from "../game.js";
import { Button } from "../model/button.js";

let timeline = new Timeline(-windowWidth / 2.2, +windowHeight / 2.6);

let runBtn = new Button(
  width / 2,
  height / 2,
  100,
  20,
  false,
  "run",
  runNextEvent()
);

export let icons = new Icons(
  -windowWidth / 2.2,
  -windowHeight / 2.1,
  player.money
);
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
    vid.src = "../../assets/frage_27.mp4";
    vid.loop();
  }, 1000 * 10);
}

function draw() {
  clear();
  // // gif_createImg.size(windowWidth, windowHeight);
  // // gif_createImg.show();

  // vid.size(windowWidth, windowHeight);
  // vid.show();

  icons.display();
  // timeline.display();
  if (getCurrentEvent()) {
    getCurrentEvent().question.display();
  }

  // document
  //   .getElementById("timelineAnimation-svg")
  //   .contentDocument.getElementById("e5cr2dpkonuq1")
  //   .dispatchEvent(new Event("hover"));

  // document.getElementById("timelineAnimation-svg").src =
  //   "../../assets/timelineAnimation.svg";
}

function mouseClicked() {
  if (getCurrentEvent()) {
    getCurrentEvent().question.mouseClicked();
  }
}

export default { draw, mouseClicked, onStart };
