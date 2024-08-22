"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  initializeGame,
  handleComputerMove,
  handlePlayerMove,
  checkGameState,
} from "@/logic/x-o/GameLogic";
import PlayerControls from "@/components/PlayerControls";
import ScoreBoard from "@/components/ScoreBoard";
import Board from "@/components/Board";
import Transition from "@/components/Transition";

export default function Page() {
  const [game, setGame] = useState(initializeGame());
  const [board, setBoard] = useState(game.board);
  const [player, setPlayer] = useState("1");
  const [firstMove, setFirstMove] = useState(0);
  const [score, setScore] = useState([0, 0]);
  const [currentPlayer, setCurrentPlayer] = useState("x");
  const router = useRouter();

  const { win, isFinish } = checkGameState(board);

  useEffect(() => {
    if (win[0]) {
      if (win[1] === "o") setScore([score[0], score[1] + 1]);
      else setScore([score[0] + 1, score[1]]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [win[0]]);

  useEffect(() => {
    if (player === "1" && currentPlayer === "x" && !win[0]) {
      const {
        board: newBoard,
        nextMove,
        firstMove: newFirstMove,
      } = handleComputerMove(board, player, firstMove);
      setBoard(newBoard);
      setCurrentPlayer(nextMove);
      setFirstMove(newFirstMove);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board, player, firstMove, win[0], currentPlayer]);

  const clickHandler = (i, j) => {
    if (!win[0] && board[i][j] === "") {
      const newBoard = handlePlayerMove(board, i, j, currentPlayer);
      setBoard(newBoard.board);
      setCurrentPlayer(currentPlayer === "o" ? "x" : "o");
    }
  };

  const playerHandler = (e) => {
    if (e.target.name === "3") {
      setBoard(initializeGame().board);
      setFirstMove(0);
      setCurrentPlayer("x");
    } else {
      setPlayer(e.target.name);
      setBoard(initializeGame().board);
      setCurrentPlayer("x");
    }
  };

  const scoreHandler = (e) => {
    if (e.target.name === "3") {
      setScore([0, 0]);
    }
  };

  return (
    <div className="h-full translate-y-80">
      <div className="flex flex-col items-center gap-2 top-1/2 left-1/2 relative -translate-x-1/2 -translate-y-1/2 justify-around md:flex-row md:gap-10">
        <ScoreBoard score={score} onReset={scoreHandler} />
        <Transition y1={-350} y2={30} delay={0.2}>
          <Board
            board={board}
            clickHandler={clickHandler}
            win={win}
            isFinish={isFinish}
          />
          <Transition
            className={"flex justify-center"}
            y1={200}
            y2={0}
            r1={50}
            r2={0}
            delay={0.5}
          >
            <button className="w-40  my-9" onClick={() => router.back()}>
              Back
            </button>
          </Transition>
        </Transition>
        <PlayerControls player={player} onPlayerChange={playerHandler} />

        {isFinish && (
          <div className="text fixed text-center rounded-3xl md:translate-y-52">
            <button
              name="3"
              className="border-2 rounded-3xl"
              onClick={playerHandler}
            >
              PLAY AGAIN
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
