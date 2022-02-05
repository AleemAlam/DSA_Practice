function runProgram(input) {
  input = input.split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);
  console.log(newSortingAlgo(arr, n, k));
}

function newSortingAlgo(arr, n, k) {
  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] % k > arr[j + 1] % k) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr.join(" ");
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`5 6   
12 18 17 65 46`);
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
