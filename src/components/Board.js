// Board.js

export default function Board({ board, clickHandler, win, isFinish }) {
  return (
    <div className="relative">
      {win[0] ? (
        <div
          className={`${win[1]} ${
            win[2] === 1 ? "h" : win[2] === 3 ? "m" : "v"
          } x${win[3]} y${win[4]}`}
        ></div>
      ) : (
        ""
      )}
      <div className={`board2 ${isFinish ? "finish" : ""}`}>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={`cell2 `}
                onClick={() => clickHandler(rowIndex, cellIndex)}
              >
                {cell == "x" ? "X" : cell == "o" ? "O" : ""}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
