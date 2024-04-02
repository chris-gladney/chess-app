import { PiecesContext } from "./Game";
import { useContext, useEffect, useState } from "react";
import Piece from "./Piece";
import { calculateSpacesWhiteCanMove } from "../utils/movementsFunctions";

function Square({ letterSquare, numberSquare, colorStart }) {
  const {
    pieces,
    setPieces,
    availableSpaces,
    setAvailableSpaces,
    pieceObjectToMove,
    setPieceObjectToMove,
  } = useContext(PiecesContext);
  const [occupied, setOccupied] = useState(false);
  const [pieceInfo, setPieceInfo] = useState(null);

  useEffect(() => {
    pieces.forEach((piece) => {
      if (piece.square === `${letterSquare}${numberSquare}`) {
        setOccupied({ piece: piece.piece, decimalCode: piece.decimalCode });
        setPieceInfo(piece);
      }
    });
  }, [pieces]);

  return (
    <div
      className={`${
        availableSpaces.includes(`${letterSquare}${numberSquare}`)
          ? "available-to-move"
          : colorStart
      } square ${occupied ? occupied.piece : ""} ${
        occupied ? "used" : "unused"
      } ${letterSquare}${numberSquare}`}
      onClick={
        occupied
          ? () => {
              if (availableSpaces.length === 0) {
                setAvailableSpaces(
                  calculateSpacesWhiteCanMove(pieceInfo, pieces)
                );
                setPieceObjectToMove(pieceInfo);
              } else {
                setAvailableSpaces([]);
                setPieceObjectToMove({});
              }
            }
          : availableSpaces.includes(`${letterSquare}${numberSquare}`)
          ? () => {
              for (let i = 0; i < pieces.length; i++) {
                if (pieces[i].square === pieceObjectToMove.square) {
                  setPieces((originalPiecesArray) => {
                    originalPiecesArray[
                      i
                    ].square = `${letterSquare}${numberSquare}`;
                    return originalPiecesArray;
                  });
                }
              }
            }
          : undefined
      }
    >
      {occupied ? (
        <Piece HTMLdecimal={occupied.decimalCode} piece={occupied.piece} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Square;
