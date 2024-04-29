import { useContext } from "react";
import { PiecesContext } from "./Game";

function Square({ square, squareColor }) {
  const { squares } = useContext(PiecesContext);
  return (
    <div className={`${squareColor}-square`}>
      {square[0] === "A" || square[1] === "1" ? (
        <p className="square-coordinate">{square}</p>
      ) : (
        ""
      )}
      {squares[square].occupied ? <p>{squares[square].occupied}</p> : ""}
    </div>
  );
}

export default Square;
