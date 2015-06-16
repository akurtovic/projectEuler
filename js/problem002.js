var total = 0;
function fib(previous, current) {
  return (function(){
    var next = previous + current;
    if (next % 2 === 0) total += next;
    if (current < 4000000 ) fib(current, next);
    else console.log(total);
  })();

}

fib(1, 1);