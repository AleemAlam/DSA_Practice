function runProgram(input) {
  input = input.split("\n");
  const testCase = +input[0];
  for (let i = 0; i < testCase; i++) {
    const str = input[i + 1];
    let ans = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "#") ans.pop();
      else ans.push(str[i]);
    }
    console.log(ans.join(""));
  }
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`2
ab#d
a#bc`);
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
