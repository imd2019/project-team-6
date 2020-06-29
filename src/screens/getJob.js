import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import {
  maleConsultant,
  maleWaiter,
  femaleWaiter,
  femaleConsultant,
  diverseWaiter,
  diverseConsultant,
  noPic,
} from "./customizationScreen.js";
import { player } from "../game.js";
import { Job } from "../model/job.js";

let headline = new Button(0, -300, 0, 0, true, "Wähle dein Beruf:");

let waiterTitle = "Kellner";
let waiter = new Button(-200, 250, 120, 50, true, waiterTitle, () => {
  player.job = new Job(waiterTitle, 1660);

  setCurrentScreen("getChild");
});

let backward = new Button(0, 300, 60, 20, false, "zurück", () => {
  setCurrentScreen("getGender");
});

let taxConsultantTitle = "Steuerberater";
let taxConsultant = new Button(
  200,
  250,
  170,
  50,
  true,
  taxConsultantTitle,
  () => {
    player.job = new Job(taxConsultantTitle, 3240);

    setCurrentScreen("getChild");
  }
);

let backBtn = new Button(0, 400, 120, 50, true, "back", () => {
  setCurrentScreen("getGender");
});

function draw() {
  background("#1e1f3f");

  backward.display();
  headline.display();
  waiter.display();
  taxConsultant.display();
  backBtn.display();

  if (player.sex === "f") {
    taxConsultant.showPicture(femaleConsultant, noPic);
    waiter.showPicture(femaleWaiter, noPic);
  } else if ((player.sex = "m")) {
    taxConsultant.showPicture(maleConsultant, noPic);
    waiter.showPicture(maleWaiter, noPic);
  } else if ((player.sex = "d")) {
    taxConsultant.showPicture(diverseConsultant, noPic);
    waiter.showPicture(diverseWaiter, noPic);
  }
}

function mouseClicked() {
  waiter.mouseClicked();
  taxConsultant.mouseClicked();
  backBtn.mouseClicked();
}

export default { draw, mouseClicked };
