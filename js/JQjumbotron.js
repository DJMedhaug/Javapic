$(function() {
    setInterval(changeimg, 1000);
    var totalImg = 60;
    var currentImg = 1;
    function changeimg () {
        if (currentImg > totalImg) {
            currentImg = 1;
        }
        if (currentImg < 10) {
            var imgurl = '0'+ currentImg;
        }
        else {
            imgurl = currentImg;
        }
        $('.jumbotron').css('background-image', 'url(images/pdxcg_' + imgurl + '.jpg)');
        currentImg++;
    };
});

