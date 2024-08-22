class GameState {
  constructor(board) {
    this.board = board;
  }
  static gameStateNewGame(board) {
    let newboard = [];

    board.map((row, i) => {
      const newrow = [];
      row.map((col, j) => {
        newrow.push(col);
      });
      newboard.push(newrow);
    });

    return new GameState(newboard);
  }
}

export default GameState;
