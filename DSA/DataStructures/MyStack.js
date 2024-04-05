class MyStack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  // add an item from the stack
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // remove an item from the stack
  pop() {
    if (this.count === 0) {
      throw new Error("Stack underflow");
    }
    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];

    // Resize the storage object
    //    There is a potential issue in the pop method. When you delete the item from the storage using delete this.storage[this.count];, it only removes the reference to the value but doesn't actually shrink the size of the storage object. This may lead to memory-related issues over time.
    //    To fix this issue, you should consider updating the pop method to resize the storage object by creating a new object without the deleted element. Here's an updated version of your pop method:
    const newStorage = {};
    for (let i = 0; i < this.count; i++) {
      newStorage[i] = this.storage[i];
    }
    this.storage = newStorage;

    // this will give removed item
    return result;

    // this will give all item after removed one
    // return this.storage;
  }

  // show top element of the stack
  peek() {
    if (this.count === 0) {
      return undefined; // or throw an error for an empty stack
    }
    return this.storage[this.count - 1];
  }

  // show size of the stack
  length() {
    return this.count;
  }
}

const stackExample = new MyStack();
stackExample.push(1);
stackExample.push(2);
stackExample.push(3);
stackExample.push(4);
stackExample.push(5);
//stackExample.pop();

console.log("before", stackExample);
console.log("poped value", stackExample.pop());
console.log("peek value", stackExample.peek());
console.log("size", stackExample.length());
console.log("after", stackExample);
