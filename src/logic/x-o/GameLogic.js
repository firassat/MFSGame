// GameLogic.js
import GameState from "@/logic/x-o/GameState";
import Actions from "@/logic/x-o/Actions";
import MinMax from "@/logic/x-o/MinMax";

export const initializeGame = () => {
  return new GameState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
};

export const handleComputerMove = (board, player, firstMove) => {
  const action = new Actions();
  const minmax = new MinMax();

  if (player === "1" && firstMove === 0) {
    board[1][1] = "x";
    return { board, nextMove: "o", firstMove: 1 };
  } else if (player === "1" && firstMove === 1) {
    let x = Math.floor(Math.random() * 3);
    let y = Math.floor(Math.random() * 3);
    if (x === 1 && y === 1) x++;
    if (board[x][y] === "") {
      board[x][y] = "x";
      return { board, nextMove: "o", firstMove: 2 };
    }
  } else if (player === "1" && firstMove === 2) {
    const nboard = minmax.max(new GameState(board));
    return { board: nboard[0].board, nextMove: "o", firstMove: firstMove };
  }

  return { board, nextMove: "x", firstMove: firstMove };
};

export const handlePlayerMove = (board, i, j, currentPlayer) => {
  const action = new Actions();
  return action.clickHandel(board, { x: i, y: j }, currentPlayer);
};

export const checkGameState = (board) => {
  const action = new Actions();
  return {
    win: action.checkWin(board),
    isFinish: action.isFinish(board),
  };
};
