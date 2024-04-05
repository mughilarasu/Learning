// Give an integer 'n' find the factorial of that integer
// the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'
// factorial of 0 is 1
// factorial of 1 is 1
// factorial(4) = 4*3*2*1 = 24
// factorial(5) = 5*4*3*2*1 = 120

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }

  return result;
}

console.log("factorial(5)", factorial(5));

// Complexity
// Big O is O(n)
