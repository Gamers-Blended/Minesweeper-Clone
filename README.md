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
![Board](https://github.com/Gamers-Blended/Minesweeper-Clone/blob/master/ReadMeFiles/Board.PNG)

The objective is to uncover all tiles that don't cover a mine. <br>
![Demo](https://github.com/Gamers-Blended/Minesweeper-Clone/blob/master/ReadMeFiles/Demo.gif)

<br>

The number indicated on an empty tile tells the number of mines adjacent to it! <br>
![RevealedBoard](https://github.com/Gamers-Blended/Minesweeper-Clone/blob/master/ReadMeFiles/RevealedBoard.PNG)

<br>

The game ends once the players uncovers a tile with a mine on it. <br>
Click on the 'Reset' button to start a new round. <br>
![Reset](https://github.com/Gamers-Blended/Minesweeper-Clone/blob/master/ReadMeFiles/Reset.gif)

### Controls
Left-click on a title to uncover its contents! <br>
Press Enter to reveal all mines! <br>
![CheatCode](https://github.com/Gamers-Blended/Minesweeper-Clone/blob/master/ReadMeFiles/CheatCode.gif)

### Known Bugs
Sometimes, the first tile uncovered by the player could have a mine in it. <br>
No code to mark a tile with a flag. <br>
Cheatcode can't be activated right at the start of the game (including after a reset). Players need to click anywhere on the screen before the cheatcode can be used. <br>
No code to signify that the player has won.

## Instructions to build this game (no sound)
1. Clone or download this repository
2. (Optional) Set the number of mines in sketch.js, line 30 (totalMines)
3. Save the file
4. Open the 'index.html' file
