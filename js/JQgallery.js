$(function() {
    var i =1;
    while (i <= 61) {
        $('#gallery').append("<li><img class='image'></img></li>");
         i++;
        };
$('.image').each(function(index){
    if (index === 0) {
        var i = index + 1
        $(this).attr({src: "./images/pdxcg_0" + i + ".jpg"})
        $(this).closest('li').remove();
    }
    else if (index <10) {
        $(this).attr({src: "./images/pdxcg_0" + index + ".jpg"})
        }
    else {
        $(this).attr({src: "./images/pdxcg_" + index + ".jpg"})
    };
});

var $nameText = location.search.slice(1);
    $('.tagline').text("develop something beautiful, " + $nameText + "!");

$(document).click(function(event) {
    $('#image_show').attr('class','display_img');
        if ($(event.target).attr('class') === ('image')) {
            $('#image_show').attr('class', 'display_img');
            $('#image_show').children().attr({'src': $(event.target).attr('src')});
        }
        else {
            $('#image_show').attr('class', 'display_none');
        };





