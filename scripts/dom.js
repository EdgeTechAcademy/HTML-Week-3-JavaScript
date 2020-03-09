//need variables outside of their classes to combine them into one, only runs once

// get random padding amount
function getRandomPadding() {
    return Math.floor(Math.random() * 30) + "px";
}
// get a random hex number
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
} 

// array of font families
var font_families = ["Jazz LET", "fantasy", "Brush Script MT", "Brush Script Std", "cursive", "Lucida Handwriting", "Trattatello", "fantasy"];

// choose random font from array
function getRandomFont() {
    return font_families[Math.floor(Math.random() * 4)];
}

document.getElementById("change-font").addEventListener("click", function () {
    // array of font families
    // choose random font from array
    var newFont = getRandomFont();

    // assign font to div
    document.getElementById("font").style.fontFamily = newFont;
});

document.getElementById("change-font-color").addEventListener("click", function () {
    // get a random hex number
    var randColor = getRandomColor();

    // assign new size to div
    document.getElementById("font-color").style.color = randColor;
});

document.getElementById("change-background-color").addEventListener("click", function () {
    // get a random hex number
    var randColor = getRandomColor();

    // assign new size to h1
    document.getElementById("background-color").style.backgroundColor = randColor;
});

document.getElementById("change-padding").addEventListener("click", function () {
    // get random padding amount
    let randPadding = getRandomPadding();

    // assign new padding to div10
    document.getElementById("padding").style.padding = randPadding;
});

document.getElementById("change-class").addEventListener("click", function () {
    var div = document.getElementById("class-change");
    if (div.classList.contains('error')) {
        div.classList.remove('error');
    } else {
        div.classList.add('error');
    }
});

//CRAZINESSSSS, LETS ADD IT ALL TOGETHER
document.getElementById("crazy-changes").addEventListener("click", function () {
    document.getElementById("crazy").style.fontFamily = getRandomFont();
    document.getElementById("crazy").style.backgroundColor = getRandomColor();
    document.getElementById("crazy").style.padding = getRandomPadding();
});

document.getElementById("my-changes").addEventListener("click", function () {
    document.getElementById("myDiv").style.borderColor = getRandomColor();
    document.getElementById("myDiv").style.borderStyle = 'dashed';
    let radius = document.getElementById("num").value + 'px';
    document.getElementById("myDiv").style.borderRadius = radius;
    document.getElementById("myDiv").style.backgroundColor = getRandomColor();
    
});

//    document.getElementById("myDiv").style.boxShadow = "10px 10px 5px #888888";
