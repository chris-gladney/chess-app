import { useContext } from "react";
import { PiecesContext } from "./Game";
import {
  whitePawnMovement,
  blackPawnMovement,
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
            squares[square].occupied.slice(6, 10) === "pawn" &&
            squares[square].occupied.slice(0, 5) === "white"
              ? () => {
                  whitePawnMovement(square, squares[square], squares);
                }
              : squares[square].occupied.slice(6, 10) === "pawn" &&
                squares[square].occupied.slice(0, 5) === "black"
              ? () => {
                  blackPawnMovement();
                }
              : squares[square].occupied.slice(6, 10) === "rook"
              ? () => {
                  rookMovement();
                }
              : squares[square].occupied.slice(6, 12) === "knight"
              ? () => {
                  knightMovement();
                }
              : squares[square].occupied.slice(6, 12) === "bishop"
              ? () => {
                  bishopMovement();
                }
              : squares[square].occupied.slice(6, 11) === "queen"
              ? () => {
                  queenMovement();
                }
              : squares[square].occupied.slice(6, 10) === "king"
              ? () => {
                  kingMovement();
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
