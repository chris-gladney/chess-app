import { useContext } from "react";
import { PiecesContext } from "./Game";
import {
  pawnMovement,
  rookMovement,
  knightMovement,
  bishopMovement,
  kingMovement,
  queenMovement,
} from "../utils/movementsFunctions";

function Square({ square, squareColor }) {
  const { squares } = useContext(PiecesContext);
  return (
    <div className={`${squareColor}-square`}>
      {square[0] === "A" || square[1] === "1" ? (
        <p className="square-coordinate">{square}</p>
      ) : (
        ""
      )}
      {squares[square].occupied ? (
        <p
          onClick={
            squares[square].occupied.slice(6, 10) === "pawn"
              ? () => {
                pawnMovement()
              }
              : undefined
          }
        >
          {squares[square].occupied}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Square;
