import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";

let sex;
let question = new Button(0, -300, 300, 100, "Wähle dein Geschlecht:");

let male = new Button(-250, 250, 300, 100, "Männlich", () => {
  setCurrentScreen("getChild");
  sex = "m";
});
let female = new Button(0, 250, 300, 100, "Weiblich", () => {
  setCurrentScreen("getChild");
  sex = "w";
});
let diverse = new Button(250, 250, 300, 100, "diverse", () => {
  setCurrentScreen("getChild");
  sex = "d";
});

let malePic;
let femalePic;
let diversePic;

function preload() {
  malePic = loadImage("../../assets/male.png");
  femalePic = loadImage("../../assets/female.png");
  diversePic = loadImage("../../assets/diverse.png");
}

function draw() {
  background("black");
  question.display();
  male.display();
  female.display();
  diverse.display();
  female.showPicture(femalePic);
  male.showPicture(malePic);
  diverse.showPicture(diversePic);
}

function mouseClicked() {
  male.mouseClicked();
  female.mouseClicked();
  diverse.mouseClicked();
}

export default { draw, mouseClicked, preload, sex };
