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
  const {
    squares,
    setSquares,
    previewMoves,
    setPreviewMoves,
    turn,
    setTurn,
    previewSquares,
    setPreviewSquares,
  } = useContext(PiecesContext);

  return (
    <div
      className={
        previewSquares.includes(square)
          ? `${squareColor}-square preview-square`
          : `${squareColor}-square`
      }
      onClick={previewSquares.includes(square) ? () => {} : undefined}
    >
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
                  const previewMovesArray = [];
                  const previewSquaresArray = [];
                  whitePawnMovement(square, squares[square], squares).forEach(
                    (moveObject) => {
                      previewMovesArray.push(moveObject);
                      previewSquaresArray.push(moveObject.move);
                    }
                  );
                  if (previewMoves.length > 0) {
                    setPreviewMoves([]);
                    setPreviewSquares([]);
                  } else {
                    setPreviewMoves(previewMovesArray);
                    setPreviewSquares(previewSquaresArray);
                  }
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
        <div
          className="unoccupied-square"
          onClick={
            previewSquares.includes(square)
              ? () => {
                  previewMoves.forEach((moveObject) => {
                    if (moveObject.move === square) {
                      moveObject.squaresToUpdate.forEach((square) => {
                        // setSquares((prevSquaresArray) => {
                        // })
                      });
                    }
                  });
                  console.log(previewMoves[0].squaresToUpdate);
                }
              : undefined
          }
        ></div>
      )}
    </div>
  );
}

export default Square;
