import React, { useEffect, useState } from "react";

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function Square({ value, onClick }) {
    return (
      <button
        className="border-solid border-2 bg-red-100 border-red-300 h-20 w-20 font-bold text-3xl"
        onClick={onClick}
      >
        {value}
      </button>
    );
  }
  function handleReset() {
    setSquares(Array(9).fill(""));
    isXTurn(true);
  }

  function getWinner(squares) {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let index = 0; index < winningPattern.length; index++) {
      const [x, y, z] = winningPattern[index];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  }
  function handleClick(currentSquare) {
    let cpySquares = [...squares];
    if (getWinner(cpySquares) || cpySquares[currentSquare]) return;
    cpySquares[currentSquare] = isXTurn ? "X" : "O";
    setSquares(cpySquares);
    setIsXTurn(!isXTurn);
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("It's A Draw, Please Restart The Game");
    } else if (getWinner(squares)) {
      setStatus(`The Winner is ${getWinner(squares)} Please Restart`);
    } else {
      setStatus(isXTurn ? "It's X's Turn" : "It's O's Turn");
    }
  }, [squares, isXTurn]);

  //   console.log(squares);

  return (
    <div className="ticTacToeContainer items-center flex flex-col mt-28">
      <div className="rows flex">
        <Square onClick={() => handleClick(0)} value={squares[0]} />
        <Square onClick={() => handleClick(1)} value={squares[1]} />
        <Square onClick={() => handleClick(2)} value={squares[2]} />
      </div>
      <div className="rows flex">
        <Square onClick={() => handleClick(3)} value={squares[3]} />
        <Square onClick={() => handleClick(4)} value={squares[4]} />
        <Square onClick={() => handleClick(5)} value={squares[5]} />
      </div>
      <div className="rows flex">
        <Square onClick={() => handleClick(6)} value={squares[6]} />
        <Square onClick={() => handleClick(7)} value={squares[7]} />
        <Square onClick={() => handleClick(8)} value={squares[8]} />
      </div>
      <h1 className="text-3xl my-3">{status}</h1>
      <button
        className="py-2 px-4 bg-red-500 text-white rounded"
        onClick={handleReset}
      >
        Restart
      </button>
    </div>
  );
};

export default TicTacToe;
