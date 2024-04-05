function MyMap() {
  let collection = {};
  let count = 0;

  this.size = function () {
    return count;
  };

  this.set = function (key, value) {
    this.collection[key] = value;
    count++;
  };

  this.has = function (key) {
    return this.collection.hasOwnProperty(key);
  };

  this.get = function (key) {
    return this.collection.hasOwnProperty(key) ? this.collection[key] : null;
  };

  this.delete = function (key) {
    if (this.collection.hasOwnProperty(key)) {
      delete this.collection[key];
      count--;
    }
  };

  this.values = function () {
    return Object.values(this.collection);
  };

  this.clear = function () {
    this.collection = {};
    count = 0;
  };
}

const mapExample = new MyMap();
mapExample.set("arms", 2);
mapExample.set("fingers", 10);
mapExample.set("eyes", 2);
mapExample.set("belly button", 1);

console.log(mapExample.get("fingers"));
console.log(mapExample.size());
console.log(mapExample.values());

// using es6
const mapExample2 = new Map();
mapExample2.has("hands");
mapExample2.entries();

const keyObj = {},
  keyFunc = function () {};

mapExample2.set("hello", "string value");
mapExample2.set(keyObj, "obj value");
mapExample2.set(keyFunc, "func value");
mapExample2.set(NaN, "NaN value");

console.log(mapExample2.size);

console.log(mapExample2.get("hello"));
console.log(mapExample2.get(keyObj));
console.log(mapExample2.get(keyFunc));
console.log(mapExample2.get(NaN));
