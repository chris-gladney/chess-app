import { createContext, useState } from "react";
import Board from "./Board";
import piecesInfo from "../utils/piecesInfo";

export const PiecesContext = createContext(null);

function Game() {
  const [pieces, setPieces] = useState([...piecesInfo]);
  const [pieceObjectToMove, setPieceObjectToMove] = useState({});
  const [availableSpaces, setAvailableSpaces] = useState([]);
  const [turn, setTurn] = useState("white");

  return (
    <PiecesContext.Provider
      value={{
        pieces,
        setPieces,
        availableSpaces,
        setAvailableSpaces,
        pieceObjectToMove,
        setPieceObjectToMove,
        turn,
        setTurn,
      }}
    >
      <Board />
      <button
        onClick={() => {
          console.log(pieces);
        }}
      >Show Pieces Array</button>
    </PiecesContext.Provider>
  );
}

export default Game;
