function runProgram(input) {
  input = input.trim().split("\n");
  const testCase = +input[0];
  let line = 1;
  for (let i = 0; i < testCase; i++) {
    var [n, k] = input[line++].trim().split(" ").map(Number);
    var arr = input[line++].trim().split(" ").map(Number);
    console.log(tallestAround(n, k, arr));
  }
}
function tallestAround(n, k, arr) {
  let i = 0;
  let j = k - 1;
  let ans = [];
  while (j < arr.length) {
    let max = -Infinity;
    for (let a = i; a <= j; a++) {
      max = Math.max(max, arr[a]);
    }
    ans.push(max);
    i++;
    j++;
  }
  return ans.join(" ");
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`1
  9 3
  1 2 3 1 4 5 2 3 6`);
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
