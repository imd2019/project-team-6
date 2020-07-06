import { Icons } from "../model/icons.js";
import { Timeline } from "../model/timeline.js";
import {
  player,
  runNextEvent,
  getCurrentEvent,
  upcomingEvents,
  getCurrentDay,
  getUpcomingEvents,
} from "../game.js";
import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";

let weekDays = ["SO", "MO", "DI", "MI", "DO", "FR", "SA"];

let timeline = new Timeline(-600, 320);

export let icons = new Icons(-600, -320, player.money);
//let gif_createImg;
let vid;

function onStart() {
  // gif_createImg = createImg("../../assets/testScreen.gif", "test screen");
  // gif_createImg.position(0, 0);
  // gif_createImg.hide();
  vid = createVideo("assets/questionBGs/d/mp4/frage_05.mp4");
  vid.position(0, 0);
  vid.hide();
}

let t = false;
let img;
function draw() {
  clear();
  if (!t) {
    t = true;
    console.log(upcomingEvents);

    for (let e of upcomingEvents) {
      console.log("Event on day " + e.daysUntil);
    }
  }

  if (!getCurrentEvent().hasBackgroundVideo()) {
    vid.hide();
  } else if (!vid.src.endsWith(getCurrentEvent().backgroundPath)) {
    vid.src = getCurrentEvent().backgroundPath;
    vid.loop();
    vid.show();
  }

  if (getCurrentEvent().backgroundImage) {
    image(
      getCurrentEvent().backgroundImage,
      windowWidth / 2,
      windowHeight / 2,
      windowWidth,
      windowHeight
    );
  }

  // // gif_createImg.size(windowWidth, windowHeight);
  // // gif_createImg.show();

  vid.size(windowWidth, windowHeight);

  icons.display();
  // showWeekDay();

  let day = weekDays[getCurrentDay() % 7];
  timeline.display(day, getCurrentDay());

  let currentEvent = getCurrentEvent();
  if (currentEvent) {
    currentEvent.display();
  }

  if (getUpcomingEvents().length === 0) {
    setCurrentScreen("result");
  }
}

function mouseClicked() {
  let currentEvent = getCurrentEvent();
  if (currentEvent) {
    currentEvent.mouseClicked();
  }
}
// function showWeekDay() {
//   push();
//   textAlign(CENTER);
//   let day = weekDays[getCurrentDay() % 7];
//   textSize(20);
//   fill(255);
//   text(day, windowWidth / 2, 60);
//   pop();
// }

export default { draw, mouseClicked, onStart };
