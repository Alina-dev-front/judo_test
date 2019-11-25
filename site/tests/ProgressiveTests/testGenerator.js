var tecknicsName = "";
var imagesLink = "";

function generateTest(beltColor) {
    var mydata = JSON.parse(tecknicsArray);
    for (i = 0; i < mydata.length; i++) {
        if (mydata[i].belt == beltColor) {
            self.imagesLink = mydata[i].urls;
            self.tecknicsName = mydata[i].names;
        }
    }

    myHTML = '';
    var element = document.getElementById("fetch-images");

    for (i = 0; i < imagesLink.length; i++) {
        excludeArray = [];
        excludeArray.push(i);
        firstIndex = this.generateRandomWithExclude(0, tecknicsName.length - 1, excludeArray);
        excludeArray.push(firstIndex);
        secondIndex = this.generateRandomWithExclude(0, tecknicsName.length - 1, excludeArray);

        randomRangeTecknics = [tecknicsName[i], tecknicsName[firstIndex], tecknicsName[secondIndex]];

        newRandomRangeTecknics = this.sortArrayRandom(randomRangeTecknics);
        myHTML += '<div class="container"  id=' + tecknicsName[i] + '><div style="margin-left: 200px" id="image-id"><img src=' +
            imagesLink[i] + ' class="test-image"></div>' + '<div class="top-left">' +

            '<label><input type="radio" name=' + tecknicsName[i] + ' value=' + newRandomRangeTecknics[0] +
            '>' + newRandomRangeTecknics[0] + '</label><br>' +

            '<label><input type="radio" name=' + tecknicsName[i] + ' value=' + newRandomRangeTecknics[1] +
            '>' + newRandomRangeTecknics[1] + '</label><br>' +

            '<label><input type="radio" name=' + tecknicsName[i] + ' value=' + newRandomRangeTecknics[2] +
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
    console.log('cykablya');
    countRightAnswers = 0;
    countWrongAnswers = 0;
    wrongAnswers = [];

    for (var tecknicNumber = 0; tecknicNumber < tecknicsName.length; tecknicNumber++) {
        tecknicName = tecknicsName[tecknicNumber];
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
    for (i = 0; i < wrongAnswers.length; i++) {
        document.getElementById(wrongAnswers[i]).style.backgroundColor = "red";
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