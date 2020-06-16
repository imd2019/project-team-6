import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";

export let male;
export let female;
export let diverse;
export let maleChild;
export let femaleChild;
export let diverseChild;
export let maleConsulter;
export let femaleConsulter;
export let diverseConsulter;
export let maleWaiter;
export let femaleWaiter;
export let diverseWaiter;
export let maleConsulterChild;
export let femaleConsulterChild;
export let diverseConsulterChild;
export let maleWaiterChild;
export let femaleWaiterChild;
export let diverseWaiterChild;

let button = new Button(0, 0, 300, 100, "customize", () =>
  setCurrentScreen("getSex")
);

function draw() {
  background("black");
  button.display();
}

function mouseClicked() {
  button.mouseClicked();
}

function preload() {
  male = loadImage("../../assets/male.png");
  female = loadImage("../../assets/female.png");
  diverse = loadImage("../../assets/diverse.png");

  maleChild = loadImage("../../assets/male.png");
  femaleChild = loadImage("../../assets/female.png");
  diverseChild = loadImage("../../assets/female.png");

  maleConsulter = loadImage("../../assets/male.png");
  femaleConsulter = loadImage("../../assets/female.png");
  diverseConsulter = loadImage("../../assets/diverse.png");
  maleWaiter = loadImage("../../assets/male.png");
  femaleWaiter = loadImage("../../assets/female.png");
  diverseWaiter = loadImage("../../assets/diverse.png");

  maleConsulterChild = loadImage("../../assets/male.png");
  femaleConsulterChild = loadImage("../../assets/female.png");
  diverseConsulterChild = loadImage("../../assets/diverse.png");
  maleWaiterChild = loadImage("../../assets/male.png");
  femaleWaiterChild = loadImage("../../assets/female.png");
  diverseWaiterChild = loadImage("../../assets/diverse.png");
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
  //   child.showPicture(femaleConsulterChild);
  //   noChild.showPicture(femaleConsulter);
  // else if(sex=m && job=SB){
  //   child.showPicture(maleConsulterChild);
  //   noChild.showPicture(maleConsulter);
  // else if(sex=d && job=SB){
  //   child.showPicture(diverseConsulterChild);
  //   noChild.showPicture(diverseConsulter);
}

export default { draw, mouseClicked, preload };
