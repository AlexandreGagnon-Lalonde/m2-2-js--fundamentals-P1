// The purpose of this exercise is to re-implement standard array methods
// Do not use the array methods .map, .filter and .every
// You can use for loops to implement your logic

// Q8 - filter(lst, func) returns a list with all the elements of lst that does not satisfy f removed
//    - filter(lst, func) has fewer elements than lst
//    - if lst_ = filter(lst, f) and x is an element of lst_ it means that:
//        x is an element of lst
//        f(x) is true
//
// Example:
// function isEven(x) {return x % 2 === 0;}
// filter([1, 2, 3, 4, 5], isEven) returns [2,4];

function filter(array, func) {
  // initialize the array
  let newArray = [];
  // loop through the given array
  for (i = 0; i < array.length; i++) {
    // activate the given function
    let functionActivated = func(array[i]);
    // check if result of function is true
    if (functionActivated === true) {
      // push the true value in new array
      newArray.push(array[i]);
    }
  }
  return newArray
}

function keepLong(str) {
  return str.length > 5;
}

console.log(filter(['Cyborg', 'Robin', 'Batman', 'Superman', 'Aquaman', 'Flash'], keepLong));