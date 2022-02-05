function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0];
  let line = 1;
  for (let i = 0; i < testCase; i++) {
    const str = input[line++].trim();
    console.log(balanceBracket(str));
  }
}
function balanceBracket(str) {
  if (str.length % 2 != 0) {
    return "not balanced";
  }
  const obj = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "{" || str[i] == "[" || str[i] == "(") {
      stack.push(str[i]);
    } else {
      if (stack[stack.length - 1] != obj[str[i]]) {
        return "not balanced";
      } else {
        stack.pop();
      }
    }
  }
  return stack.length == 0 ? "balanced" : "not balanced";
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`3
  {([])}
  ()
  ([]
  `);
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
