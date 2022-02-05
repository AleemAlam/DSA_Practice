class Node {
  constructor(value, next) {
    this.value = value;
    this.nextNode = next;
  }
}

class LinkedList {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  addLast(val) {
    if (this.length == 0) {
      this.first = new Node(val, null);
      this.last = this.first;
    } else {
      this.last.nextNode = new Node(val, null);
      this.last = this.last.nextNode;
    }
    this.length++;
  }
  addFirst(val) {
    if (this.length == 0) {
      this.first = new Node(val, null);
      this.last = this.first;
    } else {
      const temp = this.first;
      this.first = new Node(val, null);
      this.first.nextNode = temp;
    }
    this.length++;
  }
  deleteFirst() {
    if (this.length == 0) {
      throw new Error("Linked list is empty");
    }
    this.first = this.first.nextNode;
    this.length--;
  }
  deleteLast() {
    if (this.length == 0) {
      throw new Error("Linked list is empty");
    }
    if (this.length == 1) {
      this.last = this.first = new Node(null, null);
      this.length--;
      return;
    }
    let iterator = this.first;
    while (iterator != null) {
      if (iterator.nextNode == this.last) {
        break;
      }
      iterator = iterator.nextNode;
    }
    this.last = iterator;
    iterator.nextNode = null;
    this.length--;
  }

  indexOf(val) {
    let iterator = this.first;
    let index = 0;
    while (iterator) {
      if (iterator.value == val) {
        return index;
      }
      iterator = iterator.nextNode;
      index++;
    }
    return -1;
  }

  contains(val) {
    return this.indexOf(val) >= 0;
  }
}

const link = new LinkedList();
// link.addLast(37);
// link.addLast(47);
// link.addLast(27);
// link.addFirst(20);
link.addFirst(40);
// link.deleteFirst();
link.deleteLast();
// console.log(link.contains(47));
console.log(link);
