import { Job } from "../model/job.js";
import { Apartment } from "../model/apartment.js";
import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";

let jobs = [new Job("Steuerberater", 1000), new Job("Kellner", 500)];
let apartments = [
  new Apartment(100, "Auf dem Land", true),
  new Apartment(500, "Innenstadt", false),
];

let button = new Button(
  windowWidth / 2,
  windowHeight / 2,
  300,
  100,
  "customize",
  () => setCurrentScreen("game")
);

function draw() {
  background("black");
  button.display();
}

function mouseClicked() {
  button.mouseClicked();
}

export default { draw, mouseClicked };
