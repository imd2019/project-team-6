import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import {
  maleConsultant,
  maleWaiter,
  drawPlayer,
} from "./customizationScreen.js";
import { player } from "../game.js";

let question = new Button(0, -300, 300, 100, "Wähle deine Wohnung:");

let town = new Button(-200, 250, 320, 100, "Außerhalb", () => {
  player.apartment.flatCost = 530;
  player.apartment.flatDescription = "Außerorts";
  player.apartment.needsCar = true;

  setCurrentScreen("game");
});
let city = new Button(200, 250, 320, 100, "Innenstadt", () => {
  player.apartment.flatCost = 1030;
  player.apartment.flatDescription = "Innenstadt";
  player.apartment.needsCar = false;

  setCurrentScreen("game");
});

function draw() {
  background("black");

  question.display();
  city.display();
  town.display();

  city.showPicture(maleConsultant);
  town.showPicture(maleWaiter);
}

function mouseClicked() {
  city.mouseClicked();
  town.mouseClicked();

  drawPlayer();
}

export default {
  draw,
  mouseClicked,
};
