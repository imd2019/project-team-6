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
  moneyResultG,
  moneyResultM,
  moneyResultS,
  healthResultG,
  healthResultM,
  healthResultS,
  happinessResultG,
  happinessResultM,
  happinessResultS,
} from "./customizationScreen.js";
import { setCurrentScreen } from "../../sketch.js";
import { player } from "../game.js";

let nextBtn = new Button(-300, 200, 80, 20, true, "Weiter", () => {
  setCurrentScreen("end");
});

let firstCoronaSalary = 1570;
let secondCoronaSalary = 895;

export function backgroundImg() {
  push();
  imageMode(CENTER);
  image(
    endbg,
    windowWidth / 2,
    windowHeight / 2,
    windowWidth,
    windowWidth * 0.5603322
  );
  pop();
}

export function money() {
  let costs = 1660 - player.money;
  if (player.hasChild === true) {
    costs -= 264;
  }

  let mayMoney = secondCoronaSalary - costs;

  push();

  textAlign(LEFT);
  textFont(mainFont);
  textSize(16);
  fill("#f5bdc5");

  text(
    "Ausgaben: -" + costs + "€",
    windowWidth / 2 - 600,
    windowHeight / 2 - 170
  );

  if (mayMoney > 150) {
    imageMode(CENTER);
    image(moneyResultG, windowWidth / 2 - 500, windowHeight / 2 - 250);
    text(
      "Du achtest sehr auf deine Finanzen. Zwar bist du auf der sicheren Seite, wenn du Kurzarbeitergeld erhältst, aber du musst an einigen Stellen viel zurückstecken. Das geht nicht mehr lange so weiter ohne deine Gesundheit und Zufriedenheit zu beeinträchtigen.",
      windowWidth / 2 - 600,
      windowHeight / 2 - 120,
      200
    );
  } else if (mayMoney >= 0 && mayMoney <= 150) {
    imageMode(CENTER);
    image(moneyResultM, windowWidth / 2 - 500, windowHeight / 2 - 250);
    text(
      "Das Geld ist knapp. Durch das Kurzarbeitergeld, das du in den nächsten Monaten erhalten wirst, musst du jetzt genau auf deine Ausgaben achten. Auf längere Zeit geht das nicht gut. Außerdem kannst du dir kaum Geld zu Seite legen, weil so wenig übrig bleiben wird. Eine unerwartete Ausgabe und du bist im Minus.",
      windowWidth / 2 - 600,
      windowHeight / 2 - 120,
      200
    );
  } else if (mayMoney < 0) {
    imageMode(CENTER);
    image(moneyResultS, windowWidth / 2 - 500, windowHeight / 2 - 250);
    text(
      "Du kommst nicht mehr über die Runden. Durch das Kurzarbeitergeld, das du in den nächsten Monaten erhalten wirst, kannst du dir deinen normalen Lebensstandard nicht mehr leisten. Du musst dir einen zweiten Job suchen - wenn du einen findest. Die Geldsorgen werden sich zukünftig auch auf deine Zufriedenheit und schließlich deine Gesundheit auswirken.",
      windowWidth / 2 - 600,
      windowHeight / 2 - 120,
      200
    );
  }
  pop();
}
export function health(health) {
  push();

  textAlign(LEFT);
  textFont(mainFont);
  textSize(16);
  fill("#f5bdc5");
  text(
    "Gesundheit: " + health + " / 100",
    windowWidth / 2 - 350,
    windowHeight / 2 - 170
  );
  if (health > 70) {
    imageMode(CENTER);
    image(healthResultG, windowWidth / 2 - 250, windowHeight / 2 - 250);
    text(
      "Trotz der Pandemie hast du es geschafft auf deine Gesundheit zu achten. Aber wie geht es dir sonst?  Die Simulation endet nach vier Wochen, aber das Leben geht weiter. Geld und andere - sorgen können dir in Zukunft schlaflose Nächte bereiten. Auf Dauer bekommst du das körperlich zu spüren vor allem wenn sich die Einschränkungen nicht lockern.",
      windowWidth / 2 - 350,
      windowHeight / 2 - 120,
      200
    );
  } else if (health >= 40 && health <= 70) {
    imageMode(CENTER);
    image(healthResultM, windowWidth / 2 - 250, windowHeight / 2 - 250);
    text(
      "Du bist geschwächt, die letzen Wochen waren anstrengend und du hast dich ziemlich strapaziert. Wenn du nicht aufpasst könntest du krank werden. Das kannst du dir aber genauso wenig leisten wie eine Auszeit. Hoffentlich gerätst du nicht in einen Teufelskreis.",
      windowWidth / 2 - 350,
      windowHeight / 2 - 120,
      200
    );
  } else if (health < 40) {
    imageMode(CENTER);
    image(healthResultS, windowWidth / 2 - 250, windowHeight / 2 - 250);
    text(
      "Bereits in dieser kurzen Zeit hast du deine Gesundheit stark strapaziert. Es ist nur eine Frage der Zeit bis sich das auch auf andere Aspekte deines Lebens auswirkt. Krankheitsanfällig und gestresst/besorgt sein kann sich auch schnell auf deine mentale Gesundheit auswirken! Das ist ein Teufelskreis  aus dem du nur schwer wieder heraus kommst, vor allem ohne Geld und keinem Ende der Pandemie in Sicht.",
      windowWidth / 2 - 350,
      windowHeight / 2 - 120,
      200
    );
  }

  pop();
}
export function happiness(happiness) {
  push();

  textAlign(LEFT);
  textFont(mainFont);
  fill("#f5bdc5");
  textSize(16);

  text(
    "Zufriedenheit: " + happiness + " / 100",
    windowWidth / 2 - 100,
    windowHeight / 2 - 170
  );

  if (happiness > 70) {
    imageMode(CENTER);
    image(happinessResultG, windowWidth / 2, windowHeight / 2 - 250);
    text(
      "Du konntest deine Stimmung trotz der Situation aufrecht erhalten. Aber das kostet auf Dauer Zeit und Geld. Außerdem setzt du öfter deine Gesundheit aufs Spiel. Du solltest die anderen Parameter im Blick behalten. Pass gut auf!",
      windowWidth / 2 - 100,
      windowHeight / 2 - 120,
      200
    );
  } else if (happiness >= 40 && happiness <= 70) {
    imageMode(CENTER);
    image(happinessResultM, windowWidth / 2, windowHeight / 2 - 250);
    text(
      "Dir geht es okay. Allerdings war das erst der Anfang. Wie wird es dir in den nächsten Wochen gehen? Dein Geld wird knapper aber die Anforderungen um deine Zufriedenheit aufrecht zu erhalten bleiben. Wie lange geht das noch gut?",
      windowWidth / 2 - 100,
      windowHeight / 2 - 120,
      200
    );
  } else if (happiness < 40) {
    imageMode(CENTER);
    image(happinessResultS, windowWidth / 2, windowHeight / 2 - 250);
    text(
      "Dir geht es nicht gut. Es war schon vorher nicht einfach, aber durch die Pandemie und die zusätzlichen Geldsorgen hast du es kaum geschafft dich um dein Wohlergehen zu kümmern. Deine mentale und schlussendlich auch körperliche Gesundheit sind in Gefahr. Da wieder rauszukommen wird schwer. Dein Zustand könnte sich sogar neben deiner Gesundheit auch auf deine Arbeitsfähigkeit auswirken, ein Kreislauf aus dem du nur schwer entkommen kannst.",
      windowWidth / 2 - 100,
      windowHeight / 2 - 120,
      200
    );
  }
  pop();
}

export function character(sex, happiness, health) {
  let costs = 1660 - player.money;
  if (player.hasChild === true) {
    costs -= 264;
  }

  let money = secondCoronaSalary - costs;

  push();
  imageMode(CENTER);

  if (sex === "f" && health > 70 && money > 70) {
    image(fGgHg, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (sex === "f" && health > 70 && money >= 40 && money >= 70) {
    image(fGmHg, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (sex === "f" && health > 70 && money < 40) {
    image(fGsHg, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (
    sex === "f" &&
    health <= 70 &&
    health >= 40 &&
    money <= 70 &&
    money >= 40
  ) {
    image(fGmHm, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (sex === "f" && health <= 70 && health >= 40 && money > 70) {
    image(fGgHm, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (sex === "f" && health <= 70 && health >= 40 && money < 40) {
    image(fGsHm, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (sex === "f" && health < 40 && money < 40) {
    image(fGsHs, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (sex === "f" && health < 40 && money > 70) {
    image(fGgHs, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (sex === "f" && health < 40 && money >= 40 && money >= 70) {
    image(fGmHs, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (sex === "m" && health > 70 && money > 70) {
    image(mGgHg, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (sex === "m" && health > 70 && money >= 40 && money >= 70) {
    image(mGmHg, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (sex === "m" && health > 70 && money < 40) {
    image(mGsHg, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (
    sex === "m" &&
    health <= 70 &&
    health >= 40 &&
    money <= 70 &&
    money >= 40
  ) {
    image(mGmHm, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (sex === "m" && health <= 70 && health >= 40 && money > 70) {
    image(mGgHm, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (sex === "m" && health <= 70 && health >= 40 && money < 40) {
    image(mGsHm, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (sex === "m" && health < 40 && money < 40) {
    image(mGsHs, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (sex === "m" && health < 40 && money > 70) {
    image(mGgHs, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (sex === "m" && health < 40 && money >= 40 && money >= 70) {
    image(mGmHs, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (sex === "d" && health > 70 && money > 70) {
    image(dGgHg, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (sex === "d" && health > 70 && money >= 40 && money >= 70) {
    image(dGmHg, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (sex === "d" && health > 70 && money < 40) {
    image(dGsHg, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (
    sex === "d" &&
    health <= 70 &&
    health >= 40 &&
    money <= 70 &&
    money >= 40
  ) {
    image(dGmHm, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (sex === "d" && health <= 70 && health >= 40 && money > 70) {
    image(dGgHm, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (sex === "d" && health <= 70 && health >= 40 && money < 40) {
    image(dGsHm, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (sex === "d" && health < 40 && money < 40) {
    image(dGsHs, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (sex === "d" && health < 40 && money > 70) {
    image(dGgHs, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  } else if (sex === "d" && health < 40 && money >= 40 && money >= 70) {
    image(dGmHs, windowWidth / 2 + 324, windowHeight / 2 + 92, 652.2, 555.84);
  }

  if (happiness > 70) {
    image(zG, windowWidth / 2 + 282, windowHeight / 2 + 9, 103.2, 94.56);
  } else if (happiness < 40) {
    image(zS, windowWidth / 2 + 280, windowHeight / 2 + 12, 103.2, 94.56);
  } else if (happiness <= 70 && happiness >= 40) {
    image(zM, windowWidth / 2 + 280, windowHeight / 2 + 10, 103.2, 94.56);
  }

  pop();
}

export function draw() {
  push();
  background("#1e1f3f");
  backgroundImg();

  let playerSex = player.sex;
  let playerHealth = player.health;
  let playerHappiness = player.happiness;

  // let playerSex = "f";
  // let playerHealth = 0;
  // let playerHappiness = 0;

  // console.log(
  //   "1. Geld: " +
  //     player.money +
  //     " Gesund: " +
  //     player.health +
  //     " Zufri: " +
  //     player.happiness
  // );

  character(playerSex, playerHappiness, playerHealth);
  happiness(playerHappiness);
  health(playerHealth);
  money();
  nextBtn.display();
  nextBtn.mouseOver();
  pop();
}

export function mouseClicked() {
  nextBtn.mouseClicked();
}

export default { draw, mouseClicked };
