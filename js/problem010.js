/* 
Problem 10 - Summation of primes
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.
Notes:
1st implementation: Brute force [Finished in 457.1s]
*/
var total = 0;

function isPrime(n) {
  if (n === 2 || n === 3 || n === 5) {
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0 || n % 5 === 0) {
    return false;
  }

  for (var i=5; i<n-1; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

for (var i=2; i < 2000000; i++) {
  if (isPrime(i)) {
    total += i;
  }
}

console.log("result=",total);

