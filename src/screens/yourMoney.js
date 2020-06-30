import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import { player, pushRandomQuestions, deleteHasCarQuestions } from "../game.js";
import { moneyLarge } from "./customizationScreen.js";
import { icons } from "./gameScreen.js";

let finance = new Button(0, -300, 0, 0, true, "Deine Finanzen");

let startBtn = new Button(0, 200, 150, 80, true, "Start", () => {
  pushRandomQuestions();

  icons.animate(100, 100, player.money);

  setCurrentScreen("game");
});

let childBenefit = 204;
let taxBenefit = 60;

let backBtn = new Button(0, 400, 120, 50, true, "zurück", () => {
  if (player.apartment.needsCar) {
    deleteHasCarQuestions();
  }

  setCurrentScreen("getApartment");
});

function setPlayerMoney() {
  player.money =
    player.job.salary -
    player.apartment.rent -
    player.apartment.additionalCosts;

  if (player.hasChild) {
    player.money += childBenefit + taxBenefit;
  }
}

function draw() {
  background("#1e1f3f");
  fill(245, 189, 197, 180);
  rect(windowWidth / 2 + 30, windowHeight / 2, 500, 227, 35);
  imageMode(CENTER);
  image(moneyLarge, windowWidth / 2 - 200, windowHeight / 2);
  setPlayerMoney();

  fill("black");
  textAlign(RIGHT);
  textSize(20);
  text("Dein Nettogehalt: ", windowWidth / 2 + 105, windowHeight / 2 - 60);
  text("Warmmiete: ", windowWidth / 2 + 105, windowHeight / 2 - 30);
  text("Zus. Nebenkosten: ", windowWidth / 2 + 105, windowHeight / 2);
  if (player.hasChild === false) {
    text("Dein Kontostand: ", windowWidth / 2 + 105, windowHeight / 2 + 35);
  }
  if (player.hasChild === true) {
    text("Kindergeld: ", windowWidth / 2 + 105, windowHeight / 2 + 30);
    text("Dein Kontostand: ", windowWidth / 2 + 105, windowHeight / 2 + 65);
  }

  text(
    "+" + player.job.salary + "€",
    windowWidth / 2 + 175,
    windowHeight / 2 - 60
  );
  text(
    "-" + player.apartment.rent + "€",
    windowWidth / 2 + 175,
    windowHeight / 2 - 30
  );
  text(
    "-" + player.apartment.additionalCosts + "€",
    windowWidth / 2 + 175,
    windowHeight / 2
  );

  if (player.hasChild === true) {
    text(
      "+" + childBenefit + "€",
      windowWidth / 2 + 175,
      windowHeight / 2 + 30
    );
    text(player.money + "€", windowWidth / 2 + 175, windowHeight / 2 + 65);
    strokeWeight(2);
    stroke("black");
    line(
      windowWidth / 2 - 75,
      windowHeight / 2 + 40,
      windowWidth / 2 + 180,
      windowHeight / 2 + 40
    );
  }
  if (player.hasChild === false) {
    text(player.money + "€", windowWidth / 2 + 175, windowHeight / 2 + 35);
    strokeWeight(2);
    stroke("black");
    line(
      windowWidth / 2 - 75,
      windowHeight / 2 + 10,
      windowWidth / 2 + 180,
      windowHeight / 2 + 10
    );
  }

  finance.display();
  startBtn.display();
  backBtn.display();
}

function mouseClicked() {
  startBtn.mouseClicked();
  backBtn.mouseClicked();
}

export default {
  draw,
  mouseClicked,
};
