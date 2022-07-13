//Diagonal Difference
//Given a squared matrix (2D array) of integers, calculate the absolute difference between the sum of the diagonals (top left to bottom right and top right to bottom left)

function diagonalDiff (matrix) {
    let size = matrix.length;

    let lTR = 0;
    let rTL = 0;

    for (let i = 0; i < size; i++) {
        lTR += matrix[i][i];
        rTL += matrix[i][size-1-i]
    }

    console.log("Left to Right: " + lTR);
    console.log("Right to Left: " + rTL);

    let difference = Math.abs(lTR - rTL);
    console.log("Absolute difference: " + difference);

    return difference;
}

const squareMatrix1 = [
 [1, 2, 3],
 [4, 5, 6],
 [9, 8, 9],
];
const expected1 = 2;

//left to right diagonal: 1 + 5 + 9 = 15
//right to left diagonal: 3 + 5 + 9 = 17
//absolute difference = 2

console.log(diagonalDiff(squareMatrix1) == expected1);

const squareMatrix2 = [
 [1, 2, 3, 4, 5],
 [1, 2, 3, 4, 5],
 [1, 2, 3, 4, 5],
 [1, 2, 3, 4, 5],
 [1, 2, 3, 4, 5],
];
const expected2 = 0; 

//left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
//right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
//absolute difference = 0

console.log(diagonalDiff(squareMatrix2) == expected2);