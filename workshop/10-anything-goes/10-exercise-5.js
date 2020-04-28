// Q5 - Write a JavaScript program to find ALL the Armstrong numbers between 0 and 999,
// store them in array an output that array to the console.

// Note : An Armstrong number of three digits is an integer
// such that the sum of the cubes of its digits is equal
// to the number itself. For example,
// 371 is an Armstrong number:
// 3 ** 3 + 7 ** 3 + 1 ** 3
// = 27   + 343    + 1
// = 371

let armstrongNumbers = [];

for (i = 0; i <= 999; i++) {
  // change the i to a string
  let string = i.toString();
  // initialize total to 0
  let total = 0;
  // loop through each string
  for (j = 0; j < string.length; j++) {
    // change each index of the value to a number
    let number = parseInt(string[j]);
    // add that number to the power of the .LENGTH of the string
    total = total + Math.pow(number, string.length);
    // push the i to the array
    if (total === i) {
      armstrongNumbers.push(i);
    }
  }
}

console.log(armstrongNumbers);