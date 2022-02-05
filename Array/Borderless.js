function runProgram(input) {
  input = input.split("\n");
  let [n, m] = input[0].trim().split(" ").map(Number);
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push(input[i + 1].trim().split(" ").map(Number));
  }
  console.log(borderLessSum(matrix, n, m));
}
function borderLessSum(matrix, n, m) {
  let sum = 0;
  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < m - 1; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`4 4
  1 2 3 4
  5 6 7 8
  9 10 11 12
  13 14 15 16`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
