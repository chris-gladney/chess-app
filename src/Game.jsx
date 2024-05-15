import { createContext, useEffect, useState } from "react";
import Board from "./Board";
import squaresInfo from "../utils/squaresInfo";

export const PiecesContext = createContext(null);

function Game() {
  const [squares, setSquares] = useState(squaresInfo);
  const [turn, setTurn] = useState("white");
  const [previewMoves, setPreviewMoves] = useState([]);
  const [previewSquares, setPreviewSquares] = useState([]);

  useEffect(() => {}, [squares]);

  return (
    <PiecesContext.Provider
      value={{
        squares,
        setSquares,
        turn,
        setTurn,
        previewMoves,
        setPreviewMoves,
        previewSquares,
        setPreviewSquares,
      }}
    >
      <Board />
    </PiecesContext.Provider>
  );
}

export default Game;
