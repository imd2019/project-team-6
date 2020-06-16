import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import { maleConsultant, maleWaiter } from "./customizationScreen.js";
import { player } from "../game.js";
import { Job } from "../model/job.js";

let question = new Button(0, -300, 300, 100, "Wähle dein Beruf:");

let waiterTitle = "Kellner";
let waiter = new Button(-200, 250, 320, 100, waiterTitle, () => {
  player.job = new Job(waiterTitle, 1660);

  setCurrentScreen("getApartment");
});
let taxConsultantTitle = "Steuerberater";
let taxConsultant = new Button(200, 250, 320, 100, taxConsultantTitle, () => {
  player.job = new Job(taxConsultantTitle, 1660);

  setCurrentScreen("getApartment");
});

function draw() {
  background("black");

  question.display();
  waiter.display();
  taxConsultant.display();

  taxConsultant.showPicture(maleConsultant);
  waiter.showPicture(maleWaiter);

  //erstmal nur für die Form
  // if(sex=w){
  //   taxConsultant.showPicture(femaleConsultant);
  //   waiter.showPicture(femaleWaiter);
  // }
  // else if(sex=m){
  //   taxConsultant.showPicture(maleConsultant);
  //   waiter.showPicture(maleWaiter);
  // }else if(sex=d){
  //   taxConsultant.showPicture(diverseConsultant);
  //   waiter.showPicture(diverseWaiter);
  // }
}

function mouseClicked() {
  waiter.mouseClicked();
  taxConsultant.mouseClicked();
}

export default { draw, mouseClicked };
