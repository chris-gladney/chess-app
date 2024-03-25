import File from "./File";

function Board() {
  const letterSquares = ["A", "B", "C", "D", "E", "F", "G", "H"];

  return (
    <div className="board">
      {letterSquares.map((file) => {
        return <File key={file} letterSquare={file} />;
      })}
    </div>
  );
}

export default Board;
