/*
NOTE: For the exercises in this section, you are not allowed to use the `for` or `while` loops.
You must solve them using array methods like filter, map, forEach, etc.
You will also need to verify that your functions work as expected.
Be sure to test them. :)
*/

// Q10 - Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 is E // <70 is D // <80 is C // <90 is B // <100 is A

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// function to letter grade the class average
function calculateAverage(grades) {
  // initialize total
  let total = 0;
  // .forEach to add up all elements of the array
  grades.forEach(element => {
    total += element;
    return total
  });
  // calculate the rounded average
  let average = Math.round(total / grades.length);
  // transform the average number in a letter grade
  if (average === 100) {
    average = 'A+';
  } else if (average < 100 && average >= 90) {
    average = 'A';
  } else if (average < 90 && average >= 80) {
    average = 'B';
  } else if (average < 80 && average >= 70) {
    average = 'C';
  } else if (average < 70 && average >= 60) {
    average = 'D';
  } else if (average < 60 && average >= 0) {
    average = 'E';
  } else {
    average = 'Invalid grades';
  }
return `The average of the class is ${average}`
}

// function to letter grade each grade in class
function calculateGrades(grades) {
  // use .MAP to change each grade to it's letter
  let newGrades = grades.map(element => {
    if (element === 100) {
      element = 'A+';
    } else if (element < 100 && element >= 90) {
      element = 'A';
    } else if (element < 90 && element >= 80) {
      element = 'B';
    } else if (element < 80 && element >= 70) {
      element = 'C';
    } else if (element < 70 && element >= 60) {
      element = 'D';
    } else if (element < 60 && element >= 0) {
      element = 'E';
    } else {
      element = 'Invalid grade';
    }
    return element
  });
  return newGrades
}

console.log(
  'Q10 calculateGrades()',
  calculateGrades([48, 95, 65, 48, 59, 78, 72, 65])
);

console.log(
  'Q10 calculateAverage()',
  calculateAverage([48, 95, 65, 48, 59, 78, 72, 65])
);