import startScreen from "./src/screens/startScreen.js";
import endScreen from "./src/screens/endScreen.js";
import gameScreen from "./src/screens/gameScreen.js";
import customizationScreen from "./src/screens/customizationScreen.js";
import getGender from "./src/screens/getGender.js";
import getJob from "./src/screens/getJob.js";
import getChild from "./src/screens/getChild.js";
import getApartment from "./src/screens/getApartment.js";
import yourMoney from "./src/screens/yourMoney.js";
import { Button } from "./src/model/button.js";
import resultScreen from "./src/screens/resultScreen.js";

let currentScreen = "start";

let exitBtn = new Button(620, -350, 30, 10, true, "Exit", () =>
  window.location.reload()
);

window.preload = function () {
  customizationScreen.preload();
  startScreen.preload();
};

function getScreen(screenName) {
  if (screenName === "start") {
    return startScreen;
  } else if (screenName === "customization") {
    return customizationScreen;
  } else if (screenName === "getGender") {
    return getGender;
  } else if (screenName === "getJob") {
    return getJob;
  } else if (screenName === "getChild") {
    return getChild;
  } else if (screenName === "getApartment") {
    return getApartment;
  } else if (screenName === "yourMoney") {
    return yourMoney;
  } else if (screenName === "game") {
    return gameScreen;
  } else if (screenName === "result") {
    return resultScreen;
  } else if (screenName === "end") {
    return endScreen;
  }
}

window.draw = function () {
  getScreen(currentScreen).draw();

  if (
    currentScreen === "getGender" ||
    currentScreen === "getJob" ||
    currentScreen === "getChild" ||
    currentScreen === "getApartment" ||
    currentScreen === "getMoney" ||
    currentScreen === "game" ||
    currentScreen === "end"
  ) {
    exitBtn.display();
  }
};

window.mouseClicked = function () {
  getScreen(currentScreen).mouseClicked();
  exitBtn.mouseClicked();
};

export function setCurrentScreen(newScreen) {
  currentScreen = newScreen;
}
