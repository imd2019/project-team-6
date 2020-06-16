import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import { maleConsulter, maleWaiter } from "./customizationScreen.js";

let jobTitle;
let jobSalary;

let question = new Button(0, -300, 300, 100, "Wähle dein Beruf:");

let waiter = new Button(-200, 250, 320, 100, "Servicekraft", () => {
  setCurrentScreen("getFlat");
  jobTitle = "Kellner";
  jobSalary = 1660;
});
let taxConsultant = new Button(200, 250, 320, 100, taxConsultantTitle, () => {
  setCurrentScreen("getFlat");
  jobTitle = "Steuerberater";
  jobSalary = 1660;
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
  //   taxConsulant.showPicture(femaleConsulter);
  //   waiter.showPicture(femaleWaiter);
  // }
  // else if(sex=m){
  //   taxConsulant.showPicture(maleConsulter);
  //   waiter.showPicture(maleWaiter);
  // }else if(sex=d){
  //   taxConsulant.showPicture(diverseConsulter);
  //   waiter.showPicture(diverseWaiter);
  // }
}

function mouseClicked() {
  waiter.mouseClicked();
  taxConsultant.mouseClicked();
}

export default { draw, mouseClicked, jobTitle, jobSalary };
