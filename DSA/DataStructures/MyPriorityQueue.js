class MyPriorityQueue {
  constructor() {
    this.collection = [];
  }

  values() {
    return this.collection;
  }

  enqueue(value) {
    if (this.isEmpty()) {
      this.collection.push(value);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (value[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, value);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(value);
      }
    }
  }

  dequeue() {
    //remove 1st item
    const value = this.collection.shift();
    return value[0];
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

const priorityQueueExample = new MyPriorityQueue();

priorityQueueExample.enqueue(["a", 3]);
priorityQueueExample.enqueue(["b", 1]);
priorityQueueExample.enqueue(["c", 2]);
// priorityQueueExample.values();
// priorityQueueExample.front();
// priorityQueueExample.size();
// priorityQueueExample.isEmpty();
console.log("priorityQueueExample", priorityQueueExample);
