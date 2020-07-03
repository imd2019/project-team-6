import gameScreen from "./gameScreen.js";
import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import { closedVindu } from "./customizationScreen.js";

let opened = false;

let button = new Button(50, 240, 100, 20, true, "open vindu", () => {
  setTimeout(() => setCurrentScreen("customization"), 1000 * 3);
  openVinduVid.play();
  openVinduVid.show();
  opened = true;
  document.body.requestFullscreen();
  gameScreen.onStart();
});

let loop = false;

function draw() {
  clear();

  if (!loop) {
    loop = true;
    bgMusic.loop();
  }

  if (opened) {
    openVinduVid.size(windowWidth, windowHeight);
  } else {
    background("#1e1f3f");
    imageMode(CENTER);
    image(closedVindu, windowWidth / 2, windowHeight / 2);
    button.display();
    button.mouseOver();
  }
}

function mouseClicked() {
  button.mouseClicked();
}
let openVinduVid;
let bgMusic;
function preload() {
  openVinduVid = createVideo("../../assets/window_opening.mp4", () =>
    openVinduVid.pause()
  );

  openVinduVid.position(0, 0);
  openVinduVid.hide();
  bgMusic = loadSound("../../assets/sounds/bg1.mp3");
}

export default { draw, mouseClicked, preload };
