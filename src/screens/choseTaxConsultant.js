import { Button } from "../model/button.js";
import { setCurrentScreen } from "../../sketch.js";
import { mainFont } from "./customizationScreen.js";
import { customizationClickSound } from "./startScreen.js";

let frames = [];
let currentFrame = 0;

function preload() {
  frames = [
    new Frame(
      "./assets/sb/1.png",
      "In die Bar gehen.",
      320,
      250,
      320,
      100,
      nextFrame
    ),
    new Frame(
      "./assets/sb/2.png",
      "An die Theke gehen\nund einen Drink bestellen.",
      320,
      250,
      460,
      100,
      nextFrame
    ),
    new Frame(
      "./assets/sb/3.png",
      "\nDu: Hey. Einen Whiskey bitte.",
      -250,
      250,
      400,
      140,
      nextFrame,
      false
    ),
    new Frame(
      "./assets/sb/4.png",
      "Du: Ich weiß gar nicht, warum sich alle wegen den \n Corona-Maßnahmen aufregen.",
      -250,
      250,
      500,
      170,
      nextFrame,
      false
    ),
    new Frame(
      "./assets/sb/5.png",
      "Du: Bei uns läuft es im Büro im Home-Office ziemlich gut.\n Jetzt kann man doch die freie Zeit genießen.",
      -250,
      250,
      550,
      170,
      nextFrame,
      false
    ),
    new Frame(
      "./assets/sb/6.png",
      "Kellner: So einfach ist das nicht. Bei mir geht das mit dem \n Home-Office nicht. Und insgesamt ist es für mich gerade sehr schwer.",
      -250,
      250,
      660,
      180,
      nextFrame,
      false
    ),
    new Frame(
      "./assets/sb/7.png",
      "\nKellner: Versetzen Sie sich doch mal in meine Lage.",
      0,
      250,
      600,
      140,
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
    customizationClickSound.play();
  } else {
    setCurrentScreen("chooseWaiter");
    customizationClickSound.play();
  }
}

export default { draw, mouseClicked, preload };

class Frame {
  constructor(
    img,
    text,
    xOffset,
    yOffset,
    boxWidth,
    boxHeigth,
    onButtonClick,
    isButton = true
  ) {
    this.img = loadImage(img);
    this.text = text;
    this.isButton = isButton;
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.boxWidth = boxWidth;
    this.boxHeigth = boxHeigth;

    if (this.isButton) {
      this.btn = new Button(
        this.xOffset + 110,
        this.yOffset - 25,
        200,
        20,
        false,
        this.text,
        onButtonClick
      );
      this.btn.textSize = 20;
      this.btn.textColor = 255;
    } else {
      this.btn = new Button(
        this.xOffset,
        this.yOffset + 15,
        40,
        20,
        false,
        "Weiter",
        onButtonClick
      );
      this.btn.textSize = 20;
      this.btn.textColor = "#f5bdc5";
    }
  }

  display() {
    this.x = windowWidth / 2 + this.xOffset;
    this.y = windowHeight / 2 + this.yOffset;

    push();
    imageMode(CORNER);
    image(this.img, 0, 0, windowWidth, windowHeight);
    strokeWeight(3);
    stroke(255);
    fill(19, 19, 37, 220);
    rectMode(CENTER);
    rect(this.x, this.y, this.boxWidth, this.boxHeigth, 30);

    if (!this.isButton) {
      noStroke();
      fill("white");
      textSize(20);
      textFont(mainFont);
      textAlign(CENTER);
      text(
        this.text,
        this.x,
        this.y - 40,
        this.boxWidth - 50,
        this.boxHeigth - 20
      );
    }
    pop();

    this.btn.display();
    this.btn.mouseOver();
  }

  mouseClicked() {
    this.btn.mouseClicked();
  }
}
