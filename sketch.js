import startScreen from "./src/screens/startScreen.js";
import endScreen from "./src/screens/endScreen.js";
import gameScreen from "./src/screens/gameScreen.js";
import customizationScreen from "./src/screens/customizationScreen.js";
import getSex from "./src/screens/getSex.js";
import getJob from "./src/screens/getJob.js";
import getChild from "./src/screens/getChild.js";
import getFlat from "./src/screens/getApartment.js";

let currentScreen = "start";

window.preload = function () {
  customizationScreen.preload();
};

function getScreen(screenName) {
  if (screenName === "start") {
    return startScreen;
  } else if (screenName === "customization") {
    return customizationScreen;
  } else if (screenName === "getSex") {
    return getSex;
  } else if (screenName === "getJob") {
    return getJob;
  } else if (screenName === "getChild") {
    return getChild;
  } else if (screenName === "getFlat") {
    return getFlat;
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
