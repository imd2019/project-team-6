import gameScreen from "./gameScreen.js";
import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import { closedVindu } from "./customizationScreen.js";
import { Pictures } from "../model/imagePosition.js";

let opened = false;

let button = new Button(50, 240, 110, 20, true, "open vindu", () => {
  setTimeout(() => setCurrentScreen("customization"), 1000 * 5);
  openVinduVid.play();
  openVinduVid.speed(2);
  openVinduVid.show();
  opened = true;
  document.body.requestFullscreen();
  gameScreen.onStart();
  bgMusic.loop();
  customizationClickSound.play();
});

let closedVinduImg = new Pictures(0, 0, 400, 500, () => {
  setTimeout(() => setCurrentScreen("customization"), 1000 * 5);
  openVinduVid.play();
  openVinduVid.speed(2);
  openVinduVid.show();
  opened = true;
  document.body.requestFullscreen();
  gameScreen.onStart();
  bgMusic.loop();
  customizationClickSound.play();
});

let loop = false;

export function draw() {
  clear();

  if (opened) {
    openVinduVid.size(windowWidth, windowHeight);
  } else {
    background("#1e1f3f");
    closedVinduImg.display(closedVindu);
    button.display();
    button.mouseOver();
  }
}

export function mouseClicked() {
  button.mouseClicked();
  closedVinduImg.mouseClicked();
}

let openVinduVid;
let bgMusic;
export let startClickSound;
export let notificationSound;
export let customizationClickSound;
export let choiceClickSound;
export let moneySound;

function preload() {
  openVinduVid = createVideo("./assets/ui/vindu.mp4", () =>
    openVinduVid.pause()
  );

  openVinduVid.position(0, 0);
  openVinduVid.hide();
  bgMusic = loadSound("assets/sounds/bg1.mp3");
  bgMusic.setVolume(0.8);

  startClickSound = loadSound("assets/sounds/start_click.mp3");
  notificationSound = loadSound("assets/sounds/notification.mp3");
  customizationClickSound = loadSound("assets/sounds/cust_click.mp3");
  choiceClickSound = loadSound("assets/sounds/choice_click.mp3");
  moneySound = loadSound("assets/sounds/moneySound.mp3");
}

export default { draw, mouseClicked, preload };
