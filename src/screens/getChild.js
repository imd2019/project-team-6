import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import {
  femaleWaiter,
  femaleConsultant,
  maleWaiter,
  maleConsultant,
  diverseWaiter,
  diverseConsultant,
  child,
  noPic,
  femaleStroke,
  maleStroke,
  diverseStroke,
} from "./customizationScreen.js";
import { player, pushHasChildQuestions } from "../game.js";
import { Pictures } from "../model/imagePosition.js";

let headline = new Button(
  125,
  -320,
  250,
  20,
  true,
  "Wähle deinen Familienstand:"
);

let hasChild = new Button(-160, 250, 80, 20, true, "Mit Kind", () => {
  player.hasChild = true;

  pushHasChildQuestions();

  setCurrentScreen("getApartment");
});

let noChild = new Button(235, 250, 70, 20, true, "Alleine", () => {
  player.hasChild = false;

  setCurrentScreen("getApartment");
});

let backBtn = new Button(0, 400, 120, 50, true, "<", () => {
  setCurrentScreen("getJob");
});

let hasChildPicture = new Pictures(-200, 0, 100, 400, () => {
  player.hasChild = true;

  pushHasChildQuestions();

  setCurrentScreen("getApartment");
});

let noChildPicture = new Pictures(200, 0, 150, 400, () => {
  player.hasChild = false;

  setCurrentScreen("getApartment");
});

let childPicture = new Pictures(100, 0, 150, 400, () => {
  player.hasChild = true;

  pushHasChildQuestions();

  setCurrentScreen("getApartment");
});

function draw() {
  background("#1e1f3f");
  headline.display();
  hasChild.display();
  noChild.display();
  hasChild.mouseOver();
  noChild.mouseOver();
  backBtn.display();

  childPicture.mouseOver(child);
  childPicture.display(child);

  if (player.sex === "f" && player.job.title === "Kellner*in") {
    hasChildPicture.mouseOver(femaleStroke);
    noChildPicture.mouseOver(femaleStroke);
    hasChildPicture.display(femaleConsultant);
    noChildPicture.display(femaleWaiter);
  } else if (player.sex === "m" && player.job.title === "Kellner*in") {
    hasChildPicture.mouseOver(femaleStroke);
    noChildPicture.mouseOver(femaleStroke);
    hasChildPicture.display(femaleConsultant);
    noChildPicture.display(femaleWaiter);
  } else if (player.sex === "d" && player.job.title === "Kellner*in") {
    hasChildPicture.mouseOver(femaleStroke);
    noChildPicture.mouseOver(femaleStroke);
    hasChildPicture.display(femaleConsultant);
    noChildPicture.display(femaleWaiter);
  } else if (player.sex === "f" && player.job.title === "Steuerberater*in") {
    hasChildPicture.mouseOver(femaleStroke);
    noChildPicture.mouseOver(femaleStroke);
    hasChildPicture.display(femaleConsultant);
    noChildPicture.display(femaleWaiter);
  } else if (player.sex === "m" && player.job.title === "Steuerberater*in") {
    hasChildPicture.mouseOver(femaleStroke);
    noChildPicture.mouseOver(femaleStroke);
    hasChildPicture.display(femaleConsultant);
    noChildPicture.display(femaleWaiter);
  } else if (player.sex === "d" && player.job.title === "Steuerberater*in") {
    hasChildPicture.mouseOver(femaleStroke);
    noChildPicture.mouseOver(femaleStroke);
    hasChildPicture.display(femaleConsultant);
    noChildPicture.display(femaleWaiter);
  }
}

function mouseClicked() {
  hasChild.mouseClicked();
  noChild.mouseClicked();
  backBtn.mouseClicked();

  hasChildPicture.mouseClicked();
  noChildPicture.mouseClicked();
  childPicture.mouseClicked();
}

export default { draw, mouseClicked };
