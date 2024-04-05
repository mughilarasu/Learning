// Give an natural number 'n' determine if the number is prime or not
// A prime number is a natural number greater than 1 that can only be divided by 1 and itself or not a product of two smaller natural numbers.
// 13 is a prime number because it can be divided by 1 and 13.
// isPrime(1) = false
// isPrime(4) = false (1*4 or 2*2 or 4*1) or isPrime(4) = false (4/2=2) reminder should be less than or equal to 1
// isPrime(5) = true (1*5 or 5*1) or isPrime(5) = true (5/1=1)

function isPrimeNumber(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}


// more optimal

// function isPrimeNumber(num) {
//   if (num < 2) {
//     return false;
//   }
//   for (let i = 2; i < Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

console.log("isPrimeNumber(1)", isPrimeNumber(1));
console.log("isPrimeNumber(4)", isPrimeNumber(4));
console.log("isPrimeNumber(5)", isPrimeNumber(5));

// Complexity
// Big O is O(n)
// Big O for more optimal is O(sqrt(n))
