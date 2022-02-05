function HappyNumber(num) {
  while (num > 10) {
    let str = num.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += Number(str[i]) ** 2;
    }
    num = sum;
  }
  console.log(num == 1 ? "Yes" : "No");
}
HappyNumber(384802774);
