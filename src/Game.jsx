import { createContext, useEffect, useState } from "react";
import Board from "./Board";
import squaresInfo from "../utils/squaresInfo";

export const PiecesContext = createContext(null);

function Game() {
  const [squares, setSquares] = useState(squaresInfo);
  const [turn, setTurn] = useState("white");
  
  useEffect(() => {}, [squares]);

  return (
    <PiecesContext.Provider value={{ squares, setSquares, turn, setTurn }}>
      <Board />
    </PiecesContext.Provider>
  );
}

export default Game;
