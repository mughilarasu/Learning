// Give a number 'n' find the first 'n' elements of fibonacci sequence
// fibonacci sequence is sequence in which each number is the sum of the two preceding ones.
// first two numbers in the sequence are 0 and 1
// fn=fn-1+fn-2
// fibonacci(2)=[0,1]
// fibonacci(3)=[0,1,1]
// fibonacci(7)=[0,1,1,2,3,5,8]

function fibonacciSequence(num) {
  const sequence = [0, 1];
  for (let i = 2; i < num; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}

//console.log('fibonacciSequence(2)',fibonacciSequence(2));
//console.log('fibonacciSequence(3)',fibonacciSequence(3));
console.log('fibonacciSequence(7)',fibonacciSequence(7));

// Complexity
// Big O is O(n)