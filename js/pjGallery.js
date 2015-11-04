// Declare variables.
var gallery = document.getElementById("gallery");
var imgShow = document.getElementById("image_show");
var tagline = document.getElementsByClassName("tagline");
var imgShowChild = imgShow[0];
imgFirst = 1;
imgMax = 60;
images = [];

console.log(tagline[0])

if (location.search) {
    nameText = location.search.slice(1);
    tagline.innerHTML = "develop something beautiful, " + nameText;

}

function addZero(num) {
    // Adds leading zero to numbers less than 10.  
    // URL must be "...04.jpg" not "...4.jpg".
    newNum = num.toString();
    if (newNum.length === 1) {
        newNum = "0" + newNum;
    }
    return newNum;
}


function buildArray(firstNum, lastNum) {
    // Builds an Array of image ojects to be displayed.
    var i;
    var img;
    for (i = firstNum; i <= lastNum; i++) {
        img = document.createElement('img');
        img.src = ("images/pdxcg_" + addZero(i) + ".jpg");
        img.className = "picture";
        images.push(img);   
    }
    return images;
}

function appendToGallery(list1) {
    // Itterates through the array of image objects, wraps each one in 
    // in a <li> tag and appends them to the gallery as children.
    var i;
    var li;
    for (i = 0; i < list1.length; i++) {
        li = document.createElement("li");
        li.appendChild(list1[i]);
        gallery.appendChild(li);
    }
}

// Calls the function to build the page.
appendToGallery(buildArray(imgFirst, imgMax));

// Event listener to enlarge a picture if clicked on.
gallery.addEventListener("click", function(){
    if (event.target.className === "picture") {
        imgShow.className = "display_img";
        imgShow.firstChild.src = event.target.src;
    }
});

// Event listener to dismiss enlarged picture if click away from.
imgShow.addEventListener("click", function(){
    if (event.target != imgShow.firstChild) {
        imgShow.className = "display_none";
    }
});`