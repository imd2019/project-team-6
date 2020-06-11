import { Job } from "../model/job.js";
import { Apartment } from "../model/apartment.js";
import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";

let job = new Job("Kellner", 500);
let apartments = [
  new Apartment(100, "Auf dem Land", true),
  new Apartment(500, "Innenstadt", false),
];

let question = new Button(0, -300, 300, 100, "Wähle dein Geschlecht:");

let man = new Button(-250, 250, 300, 100, "Männlich", () => {
  setCurrentScreen("getJob");
});
let woman = new Button(0, 250, 300, 100, "Weiblich", () => {
  setCurrentScreen("getJob");
});
let divers = new Button(250, 250, 300, 100, "Divers", () => {
  setCurrentScreen("getJob");
});

let manPic;
let womanPic;
let diversPic;

function preload() {
  manPic = loadImage("../../assets/man.png");
  womanPic = loadImage("../../assets/woman.png");
  diversPic = loadImage("../../assets/divers.png");
}

function draw() {
  background("black");
  question.display();
  man.display();
  woman.display();
  divers.display();
  woman.showPicture(womanPic);
  man.showPicture(manPic);
  divers.showPicture(diversPic);
}

function mouseClicked() {
  man.mouseClicked();
  woman.mouseClicked();
  divers.mouseClicked();
}

export default { draw, mouseClicked, preload };
