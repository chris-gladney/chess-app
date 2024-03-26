import File from "./File";

function Board() {
  const letterSquares = ["A", "B", "C", "D", "E", "F", "G", "H"];

  return (
    <div className="board">
      {letterSquares.map((file) => {
        let colorSquareStart = "";
        if (letterSquares.indexOf(file) % 2 === 0) {
          colorSquareStart = "white";
        } else {
          colorSquareStart = "black";
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
