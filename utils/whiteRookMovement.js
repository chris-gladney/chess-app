export const whiteRookMovement = (square, squareObject, squares) => {
    const files = ["A", "B", "C", "D", "E", "F", "G", "H"];
  
    const blackOccupiedSpaces = [];
    const emptySpaces = [];
  
    const upMovesToCheck = [];
    const leftMovesToCheck = [];
    const downMovesToCheck = [];
    const rightMovesToCheck = [];
  
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
  
    return availableMoves;
  };