import { PiecesContext } from "./Game";
import { useContext, useEffect, useState } from "react";

function Square({ letterSquare, numberSquare, colorStart }) {
  const { pieces, setPieces } = useContext(PiecesContext);
  const [occupied, setOccupied] = useState(false);

  useEffect(() => {
    pieces.forEach((piece) => {
      if (piece.square === `${letterSquare}${numberSquare}`) {
        setOccupied(piece.piece);
      }
    });
  }, []);

  return (
    <div
      className={`${colorStart} square ${occupied ? occupied : ""} ${letterSquare}${numberSquare}`}
    >
      <p>{occupied}</p>
    </div>
  );
}

export default Square;
