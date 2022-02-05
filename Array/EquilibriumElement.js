function runProgram(input) {
  input = input.split("\n");
  var n = +input[0];
  var arr = input[1].split(" ").map(Number);
  console.log(equilibriumElement(n, arr));
}

function equilibriumElement(n, arr) {
  let leftSum = 0;
  const rightSum = [];
  let tempSum = 0;
  for (let i = n - 1; i > 0; i--) {
    tempSum += arr[i];
    rightSum[i - 1] = tempSum;
  }
  for (let i = 0; i < n - 1; i++) {
    if (leftSum == rightSum[i]) {
      return i + 1;
    }
    leftSum += arr[i];
  }
  return -1;
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`5
3 3 5 5 1`);
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
