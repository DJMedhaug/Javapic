var totalImg = 60;

var currentImg = 1;

function changeImg() {
    "use strict";
    if (currentImg > totalImg) {
     currentImg =1;
 }
    if (currentImg < 10) {

     var url = "url(images/pdxcg_0" + currentImg + ".jpg)";
    }
    else {
     var url = "url(images/pdxcg_" + currentImg + ".jpg)";
    };
document.getElementById('jumbotron').style.backgroundImage = url;

currentImg++;
};

setInterval("changeImg()", 500);


