var result = 0;

function isPalindrome(number) {
  if (number.toString() === number.toString().split('').reverse().join('')) {
    return true
  }
  return false;
}

for (var i=100; i < 1000; i++) {
  for (var j=100; j < 1000; j++) {
    if (isPalindrome(i*j) && (i*j) > result) {
      result = i*j;
    }
  }
}

console.log(result);