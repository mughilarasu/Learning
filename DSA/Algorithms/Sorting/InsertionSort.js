// given an array of integers, sort the array (ascending or descending)
// arr = [-6,20,8,-2,4]
// virtually split the array into a sorted and unsorted part
// Assume 1st element is sorted and remaining unsorted
// select an unsorted element and compare with all the elements in the sorted part
// if the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part. else shift larger elements in the sorted part towards the right
// insert the selected element at the right index
// repeat till all the unsorted elements are placed in the right order

function insertionSortASC(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    //ascending
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
}

function insertionSortDSC(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    //descending
    while (j >= 0 && arr[j] < numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1; 
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
}

console.log(
  "insertionSortDSC([-6,20,8,-2,4])",
  insertionSortDSC([-6, 20, 8, -2, 4])
);
console.log(
  "insertionSortASC([-6,20,8,-2,4])",
  insertionSortASC([-6, 20, 8, -2, 4])
);

// Complexity
// Big O is O(n^2)
