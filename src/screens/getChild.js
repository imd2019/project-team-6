import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import {
  femaleWaiter,
  femaleConsultant,
  maleWaiter,
  maleConsultant,
  diverseWaiter,
  diverseConsultant,
  diverseConsultantStroke,
  maleConsultantStroke,
  femaleConsultantStroke,
  maleWaiterStroke,
  femaleWaiterStroke,
  diverseWaiterStroke,
  maleWaiterChild,
  femaleWaiterChild,
  diverseWaiterChild,
  maleConsultantChild,
  femaleConsultantChild,
  diverseConsultantChild,
  maleWaiterChildStroke,
  femaleWaiterChildStroke,
  diverseWaiterChildStroke,
  maleConsultantChildStroke,
  femaleConsultantChildStroke,
  diverseConsultantChildStroke,
} from "./customizationScreen.js";
import { player, pushHasChildQuestions } from "../game.js";
import { Pictures } from "../model/imagePosition.js";
import { customizationClickSound } from "./startScreen.js";

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
  customizationClickSound.play();
  setCurrentScreen("getApartment");
});

let noChild = new Button(235, 250, 70, 20, true, "Alleine", () => {
  player.hasChild = false;
  customizationClickSound.play();
  setCurrentScreen("getApartment");
});

let backBtn = new Button(0, 300, 10, 10, true, "<", () => {
  setCurrentScreen("getJob");
  customizationClickSound.play();
});

let hasChildPicture = new Pictures(-200, 0, 100, 400, () => {
  player.hasChild = true;

  pushHasChildQuestions();
  customizationClickSound.play();
  setCurrentScreen("getApartment");
});

let noChildPicture = new Pictures(200, 0, 100, 400, () => {
  player.hasChild = false;
  customizationClickSound.play();
  setCurrentScreen("getApartment");
});

let childPicture = new Pictures(-120, 150, 90, 400, () => {
  player.hasChild = true;
  customizationClickSound.play();
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

  if (player.sex === "f" && player.job.title === "Kellner*in") {
    hasChildPicture.mouseOver(femaleWaiterChildStroke);
    noChildPicture.mouseOver(femaleWaiterStroke);
    hasChildPicture.display(femaleWaiterChild);
    noChildPicture.display(femaleWaiter);
  } else if (player.sex === "m" && player.job.title === "Kellner*in") {
    hasChildPicture.mouseOver(maleWaiterChildStroke);
    noChildPicture.mouseOver(maleWaiterStroke);
    hasChildPicture.display(maleWaiterChild);
    noChildPicture.display(maleWaiter);
  } else if (player.sex === "d" && player.job.title === "Kellner*in") {
    hasChildPicture.mouseOver(diverseWaiterChildStroke);
    noChildPicture.mouseOver(diverseWaiterStroke);
    hasChildPicture.display(diverseWaiterChild);
    noChildPicture.display(diverseWaiter);
  } else if (player.sex === "f" && player.job.title === "Steuerberater*in") {
    hasChildPicture.mouseOver(femaleConsultantChildStroke);
    noChildPicture.mouseOver(femaleConsultantStroke);
    hasChildPicture.display(femaleConsultantChild);
    noChildPicture.display(femaleConsultant);
  } else if (player.sex === "m" && player.job.title === "Steuerberater*in") {
    hasChildPicture.mouseOver(maleConsultantChildStroke);
    noChildPicture.mouseOver(maleConsultantStroke);
    hasChildPicture.display(maleConsultantChild);
    noChildPicture.display(maleConsultant);
  } else if (player.sex === "d" && player.job.title === "Steuerberater*in") {
    hasChildPicture.mouseOver(diverseConsultantChildStroke);
    noChildPicture.mouseOver(diverseConsultantStroke);
    hasChildPicture.display(diverseConsultantChild);
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
