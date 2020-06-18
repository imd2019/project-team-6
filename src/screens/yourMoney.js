import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import { player } from "../game.js";

let continueButton = new Button(0, -300, 0, 0, false, "Deine Finanzen", () => {
  setCurrentScreen("game");
});

let childBenefit = 204;
let taxBenefit = 60;

function setPlayerMoney() {
  player.money = player.job.salary - player.apartment.cost;

  if (player.hasChild) {
    player.money += childBenefit + taxBenefit;
  }
}

function draw() {
  clear();
  setPlayerMoney();
  //nur zum Test:
  text(player.money, windowWidth / 2, windowHeight / 2);
  continueButton.display();
}

function mouseClicked() {
  continueButton.mouseClicked();
}

export default {
  draw,
  mouseClicked,
};
