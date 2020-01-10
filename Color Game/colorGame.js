var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var modeButton = document.querySelectorAll(".mode");
var resetButton = document.getElementById("resetBtn");
var massageDisplay = document.getElementById("message");
var colorDisplay = document.getElementById("colorDisplay");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupSquares(){
    for (var i = 0; i < squares.length; ++i){
        // add click event to all squars
        squares[i].addEventListener("click", function(){
            // grab the clicked square color
            var clickedColor = this.style.backgroundColor;
            // compare color to picked color
            if(clickedColor === pickedColor){
                massageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor; 
            } else {
                this.style.backgroundColor = "#232323";
                massageDisplay.textContent = "Try Again!";
            }
        });
    }
}

function setupModeButtons(){
    for(var i = 0; i < modeButton.length; i++){
        modeButton[i].addEventListener("click", function(){
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            reset();
        });
    }
}

function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New ColorS"
    massageDisplay.textContent = "";
    for (var i = 0; i < squares.length; ++i){
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor =  "steelblue"; 
}

resetButton.addEventListener("click", function(){
    reset();
});

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