function runProgram(input) {
  input = input.split("\n");
  var n = +input[0];
  var arr = input[1].split(" ").map(Number);
  console.log(smallerNeighbor(n, arr));
}
function smallerNeighbor(n, arr) {
  const stack = [];
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length != 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }
    ans[i] = stack.length == 0 ? -1 : stack[stack.length - 1];
    stack.push(arr[i]);
  }
  return ans.join(" ");
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`8
39 27 11 4 24 32 32 1`);
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
