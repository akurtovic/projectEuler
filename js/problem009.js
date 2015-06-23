/*
Problem 9 - Special Pythagorean triplet
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

for (var i = 1; i < 1000; i++) {
  for (var j=i+1; j < 1000; j++) {
    var a = i, b = j, c = Math.sqrt(a*a + b*b);
    if (c%1 === 0 && a+b+c === 1000) {
    console.log("result=",a*b*c);
    }
  }
}