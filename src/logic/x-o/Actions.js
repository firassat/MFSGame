import GameState from "./GameState";

class Action {
  checkWin(board) {
    let b = [0, 0];

    board.map((row, i) => {
      row.map((cell, j) => {
        if (
          j === 0 &&
          cell === "x" &&
          board[i][j + 1] === "x" &&
          board[i][j + 2] === "x"
        )
          b = [1, "x", 0, i, j];
        if (
          j === 0 &&
          cell === "o" &&
          board[i][j + 1] === "o" &&
          board[i][j + 2] === "o"
        )
          b = [1, "o", 0, i, j];
        if (
          i === 0 &&
          cell === "o" &&
          board[i + 1][j] === "o" &&
          board[i + 2][j] === "o"
        )
          b = [1, "o", 1, i, j];
        if (
          i === 0 &&
          cell === "x" &&
          board[i + 1][j] === "x" &&
          board[i + 2][j] === "x"
        )
          b = [1, "x", 1, i, j];
        if (
          i === 0 &&
          j === 0 &&
          cell === "x" &&
          board[i + 1][j + 1] === "x" &&
          board[i + 2][j + 2] === "x"
        )
          b = [1, "x", 3, 0];
        if (
          i === 0 &&
          j === 0 &&
          cell === "o" &&
          board[i + 1][j + 1] === "o" &&
          board[i + 2][j + 2] === "o"
        )
          b = [1, "o", 3, 0];
        if (
          i === 2 &&
          j === 0 &&
          cell === "o" &&
          board[i - 1][j + 1] === "o" &&
          board[i - 2][j + 2] === "o"
        )
          b = [1, "o", 3, 1];
        if (
          i === 2 &&
          j === 0 &&
          cell === "x" &&
          board[i - 1][j + 1] === "x" &&
          board[i - 2][j + 2] === "x"
        )
          b = [1, "x", 3, 1];
      });
    });

    if (b[0]) return b;
    else return [false];
  }

  check(board, index) {
    let b = 0;
    if (index.x > board[0].length && index.y > board.length) b = 1;
    if (board[index.x][index.y] !== "") b = 1;
    if (b) return false;
    else return true;
  }

  clickHandel(board, index, char) {
    const newGame = GameState.gameStateNewGame(board);
    if (this.check(board, index)) {
      newGame.board[index.x][index.y] = char;
    }
    return newGame;
  }

  nextState(board, char) {
    const allnext = [];
    board.map((row, i) => {
      row.map((cell, j) => {
        const newGame = GameState.gameStateNewGame(board);
        if (cell === "") {
          newGame.board[i][j] = char;
          allnext.push(newGame);
        }
      });
    });
    return allnext;
  }

  evaluate(board) {
    if (this.checkWin(board)[0]) {
      if (this.checkWin(board)[1] === "x") return Number.MAX_VALUE;
      else return Number.MIN_VALUE;
    } else return 0;
  }

  isFinish(board) {
    let b = 0;
    let c = 1;
    if (this.checkWin(board)[0]) b = 1;
    else
      board.map((row, i) => {
        row.map((cell, j) => {
          if (cell === "") c = 0;
        });
      });

    if (c || b) return true;
    else return false;
  }
}

export default Action;
