// Separate file for the Cell function
function Cell(i, j, w) {
    this.i = i;
    this.j = j;

    // calculates x and y from index given
    this.x = i * w;
    this.y = j * w;
    this.w = w; // size of cell
    this.neigbourCount = 0;
    
    this.mine = false;
    this.revealed = false; // content of cells not shown at start of game
  }
  
  // What happens when a cell is clicked
  Cell.prototype.show = function() {
    stroke(0);
    noFill();
    rect(this.x, this.y, this.w, this.w);  
    

    if (this.revealed) {
      // if cell contains a mine
      if (this.mine) { // draws mine
        fill("red"); // sets the colour of mine to red (127 - grey)
        ellipse(this.x + this.w*0.5, this.y + this.w*0.5, this.w * 0.5); // mine represented by a ellipse in the center
      }

      // if cell doesn't contains a mine
      else { // draws grey rectangle
        fill(200); // sets the colour of the empty cells
        rect(this.x, this.y, this.w, this.w);
        if (this.neighbourCount > 0) { 
          textAlign(CENTER); // display number of nearby mines
          fill(0);
          text(this.neighbourCount, this.x + this.w*0.5, this.y + this.w - 6);
        }
      }
    }
  }
  

  // to find number of nearby mines
  Cell.prototype.countMines = function() {
    
    // case 1: clicked cell is a mine
    if (this.mine) {
      this.neighborCount = -1; // irrelevent since want to count cells that are mines
      return;
    }
    
    // case 2: clicked cell is not a mine
    var total = 0; // counter
    
    // check neigbouring cells 1 unit left, right, up, down
    for (var xoffset = -1; xoffset <= 1; xoffset ++){
      for (var yoffset = -1; yoffset <= 1; yoffset ++) {
        var i = this.i + xoffset;
        var j = this.j + yoffset;
        if (i > -1 && i < cols && j > -1 && j < rows) { // if off the grid, ignore it
          var neighbour = grid[i][j]; // loops thr surrounding cells
          if (neighbour.mine) {
            total ++;
          }
        }
      }
    }
    this.neighbourCount = total; // sets the total number of nearby mines
  }
  
  
  // does this cell contains a point?
  Cell.prototype.contains = function(x, y) {
    // check if click inside the individual cells
    return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
  }  
  
  
  // Reveal function
  Cell.prototype.reveal = function() {
    this.revealed = true;
    if (this.neighbourCount == 0) {
      this.floodFill();
    }
  } 
  
  
  // If clicked on empty cell, reveal adjacent empty cells as well
  Cell.prototype.floodFill = function() {
    for (var xoffset = -1; xoffset <= 1; xoffset ++){
      for (var yoffset = -1; yoffset <= 1; yoffset ++) {
        var i = this.i + xoffset;
        var j = this.j + yoffset;
        if (i > -1 && i < cols && j > -1 && j < rows) {
          var neighbour = grid[i][j]; // loops thr surrounding cells
          if (!neighbour.mine && !neighbour.revealed) {
            neighbour.reveal();
          }
        }
      }
    }
  }


  // Win condition
  Cell.prototype.checkWin = function() {
    if (numUnopenedCells == totalMines) {
      alert("You Win! :)");
      }
    }