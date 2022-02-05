function cirTraversal(matrix, N) {
  const ans = [];
  for (let i = N - 1; i >= 0; i--) {
    ans.push(matrix[i][0]);
  }
  for (let i = 1; i < N; i++) {
    ans.push(matrix[0][i]);
  }
  for (let i = 1; i < N; i++) {
    ans.push(matrix[i][N - 1]);
  }
  for (let i = N - 2; i > 0; i--) {
    ans.push(matrix[N - 1][i]);
  }
  console.log(ans.join(" "));
}
cirTraversal(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  3
);
