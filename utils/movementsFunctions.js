// Each movement function will return an object in the followign format:
// returnObject = {
//   availableMoves: [Array of availableMoves],
//   squaresToUpdate: [... {
//     square to update as string: {occupied: , specialMoves: []}
//   }]
// }
// The occupied and special moves array in the above object are as they are
// in the squaresInfo.js file

export const whitePawnMovement = (square, squareObject, squares) => {
  const files = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const movesToCheck = [];
  const blackOccupiedSpaces = [];
  const emptySpaces = [];
  const diagonalToCheck = [];

  for (const squareToAddToArrays of Object.keys(squares)) {
    if (!squares[squareToAddToArrays].occupied) {
      emptySpaces.push(squareToAddToArrays);
    } else if (squares[squareToAddToArrays].occupied.slice(0, 5) === "black") {
      blackOccupiedSpaces.push(squareToAddToArrays);
    }
  }

  movesToCheck.push(`${square[0]}${Number(square[1]) + 1}`);

  for (const specialMove of squareObject.specialMoves) {
    movesToCheck.push(specialMove);
  }

  if (files.indexOf(square[0]) > 0 && files.indexOf(square[0]) < 7) {
    
  }

  console.log(movesToCheck);
};

export const blackPawnMovement = (squares) => {
  console.log("black pawn movement");
};

export const rookMovement = (squares) => {
  console.log("rook movement");
};

export const knightMovement = (squares) => {
  console.log("knight movement");
};

export const bishopMovement = (squares) => {
  console.log("bishop movement");
};

export const kingMovement = (squares) => {
  console.log("king movement");
};

export const queenMovement = (squares) => {
  console.log("queen movement");
};
