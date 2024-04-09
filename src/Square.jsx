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
    turn,
    setTurn,
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
  }, [turn]);

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
              const pieceObjectToCompare = pieceObjectToMove;
              setAvailableSpaces([]);
              setPieceObjectToMove({});
              for (let i = 0; i < pieces.length; i++) {
                if (pieces[i].square === pieceObjectToCompare.square && pieceObjectToCompare.piece === pieces[i].piece) {
                  setPieces((originalPieceArray) => {
                    for (let j = 0; j < originalPieceArray.length; j++) {
                      if (originalPieceArray[j].square === pieces[i].square) {
                        originalPieceArray[
                          j
                        ].square = `${letterSquare}${numberSquare}`;
                        break;
                      }
                    }
                    return originalPieceArray;
                  });
                  break;
                }
              }
              turn === "white" ? setTurn("black") : setTurn("white");
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
