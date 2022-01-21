import { Icons } from "../model/icons.js";
import { Timeline } from "../model/timeline.js";
import {
  player,
  getCurrentEvent,
  upcomingEvents,
  getCurrentDay,
} from "../game.js";
import { Tutorial } from "../model/tutorial.js";

let weekDays = ["SO", "MO", "DI", "MI", "DO", "FR", "SA"];

let timeline = new Timeline(-600, 320);

export let tutorial = new Tutorial(0, 0, false);

export let icons = new Icons(-600, -320, player);

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
function draw() {
  clear();

  //for debugging
  if (!t) {
    t = true;
    console.log(upcomingEvents);

    for (let e of upcomingEvents) {
      console.log("Event on day " + e.daysUntil);
    }
  }
  //if it isnt a video
  if (!getCurrentEvent().hasBackgroundVideo()) {
    vid.hide();
    //if it is a video and src ending isnt the same as backgroundpath
  } else if (!vid.src.endsWith(getCurrentEvent().backgroundPath)) {
    //change src
    vid.src = getCurrentEvent().backgroundPath;
    vid.loop();
    vid.show();
  }

  //if its an image
  if (getCurrentEvent().backgroundImage) {
    //show image
    image(
      getCurrentEvent().backgroundImage,
      windowWidth / 2,
      windowHeight / 2,
      windowWidth,
      windowWidth * 0.5603322
    );
  }

  // // gif_createImg.size(windowWidth, windowHeight);
  // // gif_createImg.show();

  vid.size(windowWidth, windowHeight);

  icons.display();
  icons.mouseOver();
  // showWeekDay();

  let day = weekDays[getCurrentDay() % 7];
  timeline.display(day, getCurrentDay());

  let currentEvent = getCurrentEvent();
  if (currentEvent) {
    currentEvent.display();
  }

  tutorial.display();
}

function mouseClicked() {
  if (!tutorial.mode) {
    let currentEvent = getCurrentEvent();

    if (currentEvent) {
      currentEvent.mouseClicked();
    }
    console.log(player);
  }

  tutorial.mouseClicked();
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
