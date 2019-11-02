function checkAnswer() {

    tecknicsYellow = ["O-soto-otoshi", "O-uchi-gari",
        "O-goshi", "Mune-gatame", "Kuzure-kesa-gatame", "Ko-soto-gari",
        "Ko-uchi-gari", "Hiza-guruma", "Eri-seoi-nage", "Koshi-guruma",
        "Kami-shiho-gatame", "Tate-shiho-gatame"
    ];

    for (tecknicNumber = 0; tecknicNumber < tecknicsYellow.length; tecknicNumber++) {
        tecknicName = tecknicsYellow[tecknicNumber];
        radioButtonResult = document.getElementsByName(tecknicName);

        for (i = 0; i < radioButtonResult.length; i++) {
            if (radioButtonResult[i].checked) {
                rightAnswer = radioButtonResult[i].name;
                choicedAnswer = radioButtonResult[i].value;
                console.log(tecknicsYellow[tecknicNumber]);
                if (choicedAnswer == rightAnswer) {
                    console.log("Well done!");
                } else {
                    console.log("Try again");
                }
            }
        }
    }
}