import { PiecesContext } from "./Game";
import { useContext, useEffect, useState } from "react";
import Piece from "./Piece";
import { calculateSpacesWhiteCanMove } from "../utils/movementsFunctions";

function Square({ letterSquare, numberSquare, colorStart }) {
  const { pieces, setPieces, availableSpaces, setAvailableSpaces } =
    useContext(PiecesContext);
  const [occupied, setOccupied] = useState(false);
  const [pieceInfo, setPieceInfo] = useState(null);

  useEffect(() => {
    pieces.forEach((piece) => {
      if (piece.square === `${letterSquare}${numberSquare}`) {
        setOccupied({ piece: piece.piece, decimalCode: piece.decimalCode });
        setPieceInfo(piece);
      }
    });
  }, []);

  return (
    <div
      className={`${
        availableSpaces.includes(`${letterSquare}${numberSquare}`)
          ? "available-to-move"
          : colorStart
      } square ${occupied ? occupied.piece : ""} ${
        occupied ? "used" : "unused"
      } ${letterSquare}${numberSquare}`}
      onClick={() => {
        if (availableSpaces.length === 0) {
          setAvailableSpaces(calculateSpacesWhiteCanMove(pieceInfo, pieces));
        } else {
          setAvailableSpaces([]);
        }
      }}
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
