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

let timeline = new Timeline(-windowWidth / 2.2, +windowHeight / 2.6);

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

    for (let e of upcomingEvents) {
      console.log("Event on day " + e.daysUntil);
    }
  }
  clear();
  // // gif_createImg.size(windowWidth, windowHeight);
  // // gif_createImg.show();

  vid.size(windowWidth, windowHeight);
  vid.show();

  icons.display();
  showWeekDay();
  // timeline.display();
  let currentEvent = getCurrentEvent();
  if (currentEvent) {
    currentEvent.display();
  }

  if (getUpcomingEvents().length === 0) {
    setCurrentScreen("end");
  }
}

function mouseClicked() {
  let currentEvent = getCurrentEvent();
  if (currentEvent) {
    currentEvent.mouseClicked();
  }
}

let weekDays = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

function showWeekDay() {
  push();
  let day = weekDays[getCurrentDay() % 7];
  textSize(20);
  fill(255);
  text(day, windowWidth / 2, 250);
  pop();
}

export default { draw, mouseClicked, onStart };
