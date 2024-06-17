export const whiteQueenMovement = (square, squareObject, squares) => {
  const files = ["A", "B", "C", "D", "E", "F", "G", "H"];

  const blackOccupiedSpaces = [];
  const emptySpaces = [];

  const upMovesToCheck = [];
  const leftMovesToCheck = [];
  const downMovesToCheck = [];
  const rightMovesToCheck = [];

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

  /*
      Checking up moves 
    */

  let updatedSquare = Number(square[1]);

  while (updatedSquare < 8) {
    updatedSquare++;
    upMovesToCheck.push({
      move: `${square[0]}${updatedSquare}`,
      moveFrom: square,
      squaresToUpdate: [
        {
          square: square,
          occupied: false,
          specialMoves: [],
        },
        {
          square: `${square[0]}${updatedSquare}`,
          occupied: squareObject.occupied,
          specialMoves: [],
        },
      ],
    });
  }

  /* 
      Checking moves to right
    */

  let updatedFileIndex = files.indexOf(square[0]);

  while (updatedFileIndex < 7) {
    updatedFileIndex++;
    rightMovesToCheck.push({
      move: `${files[updatedFileIndex]}${square[1]}`,
      moveFrom: square,
      squaresToUpdate: [
        {
          square: square,
          occupied: false,
          specialMoves: [],
        },
        {
          square: `${files[updatedFileIndex]}${square[1]}`,
          occupied: squareObject.occupied,
          specialMoves: [],
        },
      ],
    });
  }

  /*
      Down to check
    */

  updatedSquare = Number(square[1]);

  while (updatedSquare > 1) {
    updatedSquare--;
    downMovesToCheck.push({
      move: `${square[0]}${updatedSquare}`,
      moveFrom: square,
      squaresToUpdate: [
        {
          square: square,
          occupied: false,
          specialMoves: [],
        },
        {
          square: `${square[0]}${updatedSquare}`,
          occupied: squareObject.occupied,
          specialMoves: [],
        },
      ],
    });
  }

  /*
      Left to check
    */

  updatedFileIndex = files.indexOf(square[0]);

  while (updatedFileIndex > 0) {
    updatedFileIndex--;
    leftMovesToCheck.push({
      move: `${files[updatedFileIndex]}${square[1]}`,
      moveFrom: square,
      squaresToUpdate: [
        {
          square: square,
          occupied: false,
          specialMoves: [],
        },
        {
          square: `${files[updatedFileIndex]}${square[1]}`,
          occupied: squareObject.occupied,
          specialMoves: [],
        },
      ],
    });
  }

  for (const move of upMovesToCheck) {
    if (emptySpaces.includes(move.move)) {
      availableMoves.push(move);
    } else if (blackOccupiedSpaces.includes(move.move)) {
      availableMoves.push(move);
      break;
    } else {
      break;
    }
  }

  for (const move of rightMovesToCheck) {
    if (emptySpaces.includes(move.move)) {
      availableMoves.push(move);
    } else if (blackOccupiedSpaces.includes(move.move)) {
      availableMoves.push(move);
      break;
    } else {
      break;
    }
  }

  for (const move of downMovesToCheck) {
    if (emptySpaces.includes(move.move)) {
      availableMoves.push(move);
    } else if (blackOccupiedSpaces.includes(move.move)) {
      availableMoves.push(move);
      break;
    } else {
      break;
    }
  }

  for (const move of leftMovesToCheck) {
    if (emptySpaces.includes(move.move)) {
      availableMoves.push(move);
    } else if (blackOccupiedSpaces.includes(move.move)) {
      availableMoves.push(move);
      break;
    } else {
      break;
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
