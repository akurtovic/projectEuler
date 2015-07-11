/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains
10 terms. Although it has not been proved yet (Collatz Problem), it is thought
that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/
var longestChain = 0;

function sequence(start, current, steps, updateLongestChain) {
  if (current === 1) {
    updateLongestChain(steps, start);
  } else if (current === null) {
    current = start;
    sequence(start, current, steps, updateLongestChain);
  } else if (current % 2 === 0) {
    steps += 1;
    sequence(start, current/2, steps, updateLongestChain)
  } else {
    steps += 1;
    sequence(start, (current*3)+1, steps, updateLongestChain)
  }
}

function updateLongestChain(chainLength, startingNumber) {
  if (chainLength > longestChain) {
    longestChain = chainLength;
    console.log("Starting number " + startingNumber + " produced longest chain so far:", longestChain);
  }
}

for (var i=1; i < 1000000; i++) {
  sequence(i, null, 0, updateLongestChain);
}