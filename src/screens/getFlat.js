import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import {
  maleConsulter,
  maleWaiter,
  drawPlayer,
} from "./customizationScreen.js";

export let apartmentData = {
  flatCost: null,
  flatDescription: null,
  needsCar: null,
};

let question = new Button(0, -300, 300, 100, "Wähle deine Wohnung:");

let village = new Button(-200, 250, 320, 100, "Außerhalb", () => {
  apartmentData.flatCost = 530;
  apartmentData.flatDescription = "Außerorts";
  apartmentData.needsCar = true;

  setCurrentScreen("game");
});
let city = new Button(200, 250, 320, 100, "Innenstadt", () => {
  apartmentData.flatCost = 1030;
  apartmentData.flatDescription = "Innenstadt";
  apartmentData.needsCar = false;

  setCurrentScreen("game");
});

function draw() {
  background("black");
  question.display();
  city.display();
  village.display();
  city.showPicture(maleConsulter);
  village.showPicture(maleWaiter);
}

function mouseClicked() {
  city.mouseClicked();
  village.mouseClicked();

  drawPlayer();
}

export default {
  draw,
  mouseClicked,
};
