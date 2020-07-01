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

let townImg = new Button(-200, -50, 290, 100, true, "", () => {
  player.apartment = new Apartment(530, 121, townTitle, true);

  pushHasCarQuestions();

  setCurrentScreen("yourMoney");
});

let cityTitle = "Innenstadt";
let city = new Button(200, 250, 130, 50, true, cityTitle, () => {
  player.apartment = new Apartment(1030, 121, cityTitle, false);

  setCurrentScreen("yourMoney");
});
let cityImg = new Button(200, -50, 290, 100, true, "", () => {
  player.apartment = new Apartment(1030, 121, cityTitle, false);

  setCurrentScreen("yourMoney");
});

let backBtn = new Button(0, 350, 120, 50, true, "zurück", () => {
  if (player.hasChild) {
    deleteHasChildQuestions();
  }

  setCurrentScreen("getChild");
});

function draw() {
  background("#1e1f3f");

  headline.display();
  city.display();
  town.display();

  backBtn.display();
  town.mouseOver();
  city.mouseOver();

  city.showPicture(cityPic, noPic);
  town.showPicture(townPic, noPic);

  cityImg.display();
  townImg.display();
}

function mouseClicked() {
  city.mouseClicked();
  town.mouseClicked();
  backBtn.mouseClicked();

  cityImg.mouseClicked();
  townImg.mouseClicked();

  drawPlayer();
}

export default {
  draw,
  mouseClicked,
};
