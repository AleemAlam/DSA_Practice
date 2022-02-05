function zTraversal(N, arr) {
  let ans = [];
  for (let i = 0; i < N; i++) {
    ans.push(arr[0][i]);
  }
  for (let i = N - 2, j = 1; i >= 0; i--, j++) {
    ans.push(arr[j][i]);
  }
  for (let i = 1; i < N; i++) {
    ans.push(arr[N - 1][i]);
  }
  console.log(ans.join(" "));
}
zTraversal(3, [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
