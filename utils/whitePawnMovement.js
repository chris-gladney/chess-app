// Each movement function will return an object in the followign format:
// returnObject = [
//   availableMoves: [Array of availableMoves],
//   squaresToUpdate: [... {
//     square to update as string: {occupied: , specialMoves: []}
//   }]
// ]
// The occupied and special moves array in the above object are as they are
// in the squaresInfo.js file

export const whitePawnMovement = (square, squareObject, squares) => {
  const files = ["A", "B", "C", "D", "E", "F", "G", "H"];

  const blackOccupiedSpaces = [];
  const emptySpaces = [];

  const movesNotTakingToCheck = [];
  const movesTakingToCheck = [];

  const availableMoves = [];

  for (const squareToAddToArrays of Object.keys(squares)) {
    if (!squares[squareToAddToArrays].occupied) {
      emptySpaces.push(squareToAddToArrays);
    } else if (squares[squareToAddToArrays].occupied.slice(0, 5) === "black") {
      blackOccupiedSpaces.push(squareToAddToArrays);
    }
  }

  movesNotTakingToCheck.push({
    move: `${square[0]}${Number(square[1]) + 1}`,
    moveFrom: square,
    squaresToUpdate: [
      {
        square: square,
        occupied: false,
        specialMoves: [],
      },
      {
        square: `${square[0]}${Number(square[1]) + 1}`,
        occupied: squareObject.occupied,
        specialMoves: [],
      },
    ],
  });

  for (const specialMove of squareObject.specialMoves) {
    movesNotTakingToCheck.push({
      move: specialMove,
      moveFrom: square,
      squaresToUpdate: [
        {
          square: square,
          occupied: false,
          specialMoves: [],
        },
        {
          square: specialMove,
          occupied: squareObject.occupied,
          specialMoves: [],
        },
        {
          square: `${specialMove[0]}${Number(specialMove[1]) - 1}`,
          occupied: false,
          specialMoves: ["en passant for white"],
        },
      ],
    });
  }

  if (files.indexOf(square[0]) > 0 && files.indexOf(square[0]) < 7) {
    movesTakingToCheck.push({
      move: `${files[files.indexOf(square[0]) - 1]}${Number(square[1]) + 1}`,
      moveFrom: square,
      squaresToUpdate: [
        {
          square: square,
          occupied: false,
          specialMoves: [],
        },
        {
          square: `${files[files.indexOf(square[0]) - 1]}${
            Number(square[1]) + 1
          }`,
          occupied: squareObject.occupied,
          specialMoves: [],
        },
      ],
    });
    movesTakingToCheck.push({
      move: `${files[files.indexOf(square[0]) + 1]}${Number(square[1]) + 1}`,
      moveFrom: square,
      squaresToUpdate: [
        {
          square: square,
          occupied: false,
          specialMoves: [],
        },
        {
          square: `${files[files.indexOf(square[0]) + 1]}${
            Number(square[1]) + 1
          }`,
          occupied: squareObject.occupied,
          specialMoves: [],
        },
      ],
    });
  } else if (files.indexOf(square[0]) === 0) {
    movesTakingToCheck.push({
      move: `${files[files.indexOf(square[0]) + 1]}${Number(square[1]) + 1}`,
      moveFrom: square,
      squaresToUpdate: [
        {
          square: square,
          occupied: false,
          specialMoves: [],
        },
        {
          square: `${files[files.indexOf(square[0]) + 1]}${
            Number(square[1]) + 1
          }`,
          occupied: squareObject.occupied,
          specialMoves: [],
        },
      ],
    });
  } else if (files.indexOf(square[0]) === 7) {
    movesTakingToCheck.push({
      move: `${files[files.indexOf(square[0]) - 1]}${Number(square[1]) + 1}`,
      moveFrom: square,
      squaresToUpdate: [
        {
          square: square,
          occupied: false,
          specialMoves: [],
        },
        {
          square: `${files[files.indexOf(square[0]) - 1]}${
            Number(square[1]) + 1
          }`,
          occupied: squareObject.occupied,
          specialMoves: [],
        },
      ],
    });
  }

  for (const move of movesNotTakingToCheck) {
    if (emptySpaces.includes(move.move)) {
      availableMoves.push(move);
    }
  }

  for (const move of movesTakingToCheck) {
    if (
      blackOccupiedSpaces.includes(move.move) ||
      squares[move.move].specialMoves.includes("en passant for black")
    ) {
      availableMoves.push(move);
    }
  }

  return availableMoves;
};
