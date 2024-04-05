class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  size() {
    return this.length;
  }

  head() {
    return this.head;
  }

  add(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }

    this.length++;
  }

  addAt(index, value) {
    const node = new Node(value);
    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;

    if (index > this.length) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
      this.head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      node.next = currentNode;
      previousNode.next = node;
    }

    this.length++;
  }

  remove(value) {
    let currentNode = this.head;
    let previousNode;

    if (currentNode.element === value) {
      this.head = currentNode.next;
    } else {
      while (currentNode.next) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }

    this.length--;
  }

  removeAt(index) {
    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;

    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index === 0) {
      this.head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    this.length--;
    return currentNode.element;
  }

  elementAt(index) {
    let currentNode = this.head;
    let count = 0;

    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }

    return currentNode.element;
  }

  isEmpty() {
    return this.length === 0;
  }

  indexOf(value) {
    let currentNode = this.head;
    let index = -1;
    while (currentNode) {
      index++;
      if (currentNode.element === value) {
        return index;
      }
      currentNode = currentNode.next;
    }
  }
}

const linkedListExample = new MyLinkedList();

linkedListExample.add("Kitten");
linkedListExample.add("Puppy");
linkedListExample.add("Dog");
linkedListExample.add("Cat");
linkedListExample.add("Fish");
console.log(linkedListExample.size());
console.log(linkedListExample.removeAt(3));
console.log(linkedListExample.elementAt(3));
console.log(linkedListExample.indexOf("Puppy"));
console.log(linkedListExample.size());
