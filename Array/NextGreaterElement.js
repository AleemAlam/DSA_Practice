function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0];
  let line = 1;
  for (let i = 0; i < testCase; i++) {
    var n = +input[line++];
    var arr = input[line++].trim().split(" ").map(Number);
    console.log(nextGreater(n, arr));
  }
}
function nextGreater(n, arr) {
  const stack = [];
  const ans = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length != 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }
    ans[i] = stack.length == 0 ? -1 : stack[stack.length - 1];
    stack.push(arr[i]);
  }
  return ans.join(" ");
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`1
  4
  1 3 2 4`);
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
