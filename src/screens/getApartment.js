import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import { cityPic, townPic, drawPlayer, noPic } from "./customizationScreen.js";
import { player } from "../game.js";
import { Apartment } from "../model/apartment.js";

let headline = new Button(0, -300, 0, 0, true, "Wähle deine Wohnung:");

let townTitle = "Vorstadt";
let town = new Button(-200, 250, 120, 50, true, townTitle, () => {
  player.apartment = new Apartment(530, 121, townTitle, true);

  setCurrentScreen("yourMoney");
});

let cityTitle = "Innenstadt";
let city = new Button(200, 250, 130, 50, true, cityTitle, () => {
  player.apartment = new Apartment(1030, 121, cityTitle, false);

  setCurrentScreen("yourMoney");
});

function draw() {
  background("#1e1f3f");

  headline.display();
  city.display();
  town.display();

  city.showPicture(cityPic, noPic);
  town.showPicture(townPic, noPic);
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
