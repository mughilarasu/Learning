// give a positive integer 'n' determine if the number is a power of 2 or not
// an integer is a power of two if there exists an integer x such that n===2^x
// isPowerOfTwo(1)= true (2^0)
// isPowerOfTwo(2)= true (2^1)
// isPowerOfTwo(5)= false

// n=8 repeatedly divide 8 by 2 -> 8/2=4(reminder 0), 4/2=2(reminder 0), 2/2=1(reminder 0)
// if reminder is not 0 in any step, n is not a power of two
// if reminder is 0 and n comes down to 1 , n is a power of two

function isPowerOfTwo(num) {
  if (num < 1) return false;

  while (num > 1) {
    if (num % 2 !== 0) {
      return false;
    }
    num = num / 2;
  }
  return true;
}

// more optimal

// function isPowerOfTwo(num) {
//   //bitwise
//   if (num < 1) return false;
//   return (n & (n - 1)) === 0;
// }

console.log("isPowerOfTwo(1)", isPowerOfTwo(1));
console.log("isPowerOfTwo(2)", isPowerOfTwo(2));
console.log("isPowerOfTwo(5)", isPowerOfTwo(5));

// Complexity
// Big O is O(log n)
// Big O for more optimal is O(1)
