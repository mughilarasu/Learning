// given an array of integers, sort the array (ascending or descending)
// arr = [-6,20,8,-2,4]
// poor sorting and we will never use
// compare the adjacent elements in the array and swap the positions if they are not in the intended order
// repeat each element in the array
// once whole array with no swaps, the array is sorted

function bubbleSortASC(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      //ascending
      if (arr[i] > arr[i + 1]) {
        let tempValue = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tempValue;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

function bubbleSortDSC(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      //descending
      if (arr[i] < arr[i + 1]) {
        let tempValue = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tempValue;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

console.log("bubbleSortDSC([-6,20,8,-2,4])", bubbleSortDSC([-6, 20, 8, -2, 4]));
console.log("bubbleSortASC([-6,20,8,-2,4])", bubbleSortASC([-6, 20, 8, -2, 4]));

// Complexity
// Big O is O(n^2)
