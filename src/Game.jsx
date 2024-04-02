import { createContext, useState } from "react";
import Board from "./Board";
import piecesInfo from "../utils/piecesInfo";

export const PiecesContext = createContext(null);

function Game() {
  const [pieces, setPieces] = useState(piecesInfo);
  const [pieceObjectToMove, setPieceObjectToMove] = useState({});
  const [availableSpaces, setAvailableSpaces] = useState([]);

  return (
    <PiecesContext.Provider
      value={{
        pieces,
        setPieces,
        availableSpaces,
        setAvailableSpaces,
        pieceObjectToMove,
        setPieceObjectToMove,
      }}
    >
      <Board />
    </PiecesContext.Provider>
  );
}

export default Game;
