import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";

let jobTitel;
let jobSalary;

let question = new Button(0, -300, 300, 100, "Wähle dein Beruf:");

let waiter = new Button(-200, 250, 320, 100, "Servicekraft", () => {
  setCurrentScreen("getFlat");
  jobTitel = "Kellner";
  jobSalary = 1660;
});
let taxConsulant = new Button(200, 250, 320, 100, "Steuerberater", () => {
  setCurrentScreen("getFlat");
  jobTitel = "Steuerberater";
  jobSalary = 1660;
});

let manConsulter;
let womanConsulter;
let diversConsulter;
let manWaiter;
let womanWaiter;
let diversWaiter;

function preload() {
  manConsulter = loadImage("../../assets/man.png");
  womanConsulter = loadImage("../../assets/woman.png");
  diversConsulter = loadImage("../../assets/divers.png");
  manWaiter = loadImage("../../assets/man.png");
  womanWaiter = loadImage("../../assets/woman.png");
  diversWaiter = loadImage("../../assets/divers.png");
}

function draw() {
  background("black");
  question.display();
  waiter.display();
  taxConsulant.display();
  taxConsulant.showPicture(manConsulter);
  waiter.showPicture(manWaiter);

  //erstmal nur für die Form
  // if(sex=w){
  //   taxConsulant.showPicture(womanConsulter);
  //   waiter.showPicture(womanWaiter);
  // }
  // else if(sex=m){
  //   taxConsulant.showPicture(manConsulter);
  //   waiter.showPicture(manWaiter);
  // }else if(sex=d){
  //   taxConsulant.showPicture(diversConsulter);
  //   waiter.showPicture(diversWaiter);
  // }
}

function mouseClicked() {
  waiter.mouseClicked();
  taxConsulant.mouseClicked();
}

export default { draw, mouseClicked, preload, jobTitel, jobSalary };
