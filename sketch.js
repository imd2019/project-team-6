import startScreen from "./src/screens/startScreen.js";
import endScreen from "./src/screens/endScreen.js";
import gameScreen from "./src/screens/gameScreen.js";
import customizationScreen from "./src/screens/customizationScreen.js";
import getGender from "./src/screens/getGender.js";
import getJob from "./src/screens/getJob.js";
import getChild from "./src/screens/getChild.js";
import getApartment from "./src/screens/getApartment.js";
import yourMoney from "./src/screens/yourMoney.js";

let currentScreen = "start";

window.preload = function () {
  customizationScreen.preload();
  startScreen.preload();
};

window.setup = function () {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("vindu");
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
