class Array {
  constructor() {
    this.data = {};
    this.length = 0;
  }
  push(ele) {
    this.data[this.length] = ele;
    this.length++;
  }
  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }
}

const arr = new Array();
arr.push(1212);
arr.push(12);
arr.push(122);
arr.pop();
arr.push(124);
console.log(arr);
