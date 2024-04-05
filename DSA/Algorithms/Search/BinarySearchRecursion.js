// given an sorted array of "n" elements and a target element "t" find the index of "t" in the array and return -1 if the target element is not found
// binary search works only on the sorted array
// arr = [-5,2,4,6,10] , t=10 -> should return 4 (index of the value in the array)
// arr = [-5,2,4,6,10] , t=20 -> should return -1 (target element not in the array)

// pseudo code:
// if arr is empty return -1
// if array has elements, find the middle element in the array. if target is equal to the middle element return the middle element index
// if the target is less than the middle element, binary search left half of the array
// if the target is greater than the middle element, binary search right half of the array

function binarySearchRecursion(
  arr,
  num,
  leftIndex = 0,
  rightIndex = arr.length - 1
) {
  if (leftIndex > rightIndex) {
    return -1; // Element not found
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (arr[middleIndex] === num) {
    return middleIndex; // Element found
  } else if (arr[middleIndex] > num) {
    // Search in the left half
    return binarySearchRecursion(arr, num, leftIndex, middleIndex - 1);
  } else {
    // Search in the right half
    return binarySearchRecursion(arr, num, middleIndex + 1, rightIndex);
  }
}

console.log(
  "binarySearchRecursion([-5,2,4,6,10],10)",
  binarySearchRecursion([-5, 2, 4, 6, 10], 10)
);
console.log(
  "binarySearchRecursion([-5,2,4,6,10],6)",
  binarySearchRecursion([-5, 2, 4, 6, 10], 6)
);
console.log(
  "binarySearchRecursion([-5,2,4,6,10],20)",
  binarySearchRecursion([-5, 2, 4, 6, 10], 20)
);

// Complexity
// Big O is O(log n)
