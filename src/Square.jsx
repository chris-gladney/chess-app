function Square({ letterSquare, numberSquare, colorStart }) {
  return (
    <div
      className={`${colorStart} square unused ${letterSquare} ${numberSquare}`}
    ></div>
  );
}

export default Square;
