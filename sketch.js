// UTC2113 Gaming Life
// Individual Assignment

// Minesweeper Clone
// Can be played online - https://editor.p5js.org/Gamers-Blended/sketches/eYqAk-YBi
// with reference from Coding Challenge #71: Minesweeper by The Coding Train
// link: https://www.youtube.com/watch?v=LFU5ZlrR21E
// click on the play button on the top right corner of the screen!


// makes an array of rows and columns
function make2DArray(cols, rows) {
    var arr = new Array(cols); // same as arr = []
    for (var i = 0; i < arr.length; i++) {
        // for every column, make an array with the number of rows
        arr[i] = new Array(rows);
    }
    return arr;
}


// global variables
var grid;
var cols;
var rows;


// Settings
var w = 20; // change the pixel size of each cell (20x20px) recommended to be in multiples of 20
var totalMines = 20; // change the number to set the number of mines


// Creates the game board
function setup() {
    createCanvas(w * 20 + 1, w * 20 + 1); // forms the width and height of the board
  // need to + 1 to draw the right and bottom borders

    // calculates number of rows and columns and then round down to nearest whole number
    cols = floor(width/w);
    rows = floor(height/w);
    grid = make2DArray(cols, rows);
    for (var i = 0; i < cols; i++) { // for every column
        for (var j = 0; j < rows; j++) { // for every row
            grid[i][j] = new Cell(i, j, w); // initialise every spot to be a new cell
      }
    }
  
  
  // Options to pick totalMines spots to plant the mines
  var options = []; // new array
  // go thr every spot...
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
          options.push([i, j]); // and adds each spot into option list
        }
    }
  

  for (var n = 0; n < totalMines; n ++) { // as long as number of planted mines haven't hit target
    var index = floor(random(options.length));
    // Option has a column and row in it
    var choice = options[index];
    var i = choice[0];
    var j = choice[1];
    // Deletes that spot so it's no longer an option
    options.splice(index, 1);
    grid[i][j].mine = true; // sets the spot as a mine
  }
    for (var i = 0; i < cols; i++) {
      for (var j = 0; j < rows; j++) {
          grid[i][j].countMines();
        }
      }

}


// Game over
function gameOver() {
    for (var i = 0; i < cols; i++) {
      for (var j = 0; j < rows; j++) {
        grid[i][j].revealed = true; // shows every cell's content upon game over
      }
    }
}


// Function for mouse clicks
function mousePressed() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            if (grid[i][j].contains(mouseX, mouseY)) { // checks every spot to see if it contains a mouse click
              grid[i][j].reveal(); // shows what's inside the clicked cell
            
              // if clicked on a mine
              if (grid[i][j].mine) {
                  gameOver(); // game over
                  alert("You lose... :(");
              }
          }
      }
  }
}


// To draw the background
function draw() {
    background(255); // makes background white
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].show(); // see what's in these cells      
        }
    }
}