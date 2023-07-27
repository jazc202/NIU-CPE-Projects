/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

class Game { 
  constructor (height, width, player1, player2) {
    this.width = width
    this.height = height
    this.board = []
    this.player1 = player1
    this.player2 = player2
    this.currPlayer = this.player1

    this.gameOver = false
  }
  makeBoard() {
    console.log('function makeBoard()')
    for (let y = 0; y < this.height; y++) {
      this.board.push(Array.from({ length: this.width }));
    }
  }

  makeHtmlBoard() {
    console.log('function makeHtmlBoard()')
    const board = document.getElementById('board');
  
    // make column tops (clickable area for adding a piece to that column)
    const top = document.createElement('tr');
    top.setAttribute('id', 'column-top');
    top.addEventListener('click', this.handleClick.bind(this));
  
    for (let x = 0; x < this.width; x++) {
      const headCell = document.createElement('td');
      headCell.setAttribute('id', x);
      top.append(headCell);
    }
  
    board.append(top);
  
    // make main part of board
    for (let y = 0; y < this.height; y++) {
      const row = document.createElement('tr');
  
      for (let x = 0; x < this.width; x++) {
        const cell = document.createElement('td');
        cell.setAttribute('id', `${y}-${x}`);
        row.append(cell);
      }
  
      board.append(row);
    }
  };

  findSpotForCol(x) {
    console.log('function findSpotForCol(x)')
    for (let y = this.height - 1; y >= 0; y--) {
      if (!this.board[y][x]) {
        return y;
      }
    }
    return null;
  }

  placeInTable(y, x) {
    console.log('function placeInTable(y, x)')
    const piece = document.createElement('div');
    piece.classList.add('piece')
    piece.style.top = -50 * (y + 2);
    piece.style.backgroundColor = this.currPlayer.color  
    
    const spot = document.getElementById(`${y}-${x}`);
    spot.append(piece);
  }

  endGame(msg) {
    console.log('function endGame(msg)')

    setTimeout(function() {
      alert(msg)
    }, 1)

    
    this.gameOver = true
  }

  handleClick(evt) {
    console.log('function handleClick(evt)')
    // get x from ID of clicked cell
    const x = +evt.target.id;
  
    // get next spot in column (if none, ignore click)
    const y = this.findSpotForCol(x);
    if (y === null) {
      return;
    }
  
    // place piece in board and add to HTML table

    if (this.gameOver === false) {
      this.board[y][x] = this.currPlayer;
      this.placeInTable(y, x);
      if (this.checkForWin()) {
        return this.endGame(`${this.currPlayer.color} won!`);
      }
      
      // check for tie
      if (this.board.every(row => row.every(cell => cell))) {
        return this.endGame('Tie!');
      }
        
      // switch players
      this.currPlayer = this.currPlayer === this.player1 ? this.player2 : this.player1;
    }
  
    }
    
    
    // check for win

  _win(cells) {
    console.log(`function _win(cells)`)
    // console.log(this)
    // console.log(`height: ${height}`)

    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < this.height &&
        x >= 0 &&
        x < this.width &&
        this.board[y][x] === this.currPlayer
    );
  }
  checkForWin() {
    console.log('function checkForWin()')
    // console.log(this)
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        // get "check list" of 4 cells (starting here) for each of the different
        // ways to win
        const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
        const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
        const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
        const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
  
        // find winner (only checking each win-possibility as needed)
        if (this._win(horiz) || this._win(vert) || this._win(diagDR) || this._win(diagDL)) {
          return true;
        }
      }
    }
  }
}

class Player{
  constructor(color) {
    this.color = color
    // this.player = p
  }

  // setColor(piece) {
  //   // let piece = document.createElement('div');
  //   return 
  // }
}




let startButton = document.getElementById('newGame')
startButton.addEventListener('click', function() {
  let p1 = document.getElementById('player1')
  let player1color = p1.value
  let p2 = document.getElementById('player2')
  let player2color = p2.value

  let player1 = new Player(player1color)
  let player2 = new Player(player2color)
  let game = new Game(6, 7, player1, player2)
  game.makeBoard()
  game.makeHtmlBoard()
  
})


