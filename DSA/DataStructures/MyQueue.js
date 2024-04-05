class MyQueue {
  constructor() {
    this.collection = [];
  }

  values() {
    return this.collection;
  }

  enqueue(value) {
    this.collection.push(value);
  }

  dequeue() {
    //remove 1st item
    this.collection.shift();
  }

  front() {
    //show 1st item

    if (this.collection.length === 0) throw new Error("queue is empty");
    return this.collection[0];
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}

const queueExample = new MyQueue();

queueExample.enqueue("a");
queueExample.enqueue("b");
queueExample.enqueue("c");
queueExample.dequeue();
// queueExample.front()
// queueExample.size()
// queueExample.isEmpty()
console.log("queueExample", queueExample);
