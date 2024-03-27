import { PiecesContext } from "./Game";
import { useContext, useEffect, useState } from "react";
import Piece from "./Piece";

function Square({ letterSquare, numberSquare, colorStart }) {
  const { pieces, setPieces } = useContext(PiecesContext);
  const [occupied, setOccupied] = useState(false);

  useEffect(() => {
    pieces.forEach((piece) => {
      if (piece.square === `${letterSquare}${numberSquare}`) {
        setOccupied({ piece: piece.piece, decimalCode: piece.decimalCode });
      }
    });
  }, []);

  return (
    <div
      className={`${colorStart} square ${
        occupied ? occupied.piece : ""
      } ${occupied ? "used" : "unused"} ${letterSquare}${numberSquare}`}
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
