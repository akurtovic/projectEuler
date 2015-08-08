/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
*/

var grid = 20;
var paths = 1;

for (var i = 0; i < grid; i++) {
	paths *= (2 * grid) - i;
	paths /= i+1;
}

console.log(paths);