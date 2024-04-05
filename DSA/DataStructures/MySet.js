class MySet {
  constructor() {
    this.collection = [];
  }

  has(value) {
    return this.collection.indexOf(value) !== -1;
  }

  add(value) {
    if (!this.has(value)) {
      this.collection.push(value);
      return true;
    }
    return false;
  }

  delete(value) {
    if (this.has(value)) {
      let index = this.collection.indexOf(value);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }

  size() {
    return this.collection.length;
  }

  values() {
    return this.collection;
  }

  union(setValues) {
    // create a new set
    const unionSet = new MySet();

    // access the collection values
    const firstSet = this.values();

    // access the parameter values
    const secondSet = setValues.values();

    // loop through and fill the union set
    firstSet.forEach((s1) => {
      unionSet.add(s1);
    });
    secondSet.forEach((s2) => {
      unionSet.add(s2);
    });
    return unionSet;
  }

  intersection(setValues) {
    // create a new set
    const intersectionSet = new MySet();

    // access the collection values
    const firstSet = this.values();

    // compare the two set and return the matching values in intersection set

    firstSet.forEach((s1) => {
      if (setValues.has(s1)) {
        intersectionSet.add(s1);
      }
    });

    return intersectionSet;
  }

  difference(setValues) {
    // create a new set
    const differenceSet = new MySet();

    // access the collection values
    const firstSet = this.values();

    // compare the two set and return the not matching values in difference set

    firstSet.forEach((s1) => {
      if (!setValues.has(s1)) {
        differenceSet.add(s1);
      }
    });

    return differenceSet;
  }

  subset(setValues) {
    // access the collection values
    const firstSet = this.values();

    return firstSet.every((s1) => {
      return setValues.has(s1);
    });
  }
}

const setExample1 = new MySet();
const setExample2 = new MySet();
const setExample3 = new MySet();
setExample1.add("a");
setExample2.add("b");
setExample1.add("a");
setExample2.add("a");
setExample1.add("c");
setExample2.add("d");
setExample3.add("a");
setExample3.add("c");

console.log("before setExample1", setExample1);
console.log("before setExample2", setExample2);
// console.log("has setExample1", setExample1.has("a"));
// console.log("has setExample2", setExample2.has("a"));
// console.log("delete setExample1", setExample1.delete("a"));
// console.log("delete setExample2", setExample2.delete("a"));
// console.log("size setExample1", setExample1.size());
// console.log("size setExample2", setExample2.size());
//console.log("union setExample", setExample1.union(setExample2));
// console.log("intersection setExample", setExample1.intersection(setExample2));
// console.log("difference setExample1", setExample1.difference(setExample2));
// console.log("difference setExample2", setExample2.difference(setExample1));
console.log("subset setExample2", setExample1.subset(setExample3));
console.log("after setExample1", setExample1);
console.log("after setExample2", setExample2);
