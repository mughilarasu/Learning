// given a staircase of n steps, count the number of distinct ways to climb to the top.
// you can either climb 1 step or 2 at a time
// n=1,climbingStairCase(1)=1 | (1)
// n=2,climbingStairCase(2)=2 | (1,1) and (2)
// n=3,climbingStairCase(3)=3 | (1,1,1) (1,2) and (2,1)
// n=4,climbingStairCase(4)=5 | (1,1,1,1) (1,1,2) (1,2,1) (2,1,1) and (2,2)
// if you have to climb to step n, we can only climb from step n-1 or n-2
// calculate the ways we can climb to n-1 and n-2 steps and add the two
// climbingStairCase(n)=climbingStairCase(n-1)+climbingStairCase(n-2)
// similar to fibonnaci sequence

function climbingStairCase(value) {
  const noOfWays = [1, 2];
  for (let i = 2; i <= value; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  return noOfWays[value - 1];
}
console.log("climbingStairCase(1)", climbingStairCase(1));
console.log("climbingStairCase(2)", climbingStairCase(2));
console.log("climbingStairCase(5)", climbingStairCase(5));

// Complexity
// Big O is O(n)

