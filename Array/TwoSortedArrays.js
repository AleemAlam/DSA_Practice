function runProgram(input) {
  input = input.split("\n");
  let testCase = +input[0];
  let row = 1;
  for (let i = 0; i < testCase; i++) {
    let n = +input[row++];
    let arr1 = input[row++].trim().split(" ").map(Number);
    let arr2 = input[row++].trim().split(" ").map(Number);
    console.log(checkElements(arr1, arr2, n));
  }
}
function checkElements(arr1, arr2, n) {
  let i = 0;
  let j = n - 1;
  let count = 0;
  while (i < n && j < n) {
    if (arr1[i] == arr2[j]) {
      count++;
      i++;
      j--;
    } else if (arr1[i] > arr2[j]) {
      j--;
    } else {
      i++;
    }
  }
  return count;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`1
    6
    1 2 2 3 4 5
    4 4 3 2 1 1`);
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
