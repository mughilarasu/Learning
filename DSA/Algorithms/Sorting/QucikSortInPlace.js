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

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivot = partition(arr, left, right)
    quickSort(arr, left, pivot - 1)
    quickSort(arr, pivot + 1, right)
  }
  return arr
}

function partition(arr, left, right) {
  const pivot = arr[right]
  let i = left
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j)
      i++
    }
  }
  swap(arr, i, right)
  return i
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const arr = [8, 20, -2, 4, -6]
quickSort(arr)
console.log(arr) // [-6, -2, 4, 8, 20]
