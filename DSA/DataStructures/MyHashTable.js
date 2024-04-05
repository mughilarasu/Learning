// MyHashTable.js

// creating index
function hashFunction(value, max) {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash += value.charCodeAt(i);
  }
  return hash % max;
}

const hashTable = () => {
  const storage = [];
  const storageLimit = 4;

  const print = () => {
    console.log("storage", storage); 
  };
  const add = (key, value) => {
    let index = hashFunction(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  const remove = (key) => {
    let index = hashFunction(key, storageLimit);
    if (!storage[index]) throw new Error("No item Found");
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  const lookUp = (key) => {
    let index = hashFunction(key, storageLimit);
    let lookUpValue = null;
    if (!storage[index]) return lookUpValue;
    for (let i = 0; i < storage[index].length; i++) {
      if (storage[index][i][0] === key) {
        lookUpValue = storage[index][i][1];
      }
    }

    return lookUpValue;
  };
  return {
    print,
    add,
    lookUp,
    remove,
  };
};

console.log(hashFunction("quincy", 10));
const MyHashTable = hashTable();
MyHashTable.add("beau", "person");
MyHashTable.add("fido", "dog");
MyHashTable.add("rex", "dinosaur");
MyHashTable.add("tux", "penguin");
console.log("lookUp", MyHashTable.lookUp("tux"));
console.log("remove", MyHashTable.remove("beau"));
MyHashTable.print();
