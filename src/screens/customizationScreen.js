import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import { player } from "../game.js";

export let male;
export let female;
export let diverse;

export let maleChild;
export let femaleChild;
export let diverseChild;

export let maleConsultant;
export let femaleConsultant;
export let diverseConsultant;

export let maleWaiter;
export let femaleWaiter;
export let diverseWaiter;

let button = new Button(0, 0, 300, 100, "customize", () =>
  setCurrentScreen("getGender")
);

function draw() {
  background("black");
  button.display();
}

function mouseClicked() {
  button.mouseClicked();
}

function preload() {
  // male = loadImage("../../assets/male.png");
  // female = loadImage("../../assets/female.png");
  // diverse = loadImage("../../assets/diverse.png");

  // maleChild = loadImage("../../assets/male.png");
  // femaleChild = loadImage("../../assets/female.png");
  // diverseChild = loadImage("../../assets/female.png");

  maleConsultant = loadImage("../../assets/maleConsultant.png");
  femaleConsultant = loadImage("../../assets/femaleConsultant.png");
  diverseConsultant = loadImage("../../assets/diverse.png");
  maleWaiter = loadImage("../../assets/male.png");
  femaleWaiter = loadImage("../../assets/femaleWaiter.png");
  diverseWaiter = loadImage("../../assets/diverseWaiter.png");
}

export function drawPlayer() {
  // TODO: Implement
  //erstmal nur für die Form
  // if(sex=w && job=K){
  //   child.showPicture(femaleWaiterChild);
  //   noChild.showPicture(femaleWaiter);
  // else if(sex=m && job=K){
  //   child.showPicture(maleWaiterChild);
  //   noChild.showPicture(maleWaiter);
  // else if(sex=d && job=K){
  //   child.showPicture(diverseWaiterChild);
  //   noChild.showPicture(diverseWaiter);
  //else if(sex=w && job=SB){
  //   child.showPicture(femaleConsultantChild);
  //   noChild.showPicture(femaleConsultant);
  // else if(sex=m && job=SB){
  //   child.showPicture(maleConsultantChild);
  //   noChild.showPicture(maleConsultant);
  // else if(sex=d && job=SB){
  //   child.showPicture(diverseConsultantChild);
  //   noChild.showPicture(diverseConsultant);
}

export default { draw, mouseClicked, preload };
