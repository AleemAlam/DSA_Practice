function runProgram(input) {
  input = input.split("\n");
  let n = +input[0];
  let arr1 = input[1].split(" ").map(Number);
  let arr2 = input[2].split(" ").map(Number);
  console.log(countMoves(arr1, arr2));
}
function countMoves(arr1, arr2) {
  let count = 0;
  while (arr1.length > 0) {
    for (let i = 0; i < arr2.length; i++) {
      count++;
      if (arr1[0] == arr2[i]) {
        arr1.shift();
        arr2.splice(i, 1);
        break;
      }
    }
  }
  return count;
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`4
1 2 3 4
4 2 3 1`);
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
