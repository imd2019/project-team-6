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
} from "./customizationScreen.js";
import { player, pushHasChildQuestions } from "../game.js";

let headline = new Button(0, -370, 0, 0, true, "Wähle deinen Familienstand:");

let hasChild = new Button(-200, 250, 120, 50, true, "Mit Kind", () => {
  player.hasChild = true;

  pushHasChildQuestions();

  setCurrentScreen("getApartment");
});

let noChild = new Button(200, 250, 120, 50, true, "Alleine", () => {
  player.hasChild = false;

  setCurrentScreen("getApartment");
});

let backBtn = new Button(0, 400, 120, 50, true, "<", () => {
  setCurrentScreen("getJob");
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
    hasChild.showPicture(femaleWaiter, child);
    noChild.showPicture(femaleWaiter, noPic);
  } else if (player.sex === "m" && player.job.title === "Kellner*in") {
    hasChild.showPicture(maleWaiter, child);
    noChild.showPicture(maleWaiter, noPic);
  } else if (player.sex === "d" && player.job.title === "Kellner*in") {
    hasChild.showPicture(diverseWaiter, child);
    noChild.showPicture(diverseWaiter, noPic);
  } else if (player.sex === "f" && player.job.title === "Steuerberater*in") {
    hasChild.showPicture(femaleConsultant, child);
    noChild.showPicture(femaleConsultant, noPic);
  } else if (player.sex === "m" && player.job.title === "Steuerberater*in") {
    hasChild.showPicture(maleConsultant, child);
    noChild.showPicture(maleConsultant, noPic);
  } else if (player.sex === "d" && player.job.title === "Steuerberater*in") {
    hasChild.showPicture(diverseConsultant, child);
    noChild.showPicture(diverseConsultant, noPic);
  }
}

function mouseClicked() {
  hasChild.mouseClicked();
  noChild.mouseClicked();
  backBtn.mouseClicked();
}

export default { draw, mouseClicked };
