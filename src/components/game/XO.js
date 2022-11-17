import React, { useEffect, useState } from "react";
import "../game/XO.css";

export default function XO() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("x");
  const changeTitle = (idx) => {
    // console.log(player, i);
    if (board[idx] != "") return;
    const result = setBoard((board) =>
      board.map((val, i) => {
        if (i === idx) {
          return player;
        } else {
          return val;
        }
      })
    );
    setPlayer(player === "x" ? "o" : "x");
  };
  const checkWin = () => {
    console.log("checking board");
  };
  useEffect(() => {
    checkWin();
  }, [board]);
  return (
    <>
      <p>Current Player is --- {player}</p>
      <div className="board">
        {board.map((sq, i) => {
          return (
            <div className="board__tiles" onClick={() => changeTitle(i)}>
              {sq}
            </div>
          );
        })}
      </div>
    </>
  );
}
