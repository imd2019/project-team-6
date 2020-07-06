import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import {
  maleConsultant,
  maleWaiter,
  femaleWaiter,
  femaleConsultant,
  diverseWaiter,
  diverseConsultant,
  maleWaiterStroke,
  femaleWaiterStroke,
  diverseWaiterStroke,
  maleConsultantStroke,
  femaleConsultantStroke,
  diverseConsultantStroke,
} from "./customizationScreen.js";
import { player, deleteCoronaQuestions } from "../game.js";
import { Job } from "../model/job.js";
import { Pictures } from "../model/imagePosition.js";

let headline = new Button(80, -320, 160, 20, true, "Wähle dein Beruf:");

let waiterTitle = "Kellner*in";
let waiter = new Button(-155, 250, 90, 20, true, waiterTitle, () => {
  player.job = new Job(waiterTitle, 1660);

  setCurrentScreen("getChild");
});

let taxConsultantTitle = "Steuerberater*in";
let taxConsultant = new Button(
  270,
  250,
  140,
  20,
  true,
  taxConsultantTitle,
  () => {
    player.job = new Job(taxConsultantTitle, 3240);

    setCurrentScreen("getChild");
  }
);

let backBtn = new Button(0, 300, 10, 10, true, "<", () => {
  setCurrentScreen("getGender");
  deleteCoronaQuestions();
});

let taxConsulantPicture = new Pictures(200, 0, 120, 400, () => {
  player.job = new Job(taxConsultantTitle, 3240);

  setCurrentScreen("getChild");
});
let waiterPicture = new Pictures(-200, 0, 120, 400, () => {
  player.job = new Job(waiterTitle, 1660);

  setCurrentScreen("getChild");
});

function draw() {
  background("#1e1f3f");
  if (player.sex === "f") {
    taxConsulantPicture.mouseOver(femaleConsultantStroke);
    waiterPicture.mouseOver(femaleWaiterStroke);
    taxConsulantPicture.display(femaleConsultant);
    waiterPicture.display(femaleWaiter);
  } else if (player.sex === "d") {
    taxConsulantPicture.mouseOver(diverseConsultantStroke);
    waiterPicture.mouseOver(diverseWaiterStroke);
    taxConsulantPicture.display(diverseConsultant);
    waiterPicture.display(diverseWaiter);
  } else if (player.sex === "m") {
    taxConsulantPicture.mouseOver(maleConsultantStroke);
    waiterPicture.mouseOver(maleWaiterStroke);
    taxConsulantPicture.display(maleConsultant);
    waiterPicture.display(maleWaiter);
  }
  headline.display();
  waiter.display();
  taxConsultant.display();
  waiter.mouseOver();
  taxConsultant.mouseOver();

  backBtn.display();
}

function mouseClicked() {
  waiter.mouseClicked();
  taxConsultant.mouseClicked();
  backBtn.mouseClicked();
  taxConsulantPicture.mouseClicked();
  waiterPicture.mouseClicked();
}

export default { draw, mouseClicked };
