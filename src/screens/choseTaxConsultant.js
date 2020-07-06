import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import { mainFont } from "./customizationScreen.js";

let frames = [];
let currentFrame = 0;

function preload() {
  frames = [
    new Frame("./assets/sb/1.png", "In die Bar gehen.", 500, 500, nextFrame),
    new Frame(
      "./assets/sb/2.png",
      "An die Theke gehen und einen Drink bestellen.",
      500,
      500,
      nextFrame
    ),
    new Frame(
      "./assets/sb/3.png",
      "Du: Hey. Einen Whiskey bitte.",
      500,
      500,
      nextFrame,
      false
    ),
    new Frame(
      "./assets/sb/4.png",
      "Du: Ich weiß gar nicht, warum sich alle wegen den \n Corona-Maßnahmen aufregen.",
      500,
      500,
      nextFrame,
      false
    ),
    new Frame(
      "./assets/sb/5.png",
      "Du: Bei uns läuft es im Büro im Home-Office ziemlich gut.\n Jetzt kann man doch die freie Zeit genießen.",
      500,
      500,
      nextFrame,
      false
    ),
    new Frame(
      "./assets/sb/6.png",
      "Kellner: So einfach ist das nicht. Bei mir geht das mit dem \n Home-Office nicht. Und insgesamt ist es für mich gerade sehr schwer.",
      500,
      500,
      nextFrame,
      false
    ),
    new Frame(
      "./assets/sb/7.png",
      "Kellner: Versetzen Sie sich doch mal in meine Lage.",
      500,
      500,
      nextFrame,
      false
    ),
  ];
}

function draw() {
  frames[currentFrame].display();
}

function mouseClicked() {
  frames[currentFrame].mouseClicked();
}

function nextFrame() {
  if (currentFrame < frames.length - 1) {
    currentFrame++;
  } else {
    setCurrentScreen("game");
  }
}

export default { draw, mouseClicked, preload };

class Frame {
  constructor(img, text, x, y, onButtonClick, isButton = true) {
    this.img = loadImage(img);
    this.text = text;
    this.isButton = isButton;
    this.x = x;
    this.y = y;
    this.boxWidth = 600;

    if (this.isButton) {
      this.btn = new Button(0, 200, 40, 20, true, this.text, onButtonClick);
    } else {
      this.btn = new Button(0, 200, 40, 20, true, "Weiter", onButtonClick);
    }
  }

  display() {
    push();
    image(this.img, 0, 0, windowWidth, windowHeight);
    strokeWeight(3);
    stroke(255);
    fill(19, 19, 37, 220);
    rectMode(CENTER);
    rect(this.x, this.y, this.boxWidth, 220, 50);

    if (!this.isButton) {
      noStroke();
      fill("white");
      textSize(16);
      textFont(mainFont);
      textAlign(CENTER);
      text(this.text, this.x, this.y - 40, this.boxWidth - 50, 200);
    }
    this.btn.display();

    pop();
  }

  mouseClicked() {
    this.btn.mouseClicked();
  }
}
