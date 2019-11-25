    imagesLink = ["Orange_img/De-ashi-barai.heic",
        "Orange_img/Ko-soto-gake.heic", "Orange_img/Ippon-seoi-nage.heic",
        "Orange_img/Morote-seoi-nage.heic", "Orange_img/Tsuri-komi-goshi.heic",
        "Orange_img/Kubi-nage.heic", "Orange_img/Ushiro-kesa-gatame.heic",
        "Orange_img/Kuzure-yoko-shiho-gatame.heic",
        "Orange_img/O-soto-gari.heic", "Orange_img/Tsuri-goshi.heic",
        "Orange_img/Tai-otoshi.heic",
        "Orange_img/Uchi-mata.heic", "Orange_img/Harai-goshi.heic",
        "Orange_img/Yoko-shiho-gatame.heic",
        "Orange_img/Kesa-gatame.heic", "Orange_img/Gyaku-juji-jime.heic",
        "Orange_img/Nami-juji-jime.heic",
        "Orange_img/Kata-juji-jime.heic", "Orange_img/Ude-garami.heic",
        "Orange_img/Juji-gatame.heic"
    ];
    tecknicsOrange = ["De-ashi-barai", "Ko-soto-gake",
        "Ippon-seoi-nage", "Morote-seoi-nage", "Tsuri-komi-goshi", "Kubi-nage",
        "Ushiro-kesa-gatame", "Kuzure-yoko-shiho-gatame", "O-soto-gari", "Tsuri-goshi",
        "Tai-otoshi", "Uchi-mata", "Harai-goshi", "Yoko-shiho-gatame", "Kesa-gatame",
        "Gyaku-juji-jime", "Nami-juji-jime", "Kata-juji-jime", "Ude-gatame", "Juji-gatame"
    ];

    function generateTest() {
        myHTML = '';
        var element = document.getElementById("fetch-images");

        for (i = 0; i < imagesLink.length; i++) {
            excludeArray = [];
            excludeArray.push(i);
            firstIndex = this.generateRandomWithExclude(0, tecknicsOrange.length - 1, excludeArray);
            excludeArray.push(firstIndex);
            secondIndex = this.generateRandomWithExclude(0, tecknicsOrange.length - 1, excludeArray);

            randomRangeTecknics = [tecknicsOrange[i], tecknicsOrange[firstIndex], tecknicsOrange[secondIndex]];

            newRandomRangeTecknics = this.sortArrayRandom(randomRangeTecknics);
            myHTML += '<div class="container" id='+tecknicsOrange[i]+'><div style="margin-left: 200px" id="image-id"><img src=' +
                imagesLink[i] + ' class="test-image"></div>' + '<div class="top-left">' +

                '<label><input type="radio" name=' + tecknicsOrange[i] + ' value=' + newRandomRangeTecknics[0] +
                '>' + newRandomRangeTecknics[0] + '</label><br>' +

                '<label><input type="radio" name=' + tecknicsOrange[i] + ' value=' + newRandomRangeTecknics[1] +
                '>' + newRandomRangeTecknics[1] + '</label><br>' +

                '<label><input type="radio" name=' + tecknicsOrange[i] + ' value=' + newRandomRangeTecknics[2] +
                '>' + newRandomRangeTecknics[2] + '</label><br>' +
                '</div></div>'
        }
        element.innerHTML = myHTML;
    }

    function generateRandomWithExclude(min, max, exclude) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;

        if (exclude.includes(num)) {
            return generateRandomWithExclude(min, max, exclude);
        }
        return num;
    }

    function sortArrayRandom(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    function checkAnswer() {
        countRightAnswers = 0;
        countWrongAnswers = 0;
        wrongAnswers = [];

        for (var tecknicNumber = 0; tecknicNumber < tecknicsOrange.length; tecknicNumber++) {
            tecknicName = tecknicsOrange[tecknicNumber];
            radioButtonResult = document.getElementsByName(tecknicName);

            for (i = 0; i < radioButtonResult.length; i++) {
                if (radioButtonResult[i].checked) {
                    if (radioButtonResult[i].value == radioButtonResult[i].name) {
                        countRightAnswers++;
                    } else {
                        countWrongAnswers++;
                        wrongAnswers.push(radioButtonResult[i].name)
                    }
                }
            }
        }

        for (i=0; i < wrongAnswers.length; i++) {
            document.getElementById(wrongAnswers[i]).style.backgroundColor = "#E8624F";
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