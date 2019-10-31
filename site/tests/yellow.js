function checkAnswer(answers) {
    const url = document.URL;
    const data = document.getElementsByName("O-soto-otoshi");

    for (i = 0; i < data.length; i++) {
        if (data[i].checked) {
            rightAnswer = data[i].name;
            choicedAnswer = data[i].value;
            if (choicedAnswer == rightAnswer) {
                alert("Well done!")
            } else {
                alert("Try again");
            }
        }
    }
}