let sum = 0;
function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0];
  let line = 1;
  for (let i = 0; i < testCase; i++) {
    sum = 0;
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    console.log(sumWithRecursion(n, arr, 0, 1));
  }
}

function sumWithRecursion(n, arr, i, j) {
  if (j >= n) {
    return sum;
  }
  sum += Math.abs(arr[i] - arr[j]);
  return sumWithRecursion(n, arr, i + 1, j + 1);
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`2
3
1 5 2
5
3 5 6 1 8`);
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
