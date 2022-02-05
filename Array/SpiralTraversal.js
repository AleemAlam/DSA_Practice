function spiralTraversalV(N, matrix) {
  let minRow = 0;
  let minCol = 0;
  let maxRow = N - 1;
  let maxCol = N - 1;
  let count = 0;
  const ans = [];
  while (count < N * N) {
    for (let i = minRow; i <= maxRow; i++) {
      ans.push(matrix[i][maxCol]);
      count++;
    }
    maxCol--;
    for (let i = maxCol; i >= minCol; i--) {
      ans.push(matrix[maxRow][i]);
      count++;
    }
    maxRow--;
    for (let i = maxRow; i >= minRow; i--) {
      ans.push(matrix[i][minCol]);
      count++;
    }
    minCol++;
    for (let i = minCol; i <= maxCol; i++) {
      ans.push(matrix[minRow][i]);
      count++;
    }
    minRow++;
  }
  console.log(ans.join(" "));
}
const arr = [
  [2, 3],
  [5, 6],
];
spiralTraversalV(2, arr);
