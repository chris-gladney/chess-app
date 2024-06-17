export const whiteBishopMovement = (square, squareObject, squares) => {
  const files = ["A", "B", "C", "D", "E", "F", "G", "H"];

  const blackOccupiedSpaces = [];
  const emptySpaces = [];

  const upAndRightToCheck = [];
  const downAndRightToCheck = [];
  const downAndLeftToCheck = [];
  const upAndLeftToCheck = [];

  const availableMoves = [];

  for (const squareToAddToArrays of Object.keys(squares)) {
    if (!squares[squareToAddToArrays].occupied) {
      emptySpaces.push(squareToAddToArrays);
    } else if (squares[squareToAddToArrays].occupied.slice(0, 5) === "black") {
      blackOccupiedSpaces.push(squareToAddToArrays);
    }
  }

  // Up and right
  let upDatedFileIndex = files.indexOf(square[0]);
  let updatedNumber = Number(square[1]);

  while (upDatedFileIndex < 7 && updatedNumber < 8) {
    updatedNumber++;
    upDatedFileIndex++;
    upAndRightToCheck.push({
      move: `${files[upDatedFileIndex]}${updatedNumber}`,
      moveFrom: square,
      squaresToUpdate: [
        {
          square: square,
          occupied: false,
          specialMoves: [],
        },
        {
          square: `${files[upDatedFileIndex]}${updatedNumber}`,
          occupied: squareObject.occupied,
          specialMoves: [],
        },
      ],
    });
  }

  // Down and Right

  upDatedFileIndex = files.indexOf(square[0]);
  updatedNumber = Number(square[1]);

  while (upDatedFileIndex < 7 && updatedNumber > 1) {
    updatedNumber--;
    upDatedFileIndex++;
    downAndRightToCheck.push({
      move: `${files[upDatedFileIndex]}${updatedNumber}`,
      moveFrom: square,
      squaresToUpdate: [
        {
          square: square,
          occupied: false,
          specialMoves: [],
        },
        {
          square: `${files[upDatedFileIndex]}${updatedNumber}`,
          occupied: squareObject.occupied,
          specialMoves: [],
        },
      ],
    });
  }

  // Down and Left

  upDatedFileIndex = files.indexOf(square[0]);
  updatedNumber = Number(square[1]);

  while (upDatedFileIndex > 0 && updatedNumber > 1) {
    updatedNumber--;
    upDatedFileIndex--;
    downAndLeftToCheck.push({
      move: `${files[upDatedFileIndex]}${updatedNumber}`,
      moveFrom: square,
      squaresToUpdate: [
        {
          square: square,
          occupied: false,
          specialMoves: [],
        },
        {
          square: `${files[upDatedFileIndex]}${updatedNumber}`,
          occupied: squareObject.occupied,
          specialMoves: [],
        },
      ],
    });
  }

  // Up and Left

  upDatedFileIndex = files.indexOf(square[0]);
  updatedNumber = Number(square[1]);

  while (upDatedFileIndex > 0 && updatedNumber < 8) {
    updatedNumber++;
    upDatedFileIndex--;
    upAndLeftToCheck.push({
      move: `${files[upDatedFileIndex]}${updatedNumber}`,
      moveFrom: square,
      squaresToUpdate: [
        {
          square: square,
          occupied: false,
          specialMoves: [],
        },
        {
          square: `${files[upDatedFileIndex]}${updatedNumber}`,
          occupied: squareObject.occupied,
          specialMoves: [],
        },
      ],
    });
  }

  for (const move of upAndLeftToCheck) {
    if (emptySpaces.includes(move.move)) {
      availableMoves.push(move);
    } else if (blackOccupiedSpaces.includes(move.move)) {
      availableMoves.push(move);
      break;
    } else {
      break;
    }
  }

  for (const move of upAndRightToCheck) {
    if (emptySpaces.includes(move.move)) {
      availableMoves.push(move);
    } else if (blackOccupiedSpaces.includes(move.move)) {
      availableMoves.push(move);
      break;
    } else {
      break;
    }
  }

  for (const move of downAndLeftToCheck) {
    if (emptySpaces.includes(move.move)) {
      availableMoves.push(move);
    } else if (blackOccupiedSpaces.includes(move.move)) {
      availableMoves.push(move);
      break;
    } else {
      break;
    }
  }

  for (const move of downAndRightToCheck) {
    if (emptySpaces.includes(move.move)) {
      availableMoves.push(move);
    } else if (blackOccupiedSpaces.includes(move.move)) {
      availableMoves.push(move);
      break;
    } else {
      break;
    }
  }

  return availableMoves;
};
