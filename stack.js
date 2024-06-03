class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

// Remember pop and push in stack is constant time! It means O(1)
class Stack {
  constructor () {
      this.first = null;
      this.last = null;
      this.size = 0;
  }

  // Push to the beginning of stack
  // [1]
  // [2, 1]
  // [3, 2, 1]
  push(val) {
      let newNode = new Node(val);
      if(this.size === 0) {
          this.first = newNode;
          this.last = newNode;
      } else {
          let oldFirst = this.first;
          newNode.next = oldFirst;
          this.first = newNode;
      }
      this.size++;

      return this.size;
  }

  // Remove from the beginning of stack
  // [3, 2, 1]
  // [2, 1]
  // [1]
  // null
  pop() {
      if(this.size === 0) return null;
      let oldFirst = this.first;
      if(this.size == 1) {
          this.first = null;
          this.last = null;
      } else {
          let newFirst = oldFirst.next;
          this.first = newFirst;
      }
      this.size--;

      return oldFirst.value;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();

