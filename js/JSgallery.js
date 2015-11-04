var gallery = document.getElementById("gallery");
var imgDisplay = document.getElementById("image_show");

// if (location.search) {
//     nameText = location.search.slice(1);
//     tagline.innerHTML = "develop something beautiful, " + nameText;
// }

function genImg(num) {

     if (num < 10) {
         var imgURL = "images/pdxcg_0" + num + ".jpg";
     }
     else {
         var imgURL = "images/pdxcg_" + num + ".jpg";
     }
     return imgURL;
}

function galleryPop() {
    var imageList = document.getElementById('gallery');

    for (var listItem = 1; listItem <= 60; listItem++){
         var imgSource = genImg(listItem);
         if (imgSource) {
             var newImg = document.createElement('img');
             var newItem = document.createElement('li');
             newImg.src = imgSource;
             newImg.className = 'images';
             newItem.appendChild(newImg);
             imageList.appendChild(newItem);
        }

    }

}

galleryPop();

var dispImg = document.getElementById('image_show');
dispImg.setAttribute('class','display_img');

gallery.addEventListener("click",function() {
if (event.target.className === 'images') {
     dispImg.className = 'display_img';
     dispImg.firstChild.src = event.target.src; 
}

});

imgDisplay.addEventListener("click", function(){
    if (event.target != imgDisplay.firstChild) {
        imgDisplay.className = "display_none";
    }
    
});



