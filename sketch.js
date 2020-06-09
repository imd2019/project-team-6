import startScreen from "./src/screens/startScreen.js";
import endScreen from "./src/screens/endScreen.js";
import gameScreen from "./src/screens/gameScreen.js";
import customizationScreen from "./src/screens/customizationScreen.js";

let currentScreen = "start";

window.preload = function () {};

function getScreen(screenName) {
  if (screenName === "start") {
    return startScreen;
  } else if (screenName === "customization") {
    return customizationScreen;
  } else if (screenName === "game") {
    return gameScreen;
  } else if (screenName === "end") {
    return endScreen;
  }
}

window.draw = function () {
  getScreen(currentScreen).draw();
};

window.mouseClicked = function () {
  getScreen(currentScreen).mouseClicked();
};

export function setCurrentScreen(newScreen) {
  currentScreen = newScreen;
}
