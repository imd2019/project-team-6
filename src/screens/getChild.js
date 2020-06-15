import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";

let hasChild;
let extraSalary;

let question = new Button(0, -300, 300, 100, "Wähle deinen Familienstand:");

let child = new Button(-200, 250, 320, 100, "Alleine", () => {
  setCurrentScreen("getJob");
  hasChild = false;
  extraSalary = 0;
});
let noChild = new Button(200, 250, 320, 100, "Mit Kind", () => {
  setCurrentScreen("getJob");
  hasChild = true;
  extraSalary = 264;
});

let man;
let woman;
let divers;

let manChild;
let womanChild;
let diversChild;

function preload() {
  man = loadImage("../../assets/man.png");
  woman = loadImage("../../assets/woman.png");
  divers = loadImage("../../assets/divers.png");

  manChild = loadImage("../../assets/man.png");
  womanChild = loadImage("../../assets/woman.png");
  diversChild = loadImage("../../assets/woman.png");

  //child=loadImage("../../assets/man.png"); ??
}

function draw() {
  background("black");
  question.display();
  child.display();
  noChild.display();
  child.showPicture(man);
  noChild.showPicture(man);

  //erstmal nur für die Form
  // if(sex=w ){
  //   child.showPicture(womanChild);
  //   noChild.showPicture(woman);
  // else if(sex=m ){
  //   child.showPicture(manChild);
  //   noChild.showPicture(man);
  // else if(sex=d ){
  //   child.showPicture(diversChild);
  //   noChild.showPicture(divers);
}

function mouseClicked() {
  child.mouseClicked();
  noChild.mouseClicked();
}

export default { draw, mouseClicked, preload, hasChild, extraSalary };
