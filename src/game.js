import { Question } from "./model/question.js";
import { Choice } from "./model/choice.js";
import { Player } from "./model/player.js";
import { QuestionEvent } from "./model/questionEvent.js";

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
        "Ich bringe mein Kind bei einer Freundin unter.",
        "Du fühlst dich schlecht, weil du ihre Zeit in Anspruch nimmst.",
        -5,
        50,
        0,
        1
      ),
      new Choice(
        "Ich nehme mir Urlaub für die Woche, um auf mein Kind aufpassen zu können.",

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
        "Ich lasse die Mahlzeit ausfallen.",
        "Es macht dich traurig, dass du deinem Kind kein Mittagessen bieten kannst.",
        -15,
        0,
        -10,
        1
      ),
      new Choice("Ich kaufe mehr ein und koche mehr.", " ", 0, 0, 0, 1),
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
  new Question("Freunde laden dich zum Spazieren gehen ein. Was machst du?", [
    new Choice(
      "Ich gehe mit.",
      "Du bist endlich wieder an der frischen Luft uns siehst deine Freunde.",
      10,
      0,
      -10,
      1
    ),
    new Choice(
      "Ich bleibe daheim.",
      "Du möchtest eigentlich raus, aber du hast Angst eine Strafe zu zahlen.",
      -5,
      0,
      0,
      1
    ),
  ]),
  //nur falls obere ja
  new Question(
    "Du triffst dich mit deinen Freunden. Sie wollen dich umarmen. Was machst du?",
    [
      new Choice(
        "Ich lehne ab.",
        "Dir ist die Situation unangenehm, aber du willst auf Nummer sicher gehen.",
        -5,
        0,
        0,
        1
      ),
      new Choice(
        "Ich lasse mich umarmen.",
        [
          "Dir hat menschliche Nähe gefehlt.",
          "Du wurdest von der Polizei erwischt und musst die Strafe zahlen. Du ärgerst dich darüber.",
        ],
        [5, 10],
        0,
        -10,
        0.8
      ),
    ]
  ),
  new Question(
    "Deine Freundin ruft dich an und erzählt dir von ihrem gewalttätigen Freund. Lässt du sie bei dir eine Woche unterkommen?",
    [
      new Choice(
        "Dafür sind Freunde doch da!",
        "Deine Freundin gibt dir ein wenig zur Haushaltskasse dazu. Du bist froh ihr helfen zu können.",
        10,
        50,
        -10,
        1
      ),
      new Choice(
        "Ich habe selber kaum Platz in meiner Wohnung.",
        "Du fühlst dich schlecht, dass du ihr nicht helfen kannst.",
        -15,
        0,
        0,
        1
      ),
    ]
  ),
  new Question(
    "Dein Kind kommt nicht mit dem Schulstoff zurecht. Heuerst du einen Nachhilfelehrer an?",
    [
      new Choice(
        "Ja, ich hole Online-Nachhilfe.",
        "Die Bildung deines Kindes ist dir sehr wichtig und zahlst für einen Online-Nachhilfelehrer zweimal die Woche.",
        5,
        -30,
        0,
        1
      ),
      new Choice(
        "Nein, ich versuche selber zu helfen.",
        [
          "Du sparst Geld und du bist froh, dass du helfen kannst.",
          "Es tut dir leid, dass du deinem Kind nicht helfen kannst. Du machst dir Sorgen um die Schulbildung und ist für beide Parteien frustrierend.",
        ],
        [10, -10],
        0,
        0,
        1
      ),
    ]
  ),
  new Question(
    "Dein Kind muss von Zuhause aus mit einem Tablet arbeiten. Die Schule verteilt 10 Tablets an die Schüler pro Klasse.",
    [
      //70/30 chance
      new Choice(
        "Einschreiben",
        ["Dein Kind bekommt keins.", "Dein Kind bekommt ein Tablet."],
        [-10, 10],
        0,
        0,
        0.7
      ),
    ]
  ),
  //falls kein Tablet bekommen
  new Question("Dein Kind hat kein Tablet bekommen. Was machst du?", [
    new Choice(
      "Mein Kind kann mein Handy benutzen.",
      "Du hast Angst, dass dein Kind über das Handy nicht so gut mitarbeiten kann und bist genervt, dass du dein Handy in der Zeit nicht benutzen kannst.",
      -5,
      0,
      0,
      1
    ),
    new Choice(
      "Ich kaufe ein Tablet.",
      "Dein Kind kann wieder mitarbeiten, aber du ärgerst dich über die Finanzen.",
      0,
      -45,
      0,
      1
    ),
  ]),
  new Question(
    "Dein Auto geht kaputt, du brauchst es zum Einkaufen. Lässt du es reparieren?",
    [
      new Choice(
        "Ich bringe es in die Werkstatt.",
        "Dein Auto ist in der Werkstatt. Aber dein Alltag lässt sich nun schlechter gestalten.",
        5,
        -200,
        0,
        1
      ),
      new Choice(
        "Ich bringe es nicht in die Werkstatt.",
        "Dein Alltag wird schwieriger zu gestalten, da du nicht mehr mobil bist.",
        -10,
        0,
        0,
        1
      ),
    ]
  ),
  //falls auto in Werkstatt.
  new Question(
    "Der Supermarkt um die Ecke ist teurer aber dafür näher. Der billige Supermarkt ist nur mit der Bahn zu erreichen, da dein Auto noch in der Werkstatt steht. Was tust du?",
    [
      new Choice(
        "Ich gehe in den billigeren Supermarkt.",
        "Du brauchst länger zum Einkaufen und du musst alle Einkäufe mit der Hand tragen.",
        -5,
        -10,
        -10,
        1
      ),
      new Choice(
        "Ich gehe in den teuren Supermarkt.",
        "Du musst alle Einkäufe mit der Hand tragen und du musst mehr bezahlen, aber Weg ist nicht so weit.",
        -10,
        -10,
        0,
        1
      ),
    ]
  ),
];

let currentDay = 0;
let upcomingEvents = [
  new QuestionEvent(week1Questions[0], 5),
  new QuestionEvent(week1Questions[1], 2),
];

function getNextEvent() {
  if (upcomingEvents.length === 0) {
    return null;
  }

  while (!hasEventToday(upcomingEvents)) {
    for (let currentEvent of upcomingEvents) {
      currentEvent.daysUntil--;
    }
    currentDay++;
  }
  for (let i in upcomingEvents) {
    let currentEvent = upcomingEvents[i];
    if (currentEvent.daysUntil === 0) {
      upcomingEvents.splice(i, 1);
      return currentEvent;
    }
  }
}

function hasEventToday(events) {
  for (let currentEvent of events) {
    if (currentEvent.daysUntil === 0) {
      return true;
    }
  }
  return false;
}

let currentEvent;

export function runNextEvent() {
  // after making a choice, show animation before showing next event

  currentEvent = getNextEvent();
}

export function getCurrentEvent() {
  return currentEvent;
}
