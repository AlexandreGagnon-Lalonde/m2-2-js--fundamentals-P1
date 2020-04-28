// Q6 - Take the code you wrote in Q5 and now let's create a reusable function
// that takes two arguments, numbers that dictate the range within which to look for
// Armstrong numbers.

// This means that our code from the previous question will need to be tweaked a little
// to determine Armstrong numbers of different lengths.
// e.g.
// a number of 1 digit; each digit is to the power of 1
// a number of 2 digit; each digit is to the power of 2
// a number of 3 digit; each digit is to the power of 3
// a number of 4 digit; each digit is to the power of 4
// a number of 5 digit; each digit is to the power of 5

// See this site for a list of "narcissistic" numbers
// http://mathworld.wolfram.com/NarcissisticNumber.html

function identifyArmstrongNumbers(num1, num2) {
  // initialize the array
  let armstrongNumbers = [];
  // loop from NUM1 to NUM2
  for (i = num1; i <= num2; i++) {
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
  return armstrongNumbers
}

console.log(identifyArmstrongNumbers(100, 99999));