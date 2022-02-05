function runProgram(input) {
  input = input.split("\n");
  const testCase = +input[0];
  let line = 1;
  for (let i = 0; i < testCase; i++) {
    const n = +input[line++];
    const matrix = [];
    for (let i = 0; i < n; i++) {
      matrix.push(input[line++].trim());
    }
    const { hori, verti } = checkSymmetry(matrix, n);
    console.log(
      hori == true && verti == false
        ? "HORIZONTAL"
        : hori == false && verti == true
        ? "VERTICAL"
        : hori == true
        ? "BOTH"
        : "NO"
    );
  }
}
function checkSymmetry(matrix, n) {
  const ans = { hori: true, verti: true };
  for (let i = 0; i < n; i++) {
    if (matrix[i] != matrix[n - i - 1]) {
      ans.hori = false;
      break;
    }
  }
  let i = 0;
  let j = n - 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] != matrix[i][n - j - 1]) {
        ans.verti = false;
        break;
      }
    }
    if (!ans.verti) {
      break;
    }
  }
  return ans;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`3
    4
    *.*.
    .*.*
    *.*.
    .*.*
    3
    .*.
    *.*
    .*.
    3
    ..*
    **.
    ..*`);
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
