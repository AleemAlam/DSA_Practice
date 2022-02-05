function runProgram(input) {
  input = input.split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);
  console.log(longestPossibleSubarray(arr, n, k));
}

function longestPossibleSubarray(arr, n, k) {
  let left = -1;
  let right = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % k != 0) {
      if (left == -1) left = i;
      right = i;
    }
    sum += arr[i];
  }
  if (sum % k != 0) {
    return 1;
  }
  if (left == -1) {
    return 0;
  }
  left = left + 1;
  right = arr.length - right;
  k = arr.length - Math.min(left, right);
  let count = 0;
  sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  if (sum % k != 0) {
    count++;
  }
  for (let i = k; i < n; i++) {
    sum = sum - arr[i - k];
    sum += arr[i];
    if (sum % k != 0) {
      count++;
    }
  }
  return count;
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`5 3
2 4 3 5 1`);
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
