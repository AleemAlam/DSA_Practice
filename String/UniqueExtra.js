function runProgram(input) {
  input = input.split("\n");
  var t = +input[0];
  var row = 1;
  for (var i = 0; i < t; i++) {
    var str = input[row++].split("");
    var n = str.length;
    Result(str, n);
  }
}
function Result(str, n) {
  var que = [];
  var obj = {};
  var ans = [];
  for (var i = 0; i < n; i++) {
    if (obj[str[i]] == undefined) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]] += 1;
    }
    if (obj[str[i]] == 1) {
      que.push(str[i]);
    } else {
      que = que.filter((el) => {
        return el !== str[i];
      });
    }
    ans.push(que.length == 0 ? "#" : que[0]);
  }
  console.log(ans.join(""));
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`2
abadbc
abcddabdcf`);
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
