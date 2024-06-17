import { useContext } from "react";
import { PiecesContext } from "./Game";
import { whitePawnMovement } from "../utils/whitePawnMovement";
import { blackPawnMovement } from "../utils/blackPawnMovement";
import { whiteRookMovement } from "../utils/whiteRookMovement";
import { blackRookMovement } from "../utils/blackRookMovement";
import { whiteKnightMovement } from "../utils/whiteKnightMovement";
import { blackKnightMovement } from "../utils/blackKnightMovement";
import { whiteBishopMovement } from "../utils/whiteBishopMovement";
import { blackBishopMovement } from "../utils/blackBishopMovement";
import { whiteQueenMovement } from "../utils/whiteQueenMovement";
import { blackQueenMovement } from "../utils/blackQueenMovement";
import { whiteKingMovement } from "../utils/whiteKingMovement";
import { blackKingMovement } from "../utils/blackKingMovement";
import { checkMovesForWhite } from "../utils/checkFunctions";

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
        <div
          onClick={
            squares[square].occupied.slice(6, 10) === "pawn" &&
            squares[square].occupied.slice(0, 5) === "white" && 
            turn === "white"
              ? () => {
                  const previewMovesArray = [];
                  const previewSquaresArray = [];
                  whitePawnMovement(square, squares[square], squares).forEach(
                    (moveObject) => {
                      if (checkMovesForWhite(squares, moveObject)) {
                        previewMovesArray.push(moveObject);
                        previewSquaresArray.push(moveObject.move);
                      }
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
                squares[square].occupied.slice(0, 5) === "black" && 
                turn === "black"
              ? () => {
                  blackPawnMovement();
                }
              : squares[square].occupied.slice(6, 10) === "rook" &&
                squares[square].occupied.slice(0, 5) === "white" && 
                turn === "white"
              ? () => {
                  const previewMovesArray = [];
                  const previewSquaresArray = [];
                  whiteRookMovement(square, squares[square], squares).forEach(
                    (moveObject) => {
                      if (checkMovesForWhite(squares, moveObject)) {
                        previewMovesArray.push(moveObject);
                        previewSquaresArray.push(moveObject.move);
                      }
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
              : squares[square].occupied.slice(6, 10) === "rook" &&
                squares[square].occupied.slice(0, 5) === "black" && 
                turn === "black"
              ? () => {
                  blackRookMovement();
                }
              : squares[square].occupied.slice(6, 12) === "knight" &&
                squares[square].occupied.slice(0, 5) === "white" && 
                turn === "white"
              ? () => {
                  whiteKnightMovement();
                }
              : squares[square].occupied.slice(6, 12) === "knight" &&
                squares[square].occupied.slice(0, 5) === "black" && 
                turn === "black"
              ? () => {
                  blackKnightMovement();
                }
              : squares[square].occupied.slice(6, 12) === "bishop" &&
                squares[square].occupied.slice(0, 5) === "white" && 
                turn === "white"
              ? () => {
                  const previewMovesArray = [];
                  const previewSquaresArray = [];
                  whiteBishopMovement(square, squares[square], squares).forEach(
                    (moveObject) => {
                      if (checkMovesForWhite(squares, moveObject)) {
                        previewMovesArray.push(moveObject);
                        previewSquaresArray.push(moveObject.move);
                      }
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
              : squares[square].occupied.slice(6, 12) === "bishop" &&
                squares[square].occupied.slice(0, 5) === "black" && 
                turn === "black"
              ? () => {
                  blackBishopMovement();
                }
              : squares[square].occupied.slice(6, 11) === "queen" &&
                squares[square].occupied.slice(0, 5) === "white" && 
                turn === "white"
              ? () => {
                const previewMovesArray = [];
                const previewSquaresArray = [];
                whiteQueenMovement(square, squares[square], squares).forEach(
                  (moveObject) => {
                    if (checkMovesForWhite(squares, moveObject)) {
                      previewMovesArray.push(moveObject);
                      previewSquaresArray.push(moveObject.move);
                    }
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
              : squares[square].occupied.slice(6, 11) === "queen" &&
                squares[square].occupied.slice(0, 5) === "black" && 
                turn === "black"
              ? () => {
                  blackQueenMovement();
                }
              : squares[square].occupied.slice(6, 10) === "king" &&
                squares[square].occupied.slice(0, 5) === "white" && 
                turn === "white"
              ? () => {
                  whiteKingMovement();
                }
              : squares[square].occupied.slice(6, 10) === "king" &&
                squares[square].occupied.slice(0, 5) === "black" && 
                turn === "black"
              ? () => {
                  blackKingMovement();
                }
              : undefined
          }
        >
          <p>{squares[square].occupied}</p>
        </div>
      ) : (
        <div
          className="unoccupied-square"
          onClick={
            previewSquares.includes(square)
              ? () => {
                  previewMoves.forEach((moveObject) => {
                    if (moveObject.move === square) {
                      moveObject.squaresToUpdate.forEach((square) => {
                        setSquares((prevSquaresArray) => {
                          prevSquaresArray[square.square].occupied =
                            square.occupied;
                          prevSquaresArray[square.square].specialMoves =
                            square.specialMoves;

                          return prevSquaresArray;
                        });
                      });
                    }
                  });
                  setPreviewMoves([]);
                  setPreviewSquares([]);
                  turn === "white" ? setTurn("black") : setTurn("white");
                }
              : undefined
          }
        ></div>
      )}
    </div>
  );
}

export default Square;
