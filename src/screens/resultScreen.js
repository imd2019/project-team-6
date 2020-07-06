import { Button } from "../model/button.js";
import {
  mainFont,
  happinessIcon,
  healthIcon,
  moneyIcon,
  endbg,
  dGgHg,
  dGgHm,
  dGgHs,
  dGmHg,
  dGmHm,
  dGmHs,
  dGsHg,
  dGsHm,
  dGsHs,
  fGgHg,
  fGgHm,
  fGgHs,
  fGmHg,
  fGmHm,
  fGmHs,
  fGsHg,
  fGsHm,
  fGsHs,
  mGgHg,
  mGgHm,
  mGgHs,
  mGmHg,
  mGmHm,
  mGmHs,
  mGsHg,
  mGsHm,
  mGsHs,
  zG,
  zM,
  zS,
} from "./customizationScreen.js";
import { player } from "../game.js";

let nextBtn = new Button(0, 200, 40, 20, true, "Weiter", () => {
  setCurrentScreen("end");
});

let firstCoronaSalary = 1570;
let secondCoronaSalary = 895;

function backgroundImg() {
  push();
  imageMode(CENTER);
  image(endbg, windowWidth / 2, windowHeight / 2, 1300, 732);
  pop();
}

function money() {
  push();

  imageMode(CENTER);
  image(moneyIcon, windowWidth / 2 - 500, windowHeight / 2 - 200);

  textAlign(LEFT);
  textFont(mainFont);
  textSize(16);
  fill("#f5bdc5");

  if (player.money - secondCoronaSalary < 0) {
    text(
      "Du hast es durch diesen Monat geschafft, aber du musstest an einigen Stellen viel zurückstecken. Das geht nicht mehr lange so weiter ohne deine Gesundheit und Zufriedenheit zu beeinträchtigen.",
      windowWidth / 2 - 600,
      windowHeight / 2 - 120,
      200
    );
  }
  if (player.money - secondCoronaSalary === 0) {
    text(
      "Das Geld ist knapp. Du hast es gerade so durch den Monat geschafft aber musstest auch oft auf Dinge verzichten. Auf längere Zeit geht das nicht gut. Außerdem kannst du kaum Geld zu Seite legen weil so wenig übrig bleibt. Eine unerwartete Ausgabe und du bist im Minus.",
      windowWidth / 2 - 600,
      windowHeight / 2 - 120,
      200
    );
  }
  if (player.money - secondCoronaSalary > 0) {
    text(
      "Das Geld war schon vorher knapp aber jetzt kommst du kaum noch über die Runden. Wenn du nicht bald wieder dein normales Gehalt bekommst musst du dir vielleicht einen zweiten Job suche - wenn du einen findest. Die Geldsorgen werden sich zukünftig auch auf deine Zufriedenheit und schließlich deine Gesundheit auswirken.",
      windowWidth / 2 - 600,
      windowHeight / 2 - 120,
      200
    );
  }
  pop();
}
function health() {
  push();

  imageMode(CENTER);
  image(healthIcon, windowWidth / 2 - 250, windowHeight / 2 - 200);

  textAlign(LEFT);
  textFont(mainFont);
  textSize(16);
  fill("#f5bdc5");
  if (player.health > 70) {
    text(
      "Trotz der Pandemie hast du es geschafft auf deine Gesundheit zu achten. Aber wie geht es dir sonst?  Die Simulation endet nach vier Wochen, aber das Leben geht weiter. Geld und andere -sorgen können dir in Zukunft schlaflose Nächte bereiten. Auf Dauer bekommst du das körperlich zu spüren vor allem wenn sich die Einschränkungen nicht lockern.",
      windowWidth / 2 - 350,
      windowHeight / 2 - 120,
      200
    );
  }
  if (player.health >= 40 && player.health <= 70) {
    text(
      "Du bist geschwächt, die letzen Wochen waren anstrengend und du hast dich ziemlich strapaziert. Wenn du nicht aufpasst könntest du krank werden. Das kannst du dir aber genauso wenig leisten wie eine Auszeit. Hoffentlich gerätst du nicht in einen Teufelskreis.",
      windowWidth / 2 - 350,
      windowHeight / 2 - 120,
      200
    );
  }
  if (player.health < 40) {
    text(
      "Bereits in dieser kurzen Zeit hast du deine Gesundheit stark strapaziert. Es ist nur eine Frage der Zeit bis sich das auch auf andere Aspekte deines Lebens auswirkt. Krankheitsanfällig und gestresst/besorgt sein kann sich auch schnell auf deine mentale Gesundheit auswirken! Das ist ein Teufelskreis  aus dem du nur schwer wieder heraus kommst, vor allem ohne Geld und keinem Ende der Pandemie in Sicht.",
      windowWidth / 2 - 350,
      windowHeight / 2 - 120,
      200
    );
  }

  pop();
}
function happiness() {
  push();

  imageMode(CENTER);
  image(happinessIcon, windowWidth / 2, windowHeight / 2 - 200);

  textAlign(LEFT);
  textFont(mainFont);
  fill("#f5bdc5");
  textSize(16);
  if (player.happiness > 70) {
    text(
      "Du konntest deine Stimmung trotz der Situation aufrecht erhalten. Aber das kostet auf Dauer Zeit und Geld. Außerdem setzt du öfter deine Gesundheit aufs Spiel. Du solltest die anderen Parameter im Blick behalten. Pass gut auf!",
      windowWidth / 2 - 100,
      windowHeight / 2 - 120,
      200
    );
  }
  if (player.happiness >= 40 && player.happiness <= 70) {
    text(
      "Dir geht es okay. Allerdings war das erst der Anfang. Wie wird es dir in den nächsten Wochen gehen? Dein Geld wird knapper aber die Anforderungen um deine Zufriedenheit aufrecht zu erhalten bleiben. Wie lange geht das noch gut?",
      windowWidth / 2 - 100,
      windowHeight / 2 - 120,
      200
    );
  }
  if (player.happiness < 40) {
    text(
      "Dir geht es nicht gut. Es war schon vorher nicht einfach, aber durch die Pandemie und die zusätzlichen Geldsorgen hast du es kaum geschafft dich um dein Wohlergehen zu kümmern. Deine mentale und schlussendlich auch körperliche Gesundheit sind in Gefahr. Da wieder rauszukommen wird schwer. Dein Zustand könnte sich sogar neben deiner Gesundheit auch auf deine Arbeitsfähigkeit auswirken, ein Kreislauf aus dem du nur schwer entkommen kannst.",
      windowWidth / 2 - 100,
      windowHeight / 2 - 120,
      200
    );
  }
  pop();
}

function character() {
  push();
  imageMode(CENTER);
  image(dGgHg, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  image(
    zG,
    windowWidth / 2 + 324 - 103.2 / 2,
    windowHeight / 2 + 92 - 94.56,
    103.2,
    94.56
  );

  pop();
}

function draw() {
  push();
  background("#1e1f3f");
  backgroundImg();
  character();
  happiness();
  health();
  money();
  nextBtn.display();
  pop();
}

function mouseClicked() {
  nextBtn.mouseClicked();
}

export default { draw, mouseClicked };
