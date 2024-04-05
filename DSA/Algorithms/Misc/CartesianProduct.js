// given two finite non-empty sets, find their Cartesian Product
// in set theory Cartesian Product of two sets A and B denoted AxB, is the set of all ordered pairs (a,b) where a is in A and b is in B
// const A = [1,2]
// const B = [3,4]
// AxB = [[1,3],[1,4],[2,3],[2,4]]
// const C = [1,2]
// const D = [3,4,5]
// CxD = [[1,3],[1,4],[1,5],[2,3],[2,4],[2,5]]
// Traverse each array and pair each element in the first array with each element in the second element

function cartesianProduct(arr1, arr2) {
  const combinedArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      combinedArr.push([arr1[i], arr2[j]]);
    }
  }
  return combinedArr;
}

const A = [1, 2];
const B = [3, 4, 5];
console.log("cartesianProduct(A,B)", cartesianProduct(A, B));
// Complexity
// Big O is O(mn)
// m is arr1 and n is arr2 because of different length of two arrays
