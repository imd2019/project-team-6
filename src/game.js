import { Question } from "./model/question.js";
import { Choice } from "./model/choice.js";
import { Player } from "./model/player.js";

export let player = new Player();

let week1Questions = [
  new Question(
    "Deine Mutter liegt krank im Altersheim. Um sie zu besuchen musst du dich krankschreiben lassen. Was machst du?",
    [
      new Choice(
        "Ich besuche sie.",
        "Du bist froh, weil du deine Mutter sehen kannst und bringst ihr etwas mit. Aber die Freude ist gedämpft, weil du Trinkgeld von einem Tag verlierst.",
        5,
        -36,
        -10,
        1
      ),
      new Choice(
        "Ich gehe arbeiten.",
        "Du hast ein schlechtes Gewissen.",
        -10,
        0,
        0,
        1
      ),
    ]
  ),
  new Question(
    "Du hattest einen Urlaub gebucht, allerdings wird gerade empfohlen alle Urlaube zu stornieren. Was machst du?",
    [
      new Choice(
        "Ich stoniere.",
        "Du ärgerst dich, dass du deinen Urlaub stornieren musstest",
        -5,
        0,
        0,
        1
      ),
      new Choice("Ich stoniere nicht.", "Du hoffst und wartest", 0, 0, 0, 1),
    ]
  ),
  new Question("Freunde haben dich in eine Bar eingeladen. Gehst du mit?", [
    new Choice(
      "Ich gehe mit.",
      [
        "Du musstest einen Babysitter besorgen. Der hat 80€ gekostet und du hast 60€ in der Bar gelassen.",
        "Du hast 60€ in der Bar gelassen und du hast deine Freunde wieder gesehen.",
      ],
      [0, 5],
      [-140, -60],
      -10,
      1
    ),
    new Choice(
      "Ich bleibe daheim.",
      [
        "Du bist glücklich den Abend mit dem Kind zu verbringen, vermisst aber deine Freunde.",
        "Du fühlst dich alleine, aber sparst wenigstens ein Geld.",
      ],
      [0, -5],
      0,
      0,
      1
    ),
  ]),
  new Question("Möchtest du dir eine Maske kaufen?", [
    new Choice(
      "Nein, ich brauche keine.",
      "Du siehst die Gefahr noch nicht und tust das als unnötig ab.",
      0,
      0,
      -10,
      1
    ),
    new Choice(
      "Ich kaufe mir eine.",
      "Du fühlst dich sicher, aber die Masken waren sehr teuer.",
      5,
      -35,
      0,
      1
    ),
    new Choice(
      "Nein, ich werde mir eine nähen.",
      [
        "Du bist stolz auf dich, weil du es geschafft hast, Geld gespart hast und geschützt bist.",
        "Du bist enttäuscht: Es hat nicht geklappt, du hast Zeit verschwendet und bist nicht geschützt.",
      ],
      [10, -10],
      [0, 0],
      [0, -10],
      0.5
    ),
  ]),
  new Question(
    "Deine Arbeitsschuhe sind kaputt. Neue würden deinen Arbeitsalltag erleichtern. Was machst du?",
    [
      new Choice(
        "Ich kaufe mir neue.",
        "Du bist glücklich, endlich neue Arbeitsschuhe, aber es hat dich schon was gekostet.",
        10,
        -85,
        0,
        1
      ),
      new Choice(
        "Ich benutze weiterhin die alten.",
        "Nach der Arbeit schmerzen deine Füße sehr.",
        -5,
        0,
        -10,
        1
      ),
    ]
  ),
];
let week2Questions = [
  new Question(
    "Deine beste Freundin möchte mit dir mittag essen gehen. Gehst du mit?",
    [
      new Choice(
        "Ich gehe mit.",
        [
          "Endlich. Du siehst deine beste Freundin wieder, ihr habt einen schönen Tag, aber hast schon wieder Geld ausgegeben. ",
          "Endlich. Du siehst deine beste Freundin wieder, ihr habt einen schönen Tag, aber hast schon wieder Geld ausgegeben.",
        ],
        5,
        [-115, 35],
        -10,
        1
      ),
      new Choice(
        "Ich beibe daheim",
        [
          "Du verbringst einen schönen Spielemittag mit deinem Kind, aber deine Freunde haben dich lange nicht mehr gesehen.",
          "Du hast deine Freundin lange nicht mehr gesehen, und hättest dich gefreut sie wieder zu sehen.",
        ],
        [0, -5],
        0,
        0,
        1
      ),
    ]
  ),
  new Question(
    "Eine teure Rechnung landet bei dir im Briefkasten. Zahlst du sie?",
    [
      new Choice(
        "Ich warte noch.",
        "Du hast zwei Wochen Zeit, vergiss es nicht.",
        0,
        0,
        0,
        1
      ),
      new Choice(
        "Ich bezahle sofort.",
        "Du hast keine Schulden mehr, aber die Rechnung war sehr hoch.",
        -5,
        -175,
        0,
        1
      ),
    ]
  ),
  new Question(
    "Um deine Gesundheit zu verbessern überlegst du, Sport zu machen. Im Fitnessstudio erzielst du schneller Erfolge, es kostet aber auch mehr Geld. Was machst du?",
    [
      new Choice(
        "Ich mache Workouts daheim.",
        [
          "Du fühlst dich fit und du sparst Geld.",
          "Du hast keine Disziplin, um regelmäßig Heim-Workouts zu machen, und bist enttäuscht von dir selbst.",
        ],
        [5, -5],
        0,
        [10, 0],
        0.5
      ),
      new Choice(
        "Ich melde mich im Fitnessstudio an.",
        [
          "Du bist total motiviert und fühlst dich fit. Deine Investition hat sich gelohnt.",
          "Du hast keine Disziplin, um regelmäßig ins Fitnessstudio zu gehen, bist enttäuscht von dir selbst und hast Geld aus dem Fenster geschmissen.",
        ],
        [5, -5],
        80,
        [10, 0],
        0.5
      ),
    ]
  ),
  new Question(
    "Viele Waren wie Toilettenpapier sind stark nachgefragt. Viele Leute kaufen in größeren Mengen ein, als sie es eigentlich brauchen. Hamsterst du auch?",
    [
      new Choice(
        "Ja, ich hamstere.",
        "Du hamsterst ab jetzt. Hoffen wir, dass es sich lohnt.",
        0,
        0,
        0,
        1
      ),

      new Choice(
        "Nein, ich hamstere nicht.",
        "Du hast dich gegen das Hamstern entschieden, hoffen wir es war die richtige Entscheidung.",
        0,
        0,
        0,
        1
      ),
    ]
  ),
  new Question("Dein Kind hat Geburtstag. Was schenkst du ihm?", [
    new Choice(
      "Ein Buch.",
      ["Deinem Kind gefällt das Buch.", "Deinem Kind gefällt das Buch nicht."],
      [5, -5],
      -20,
      0,
      0.25
    ),
    new Choice(
      "Markenklamotten",
      [
        "Dein Kind freut sich über die neuen Klamotten.",
        "Deinem Kind gefallen die neuen Klamotten gar nicht.",
      ],
      [10, -10],
      -50,
      0,
      0.5
    ),
    new Choice(
      "Eine Bluetooth-Box",
      [
        "Dein Kind freut sich riesig über das Geschenk und du freust dich mit.",
        "Dein Kind freut sich nicht über die Box, das macht dich traurig.",
      ],
      [15, -15],
      -80,
      0,
      0.8
    ),
  ]),
  new Question(
    "Die Schulen sind geschlossen und dein Kind ist daheim. Du musst allerdings arbeiten. Was machst du?",
    [
      new Choice(
        "Ich bringe es bei einer Freundin unter.",
        "Du fühlst dich schlecht, weil du ihre Zeit in Anspruch nimmst.",
        -5,
        50,
        0,
        1
      ),
      new Choice(
        "Ich nehme Urlaub für die Woche, um Zeit auf mein Kind aufpassen zu können.",

        "Du bist unzufrieden mit der Situation, dass die Schulen geschlossen haben.",
        -5,
        -40,
        0,
        1
      ),
    ]
  ),
  new Question("Du hattest einen Fahrradunfall. Gehst du zum Arzt?", [
    new Choice(
      "Ich gehe zum Arzt.",
      "Du fühlst dich gut, es tut nicht mehr weh und es kann sich nicht mehr entzünden.",
      5,
      -10,
      0,
      1
    ),
    new Choice(
      "Nein, ich gehe nicht zum Arzt.",

      [
        "Es hat sich entzündet. Wärst du nur besser zum Arzt gegangen. Jetzt hast du schmerzen.",
        "Du fühlst dich gut, du konntest arbeiten gehen und warst nicht unnötig beim Arzt.",
      ],
      [-10, 10],
      0,
      [-10, 0],
      1
    ),
  ]),
];

let week3Questions = [
  new Question(
    "Die Restaurants haben geschlossen. Du bist jetzt auf Kurzarbeit. Suchst du dir einen Nebenjob?",
    [
      new Choice(
        "Ja, ich schreibe Bewerbungen.",
        "Du hast deine Bewerbungen geschrieben und wartest jetzt auf die Antwort.",
        0,
        -5,
        0,
        1
      ),
      new Choice(
        "Nein, dafür habe ich keine Zeit.",
        "Dich ärgert die Maßnahme, dass alle Restaurants schließen mussten und das dein Gehalt beeinflusst.",
        -5,
        0,
        0,
        1
      ),
    ]
  ),
  new Question(
    "Deiner Mutter geht es wieder besser. Möchtest du sie im Altersheim besuchen?",
    [
      new Choice(
        "Ich besuche sie.",
        "Endlich kannst du mal wieder eine Runde Schach mit deiner Mutter spielen und hast ihr Blumen mitgebracht. ",
        5,
        -15,
        -10,
        1
      ),
      new Choice(
        "Ich besuche sie nicht.",
        "Sie tut dir leid und du weißt nicht wann du sie das nächste mal wieder siehst. Sie vermisst dich.",
        -10,
        0,
        0,
        1
      ),
    ]
  ),
  new Question(
    "Das Essen der Kinder in der Betreuung fällt weg. Um eine weitere Mahlzeit zu stellen musst du mehr Geld ausgeben. Was tust du?",
    [
      new Choice(
        "Die Mahlzeit ausfallen lassen.",
        "Es macht dich traurig, dass du deinem Kind kein Mittagessen bieten kannst.",
        -15,
        0,
        -10,
        1
      ),
      new Choice("Mehr einkaufen und kochen.", " ", 0, 0, 0, 1),
    ]
  ),
  new Question(
    "Das Abflussrohr in deiner Küche ist verstopft. Was machst du?",
    [
      new Choice(
        "Ich rufe einen Handwerker.",
        "Du musstest zwar Geld für den Handwerker zahlen, aber dafür ist das Rohr jetzt frei.",
        0,
        -110,
        0,
        1
      ),
      new Choice(
        "ch versuche es selbst.",
        [
          "Du bist stolz auf dich, es hat funktioniert. Das Rohr ist frei und du hast die den Handwerker gespart.",
          "Du hast es versucht, es ha nicht geklappt. Das Rohr ist immer noch verstopft und es ist schlimmer als vorher. Du musst einen Handwerker rufen.",
        ],
        [15, -10],
        [0, 140],
        0,
        0.5
      ),
    ]
  ),
  new Question(
    "In deiner Stadt ist gerade eine Blutspendeaktion. Gehst du Blutspenden?",
    [
      new Choice(
        "Ja.",
        "Du bist glücklich, dass du anderen helfen kannst. Bonus: Du hast Geld dafür bekommen.",
        10,
        20,
        -10,
        1
      ),
      new Choice(
        "Nein.",
        "Du hast momentan keine Zeit und kein Kopf dafür.",
        0,
        0,
        0,
        1
      ),
    ]
  ),
  //falls nicht schon gekauft oder genäht wurde undes nicht geklptt hat
  new Question("Möchtest du dir eine Maske kaufen?", [
    new Choice(
      "Nein, ich brauche keine.",
      "Du siehst die Gefahr noch nicht und tust das als unnötig ab.",
      0,
      0,
      -10,
      1
    ),
    new Choice(
      "Ich kaufe mir eine.",
      "Du fühlst dich sicher, aber die Masken waren sehr teuer.",
      5,
      -35,
      0,
      1
    ),
    new Choice(
      "Nein, ich werde mir eine nähen.",
      [
        "Du bist stolz auf dich, weil du es geschafft hast, Geld gespart hast und geschützt bist.",
        "Du bist enttäuscht: Es hat nicht geklappt, du hast Zeit verschwendet und bist nicht geschützt.",
      ],
      [10, -10],
      [0, 0],
      [0, -10],
      0.5
    ),
  ]),
  new Question(
    "Deine Verwandten kommen aus dem Urlaub zurück. Holst du sie ab?",
    [
      new Choice(
        "Wofür ist Familie da?",
        "Du erwartest das selbe von ihnen und freust dich sie wieder zu sehen, aber musst auftanken.",
        5,
        -20,
        -10,
        1
      ),
      new Choice(
        "Nein, sie können sich ein Taxi nehmen.",
        "Du hast ein schlechtes Gewissen, aber im Moment hast du dafür keine Zeit und Geld dafür.",
        -5,
        0,
        0,
        1
      ),
    ]
  ),
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
