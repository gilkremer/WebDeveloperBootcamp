var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var massageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("resetBtn");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");


easyButton.addEventListener("click", function(){
  hardButton.classList.remove("selected");
  easyButton.classList.add("selected");
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; ++i){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];  
    } else {
      squares[i].style.display = "none";
    }
  }
});

  hardButton.addEventListener("click", function(){
  easyButton.classList.remove("selected");
  hardButton.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; ++i){
      squares[i].style.backgroundColor = colors[i];  
      squares[i].style.display = "block";
    }
  });

resetButton.addEventListener("click", function(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  massageDisplay.textCpo
  for (var i = 0; i < squares.length; ++i){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor =  "steelblue"; 
  
});

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
            resetButton.textContent = "Play Again?"
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
