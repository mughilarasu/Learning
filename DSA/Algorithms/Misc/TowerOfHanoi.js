// move the entire stack to the last rod by these rules
// only one disk may be moved at a time
// each moves consists of taking the upper disc from one of the stacks and placing it on the top of another stack or on an empty rod
// no disk may be placed on top a disk that is smaller
// shift n-1 disk from A to B using C (When required)
// shift last disk from A to C
// shift n-1 disk from B to C using A (When required)

function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, "A", "C", "B");

// complexity
// Big O is O(2^n)

