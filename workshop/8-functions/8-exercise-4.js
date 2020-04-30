// Q4 - Write a function that takes an array and a value as arguments and
// returns true if the value is in the array else it returns false.

function itemIsPresent(array, item) {
  if (array.includes(item)) {
    return true
  } else {
    return false
  }
}

function itemIsPresentQ(array, item) {
  // initialize return value to false
  let validity = false;
  // look if item is in the array and change return value to true
  array.forEach(element => {
    if (element === item) {
      validity = true;
    }
  });
  return validity
}

// Test case
const myArray = [
  'bacon',
  'purple',
  'door',
  'window',
  'exist',
  'code',
  'program',
  'funky',
];

console.log(itemIsPresent(myArray, 'funky')); // true
console.log(itemIsPresent(myArray, 'elephant')); // false