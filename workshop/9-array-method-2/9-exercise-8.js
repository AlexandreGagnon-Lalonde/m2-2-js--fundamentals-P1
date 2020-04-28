/*
NOTE: For the exercises in this section, you are not allowed to use the `for` or `while` loops.
You must solve them using array methods like filter, map, forEach, etc.
You will also need to verify that your functions work as expected.
Be sure to test them. :)
*/

// Q8 - Returns true if every element of lst is of length at least 5. Otherwise returns false.

function allLong(array) {
  // initialize the statement
  let statement = true;
  // loop with .FOREACH and check if statement is still true
  array.forEach(element => {
    if (element.length < 5) {
      // change statement if .LENGTH more than 5
      statement = false;
    }
  });
  return statement
}

console.log(allLong(['Scott', 'Bob', 'Ric', 'Jim']));
console.log(allLong(['Cyborg', 'Robin', 'Batman', 'Superman', 'Aquaman', 'Flash']));