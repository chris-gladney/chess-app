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
    const availableSquaresToReturn = [];

    const fileSquaresToCheckToLeft = [];
    const fileSquaresToCheckToRight = [];

    const numberSquaresToCheckAsc = [];
    const numberSquaresToCheckDes = [];

    if (Number(currentSquare[1]) < 8) {
      for (let number = Number(currentSquare[1]) + 1; number < 9; number++) {
        numberSquaresToCheckAsc.push(`${currentSquare[0]}${number}`);
      }
    }

    if (Number(currentSquare[1]) > 1) {
      for (let number = Number(currentSquare[1]) - 1; number > 0; number--) {
        numberSquaresToCheckDes.push(`${currentSquare[0]}${number}`);
      }
    }

    if (files.indexOf(currentSquare[0]) < 8) {
      for (let file = files.indexOf(currentSquare[0]) - 1; file > -1; file--) {
        fileSquaresToCheckToLeft.push(
          `${files[file]}${Number(currentSquare[1])}`
        );
      }
    }

    if (files.indexOf(currentSquare[0]) > -1) {
      for (let file = files.indexOf(currentSquare[0]) + 1; file < 8; file++) {
        fileSquaresToCheckToRight.push(
          `${files[file]}${Number(currentSquare[1])}`
        );
      }
    }

    // console.log(fileSquaresToCheckToRight, "<<< files to right");
    // console.log(fileSquaresToCheckToLeft, "<<< files to left");
    // console.log(numberSquaresToCheckAsc, "<<< numbers ascending");
    // console.log(numberSquaresToCheckDes, "<<< numbers descending");

    for (let i = 0; i < fileSquaresToCheckToRight.length; i++) {
      if (emptySquares.includes(fileSquaresToCheckToRight[i])) {
        availableSquaresToReturn.push(fileSquaresToCheckToRight[i]);
      } else if (blackOccupiedSquares.includes(fileSquaresToCheckToRight[i])) {
        availableSquaresToReturn.push(fileSquaresToCheckToRight[i]);
        break;
      } else {
        break;
      }
    }

    for (let i = 0; i < fileSquaresToCheckToLeft.length; i++) {
      if (emptySquares.includes(fileSquaresToCheckToLeft[i])) {
        availableSquaresToReturn.push(fileSquaresToCheckToLeft[i]);
      } else if (blackOccupiedSquares.includes(fileSquaresToCheckToLeft[i])) {
        availableSquaresToReturn.push(fileSquaresToCheckToLeft[i]);
        break;
      } else {
        break;
      }
    }

    for (let i = 0; i < numberSquaresToCheckAsc.length; i++) {
      if (emptySquares.includes(numberSquaresToCheckAsc[i])) {
        availableSquaresToReturn.push(numberSquaresToCheckAsc[i]);
      } else if (blackOccupiedSquares.includes(numberSquaresToCheckAsc[i])) {
        availableSquaresToReturn.push(numberSquaresToCheckAsc[i]);
        break;
      } else {
        break;
      }
    }

    for (let i = 0; i < numberSquaresToCheckDes.length; i++) {
      if (emptySquares.includes(numberSquaresToCheckDes[i])) {
        availableSquaresToReturn.push(numberSquaresToCheckDes[i]);
      } else if (blackOccupiedSquares.includes(numberSquaresToCheckDes[i])) {
        availableSquaresToReturn.push(numberSquaresToCheckDes[i]);
        break;
      } else {
        break;
      }
    }

    return availableSquaresToReturn;
  }

  if (pieceObject.piece === "white-knight") {
    const availableSquaresToReturn = [];

    const squaresToCheck = [];

    // Check vertically up plus left and vertically up plus right
    if (Number(currentSquare[1]) < 7) {
      if (files.indexOf(currentSquare[0]) > 0) {
        squaresToCheck.push(
          `${files[files.indexOf(currentSquare[0]) + 1]}${
            Number(currentSquare[1]) + 2
          }`
        );
      }

      if (files.indexOf(currentSquare[0]) < 8) {
        squaresToCheck.push(
          `${files[files.indexOf(currentSquare[0]) - 1]}${
            Number(currentSquare[1]) + 2
          }`
        );
      }
    }

    // Check left two spaces and up as well as left two spaces and down
    if (files.indexOf(currentSquare[0]) > 1) {
      if (Number(currentSquare[1]) < 8) {
        squaresToCheck.push(
          `${files[files.indexOf(currentSquare[0]) - 2]}${
            Number(currentSquare[1]) + 1
          }`
        );
      }

      if (Number(currentSquare[1]) > 1) {
        squaresToCheck.push(
          `${files[files.indexOf(currentSquare[0]) - 2]}${
            Number(currentSquare[1]) - 1
          }`
        );
      }
    }

    // Check two spaces down and left as well as two spaces down and right
    if (Number(currentSquare[1]) > 1) {
      if (files.indexOf(currentSquare[0]) > 0) {
        squaresToCheck.push(
          `${files[files.indexOf(currentSquare[0]) + 1]}${
            Number(currentSquare[1]) - 2
          }`
        );
      }

      if (files.indexOf(currentSquare[0]) < 8) {
        squaresToCheck.push(
          `${files[files.indexOf(currentSquare[0]) - 1]}${
            Number(currentSquare[1]) - 2
          }`
        );
      }
    }

    // Check right two and up one as well as right two adn down one

    if (files.indexOf(currentSquare[0]) < 6) {
      if (Number(currentSquare[1]) < 8) {
        squaresToCheck.push(
          `${files[files.indexOf(currentSquare[0]) + 2]}${
            Number(currentSquare[1]) + 1
          }`
        );
      }

      if (Number(currentSquare[1]) > 1) {
        squaresToCheck.push(
          `${files[files.indexOf(currentSquare[0]) + 2]}${
            Number(currentSquare[1]) - 1
          }`
        );
      }
    }

    for (let i = 0; i < squaresToCheck.length; i++) {
      if (emptySquares.includes(squaresToCheck[i])) {
        availableSquaresToReturn.push(squaresToCheck[i]);
      } else if (blackOccupiedSquares.includes(squaresToCheck[i])) {
        availableSquaresToReturn.push(squaresToCheck[i]);
      }
    }

    return availableSquaresToReturn;
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
