import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";

let flatCost;
let flatDescription;
let needsCar;

let question = new Button(0, -300, 300, 100, "Wähle deine Wohnung:");

let village = new Button(-200, 250, 320, 100, "Außerhalb", () => {
  setCurrentScreen("game");
  flatCost = 530;
  flatDescription = "Außerorts";
  needsCar = true;
});
let city = new Button(200, 250, 320, 100, "Innenstadt", () => {
  setCurrentScreen("game");
  flatCost = 1030;
  flatDescription = "Innenstadt";
  needsCar = false;
});

let maleConsulter;
let femaleConsulter;
let diverseConsulter;
let maleWaiter;
let femaleWaiter;
let diverseWaiter;

let maleConsulterChild;
let femaleConsulterChild;
let diverseConsulterChild;
let maleWaiterChild;
let femaleWaiterChild;
let diverseWaiterChild;

function preload() {
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

  //selbe frage. drüber legen oder bedingungen mit allen bildern? Problem sag ich dir noch
}

function draw() {
  background("black");
  question.display();
  city.display();
  village.display();
  city.showPicture(maleConsulter);
  village.showPicture(maleWaiter);

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

function mouseClicked() {
  city.mouseClicked();
  village.mouseClicked();
}

export default {
  draw,
  mouseClicked,
  preload,
  flatCost,
  flatDescription,
  needsCar,
};
