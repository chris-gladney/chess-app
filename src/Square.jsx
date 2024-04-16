function Square({ square, squareColor }) {
  return (
    <div className={`${squareColor}-square`}>
      <p>{square}</p>
    </div>
  );
}

export default Square;
