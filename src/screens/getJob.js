import { Job } from "../model/job.js";
import { Apartment } from "../model/apartment.js";
import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";

let job = new Job("Kellner", 500);
let apartments = [
  new Apartment(100, "Auf dem Land", true),
  new Apartment(500, "Innenstadt", false),
];

let question = new Button(
  windowWidth / 2,
  windowHeight / 4,
  300,
  100,
  "Wähle dein Beruf:"
);

let waiter = new Button(
  windowWidth / 3,
  windowHeight / 1.2,
  320,
  100,
  "Servicekraft",
  () => {
    setCurrentScreen("getChild");
  }
);
let taxConsulant = new Button(
  windowWidth / 1.4,
  windowHeight / 1.2,
  320,
  100,
  "Steuerberater",
  () => {
    setCurrentScreen("getChild");
  }
);

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

export default { draw, mouseClicked, preload };
