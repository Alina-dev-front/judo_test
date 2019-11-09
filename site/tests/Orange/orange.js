    imagesLink = ["../Yellow/Yellow_img/Eri-seoi-nage.jpg",
        "../Yellow/Yellow_img/Hiza-guruma.jpg", "../Yellow/Yellow_img/Ko-soto-gari.jpg"
    ];
    tecknicsOrange = ["tecknic1", "tecknic2", "tecknic3"];

    function generateTest() {
        myHTML = '';
        var element = document.getElementById("fetch-images");

        for (i = 0; i < imagesLink.length; i++) {
            myHTML += '<div class="container"><div style="margin-left: 200px" id="image-id"><img src=' +
                imagesLink[i] + ' class="test-image"></div>' +
                '<div class="top-left">' +
                '<input type="radio" name=' + tecknicsOrange[i] + ' value=' + tecknicsOrange[i] + '>' + tecknicsOrange[i] + '<br>' +
                '<input type="radio" name=' + tecknicsOrange[i] + ' value="O-soto-otoshi">O-soto-otoshi<br>' +
                '<input type="radio" name=' + tecknicsOrange[i] + ' value="O-uchi-gari">O-uchi-gari<br>' +
                '</div></div>'
        }
        element.innerHTML = myHTML;
    }

    function checkAnswer() {
        countRightAnswers = 0;
        countWrongAnswers = 0;

        for (var tecknicNumber = 0; tecknicNumber < tecknicsOrange.length; tecknicNumber++) {
            tecknicName = tecknicsOrange[tecknicNumber];
            radioButtonResult = document.getElementsByName(tecknicName);

            for (i = 0; i < radioButtonResult.length; i++) {
                if (radioButtonResult[i].checked) {
                    if (radioButtonResult[i].value == radioButtonResult[i].name) {
                        countRightAnswers++;
                    } else {
                        countWrongAnswers++;
                    }
                }
            }
        }
        document.getElementById("orangeresult").style.display = "block";
        document.getElementById("right_answers").innerHTML = countRightAnswers;
        document.getElementById("wrong_answers").innerHTML = countWrongAnswers;

        this.scrollDown();
    }

    function scrollDown() {
        resultElement = document.getElementById("orangeresult");
        resultElement.scrollIntoView();
    }