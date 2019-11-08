    imagesLink = ["../Yellow/Yellow_img/Eri-seoi-nage.jpg",
        "../Yellow/Yellow_img/Hiza-guruma.jpg", "../Yellow/Yellow_img/Ko-soto-gari.jpg"
    ];



    myHTML = '';
    var element = document.getElementById("fetch-images");

    for (i = 0; i < imagesLink.length; i++) {
        myHTML += '<div class="container"><div id="image-id"><img src=' +
            imagesLink[i] + ' class="test-image"></div>' +
            '<div class="top-left">' +
            '<input type="radio" name="O-soto-otoshi" value="O-soto-gari">O-soto-gari<br>' +
            '<input type="radio" name="O-soto-otoshi" value="O-soto-otoshi">O-soto-otoshi<br>' +
            '<input type="radio" name="O-soto-otoshi" value="O-uchi-gari">O-uchi-gari<br>' +
            '</div></div>'
        console.log(imagesLink[i]);
    }
    console.log(element);
    element.innerHTML = myHTML;