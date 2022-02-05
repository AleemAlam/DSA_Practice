const dp = {};
function runProgram(input) {
  input = input.split("\n");
  for (let i = 0; i < input.length; i++) {
    const num = +input[i];
    console.log(getGreaterValue(num));
  }
}
function getGreaterValue(num) {
  if (dp[num]) {
    return dp[num];
  }
  if (num <= 4) {
    return num;
  }
  dp[num] = Math.max(
    getGreaterValue(Math.floor(num / 2)) +
      getGreaterValue(Math.floor(num / 3)) +
      getGreaterValue(Math.floor(num / 4)),
    num
  );
  return dp[num];
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`12
2
18`);
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
