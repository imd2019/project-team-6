import { Icons } from "../model/icons.js";
import { Timeline } from "../model/timeline.js";
import {
  player,
  runNextEvent,
  getCurrentEvent,
  upcomingEvents,
} from "../game.js";
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

export let icons = new Icons(-550, -300, player.money);
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

let t = false;
function draw() {
  if (!t) {
    t = true;
    console.log(upcomingEvents);
  }
  clear();
  // // gif_createImg.size(windowWidth, windowHeight);
  // // gif_createImg.show();

  vid.size(windowWidth, windowHeight);
  vid.show();

  icons.display();
  // timeline.display();
  let currentEvent = getCurrentEvent();
  if (currentEvent) {
    currentEvent.display();
  }
}

function mouseClicked() {
  let currentEvent = getCurrentEvent();
  if (currentEvent) {
    currentEvent.mouseClicked();
  }
}

export default { draw, mouseClicked, onStart };
