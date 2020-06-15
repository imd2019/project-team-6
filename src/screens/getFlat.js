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

let manConsulter;
let womanConsulter;
let diversConsulter;
let manWaiter;
let womanWaiter;
let diversWaiter;

let manConsulterChild;
let womanConsulterChild;
let diversConsulterChild;
let manWaiterChild;
let womanWaiterChild;
let diversWaiterChild;

function preload() {
  manConsulter = loadImage("../../assets/man.png");
  womanConsulter = loadImage("../../assets/woman.png");
  diversConsulter = loadImage("../../assets/divers.png");
  manWaiter = loadImage("../../assets/man.png");
  womanWaiter = loadImage("../../assets/woman.png");
  diversWaiter = loadImage("../../assets/divers.png");

  manConsulterChild = loadImage("../../assets/man.png");
  womanConsulterChild = loadImage("../../assets/woman.png");
  diversConsulterChild = loadImage("../../assets/divers.png");
  manWaiterChild = loadImage("../../assets/man.png");
  womanWaiterChild = loadImage("../../assets/woman.png");
  diversWaiterChild = loadImage("../../assets/divers.png");

  //selbe frage. drüber legen oder bedingungen mit allen bildern? Problem sag ich dir noch
}

function draw() {
  background("black");
  question.display();
  city.display();
  village.display();
  city.showPicture(manConsulter);
  village.showPicture(manWaiter);

  //erstmal nur für die Form
  // if(sex=w && job=K){
  //   child.showPicture(womanWaiterChild);
  //   noChild.showPicture(womanWaiter);
  // else if(sex=m && job=K){
  //   child.showPicture(manWaiterChild);
  //   noChild.showPicture(manWaiter);
  // else if(sex=d && job=K){
  //   child.showPicture(diversWaiterChild);
  //   noChild.showPicture(diversWaiter);

  //else if(sex=w && job=SB){
  //   child.showPicture(womanConsulterChild);
  //   noChild.showPicture(womanConsulter);
  // else if(sex=m && job=SB){
  //   child.showPicture(manConsulterChild);
  //   noChild.showPicture(manConsulter);
  // else if(sex=d && job=SB){
  //   child.showPicture(diversConsulterChild);
  //   noChild.showPicture(diversConsulter);
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
