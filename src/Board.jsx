import { useContext, useEffect } from "react";
import File from "./File";
import { PiecesContext } from "./Game";

function Board() {
  const letterSquares = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const { pieces, turn } = useContext(PiecesContext);

  useEffect(() => {}, [pieces, turn]);

  return (
    <div className="board">
      {letterSquares.map((file) => {
        let colorSquareStart = "";
        if (letterSquares.indexOf(file) % 2 === 0) {
          colorSquareStart = "black";
        } else {
          colorSquareStart = "white";
        }
        return (
          <File
            key={file}
            letterSquare={file}
            colorSquareStart={colorSquareStart}
          />
        );
      })}
    </div>
  );
}

export default Board;
