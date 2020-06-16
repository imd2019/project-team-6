import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import {
  maleConsultant,
  maleWaiter,
  drawPlayer,
} from "./customizationScreen.js";
import { player } from "../game.js";
import { Apartment } from "../model/apartment.js";

let question = new Button(0, -300, 300, 100, "Wähle deine Wohnung:");

let townTitle = "Außerhalb der Stadt";
let town = new Button(-200, 250, 320, 100, townTitle, () => {
  player.apartment = new Apartment(530, townTitle, true);

  setCurrentScreen("yourMoney");
});

let cityTitle = "Innenstadt";
let city = new Button(200, 250, 320, 100, cityTitle, () => {
  player.apartment = new Apartment(1030, cityTitle, false);

  setCurrentScreen("yourMoney");
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
