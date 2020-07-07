import { Question } from "./model/question.js";
import { Choice } from "./model/choice.js";
import { Player } from "./model/player.js";
import { QuestionEvent } from "./model/questionEvent.js";
import { NewsEvent } from "./model/newsEvent.js";
import { WeeklyBillEvent } from "./model/weeklyBill.js";

export let player = new Player();

let coronaQuestions = [
  new Question(
    "Du hattest einen Urlaub gebucht, allerdings wird gerade empfohlen alle Urlaube zu stornieren. \n \nDu hast lange darauf hingespart, stornierst du trotzdem?",
    [
      new Choice(
        "Ich storniere.",
        "Du ärgerst dich, dass du deinen Urlaub stornieren musstest.",
        -5,
        0,
        0,
        1
      ),
      new Choice(
        "Ich storniere nicht.",
        "Du hoffst und wartest.",
        0,
        0,
        0,
        1,
        new Question(
          "Dein Reiseanbieter hat dir geschrieben. Alle Urlaube wurden storniert.",
          [
            new Choice(
              "Ok.",
              [
                "Du hast einen Gutschein zurück bekommen. Zwar findest du es schade, dass dein Urlaub storniert wurde, aber immerhin verlierst du kein Geld.",
                "Der Reiseanbieter hat dir keine Informationen über eventuelle Rückerstattungen gegeben. Du machst dir Sorgen, dein Geld zu verlieren für das du lange gespart hast.",
              ],
              [5, -10],
              [0, 0],
              [0, 0],
              0.5
            ),
          ],
          -300,
          110,
          "png/frage_02.png"
        )
      ),
    ],
    300,
    120,
    "mp4/frage_02.mp4"
  ),
  new Question(
    "Möchtest du dir eine Maske kaufen?",
    [
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
    ],
    300,
    210,
    "png/frage_04_grafik.png"
  ),
  new Question(
    "Viele Waren wie Toilettenpapier sind stark nachgefragt. Viele Leute kaufen in größeren Mengen ein, als sie es eigentlich brauchen. \n \nHamsterst du auch?",
    [
      new Choice(
        "Ja, ich hamstere.",
        "Du hamsterst ab jetzt. Hoffen wir, dass es sich lohnt.",
        0,
        -20,
        0,
        1,
        new Question(
          "Du hattest dich entschieden zu hamstern.",
          [
            new Choice(
              "Ok.",
              [
                "Die Supermarktregale sind immer noch voll. Du hattest das falsche Gespür und hast umsonst mehr Geld ausgegeben.",
                "Die Supermarktregale sind leer. Du hattest das richtige Gespür und freust dich darüber.",
              ],
              [-10, 10],
              [0, 0],
              [0, 0],
              0.5
            ),
          ],
          -300,
          110,
          "png/frage_09hamster.png"
        )
      ),

      new Choice(
        "Nein, ich hamstere nicht.",
        "Du hast dich gegen das Hamstern entschieden, hoffen wir es war die richtige Entscheidung.",
        0,
        0,
        0,
        1,
        new Question(
          "Du hattest dich entschieden nicht zu hamstern.",
          [
            new Choice(
              "Ok.",
              [
                "Die Supermarktregale sind immer noch voll. Du hattest das richtige Gespür.",
                "Die Supermarktregale sind leer. Du hattest das falsche Gespür und ärgerst dich über deine Fehlentscheidung.",
              ],
              [-10, 10],
              [0, 0],
              [0, 0],
              0.5
            ),
          ],
          -300,
          110,
          "png/frage_09nichthamster.png"
        )
      ),
    ],
    -100,
    120,
    "png/frage_09_grafik.png"
  ),
  new Question(
    "Die Restaurants haben geschlossen. Du bist jetzt auf Kurzarbeit. \n \nSuchst du dir einen Nebenjob?",
    [
      new Choice(
        "Ja, ich schreibe Bewerbungen.",
        "Du hast deine Bewerbungen geschrieben und wartest jetzt auf die Antwort.",
        0,
        -5,
        0,
        1,
        new Question(
          "Du hast Rückmeldungen für deine Bewerbungen bekommen.",
          [
            new Choice(
              "Ok.",
              "Du hast nur Absagen bekommen. Du ärgerst dich über deine jetzige Situation.",
              -10,
              0,
              0,
              1
            ),
          ],
          -300,
          110,
          "png/frage_13.png"
        )
      ),
      new Choice(
        "Nein, dafür habe ich keine Zeit.",
        "Dich ärgert die Maßnahme, dass alle Restaurants schließen mussten und das dein Gehalt beeinflusst.",
        -5,
        0,
        0,
        1
      ),
    ],
    -50,
    -220,
    "mp4/frage_13.mp4"
  ),
  //falls nicht schon gekauft oder genäht wurde und es nicht geklaptt hat
  new Question(
    "Möchtest du dir eine Maske kaufen?",
    [
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
    ],
    300,
    -110,
    "png/frage_26.png"
  ),
  new Question(
    "Freunde laden dich zum Spazieren gehen ein. \n \nGehst du mit?",
    [
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
    ],
    100,
    -220,
    "mp4/frage_20.mp4"
  ),
  //nur falls obere ja
  new Question(
    "Du triffst dich mit deinen Freunden. Sie wollen dich umarmen. \n \nLässt du es zu?",
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
        [0, 0],
        [-10, -10],
        0.8
      ),
    ],
    0,
    -110,
    "png/frage_21_grafik.png"
  ),
  new Question(
    "Deine Freundin ruft dich verängstigt an und erzählt dir von ihrem gewalttätigen Freund. \n \nLässt du sie bei dir eine Woche unterkommen?",
    [
      new Choice(
        "Dafür sind Freunde doch da!",
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
    ],
    300,
    120,
    "png/frage_22_grafik.png"
  ),
];
let coronaQuestionsCount = coronaQuestions.length;

let randomQuestionsWeek1to2 = [
  new Question(
    "Deine Mutter liegt krank im Altersheim. Um sie zu besuchen musst du dich krankschreiben lassen. \n \nBesuchst du sie?",
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
    ],
    300,
    120,
    "png/frage_01_grafik.png"
  ),

  new Question(
    "Deine Arbeitsschuhe sind kaputt. Neue würden deinen Arbeitsalltag erleichtern. \n \nKaufst du dir neue?",
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
        "Ich benutze weiterhin die Alten.",
        "Nach der Arbeit schmerzen deine Füße sehr.",
        -5,
        0,
        -10,
        1
      ),
    ],
    -200,
    120,
    "mp4/frage_05.mp4"
  ),
  new Question(
    "Um deine Gesundheit zu verbessern überlegst du, Sport zu machen. Im Fitnessstudio erzielst du schneller Erfolge, es kostet aber auch mehr Geld. \n \nWofür entscheidest du dich?",
    [
      new Choice(
        "Ich mache Workouts daheim.",
        [
          "Du fühlst dich fit und du sparst Geld.",
          "Du hast keine Disziplin, um regelmäßig Heim-Workouts zu machen, und bist enttäuscht von dir selbst.",
        ],
        [5, -5],
        [0, 0],
        [10, 0],
        0.5
      ),
      new Choice(
        "Ich melde mich im Fitnessstudio an.",
        [
          "Du bist total motiviert und fühlst dich fit. Deine Investition hat sich gelohnt.",
          "Du hast keine Disziplin, um regelmäßig ins Fitnessstudio zu gehen. Du bist enttäuscht von dir selbst und hast Geld aus dem Fenster geschmissen.",
        ],
        [5, -5],
        [80, 80],
        [10, 0],
        0.5
      ),
    ],
    300,
    120,
    "mp4/frage_08.mp4"
  ),
  new Question(
    "Freunde haben dich in eine Bar eingeladen. \n \nGehst du mit?",
    [
      new Choice(
        "Ich gehe mit.",
        "Du hast 60€ in der Bar gelassen und du hast deine Freunde wieder gesehen.",
        5,
        -60,
        -10,
        1
      ),
      new Choice(
        "Ich bleibe daheim.",
        "Du fühlst dich alleine, aber sparst wenigstens Geld.",
        -5,
        0,
        0,
        1
      ),
    ],
    300,
    220,
    "png/frage_03_grafik.png"
  ),
  new Question(
    "Deine beste Freundin möchte mit dir mittagessen gehen. \n \nGehst du mit?",
    [
      new Choice(
        "Ich gehe mit.",
        "Endlich. Du siehst deine beste Freundin wieder, ihr habt einen schönen Tag, aber du hast schon wieder Geld ausgegeben. ",
        5,
        35,
        -10,
        1
      ),
      new Choice(
        "Ich beibe daheim",
        "Du hast deine Freundin lange nicht mehr gesehen, und hättest dich gefreut sie wieder zu sehen.",
        -5,
        0,
        0,
        1
      ),
    ],
    300,
    120,
    "mp4/frage_06.mp4"
  ),
];

let randomQuestionsWeek3to4 = [
  new Question(
    "Eine teure Rechnung landet bei dir im Briefkasten. \n \nZahlst du sie?",
    [
      new Choice(
        "Ich warte noch.",
        "Du hast zwei Wochen Zeit, vergiss es nicht!",
        0,
        0,
        0,
        1,
        new Question(
          "Du hast vergessen deine Rechnung zu bezahlen.",
          [
            new Choice(
              "Ok.",
              "Du musstest Mahngebühren und die Rechnung in voller höhe begleichen.",
              -10,
              -200,
              0,
              1
            ),
          ],
          0,
          0,
          "png/frage_07.png"
        )
      ),
      new Choice(
        "Ich bezahle sofort.",
        "Du hast keine Schulden mehr, aber die Rechnung war ziemlich hoch.",
        -5,
        -175,
        0,
        1
      ),
    ],
    -300,
    110,
    "png/frage_17_grafik.png"
  ),
  new Question(
    "Möchtest du deine Mutter im Altersheim besuchen?",
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
        "Sie tut dir leid. Du weißt nicht, wann du sie das nächste mal wieder siehst. Sie vermisst dich.",
        -10,
        0,
        0,
        1
      ),
    ],
    300,
    120,
    "mp4/frage_14.mp4"
  ),
  new Question(
    "Das Abflussrohr in deiner Küche ist verstopft. \n \nWas machst du?",
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
        "Ich versuche es selbst.",
        [
          "Du bist stolz auf dich, es hat funktioniert. Das Rohr ist frei und du hast die den Handwerker gespart.",
          "Du hast es versucht, es hat nicht geklappt. Das Rohr ist immer noch verstopft und es ist schlimmer als vorher. Du musst einen Handwerker rufen.",
        ],
        [15, -10],
        [0, 140],
        [0, 0],
        0.5
      ),
    ],
    0,
    -220,
    "mp4/frage_16.mp4"
  ),
  new Question(
    "In deiner Stadt ist gerade eine Blutspendeaktion. \n \nGehst du Blutspenden?",
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
        "Du hast momentan keine Zeit und keinen Kopf dafür.",
        0,
        0,
        0,
        1
      ),
    ],
    300,
    120,
    "png/frage_18_grafik.png"
  ),
  new Question(
    "Du hattest einen Fahrradunfall. \n \nGehst du zum Arzt?",
    [
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
          "Es hat sich entzündet. Wärst du nur besser zum Arzt gegangen. Jetzt hast du Schmerzen.",
          "Du fühlst dich gut. Du konntest arbeiten gehen und warst nicht unnötig beim Arzt.",
        ],
        [-10, 10],
        [0, 0],
        [-10, 0],
        0.5
      ),
    ],
    100,
    -220,
    "mp4/frage_12.mp4"
  ),
];

let hasChildQuestions = [
  new Question(
    "Die Schulen sind geschlossen und dein Kind ist daheim. Du musst allerdings arbeiten. \n \nNimmst du dir Urlaub?",
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
        "Ich nehme mir Urlaub für die Woche, um auf mein Kind aufzupassen.",

        "Du bist unzufrieden mit der Situation, dass die Schulen geschlossen haben.",
        -5,
        -40,
        0,
        1
      ),
    ],
    -200,
    120,
    "png/frage_11_grafik.png"
  ),
  new Question(
    "Die Nachmittagsbetreuung und damit auch das kostenlose Mittagessen des Kindes fällt weg. \n Du selbst isst nichts zu mittag. Um die Mahlzeit für dein Kind zu stellen musst du mehr Geld ausgeben. \n \nWas tust du?",
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
    ],
    -300,
    110,
    "png/frage_15_grafik.png"
  ),

  new Question(
    "Dein Kind muss von Zuhause aus mit einem Tablet arbeiten. Die Schule verteilt 10 Tablets an die Schüler pro Klasse.",
    [
      //70/30 chance
      new Choice(
        "Einschreiben",
        ["Dein Kind bekommt keins.", "Dein Kind bekommt ein Tablet."],
        [-10, 10],
        [0, 0],
        [0, 0],
        0.7
      ),
    ],
    -200,
    120,
    "png/frage_24_grafik.png"
  ),
  //falls kein Tablet bekommen
  new Question(
    "Dein Kind hat kein Tablet bekommen. \n \nKaufst du eins?",
    [
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
    ],
    -300,
    -220,
    "png/frage_24_grafik.png"
  ),
  new Question(
    "Dein Kind kommt nicht mit dem Schulstoff zurecht. \n \nBesorgst du einen Nachhilfelehrer?",
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
        "Nein, ich versuche selbst zu helfen.",
        [
          "Du sparst Geld und du bist froh, dass du helfen kannst.",
          "Es tut dir leid, dass du deinem Kind nicht helfen kannst. Du machst dir Sorgen um die Schulbildung, es ist für beide Parteien frustrierend.",
        ],
        [10, -10],
        [0, 0],
        [0, 0],
        0.75
      ),
    ],
    300,
    -110,
    "png/frage_23_grafik.png"
  ),
];
let hasChildQuestionsCount = hasChildQuestions.length + 2;

let randomHasChildQuestions = [
  new Question(
    "Dein Kind hat Geburtstag. \n \nWas schenkst du ihm?",
    [
      new Choice(
        "Ein Buch.",
        [
          "Deinem Kind gefällt das Buch.",
          "Deinem Kind gefällt das Buch nicht.",
        ],
        [5, -5],
        [-20, -20],
        [0, 0],
        0.75
      ),
      new Choice(
        "Markenklamotten",
        [
          "Dein Kind freut sich über die neuen Klamotten.",
          "Deinem Kind gefallen die neuen Klamotten gar nicht.",
        ],
        [10, -10],
        [-50, -50],
        [0, 0],
        0.5
      ),
      new Choice(
        "Eine Bluetooth-Box",
        [
          "Dein Kind freut sich riesig über das Geschenk und du freust dich mit.",
          "Dein Kind freut sich nicht über die Box, das macht dich traurig.",
        ],
        [15, -15],
        [-80, -80],
        [0, 0],
        0.8
      ),
    ],
    300,
    120,
    "png/frage_10_grafik.png"
  ),
  new Question(
    "Freunde haben dich in eine Bar eingeladen. \n \nGehst du mit?",
    [
      new Choice(
        "Ich gehe mit.",
        "Du musstest einen Babysitter besorgen. Der hat dich 80€ gekostet und du hast 60€ in der Bar gelassen.",
        0,
        -140,
        -10,
        1
      ),
      new Choice(
        "Ich bleibe daheim.",
        "Du bist glücklich den Abend mit dem Kind zu verbringen, vermisst aber deine Freunde.",
        0,
        0,
        0,
        1
      ),
    ],
    300,
    220,
    "png/frage_03_grafik.png"
  ),
  new Question(
    "Deine beste Freundin möchte mit dir mittagessen gehen. \n \nGehst du mit?",
    [
      new Choice(
        "Ich gehe mit.",
        "Endlich. Du siehst deine beste Freundin wieder, ihr habt einen schönen Tag, aber du hast schon wieder Geld ausgegeben. ",
        5,
        -115,
        -10,
        1
      ),
      new Choice(
        "Ich beibe daheim",
        "Du verbringst einen schönen Spielemittag mit deinem Kind, aber deine Freunde haben dich lange nicht mehr gesehen.",
        0,
        0,
        0,
        1
      ),
    ],
    300,
    120,
    "mp4/frage_06.mp4"
  ),
];

let hasCarQuestions = [
  new Question(
    "Deine Verwandten kommen aus dem Urlaub zurück. \n \nHolst du sie ab?",
    [
      new Choice(
        "Wofür ist Familie da?",
        "Du erwartest dasselbe von ihnen und freust dich sie wieder zu sehen. Dafür musstest du aber auftanken.",
        5,
        -20,
        -10,
        1
      ),
      new Choice(
        "Ich muss leider arbeiten.",
        "Du hast ein schlechtes Gewissen, aber im Moment hast du dafür keine Zeit oder Geld dafür.",
        -5,
        0,
        0,
        1
      ),
    ],
    -300,
    0,
    "mp4/frage_19.mp4"
  ),
  new Question(
    "Dein Auto geht kaputt, du brauchst es zum Einkaufen. \n \nLässt du es reparieren?",
    [
      new Choice(
        "Ich bringe es in die Werkstatt.",
        "Dein Auto ist in der Werkstatt. Dein Alltag lässt sich nun schlechter gestalten.",
        5,
        -200,
        0,
        1,
        new Question(
          "Der Supermarkt um die Ecke ist teurer aber dafür näher. Der billige Supermarkt ist nur mit der Bahn zu erreichen, da dein Auto noch in der Werkstatt steht.\n \nWas tust du?",
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
          ],
          0,
          -110,
          "mp4/frage_27.mp4"
        )
      ),
      new Choice(
        "Ich bringe es nicht in die Werkstatt.",
        "Dein Alltag wird schwieriger zu gestalten, da du nicht mehr so mobil bist.",
        -10,
        0,
        0,
        1
      ),
    ],
    0,
    -220,
    "mp4/frage_25.mp4"
  ),
];
let hasCarQuestionsCount = hasCarQuestions.length;

let currentDay = 0;
export let upcomingEvents = [
  new WeeklyBillEvent(0, 80, 0),
  new WeeklyBillEvent(7, 40, 0),
  new WeeklyBillEvent(14, 0, 0),
  new WeeklyBillEvent(21, 0, 0),
  new NewsEvent("assets/news/1.png", 0, 0, 0),
  new NewsEvent("assets/news/2.png", 7, 0, 0),
  new NewsEvent("assets/news/3.png", 14, 0, 0),
  new NewsEvent("assets/news/4.png", 21, 0, 0),
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

  let nextEvent = getNextEvent();

  if (nextEvent.reuseBackground) {
    nextEvent.backgroundPath = currentEvent.backgroundPath;
    nextEvent.backgroundImage = currentEvent.backgroundImage;
  }

  currentEvent = nextEvent;
}

let week1QuestionsCount = 0;
let week2QuestionsCount = 0;
let week3QuestionsCount = 0;
let week4QuestionsCount = 0;

export function pushCoronaQuestions() {
  upcomingEvents.push(
    new QuestionEvent(coronaQuestions[0], 1),
    new QuestionEvent(coronaQuestions[1], 2),
    new QuestionEvent(coronaQuestions[2], 8),
    new QuestionEvent(coronaQuestions[3], 15),
    // new QuestionEvent(coronaQuestions[4], 5),
    new QuestionEvent(coronaQuestions[5], 22),
    // new QuestionEvent(coronaQuestions[6], 7),
    new QuestionEvent(coronaQuestions[7], 25)
  );

  week1QuestionsCount += 2;
  week2QuestionsCount++;
  week3QuestionsCount++;
  week4QuestionsCount += 2;
}

export function deleteCoronaQuestions() {
  upcomingEvents.splice(
    upcomingEvents.length - coronaQuestionsCount - 1,
    hasChildQuestions.length
  );

  week1QuestionsCount--;
  week2QuestionsCount--;
  week3QuestionsCount -= 2;
  week4QuestionsCount--;
}
export function pushHasCarQuestions() {
  upcomingEvents.push(new QuestionEvent(hasCarQuestions[0], 10));
  upcomingEvents.push(new QuestionEvent(hasCarQuestions[1], 23));

  week2QuestionsCount++;
  week4QuestionsCount++;
}

export function deleteHasCarQuestions() {
  upcomingEvents.splice(
    upcomingEvents.length - hasCarQuestionsCount - 1,
    hasCarQuestions.length
  );

  week2QuestionsCount--;
  week4QuestionsCount--;
}
let deletedQuestion1 = randomQuestionsWeek1to2[3];
let deletedQuestion2 = randomQuestionsWeek1to2[4];

export function pushHasChildQuestions() {
  addRandomQuestions(1, randomHasChildQuestions);

  upcomingEvents.push(new QuestionEvent(hasChildQuestions[0], 9));
  upcomingEvents.push(new QuestionEvent(hasChildQuestions[1], 16));
  upcomingEvents.push(new QuestionEvent(hasChildQuestions[4], 17));
  upcomingEvents.push(new QuestionEvent(hasChildQuestions[2], 22));

  randomQuestionsWeek1to2.splice(3, 1);
  randomQuestionsWeek1to2.splice(4, 1);
  randomQuestionsWeek1to2.push(
    randomHasChildQuestions[1],
    randomHasChildQuestions[2]
  );

  week1QuestionsCount++;
  week2QuestionsCount++;
  week3QuestionsCount += 2;
  week4QuestionsCount++;
}

export function deleteHasChildQuestions() {
  upcomingEvents.splice(
    upcomingEvents.length - hasChildQuestionsCount - 1,
    hasChildQuestions.length
  );
  randomQuestionsWeek1to2.splice(randomQuestionsWeek1to2.length - 2, 2);
  randomQuestionsWeek1to2.push(deletedQuestion1, deletedQuestion2);
  week1QuestionsCount--;
  week2QuestionsCount--;
  week3QuestionsCount -= 2;
  week4QuestionsCount--;
}

// randomQuestions should not appear on the same day
export function pushRandomQuestions() {
  addRandomQuestionsToEachWeek(1, week1QuestionsCount, randomQuestionsWeek1to2);
  addRandomQuestionsToEachWeek(2, week2QuestionsCount, randomQuestionsWeek1to2);
  addRandomQuestionsToEachWeek(3, week3QuestionsCount, randomQuestionsWeek3to4);
  addRandomQuestionsToEachWeek(4, week4QuestionsCount, randomQuestionsWeek3to4);
}

function addRandomQuestionsToEachWeek(week, weekCount, randomQuestions) {
  while (weekCount < 4) {
    weekCount++;
    addRandomQuestions(week, randomQuestions);
  }
}

function addRandomQuestions(week, randomQuestions) {
  console.log(randomQuestions.map((q) => typeof q));

  let i = Math.round(random(0, randomQuestions.length - 1));
  let question = randomQuestions[i];
  randomQuestions.splice(i, 1);

  let freeDay = randomFreeDayInWeek(week);

  upcomingEvents.push(new QuestionEvent(question, freeDay));
}

function randomFreeDayInWeek(week) {
  let firstDayOfWeek = 7 * (week - 1) + 1;

  let hasWeekFreeDay = true;
  for (let i = firstDayOfWeek; i <= firstDayOfWeek + 5; i++) {
    if (!hasUpcomingEventOnDay(i)) {
      hasWeekFreeDay = false;
    }
  }

  if (hasWeekFreeDay) {
    console.log(upcomingEvents);
    throw new Error("Week " + week + " doesn't have any free days.");
  }

  while (true) {
    let randomFreeDay = Math.round(random(firstDayOfWeek, firstDayOfWeek + 5));

    if (!hasUpcomingEventOnDay(randomFreeDay)) {
      return randomFreeDay;
    }
  }
}

function hasUpcomingEventOnDay(day) {
  for (let event of upcomingEvents) {
    if (event.daysUntil === day) {
      return true;
    }
  }

  return false;
}

export function getUpcomingEvents() {
  return upcomingEvents;
}

export function getCurrentDay() {
  return currentDay;
}

export function getCurrentEvent() {
  return currentEvent;
}
