function runProgram(input) {
  input = input.split("\n");
  const testCase = +input[0];
  for (let i = 0; i < testCase; i++) {
    const str = input[i + 1];
    const unique = [];
    const ans = [];
    const obj = {};
    for (let i = 0; i < str.length; i++) {
      if (obj[str[i]] == undefined) {
        obj[str[i]] = 1;
        unique.length == 0 && ans.push(str[i]);
        unique.push(str[i]);
        if (str[i] != unique[0]) {
          ans.push(unique[0]);
          if (!unique.includes(str[i])) {
            unique.push(str[i]);
          }
        } else {
          unique.shift();
          ans.push(unique.length == 0 ? "#" : unique[0]);
        }
      }
    }
    console.log(ans.join(""));
  }
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`2
abadbc
abcddabdcf`);
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
