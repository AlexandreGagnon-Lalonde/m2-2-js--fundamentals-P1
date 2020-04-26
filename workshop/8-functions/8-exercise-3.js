// Q3
// Write a function that accepts 5 grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

// function for exactly 5 numbers
function calculateAverage(a, b, c, d, e) {
  // calculate average and round it with MATH.ROUND
  let average = Math.round((a + b + c + d + e) / 5);
  return average;
}

console.log(calculateAverage(76, 60, 83, 100, 78));

// function for any amount of numbers
function calculateAverageN(...Args) {
  // initialize the total
  let total = 0;
  // calculate the total
  Args.forEach(function(item) {
    total += item;
  })
  // Calculate and round the average using the .LENGTH of the ARGS array
  let average = Math.round(total / Args.length);
  return average
}

console.log(calculateAverageN(76, 60, 83, 100, 78));
console.log(calculateAverageN(76, 60, 83, 100, 78, 1, 1232, 23, 21, 34, 21, 34, 123, -9));