function runProgram(input) {
  input = input.split("\n");
  const testCase = +input[0];
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let obj = {};
  for (let i = 0; i < letters.length; i++) {
    obj[letters[i]] = i + 1;
  }
  for (let i = 0; i < testCase; i++) {
    const str = input[i + 1];
    let ans = 0;
    for (let i = 0; i < str.length; i++) {
      ans *= 26;
      ans += obj[str[i]];
    }
    console.log(ans);
  }
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`3
A
AB
ZY`);
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
