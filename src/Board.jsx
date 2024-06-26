import { useContext, useEffect } from "react";
import { PiecesContext } from "./Game";
import Square from "./Square";

function Board() {
  const { squares, turn } = useContext(PiecesContext);

  useEffect(() => {}, [turn]);

  let colorToStart = "black";

  return (
    <div className="board">
      {Object.keys(squares).map((square) => {
        const colorToStartClone = colorToStart;
        if (colorToStart === "white" && square[1] !== "8") {
          colorToStart = "black";
        } else if (colorToStart === "black" && square[1] !== "8") {
          colorToStart = "white";
        } else if (colorToStart === "white" && square[1] === "8") {
          colorToStart = "white";
        } else if (colorToStart === "black" && square[1] === "8") {
          colorToStart = "black";
        }
        return (
          <Square
            key={square}
            square={square}
            squareColor={colorToStartClone === "black" ? "black" : "white"}
          />
        );
      })}
      <button
        onClick={() => {
          console.log(squares, "<<< squares");
        }}
      >Click Here For Squares Info!</button>
    </div>
  );
}

export default Board;
