// Q4 - Write a function that filters out the non-unique values in an array.
// This function should accept an array as an argument and return a new array.

// Hint: consider using .filter(), .indexOf() and .lastIndexOf()

// removes all instances of non-unique values
function filterNonUnique(array) {
  let newArray = array.filter(item => {
    return array.indexOf(item) === array.lastIndexOf(item);
  })
  return newArray
}

// removes all but one instances of non-unique values
function filterNonUnique2(array) {
  let newArray = array.filter((item, i) => {
    // if the index of the item is equal to the index, keep the value
    // in case of doubles, the index of the item will refer to the index of the first
    // appearance of the value but the index itself will still be incrementing and 
    // they will not be of equal value
    return array.indexOf(item) === i;
  })
  return newArray
}

console.log(filterNonUnique([1,2,3,3,4,5,6,7,7,8]));
console.log(filterNonUnique([1,2,3,3,3,3,4,4,4,4,4,8,8,8,8,5,6,7,7,8,'asd','asd']));
console.log(filterNonUnique2([1,2,3,3,3,3,4,4,4,4,4,8,8,8,8,5,6,7,7,8,'asd','asd']));