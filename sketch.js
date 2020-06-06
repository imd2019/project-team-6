import drawStartScreen from "./src/screens/startScreen.js";
import drawEndScreen from "./src/screens/endScreen.js";
import drawGameScreen from "./src/screens/gameScreen.js";
import drawCustomizationScreen from "./src/screens/customizationScreen.js";

let currentScreen = "start";

window.preload = function () {};

window.draw = function () {
  if (currentScreen === "start") {
    drawStartScreen();
  } else if (currentScreen === "customization") {
    drawCustomizationScreen();
  } else if (currentScreen === "game") {
    drawGameScreen();
  } else if (currentScreen === "end") {
    drawEndScreen();
  }
};

window.mouseClicked = function () {};

export function setCurrentScreen(newScreen) {
  currentScreen = newScreen;
}
