import { createContext, useState } from "react";
import Board from "./Board";
import piecesInfo from "../utils/piecesInfo";

export const PiecesContext = createContext(null);

function Game() {
  const [pieces, setpieces] = useState(piecesInfo);
  const [availableSpaces, setAvailableSpaces] = useState([]);
  
  return (
    <PiecesContext.Provider value={{ pieces, setpieces, availableSpaces, setAvailableSpaces }}>
      <Board />
    </PiecesContext.Provider>
  );
}

export default Game;
