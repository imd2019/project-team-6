import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import { cityPic, townPic, drawPlayer, noPic } from "./customizationScreen.js";
import {
  player,
  pushHasCarQuestions,
  deleteHasChildQuestions,
} from "../game.js";
import { Apartment } from "../model/apartment.js";

let headline = new Button(0, -300, 0, 0, true, "Wähle deine Wohnung:");

let townTitle = "Vorstadt";
let town = new Button(-200, 250, 120, 50, true, townTitle, () => {
  player.apartment = new Apartment(530, 121, townTitle, true);

  pushHasCarQuestions();

  setCurrentScreen("yourMoney");
});

let cityTitle = "Innenstadt";
let city = new Button(200, 250, 130, 50, true, cityTitle, () => {
  player.apartment = new Apartment(1030, 121, cityTitle, false);

  setCurrentScreen("yourMoney");
});

<<<<<<< HEAD
let backBtn = new Button(0, 400, 120, 50, true, "back", () => {
  if (player.hasChild) {
    deleteHasChildQuestions();
  }

=======
let backward = new Button(0, 300, 60, 20, false, "zurück", () => {
>>>>>>> b8b8f7938d3bc8ae6a6340cd7398b572b2718bef
  setCurrentScreen("getChild");
});

function draw() {
  background("#1e1f3f");

  headline.display();
  city.display();
  town.display();
<<<<<<< HEAD
  backBtn.display();
=======
  backward.display();
>>>>>>> b8b8f7938d3bc8ae6a6340cd7398b572b2718bef

  city.showPicture(cityPic, noPic);
  town.showPicture(townPic, noPic);
}

function mouseClicked() {
  city.mouseClicked();
  town.mouseClicked();
  backBtn.mouseClicked();

  drawPlayer();
}

export default {
  draw,
  mouseClicked,
};
