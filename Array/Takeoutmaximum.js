function runProgram(input) {
  input = input.split("\n");
  var [n, k] = input[0].trim().split(" ").map(Number);
  var arr = input[1].trim().split(" ").map(Number);
  console.log(takeOutMax(n, arr, k));
}
function takeOutMax(n, arr, k) {
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  max = Math.max(sum, max);
  for (let i = k; i < n; i++) {
    sum = sum - arr[i - k];
    sum += arr[i];

    max = Math.max(sum, max);
  }
  return max;
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`10 3
-1 -1 -2 1 -2 4 1 9 3 9`);
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
