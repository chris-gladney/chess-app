import piecesInfo from "./piecesInfo";

// The pieceObject parametre is in the form of an object from the piecesInfo Array in utils
export function calculateSpacesWhiteCanMove(pieceObject) {
  const currentSquare = pieceObject.square;

  const files = ["A", "B", "C", "D", "E", "F", "G", "H"];

  const occupiedSquares = [];
  const blackOccupiedSquares = [];

  piecesInfo.forEach((piece) => {
    occupiedSquares.push(piece.square);
    if (piece.piece.slice(0, 5) === "black") {
      blackOccupiedSquares.push(piece.square);
    }
  });

  const emptySquares = [];

  for (let file = 0; file < files.length; file++) {
    for (let number = 1; number < 9; number++) {
      if (!occupiedSquares.includes(`${files[file]}${number}`)) {
        emptySquares.push(`${files[file]}${number}`);
      }
    }
  }

  if (pieceObject.piece === "white-pawn") {
    const availableSquaresToReturn = [];

    const squaresToCheckNotTaking = [];
    const squaresToCheckTaking = [];

    if (Number(currentSquare[1]) < 9) {
      squaresToCheckNotTaking.push(
        currentSquare[0] + (Number(currentSquare[1]) + 1)
      );
    }

    if (Number(currentSquare[1]) < 9) {
      squaresToCheckNotTaking.push(
        currentSquare[0] + (Number(currentSquare[1]) + 2)
      );
    }

    if (
      files.indexOf(currentSquare[0]) - 1 > 0 &&
      Number(currentSquare[1]) < 9
    ) {
      squaresToCheckTaking.push(
        `${files[files.indexOf(currentSquare[0]) - 1]}${(
          Number(currentSquare[1]) + 1
        ).toString()}`
      );
    }

    if (
      files.indexOf(currentSquare[0]) + 1 < 8 &&
      Number(currentSquare[1]) < 9
    ) {
      squaresToCheckTaking.push(
        `${files[files.indexOf(currentSquare[0]) + 1]}${(
          Number(currentSquare[1]) + 1
        ).toString()}`
      );
    }

    for (const square of squaresToCheckNotTaking) {
      if (emptySquares.includes(square)) {
        availableSquaresToReturn.push(square);
      } else {
        break;
      }
    }

    for (const square of squaresToCheckTaking) {
      if (blackOccupiedSquares.includes(square)) {
        availableSquaresToReturn.push(square);
      }
    }

    return availableSquaresToReturn;
  }

  if (pieceObject.piece === "white-rook") {
    console.log("rook");
  }

  if (pieceObject.piece === "white-knight") {
    console.log("knight");
  }

  if (pieceObject.piece === "white-bishop") {
    console.log("bishop");
  }

  if (pieceObject.piece === "white-king") {
    console.log("king");
  }

  if (pieceObject.piece === "white-queen") {
    console.log("queen");
  }
}
