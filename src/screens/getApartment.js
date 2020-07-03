import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import { cityPic, townPic, drawPlayer, noPic } from "./customizationScreen.js";
import {
  player,
  pushHasCarQuestions,
  deleteHasChildQuestions,
} from "../game.js";
import { Apartment } from "../model/apartment.js";
import { Pictures } from "../model/imagePosition.js";

let headline = new Button(100, -320, 200, 20, true, "Wähle deine Wohnung:");

let townTitle = "Vorstadt";
let town = new Button(-160, 125, 80, 20, true, townTitle, () => {
  player.apartment = new Apartment(530, 121, townTitle, true);

  pushHasCarQuestions();

  setCurrentScreen("yourMoney");
});

let cityTitle = "Innenstadt";
let city = new Button(245, 125, 90, 20, true, cityTitle, () => {
  player.apartment = new Apartment(1030, 121, cityTitle, false);

  setCurrentScreen("yourMoney");
});

let backBtn = new Button(0, 300, 10, 10, true, "<", () => {
  if (player.hasChild) {
    deleteHasChildQuestions();
  }

  setCurrentScreen("getChild");
});

let townPicture = new Pictures(-200, 0, 100, 400, () => {
  player.apartment = new Apartment(530, 121, townTitle, true);

  pushHasCarQuestions();

  setCurrentScreen("yourMoney");
});

let cityPicture = new Pictures(200, 0, 150, 400, () => {
  player.apartment = new Apartment(1030, 121, cityTitle, false);

  setCurrentScreen("yourMoney");
});

function draw() {
  background("#1e1f3f");

  headline.display();
  city.display();
  town.display();

  backBtn.display();
  town.mouseOver();
  city.mouseOver();

  townPicture.mouseOver(townPic);
  townPicture.display(townPic);

  cityPicture.mouseOver(cityPic);
  cityPicture.display(cityPic);
}

function mouseClicked() {
  city.mouseClicked();
  town.mouseClicked();
  backBtn.mouseClicked();

  cityPicture.mouseClicked();
  townPicture.mouseClicked();

  drawPlayer();
}

export default {
  draw,
  mouseClicked,
};
