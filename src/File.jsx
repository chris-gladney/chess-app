import Square from "./Square";

function File({ letterSquare }) {
  const numberSquares = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="file">
      {numberSquares.map((numberSquare) => {
        return (
          <Square
            key={numberSquare}
            letterSquare={letterSquare}
            numberSquare={numberSquare}
          />
        );
      })}
    </div>
  );
}

export default File;
