function runProgram(input) {
  console.log(possibleWays(+input));
}
function possibleWays(num) {
  if (num == 0) {
    return 1;
  }
  if (num < 0) {
    return 0;
  }
  return possibleWays(num - 1) + possibleWays(num - 2) + possibleWays(num - 3);
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`4`);
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
