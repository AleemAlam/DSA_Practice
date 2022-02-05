function runProgram(input) {
  input = input.split("\n");
  var n = +input[0];
  var arr = input[1].split(" ").map(Number);
  console.log(threeMaxThreeMin(n, arr));
}
function threeMaxThreeMin(n, arr) {
  const distinct = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] != arr[i + 1]) {
      distinct.push(arr[i]);
    }
  }
  n = distinct.length;
  if (distinct.length > 2) {
    const str = [
      `${distinct[0]} ${distinct[1]} ${distinct[2]}`,
      `${distinct[n - 3]} ${distinct[n - 2]} ${distinct[n - 1]}`,
    ];

    return str.join("\n");
  }
  return "Not Possible\nNot Possible";
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`8
1 1 1 1 5`);
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
