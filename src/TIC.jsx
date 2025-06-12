import React, { useState } from "react";

const ini = () => Array(9).fill(null);
function TIC() {
  const [Board, setBoard] = useState(ini());
  const [isNext, setIsNext] = useState(true);

  function handleevent(index) {
    const winner = winners(Board);
    if (winner || Board[index]) return;
    const newboard = [...Board];
    newboard[index] = isNext ? "X" : "O";
    setBoard(newboard);
    setIsNext(!isNext);
  }
  function showuser() {
    const winner1 = winners(Board);
    if (winner1) {
      return `${winner1} winns`;
    }
    if (!Board.includes(null)) return `Game draw`;
    return `Player ${isNext ? "X" : "O"} Turn`;
  }
  function resetusr() {
    setBoard(ini());
    setIsNext(true);
  }
  function winners(currentboard) {
    for (let i = 0; i < winning.length; i++) {
      const [a, b, c] = winning[i];
      if (
        currentboard[a] &&
        currentboard[a] === currentboard[b] &&
        currentboard[a] === currentboard[c]
      ) {
        return currentboard[a];
      }
    }
    return null;
  }
  const winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return (
    <div className="game">
      <div className="chance">
        {showuser()}
        <button className="reset" onClick={resetusr}>
          Reset Game
        </button>
      </div>

      <div className="status">
        {Board.map((b, index) => {
          return (
            <button
              className="cell"
              key={index}
              onClick={() => handleevent(index)}
              disabled={b !== null}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default TIC;
