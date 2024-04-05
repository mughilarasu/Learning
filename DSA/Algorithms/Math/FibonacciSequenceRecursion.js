// Give a number 'n' find the n th elements of fibonacci sequence
// fibonacci sequence is sequence in which each number is the sum of the two preceding ones.
// first two numbers in the sequence are 0 and 1 (0,1,1,2,3,5,8,...)
// fn=fn-1+fn-2
// f0=0 and f1=1 stop the loop
// fibonacciSequenceRecursion(0)=0
// fibonacciSequenceRecursion(1)=1
// fibonacciSequenceRecursion(6)=8

function fibonacciSequenceRecursion(num) {
  if (num < 2) {
    return num;
  }
  return (
    fibonacciSequenceRecursion(num - 1) + fibonacciSequenceRecursion(num - 2)
  );
}

console.log("fibonacciSequenceRecursion(0)", fibonacciSequenceRecursion(0));
console.log("fibonacciSequenceRecursion(1)", fibonacciSequenceRecursion(1));
console.log("fibonacciSequenceRecursion(6)", fibonacciSequenceRecursion(6));

// Complexity
// Big O is O(2^n) 
// Recursion is not a good solution for fibonacci sequence