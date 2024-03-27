function Piece({ HTMLdecimal, piece }) {
  return <p className={`${piece.slice(0, 5)}-piece piece ${piece}`}>{String.fromCodePoint(parseInt(HTMLdecimal))}</p>;
}

export default Piece;
