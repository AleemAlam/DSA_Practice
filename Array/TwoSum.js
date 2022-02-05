function runProgram(input) {
  input = input.split("\n");
  let testCase = +input[0];
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    let [n, k] = input[row++].trim().split(" ").map(Number);
    let arr = input[row++].trim().split(" ").map(Number);
    console.log(twoSum(arr, n, k));
  }
}
function twoSum(arr, n, k) {
  let i = 0;
  let j = n - 1;
  while (i < j) {
    if (arr[i] + arr[j] == k) {
      return [i, j].join(" ");
    } else if (arr[i] + arr[j] > k) {
      j--;
    } else {
      i++;
    }
  }
  return [-1, -1].join(" ");
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`3
  4 9
  2 7 11 15
  5 10
  1 2 3 5 5
  2 100
  48 49`);
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
