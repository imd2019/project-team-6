import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import {
  cityPic,
  townPic,
  townPicStroke,
  cityPicStroke,
} from "./customizationScreen.js";
import {
  player,
  pushHasCarQuestions,
  deleteHasChildQuestions,
} from "../game.js";
import { Apartment } from "../model/apartment.js";
import { Pictures } from "../model/imagePosition.js";
import { customizationClickSound } from "./startScreen.js";

let headline = new Button(100, -320, 200, 20, true, "Wähle deine Wohnung:");

let townTitle = "Vorstadt mit Auto";
let townBtn = new Button(-80, 125, 160, 20, true, townTitle, () => {
  player.apartment = new Apartment(530, 121, townTitle, true);

  pushHasCarQuestions();
  customizationClickSound.play();

  setCurrentScreen("yourMoney");
});

let townPicture = new Pictures(-200, 0, 310, 200, () => {
  player.apartment = new Apartment(530, 121, townTitle, true);

  pushHasCarQuestions();
  customizationClickSound.play();

  setCurrentScreen("yourMoney");
});

let cityTitle = "Innenstadt ohne Auto";
let cityBtn = new Button(285, 125, 180, 20, true, cityTitle, () => {
  player.apartment = new Apartment(1030, 121, cityTitle, false);
  customizationClickSound.play();

  setCurrentScreen("yourMoney");
});

let cityPicture = new Pictures(200, 0, 310, 200, () => {
  player.apartment = new Apartment(1030, 121, cityTitle, false);
  customizationClickSound.play();

  setCurrentScreen("yourMoney");
});

let backBtn = new Button(0, 300, 10, 10, true, "<", () => {
  if (player.hasChild) {
    customizationClickSound.play();
    deleteHasChildQuestions();
  }

  setCurrentScreen("getChild");
});

function draw() {
  background("#1e1f3f");

  headline.display();
  cityBtn.display();
  townBtn.display();

  backBtn.display();
  townBtn.mouseOver();
  cityBtn.mouseOver();

  townPicture.mouseOver(townPicStroke);
  townPicture.display(townPic);

  cityPicture.mouseOver(cityPicStroke);
  cityPicture.display(cityPic);
}

function mouseClicked() {
  cityBtn.mouseClicked();
  townBtn.mouseClicked();
  backBtn.mouseClicked();

  cityPicture.mouseClicked();
  townPicture.mouseClicked();
}

export default {
  draw,
  mouseClicked,
};
