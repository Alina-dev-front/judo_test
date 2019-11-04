function checkAnswer() {

    tecknicsYellow = ["O-soto-otoshi", "O-uchi-gari",
        "O-goshi", "Mune-gatame", "Kuzure-kesa-gatame", "Ko-soto-gari",
        "Ko-uchi-gari", "Hiza-guruma", "Eri-seoi-nage", "Koshi-guruma",
        "Kami-shiho-gatame", "Tate-shiho-gatame"
    ];
    countRightAnswers = 0;
    countWrongAnswers = 0;

    for (tecknicNumber = 0; tecknicNumber < tecknicsYellow.length; tecknicNumber++) {
        tecknicName = tecknicsYellow[tecknicNumber];
        radioButtonResult = document.getElementsByName(tecknicName);

        for (i = 0; i < radioButtonResult.length; i++) {
            if (radioButtonResult[i].checked) {
                rightAnswer = radioButtonResult[i].name;
                choicedAnswer = radioButtonResult[i].value;
                if (choicedAnswer == rightAnswer) {
                    countRightAnswers++;
                } else {
                    countWrongAnswers++;
                }
            }
        }
    }
    document.getElementById("yellowresult").style.display = "block"
    document.getElementById("right_answers").innerHTML = countRightAnswers;
    document.getElementById("wrong_answers").innerHTML = countWrongAnswers;

    resultElement = document.getElementById("yellowresult");
    resultElement.focus();
    resultElement.scrollIntoView();

    //document.getElementById("yellowresult").focus().scrollIntoView();
    //window.location.hash = '#yellowresult';
}