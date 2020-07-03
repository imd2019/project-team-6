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
  childStroke,
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

let backBtn = new Button(0, 300, 10, 10, true, "<", () => {
  setCurrentScreen("getJob");
});

let hasChildPicture = new Pictures(-200, 0, 100, 400, () => {
  player.hasChild = true;

  pushHasChildQuestions();

  setCurrentScreen("getApartment");
});

let noChildPicture = new Pictures(200, 0, 100, 400, () => {
  player.hasChild = false;

  setCurrentScreen("getApartment");
});

let childPicture = new Pictures(-120, 100, 90, 400, () => {
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

  childPicture.mouseOver(childStroke);
  childPicture.display(child);

  if (player.sex === "f" && player.job.title === "Kellner*in") {
    hasChildPicture.mouseOver(femaleStroke);
    noChildPicture.mouseOver(femaleStroke);
    hasChildPicture.display(femaleWaiter);
    noChildPicture.display(femaleWaiter);
  } else if (player.sex === "m" && player.job.title === "Kellner*in") {
    hasChildPicture.mouseOver(maleStroke);
    noChildPicture.mouseOver(maleStroke);
    hasChildPicture.display(maleWaiter);
    noChildPicture.display(maleWaiter);
  } else if (player.sex === "d" && player.job.title === "Kellner*in") {
    hasChildPicture.mouseOver(diverseStroke);
    noChildPicture.mouseOver(diverseStroke);
    hasChildPicture.display(diverseWaiter);
    noChildPicture.display(diverseWaiter);
  } else if (player.sex === "f" && player.job.title === "Steuerberater*in") {
    hasChildPicture.mouseOver(femaleStroke);
    noChildPicture.mouseOver(femaleStroke);
    hasChildPicture.display(femaleConsultant);
    noChildPicture.display(femaleConsultant);
  } else if (player.sex === "m" && player.job.title === "Steuerberater*in") {
    hasChildPicture.mouseOver(maleStroke);
    noChildPicture.mouseOver(maleStroke);
    hasChildPicture.display(maleConsultant);
    noChildPicture.display(maleConsultant);
  } else if (player.sex === "d" && player.job.title === "Steuerberater*in") {
    hasChildPicture.mouseOver(diverseStroke);
    noChildPicture.mouseOver(diverseStroke);
    hasChildPicture.display(diverseConsultant);
    noChildPicture.display(diverseConsultant);
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
