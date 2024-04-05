// given an array of "n" elements and a target element "t" find the index of "t" in the array and return -1 if the target element is not found
// arr = [-5,2,10,4,6] , t=10 -> should return 2 (index of the value in the array)
// arr = [-5,2,10,4,6] , t=20 -> should return -1 (target element not in the array)

function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

console.log(
  "linearSearch([-5,2,10,4,6],10)",
  linearSearch([-5, 2, 10, 4, 6], 10)
);
console.log(
  "linearSearch([-5,2,10,4,6],10)",
  linearSearch([-5, 2, 10, 4, 6], 6)
);
console.log(
  "linearSearch([-5,2,10,4,6],20)",
  linearSearch([-5, 2, 10, 4, 6], 20)
);

// Complexity
// Big O is O(n)
