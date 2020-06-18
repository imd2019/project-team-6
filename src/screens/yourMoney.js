import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import { player } from "../game.js";

let continueButton = new Button(0, -300, 300, 100, "continue", () => {
  setCurrentScreen("game");
});

function setPlayerMoney() {
  player.money = player.job.salary - player.apartment.cost;

  if (player.hasChild) {
    player.money += 204;
    player.job.salary += 60;
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
