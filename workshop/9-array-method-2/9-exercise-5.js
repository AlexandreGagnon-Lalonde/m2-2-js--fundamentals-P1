/*
NOTE: For the exercises in this section, you are not allowed to use the `for` or `while` loops.
You must solve them using array methods like filter, map, forEach, etc.
You will also need to verify that your functions work as expected.
Be sure to test them. :)
*/

// Q5 - Returns a new list with all the elements of lst that are length greater than 5

function keepLong(array) {
  // initialize and define the newArray
  let newArray = array.filter(function(item) {
    // return every item longer than 5 characters
    return item.length > 5;
  })
  return newArray
}

console.log(keepLong(['Cyborg', 'Robin', 'Batman', 'Superman', 'Aquaman', 'Flash']));