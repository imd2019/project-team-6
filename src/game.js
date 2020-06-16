import { Question } from "./model/question.js";
import { Choice } from "./model/choice.js";
import { Player } from "./model/player.js";
import { Apartment } from "./model/apartment.js";
import { Job } from "./model/job.js";
import getSex from "./screens/getSex.js";
import getChild from "./screens/getChild.js";
import getJob from "./screens/getJob.js";
import { apartmentData } from "./screens/getFlat.js";

export let player;

player = new Player();

let week1Questions = [
  new Question(
    "Deine Mutter liegt krank im Altersheim. Um sie zu besuchen musst du dich krankschreiben lassen. Was machst du?",
    [
      new Choice(
        "Ich besuche sie und bringe was mit.",
        "blumen, trinkgeld, wär schön mit mama",
        0,
        0,
        0,
        1
      ),
      new Choice("Ich gehe arbeiten.", "schlechtes gewissen", 0, 0, 0, 1),
    ]
  ),
  new Question(
    "Du hattest einen Urlaub gebucht, allerdings wird empfohlen alle Urlaube zu stonieren. Was machst du?",
    [
      new Choice("Ich stoniere.", "kannst urlaub nicht antreten", 0, 0, 0, 1),
      new Choice("Ich stoniere nicht", "geld kann verloren gehen", 0, 0, 0, 1),
    ]
  ),
  new Question("Freunde haben dich in eine Bar eingeladen. Gehst du mit?", [
    new Choice(
      "Ich gehe mit.",
      "bestellst zu viele getränke, bist glücklich",
      0,
      0,
      0,
      1
    ),
    new Choice("Ich bleibe daheim.", "du magst dich couch", 0, 0, 0, 1),
  ]),
  new Question("Möchtest du dir eine Maske kaufen?", [
    new Choice("Nein, ich brauche keine.", "unsicherheit", 0, 0, 0, 1),
    new Choice("Ich kaufe mir eine.", "sicherheit", 0, 0, 0, 1),
    //konsequenz ist 50/50 chance. wo soll das hin? oder gehen wir davon aus, dass es nicht klappt bzw das es klappt?
    new Choice(
      "Ich nähe mir eine.",
      "du schaffst es/du schaffst es nicht",
      0,
      0,
      0,
      1
    ),
  ]),
  new Question(
    "Deine Arbeitsschuhe sind kaputt. Neue würden deinen Arbeitsalltag erleichtern. Was machst du?",
    [
      new Choice("Ich kaufe mir neue.", " ", 0, 0, 0, 1),
      new Choice(
        "Ich benutze weiterhin die alten.",
        "schlechtes gewissen",
        0,
        0,
        0,
        1
      ),
    ]
  ),
];
let week2Questions = [
  new Question("Deine Freundin möchte mit dir essen gehen. Gehst du mit?", [
    new Choice("Ich gehe mit.", " ", 0, 0, 0, 1),
    new Choice("Ich beibe daheim", " ", 0, 0, 0, 1),
  ]),
  new Question(
    "Eine teure Rechnung landet im Briefkasten. Zahlst du sie sofort?",
    [
      new Choice("Ich warte noch.", " ", 0, 0, 0, 1),
      new Choice("Ich bezahle sofort.", " ", 0, 0, 0, 1),
    ]
  ),
  new Question(
    "Um deine Gesundheit zu verbessen überlegst du, Sport zu machen.",
    [
      new Choice("Ich mache ein Workout daheim..", " ", 0, 0, 0, 1),
      new Choice("Ich melde mich im Fitnessstudio an.", " ", 0, 0, 0, 1),
    ]
  ),
  new Question(
    "Waren wie Toilettenpapier sind stark nachgefragt. Viele Leute kaufen größere mengen ein, als sie eigentlich brauchen.",
    [
      //50/50 chance
      new Choice("Ich hamstere auch.", "supermarkt voll/leer ", 0, 0, 0, 1),
      //50/50 Chance
      new Choice("Ich hamstere nicht ", " voll/leer", 0, 0, 0, 1),
    ]
  ),
  new Question(
    "Dein Kind hat Geburtstag. Du brauchst noch ein Geschenk. Du kaufst...",
    [
      //75/25 chance
      new Choice("...ein Buch.", " ", 0, 0, 0, 1),
      //50/50 chance
      new Choice("...Markenklamotten", " ", 0, 0, 0, 1),
      //25/75 chance
      new Choice("...eine Bluetooth-Box", " ", 0, 0, 0, 1),
    ]
  ),
];
let week3Questions = [
  new Question("Deiner Mutter geht es wieder besser.", [
    new Choice("Ich besuche sie im Altersheim.", " ", 0, 0, 0, 1),
    new Choice("Ich besuche sie nicht.", " ", 0, 0, 0, 1),
  ]),
  new Question(
    "Die Schulen sind geschlossen und dein Kind ist daheim. Du musst allerdings arbeiten.",
    [
      new Choice("Ich bringe es bei einer Freundin unter.", " ", 0, 0, 0, 1),
      new Choice("Ich nehme mir Urlaub für die Woche.", " ", 0, 0, 0, 1),
      //nur bei Steuerberater möglich
      new Choice("Ich mache Home-Office", "", 0, 0, 0, 1),
    ]
  ),
  new Question(
    "Das Essen für dein Kind in der Betreuung fällt weg. Um eine weitere Mahlzeit zu stellen, musst du mehr Geld ausgeben.",
    [
      new Choice("Du lässt die Mahlzeit ausfallen.", " ", 0, 0, 0, 1),
      new Choice("Du kaufst mehr ein und kochst mehr.", " ", 0, 0, 0, 1),
    ]
  ),
  new Question("Das Abflussrohr deiner Küche ist verstopft.", [
    new Choice("Ich rufe einen Handwerker.", " ", 0, 0, 0, 1),
    //50/50 chance
    new Choice("Ich versuche es selbst", " ", 0, 0, 0, 1),
  ]),
  new Question("Deine Freundin möchte mit dir essen gehen. Gehst du mit?", [
    new Choice("Ich gehe mit.", " ", 0, 0, 0, 1),
    new Choice("Ich beibe daheim", " ", 0, 0, 0, 1),
  ]),
  //falls nicht gezahlt worden ist (Rechnung)
  new Question(
    "Du wolltest die Rechnung nicht zahlen. Jetzt hast du eine Mahnung bekommen.",
    [new Choice("Du musst sie jetzt bezahlen.", " ", 0, 0, 0, 1)]
  ),
  //falls nicht schon gekauft oder genäht wurde oder es nicht geklptt ha tmit nähen
  new Question("Möchtest du dir eine Maske kaufen?", [
    new Choice("Nein, ich brauche keine.", "unsicherheit", 0, 0, 0, 1),
    new Choice("Ich kaufe mir eine.", "sicherheit", 0, 0, 0, 1),
    //konsequenz ist 50/50 chance. wo soll das hin? oder gehen wir davon aus, dass es nicht klappt bzw das es klappt?
    new Choice(
      "Ich nähe mir eine.",
      "du schaffst es/du schaffst es nicht",
      0,
      0,
      0,
      1
    ),
  ]),
  new Question(
    "In deiner Stadt ist gerade eine Blutspendeaktion. Gehst du Blut spenden?",
    [new Choice("Ja.", " ", 0, 0, 0, 1), new Choice("Nein", " ", 0, 0, 0, 1)]
  ),
  new Question("Deine Verwandten kommen endlich aus dem Urlaub zurück.", [
    new Choice("Ich hole sie ab.", " ", 0, 0, 0, 1),
    new Choice("Sie können sich ein Taxi rufen.", " ", 0, 0, 0, 1),
  ]),
];
let week4Questions = [
  new Question("Freunde laden dich zum Spazieren gehen ein.", [
    new Choice("Ich gehe mit.", " ", 0, 0, 0, 1),
    new Choice("Ich beibe daheim", " ", 0, 0, 0, 1),
  ]),
  //nur falls obere ja
  new Question("Deine Freunde wollen dich umarmen.", [
    new Choice("Nein, das möchte ich nicht.", " ", 0, 0, 0, 1),
    new Choice("Ich umarme sie ebenfalls.", " ", 0, 0, 0, 1),
  ]),
  new Question("Deine Mutter ist im Altersheim und fühlt sich alleine.", [
    new Choice("Du fühlst dich schuldig", " ", 0, 0, 0, 1),
  ]),
  new Question(
    "Deine Freundin ruft dich verängstigt an. Sie kann nicht bei mit ihrem Freund zusammenleben.",
    [
      new Choice(
        "Sie kann für zwei Wochen bei mir unterkommen.",
        " ",
        0,
        0,
        0,
        1
      ),
      new Choice("Ich habe leider selbst kaum Platz.", " ", 0, 0, 0, 1),
    ]
  ),
  new Question(
    "Dein Kind muss von zu Hause aus mit einem Tablet arbeiten. Die Schule verteilt zehn Stück an die Schüler pro Klasse.",
    [
      //70/30 chance
      new Choice("Einschreiben", " ", 0, 0, 0, 1),
    ]
  ),
  //falls kein Tablet bekommen
  new Question("Dein Kind hat kein Tablet bekomme. ", [
    new Choice("Ich lass mein Kind mein Handy benutzen.", " ", 0, 0, 0, 1),
    new Choice("Ich kaufe ein Tablet.", " ", 0, 0, 0, 1),
  ]),
  new Question("Dein Auto ist kaputt. Bringst du es in die Werkstatt?", [
    new Choice("Nein, ein wenig laufen tut gut..", " ", 0, 0, 0, 1),
    new Choice("Ja, ich brauche mein Auto.", "", 0, 0, 0, 1),
  ]),
  //falls auto kaputt.
  new Question(
    "Der Supermarkt um die Ecke ist sehr teurer. Der günstigere Supermakt ist nur mit der bahn zu erreichen, da dein Auto noch in der Werktstatt steht. Wo kaufst du ein?",
    [
      new Choice("Im teurem Supermarkt.", " ", 0, 0, 0, 1),
      new Choice("Im günstigem Supermarkt.", " ", 0, 0, 0, 1),
    ]
  ),
];

// export class Game {
//   constructor(player) {
//     this.currentDay = 0;
//     this.player = player;
//     this.events = [];
//   }
// }

export default { player };
