function nTraversal(N, matrix) {
  let ans = [];
  for (let i = N - 1; i >= 0; i--) {
    ans.push(matrix[i][0]);
  }
  for (let i = 1; i < N; i++) {
    ans.push(matrix[i][i]);
  }
  for (let i = N - 2; i >= 0; i--) {
    ans.push(matrix[i][N - 1]);
  }
  console.log(ans.join(" "));
}
nTraversal(1, [[5]]);
