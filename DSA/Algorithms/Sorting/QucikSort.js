// given an array of integers, sort the array (ascending or descending)
// arr = [-6,20,8,-2,4]
// identiy the pivot element in the array
  // pick first element as pivot
  // pick last element as pivot  (current approach)
  // pick random element as pivot
  // pick media as pivot
// put everything thats smaller than pivot into a left array and greater than pivot to the right array
// repeat the process for the individual left or right arrays till you have an array of length 1 which is sorted by definition
// repeatedly concatenate the left array, pivot and right array till one sorted array remains

function quickSortASC(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    //ascending
    if (pivot > arr[i]) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSortASC(leftArr), pivot, ...quickSortASC(rightArr)];
}

function quickSortDSC(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    //descending
    if (pivot < arr[i]) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSortDSC(leftArr), pivot, ...quickSortDSC(rightArr)];
}

console.log("quickSortDSC([-6,20,8,-2,4])", quickSortDSC([-6, 20, 8, -2, 4]));
console.log("quickSortASC([-6,20,8,-2,4])", quickSortASC([-6, 20, 8, -2, 4]));

// Complexity
// worst case O(n^2)
// avg case O(n log n)
