import { createContext, useState } from "react";
import Board from "./Board";
import piecesInfo from "../utils/utils";

export const PiecesContext = createContext(null);

function Game() {
  const [pieces, setpieces] = useState(piecesInfo);
  return (
    <PiecesContext.Provider value={{ pieces, setpieces }}>
      <Board />
    </PiecesContext.Provider>
  );
}

export default Game;
