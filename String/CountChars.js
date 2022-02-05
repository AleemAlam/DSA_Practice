function runProgram(input) {
  let count = 1;
  let ans = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] == input[i + 1]) {
      count++;
    } else {
      ans += input[i] + count;
      count = 1;
    }
  }
  console.log(ans);
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`aaabbbbcc`);
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
