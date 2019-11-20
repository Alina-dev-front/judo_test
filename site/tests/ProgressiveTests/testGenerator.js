var mydata = JSON.parse(data);

var imagesLink = mydata[0].urls
var tecknicsOrange = mydata[0].names

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
        myHTML += '<div class="container"><div style="margin-left: 200px" id="image-id"><img src=' +
            imagesLink[i] + ' class="test-image"></div>' + '<div class="top-left">' +

            '<input type="radio" name=' + tecknicsOrange[i] + ' value=' + newRandomRangeTecknics[0] +
            '>' + newRandomRangeTecknics[0] + '<br>' +

            '<input type="radio" name=' + tecknicsOrange[i] + ' value=' + newRandomRangeTecknics[1] +
            '>' + newRandomRangeTecknics[1] + '<br>' +

            '<input type="radio" name=' + tecknicsOrange[i] + ' value=' + newRandomRangeTecknics[2] +
            '>' + newRandomRangeTecknics[2] + '<br>' +
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
    document.getElementById("test_result").style.display = "block";
    document.getElementById("right_answers").innerHTML = countRightAnswers;
    document.getElementById("wrong_answers").innerHTML = countWrongAnswers;

    this.scrollDown();
}

function scrollDown() {
    resultElement = document.getElementById("test_result");
    resultElement.scrollIntoView();
}