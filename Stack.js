class Stack {
  constructor() {
    this.storage = {};
    this.length = 0;
  }

  push(value) {
      this.storage[this.length] = value;
      this.length++;
  }

  pop() {
      if(this.length) {
        const lastVal = this.storage[this.length - 1];
        delete this.storage[this.length - 1];
        this.length--;
        return lastVal;
      }
  }

  peek() {
    return this.storage[this.length - 1];
  }
}

const stack = new Stack;
stack.push('hello');
stack.push('hi');

stack.pop();

console.log(stack);