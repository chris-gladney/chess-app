import { useContext, useEffect } from "react";
import { PiecesContext } from "./Game";

function Piece({ HTMLdecimal, piece }) {
  const { pieces, turn } = useContext(PiecesContext);

  useEffect(() => {}, [pieces, turn]);
  return (
    <p className={`${piece.slice(0, 5)}-piece piece ${piece}`}>
      {String.fromCodePoint(parseInt(HTMLdecimal))}
    </p>
  );
}

export default Piece;
