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
  vid = createVideo("assets/questionBGs/mp4/frage_05.mp4");
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
  }

  if (!getCurrentEvent().hasBackgroundImage()) {
    img = null;
  }

  if (
    getCurrentEvent().hasBackgroundVideo &&
    !vid.src.endsWith(getCurrentEvent().backgroundPath)
  ) {
    vid.src = getCurrentEvent().backgroundPath;
    vid.loop();
    vid.show();
  }

  if (getCurrentEvent().hasBackgroundImage() && !img) {
    img = loadImage(getCurrentEvent().backgroundPath);
  }

  if (img) {
    image(img, windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
  }

  // // gif_createImg.size(windowWidth, windowHeight);
  // // gif_createImg.show();

  vid.size(windowWidth, windowHeight);

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
