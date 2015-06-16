var num = 600851475143;

function isFactor(n) {
  return num % n === 0;
}

function isPrime(n) {
  if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
  if (n%2==0) return (n==2);
  if (n%3==0) return (n==3);
  var m=Math.sqrt(n);
  for (var i=5;i<=m;i+=6) {
    if (n%i==0)     return false;
    if (n%(i+2)==0) return false;
  }
  return true;
}

function getLargestPrimeFactor() {
  var largestPrimeFactor = 0;
  for (var i = 0; i < Math.sqrt(num); i++) {
    if (isFactor(i) && isPrime(i)) {
      (i > largestPrimeFactor) ? largestPrimeFactor = i : null;
    }
  }

  return largestPrimeFactor;
}

console.log(getLargestPrimeFactor());
