/*
NOTE: For the exercises in this section, you are not allowed to use the `for` or `while` loops.
You must solve them using array methods like filter, map, forEach, etc.
You will also need to verify that your functions work as expected.
Be sure to test them. :)
*/

// Q7 - Only greet people who's names have length at least 4. Otherwise ignore them completely.
// For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]

function greetLong(array) {
  let newArray = array
  // .MAP returns a different array on condition
  .map(element => {
    // remove everything of the array and we add back if condition is met
    let newElement = '';
    // add greeting and old element if it's more than 3 characters
    if (element.length >= 4) {
      newElement = 'Hello ' + element;
    }
    return newElement
  })
  // .FILTER returns every element that checks the condition
  .filter(item => {
    // remove elements that are empty
    if (item !== '') {
      return true
    }
  })
  return newArray
}

console.log(
  'Q7 greetLong()', 
  greetLong(['Scott', 'Bob', 'Ric', 'Jim'])
);