var colors = generateRandomColors(6);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var massageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;
 
for (var i = 0; i < squares.length; ++i){
    // add random color to all squars
    squares[i].style.backgroundColor = colors[i];
    // add click event to all squars
    squares[i].addEventListener("click", function(){
        // grab the clicked square color
        var clickedColor = this.style.backgroundColor;
        // compare color to picked color
        if(clickedColor === pickedColor){
            massageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor; 
        } else {
            this.style.backgroundColor = "#232323";
            massageDisplay.textContent = "Try Again!";
        }
    });
}

function changeColors(color){
    for (var i = 0; i < squares.length; ++i){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for (var i = 0; i < num; ++i){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}