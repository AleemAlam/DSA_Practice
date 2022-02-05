function decreasingNumber(num) {
  let row = num * 2 - 1;
  let minRow = 0;
  let maxRow = row - 1;
  let minCol = 0;
  let maxCol = row - 1;
  let count = 0;

  const matrix = [];
  for (let i = 0; i < row; i++) {
    matrix.push(new Array(row).fill(-1));
  }
  //   printMatrix(matrix);
  while (count < row * row) {
    for (let i = minCol; i <= maxCol; i++) {
      matrix[minRow][i] = num;
      count++;
    }
    minRow++;
    for (let i = minRow; i <= maxRow; i++) {
      matrix[i][maxCol] = num;
      count++;
    }
    maxCol--;
    for (let i = maxCol; i >= minCol; i--) {
      matrix[maxRow][i] = num;
      count++;
    }
    maxRow--;
    for (let i = maxRow; i >= minRow; i--) {
      matrix[i][minCol] = num;
      count++;
    }
    minCol++;
    num--;
  }
  printMatrix(matrix);
}
function printMatrix(mat) {
  for (let i = 0; i < mat.length; i++) {
    let ans = "";
    for (let j = 0; j < mat.length; j++) {
      ans += mat[i][j];
    }
    console.log(ans);
  }
}

decreasingNumber(7);
