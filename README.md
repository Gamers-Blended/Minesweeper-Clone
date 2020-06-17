# Minesweeper-Clone
An attempted clone of the puzzle game Minesweeper written in JavaScript & HTML/CSS. <br>
References:
- Code from [The Coding Train's Coding Challenge #71: Minesweeper by The Coding Train](https://www.youtube.com/watch?v=LFU5ZlrR21E) tutorial on YouTube <br>
- Mario coin collected & Pac Man game over audio from [Orange Free Sounds](http://www.orangefreesounds.com/)
- Guile's Theme from [YouTube](https://www.youtube.com/watch?v=gG3pFUxzLIg)
- Victory Fanfare from [YouTube](https://www.youtube.com/watch?v=PZ_7ipJ6Cx8)

[Click here to play the game online (with sound) at p5!](https://editor.p5js.org/Gamers-Blended/sketches/eYqAk-YBi)

## Gameplay
### Board

The objective is to uncover all tiles that don't cover a mine. <br>
The number indicated on an empty tile tells the number of mines adjacent to it! <br>

The game ends once the players uncovers a tile with a mine on it. <br>

### Controls
Left-click on a title to uncover its contents!

### Known Bugs
Sometimes, the first tile uncovered by the player could have a mine in it. <br>
No code to mark a tile with a flag. <br>
Cheatcode can't be activated at the very start of the game. At least 1 tile must be uncovered so that cheatcode can be used. <br>
No code to signify that the player has won.

## Instructions to build this game (no sound)
1. Clone or download this repository
2. (Optional) Set the number of mines in sketch.js, line 30 (totalMines)
3. Save the file
4. Open the 'index.html' file
