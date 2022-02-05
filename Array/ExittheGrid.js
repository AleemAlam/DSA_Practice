function runProgram(input) {
  input = input.split("\n");
  const testCase = +input[0];
  let line = 1;
  for (let i = 0; i < testCase; i++) {
    const n = +input[line++];
    const matrix = [];
    for (let i = 0; i < n; i++) {
      matrix.push(input[line++].trim().split(""));
    }
    console.log(exitTheGrid(matrix, n));
  }
}

function exitTheGrid(arr, N) {
  let i = 0;
  let j = 0;
  let count = 0;
  while (i >= 0 && j >= 0 && i < N && j < N) {
    if (arr[i][j] == "X") {
      return 0;
    }
    if (arr[i][j] == "U") {
      arr[i][j] = "X";
      i--;
    } else if (arr[i][j] == "D") {
      arr[i][j] = "X";
      i++;
    } else if (arr[i][j] == "L") {
      arr[i][j] = "X";
      j--;
    } else {
      arr[i][j] = "X";
      j++;
    }
    count++;
  }
  return count;
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`3
  7
  DRLRDRR
  LLUDLRL
  UUDULDR
  ULDLRRU
  RURUUUD
  RUULDLU
  RUUUULR
  1
  D
  6
  LDURUL
  DURULD
  ULLRRU
  ULLLRR
  DUDRLR
  LDRURR`);
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
