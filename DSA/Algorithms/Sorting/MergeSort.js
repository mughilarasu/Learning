// given an array of integers, sort the array (ascending or descending)
// arr = [-6,20,8,-2,4]
// divide the array into subarray each containing 1 element (array with 1 element is considered as sorted)
// repeatedly merge the sub array to produce new sorted sub array until there is only one sub array remaning. that will be sorted array

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  //return mergeSortDSC(mergeSort(leftArr), mergeSort(rightArr));
  return mergeSortASC(mergeSort(leftArr), mergeSort(rightArr));
}

function mergeSortASC(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}
function mergeSortDSC(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] >= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

console.log("mergeSortDSC([-6,20,8,-2,4])", mergeSort([-6, 20, 8, -2, 4]));

// Complexity
// Big O is O(n log n)
