var sumTotal = 0;
var squareTotal = 0;
for (var i=1; i<101; i++) {
  sumTotal += i;
  squareTotal += i*i;
}
console.log("result=", (sumTotal * sumTotal) - squareTotal);