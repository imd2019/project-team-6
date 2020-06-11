import { Job } from "../model/job.js";
import { Apartment } from "../model/apartment.js";
import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";

let job = new Job("Kellner", 500);

let apartments = [
  new Apartment(100, "Auf dem Land", true),
  new Apartment(500, "Innenstadt", false),
];

let button = new Button(0, 0, 300, 100, "customize", () =>
  setCurrentScreen("game")
);

function draw() {
  background("black");
  button.display();
}

function mouseClicked() {
  button.mouseClicked();
}

export default { draw, mouseClicked };
