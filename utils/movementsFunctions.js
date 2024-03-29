import piecesInfo from "./piecesInfo";

// The pieceObject parametre is in the form of an object from the piecesInfo Array in utils
export function calculateSpacesWhiteCanMove(pieceObject) {
  const blackOccupiedSpaces = [];
  const whiteOccupiedSpaces = [];
  for (let i = 0; i < piecesInfo.length; i++) {
    if (piecesInfo[i].piece.slice(0, 5) === "black") {
      blackOccupiedSpaces.push(piecesInfo[i].square);
    } else if (piecesInfo[i].piece.slice(0, 5) === "white") {
      whiteOccupiedSpaces.push(piecesInfo[i].square);
    }
  }

  const currentSquareSelectedPiece = pieceObject.square;

  if (pieceObject.piece === "white-pawn" && !pieceObject.hasMoved) {
    return [
      pieceObject.square[0] + (Number(pieceObject.square[1]) + 1),
      pieceObject.square[0] + (Number(pieceObject.square[1]) + 2),
    ];
  }
}
