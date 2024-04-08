import { useContext, useEffect } from "react";
import Square from "./Square";
import { PiecesContext } from "./Game";

function File({ letterSquare, colorSquareStart }) {
  const { pieces } = useContext(PiecesContext);
  
  useEffect(() => {}, [pieces]);

  const numberSquares = [1, 2, 3, 4, 5, 6, 7, 8];
  let startingSquareOfFile = colorSquareStart;
  return (
    <div className="file">
      {numberSquares.map((numberSquare) => {
        const colorStart = startingSquareOfFile;
        if (startingSquareOfFile === "white") {
          startingSquareOfFile = "black";
        } else {
          startingSquareOfFile = "white";
        }
        return (
          <Square
            key={numberSquare}
            letterSquare={letterSquare}
            numberSquare={numberSquare}
            colorStart={colorStart}
          />
        );
      })}
    </div>
  );
}

export default File;
