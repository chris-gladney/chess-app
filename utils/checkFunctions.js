export const checkMovesForWhite = (squares, moveObject) => {
  const blackOccupiedSpaces = [];
  const whiteOccupiedSpaces = [];
  let whiteKingSpace;

  for (const [square, object] of Object.entries(squares)) {
    if (object.occupied && object.occupied.slice(0, 5) === "black") {
      blackOccupiedSpaces.push(square);
    } else if (object.occupied && object.occupied.slice(0, 5) === "white") {
      whiteOccupiedSpaces.push(square);
    }
  }

  for (const [square, object] of Object.entries(squares)) {
    if (object.occupied === "white king") {
      whiteKingSpace = square;
    }
  }

  const blackSquaresCoveredArr = [];

  for (const [squareCoordinate, squareObject] of Object.entries(squares)) {
    if (
      squareObject.occupied &&
      (squareObject.occupied.slice(0, 10) === "black rook" ||
        squareObject.occupied.slice(0, 12) === "black bishop" ||
        squareObject.occupied.slice(0, 11) === "black queen")
    ) {
      blackSquaresCoveredArr.push({
        piece: squareObject.occupied,
        square: squareCoordinate,
        linesToCheck: [],
      });
    }
  }

  blackSquaresCoveredArr.forEach((blackPiece) => {
    const files = ["A", "B", "C", "D", "E", "F", "G", "H"];
    // Add diagonals to the lines to check array for queens and bishops
    if (
      blackPiece.piece.slice(0, 12) === "black bishop" ||
      blackPiece.piece.slice(0, 11) === "black queen"
    ) {
      let square = blackPiece.square;
      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      // Up and right

      const upAndRight = [];

      square = `${files[files.indexOf(square[0]) + 1]}${Number(square[1]) + 1}`;

      while (files.indexOf(square[0]) > -1 && Number(square[1]) < 9) {
        upAndRight.push(square);
        square = `${files[files.indexOf(square[0]) + 1]}${
          Number(square[1]) + 1
        }`;
      }

      blackPiece.linesToCheck.push(upAndRight);
      square = blackPiece.square;

      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      // Down and right

      const downAndRight = [];

      square = `${files[files.indexOf(square[0]) + 1]}${Number(square[1] - 1)}`;

      while (files.indexOf(square[0]) > -1 && Number(square[1] > 0)) {
        downAndRight.push(square);
        square = `${files[files.indexOf(square[0]) + 1]}${Number(
          square[1] - 1
        )}`;
      }

      blackPiece.linesToCheck.push(downAndRight);
      square = blackPiece.square;

      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      // Down and left

      const downAndLeft = [];

      square = `${files[files.indexOf(square[0]) - 1]}${Number(square[1] - 1)}`;

      while (files.indexOf(square[0]) > -1 && Number(square[1]) > 0) {
        downAndLeft.push(square);
        square = `${files[files.indexOf(square[0]) - 1]}${Number(
          square[1] - 1
        )}`;
      }

      blackPiece.linesToCheck.push(downAndLeft);
      square = blackPiece.square;

      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      // Up and left

      const upAndLeft = [];

      square = `${files[files.indexOf(square[0]) - 1]}${Number(square[1]) + 1}`;

      while (files.indexOf(square[0]) > -1 && Number(square[1]) < 9) {
        upAndLeft.push(square);
        square = `${files[files.indexOf(square[0]) - 1]}${
          Number(square[1]) + 1
        }`;
      }

      blackPiece.linesToCheck.push(upAndLeft);
      square = blackPiece.square;
    }
    // Add horizontals for queens and rooks

    if (
      blackPiece.piece.slice(0, 10) === "black rook" ||
      blackPiece.piece.slice(0, 11) === "black queen"
    ) {
      let square = blackPiece.square;

      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      // Up

      const up = [];

      square = `${files[files.indexOf(square[0])]}${Number(square[1]) + 1}`;

      while (Number(square[1]) < 9) {
        up.push(square);
        square = `${files[files.indexOf(square[0])]}${Number(square[1]) + 1}`;
      }

      blackPiece.linesToCheck.push(up);
      square = blackPiece.square;

      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      // Right

      const right = [];

      square = `${files[files.indexOf(square[0]) + 1]}${Number(square[1])}`;

      while (files.indexOf(square[0]) > -1) {
        right.push(square);
        square = `${files[files.indexOf(square[0]) + 1]}${Number(square[1])}`;
      }

      blackPiece.linesToCheck.push(right);
      square = blackPiece.square;

      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      // Down

      const down = [];

      square = `${files[files.indexOf(square[0])]}${Number(square[1]) - 1}`;

      while (Number(square[1]) > 0) {
        down.push(square);
        square = `${files[files.indexOf(square[0])]}${Number(square[1]) - 1}`;
      }

      blackPiece.linesToCheck.push(down);
      square = blackPiece.square;

      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      // Left

      const left = [];

      square = `${files[files.indexOf(square[0]) - 1]}${Number(square[1])}`;

      while (files.indexOf(square[0]) > -1) {
        left.push(square);
        square = `${files[files.indexOf(square[0]) - 1]}${Number(square[1])}`;
      }

      blackPiece.linesToCheck.push(left);
      square = blackPiece.square;
    }
  });

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  /*
    Added all lines to check to each opponents pieces' piece object.
    The next step is to use these lines to check array with the moveObject
    to work out which moves are viable for white. 
    This will be achieved by first getting a representation of which 
    linesToCheck have a white king within the array. These will stored in
    an array with arrays of lines to check. 
  */

  const linesToKing = [];

  blackSquaresCoveredArr.forEach((blackPiece) => {
    blackPiece.linesToCheck.forEach((lineToCheck) => {
      const lineToKing = [];

      for (const coordinate of lineToCheck) {
        if (squares[coordinate].occupied === "white king") {
          lineToKing.push(coordinate);
          break;
        } else if (blackOccupiedSpaces.includes(coordinate)) {
          break;
        } else {
          lineToKing.push(coordinate);
        }
      }

      if (lineToKing.includes(whiteKingSpace)) {
        linesToKing.push(lineToKing);
      }
    });
  });

  for (const line of linesToKing) {
    let numberOfWhitePiecesInWayOfKing = 0;
    line.forEach((coordinate) => {
      if (whiteOccupiedSpaces.includes(coordinate)) {
        numberOfWhitePiecesInWayOfKing++;
      }
    });


    // The condition below must be less than three as the king is 
    // included in the numberOfWhitePiecesInWayOfKing
     
    if (
      numberOfWhitePiecesInWayOfKing < 3 &&
      line.includes(moveObject.moveFrom) &&
      !line.includes(moveObject.move)
    ) {
      return false;
    }
  }

  return true;
};

export const checkMovesForBlack = () => {};

export const isWhiteInCheck = () => {};

export const isBlackInCheck = () => {};
