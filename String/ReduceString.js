function runProgram(input) {
  const stack = [];
  for (let i = 0; i < input.length; i++) {
    if (stack[stack.length - 1] == input[i]) {
      stack.pop();
    } else {
      stack.push(input[i]);
    }
  }
  console.log(stack.length == 0 ? "Empty String" : stack.join(""));
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`abdsjdkfoewndkeo`);
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
