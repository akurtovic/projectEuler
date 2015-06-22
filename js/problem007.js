/*
Problem 7
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13,
we can see that the 6th prime is 13.

What is the 10,001st prime number?
*/

function isPrime(n) {
  for (var i=2; i<n-1; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

var primesFound = 0;
var lastPrimeFound = 0;
var x = 2;

while (primesFound < 10001) {
  if (isPrime(x)) {
    primesFound++;
    lastPrimeFound = x;
  }
  x++;
}
console.log("result=",lastPrimeFound);