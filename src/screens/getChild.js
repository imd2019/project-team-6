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

let male;
let female;
let diverse;

let maleChild;
let femaleChild;
let diverseChild;

function preload() {
  male = loadImage("../../assets/male.png");
  female = loadImage("../../assets/female.png");
  diverse = loadImage("../../assets/diverse.png");

  maleChild = loadImage("../../assets/male.png");
  femaleChild = loadImage("../../assets/female.png");
  diverseChild = loadImage("../../assets/female.png");

  //child=loadImage("../../assets/male.png"); ??
}

function draw() {
  background("black");
  question.display();
  child.display();
  noChild.display();
  child.showPicture(male);
  noChild.showPicture(male);

  //erstmal nur für die Form
  // if(sex=w ){
  //   child.showPicture(femaleChild);
  //   noChild.showPicture(female);
  // else if(sex=m ){
  //   child.showPicture(maleChild);
  //   noChild.showPicture(male);
  // else if(sex=d ){
  //   child.showPicture(diverseChild);
  //   noChild.showPicture(diverse);
}

function mouseClicked() {
  child.mouseClicked();
  noChild.mouseClicked();
}

export default { draw, mouseClicked, preload, hasChild, extraSalary };
