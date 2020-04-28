// -------------------------------------------------------------
// String Methods Exercises
// ----------
// note: need to have covered string methods for these exercises
// -------------------------------------------------------------

// Write to the console, the desired length of each of the following strings.
// When this exercise is complete, it should write all of the answers to the console one after the other.

// Given the following data to answer the questions.
const smartGuy = 'Rick Sanchez';
const rickSaying = 'wubba lubba dub dub';
const grandson = 'Morty Antoine Smith';
const enemies = 'Tammy Gueterman, Evil Morty, Zeep Xanflorp, Galactic Federation, Council of Ricks, Phoenixperson, Scary Terry, Abradolf Lincler, Supernova';
const alternateRicks = 'Simple Rick, Slow Rick, Tall Rick, Cop Rick, Doofus Rick, Past Rick, Replacement Rick, Insurance Rick, Sales Rick, Supervisor Rick, Cool Rick, Cowboy Rick, Tiny Rick, Cronenberg Rick, Teacher Rick, Farmer Rick, Future Rick, Rick J22, Evil Rick, Toxic Rick, Crunk Rick, Pickle Rick, The Scientist Formerly Known as Rick, Rick C-137';
const secret = "summerlobaconokfamily summerascaryt mintergalactice, I'jerrym Pimortybethcklesummer Ricsummerk!";
const notCode = [
  'summer',
  'bacon',
  'scary',
  'intergalactic',
  'jerry',
  'morty',
  'beth',
  'family',
];



// Q1 - How many names does Morty have? (use the `grandson` string)
// PLEASE NOTE: this first question is solved for you, as a demonstration of how this works)

const mortyNamesArray = grandson.split(' ');
const numberOfNames = mortyNamesArray.length;
console.log(`Q1 - Morty has ${numberOfNames} names. \n`);



// Q2 - Convert the alternateRicks string to an array, so that each name ("Simple Rick") is an element in that array. Log that array to the console.

// SPLIT all the names that are seperated by the string ', ', returns an array with all the names
const seperatedRicks = alternateRicks.split(', ');
console.log(`Q2 - Rick's names : ${seperatedRicks}\n`);



// Q3 - How many Ricks have been named in alternateRicks?
// HINT: There are multiple ways to solve this one. Maybe try a `for` loop!

// Use the method .LENGTH to have the amount of different names from the previous exercise
const amountOfRicks = seperatedRicks.length;
console.log(`Q3 - Rick has ${amountOfRicks} different names.\n`);



// Q4 - How many characters are there in rickSaying (without spaces)?

// Replaces all the spaces in the string using the REPLACE method globally
// Use .LENGTH to calculate the amount of caracters after the replace
const amountOfCharacters = rickSaying.replace(/ /g, '').length;
console.log(`Q4 - There is ${amountOfCharacters} no-space characters in the string "${rickSaying}".\n`);



// Q5 - It turns out, Morty doesn't actually have a middle name. The `grandson` string is wrong! Console Morty's name without "Antoine".

// remove the middle name ' Antoine' with a space either before or after 
const actualName = grandson.replace(' Antoine', '');
console.log(`Q5 - Morty's actual name is ${actualName}.\n`);



// Q6 - Scary Terry is actually not an enemy. Remove him from the list and console only Rick's true enemies.

// remove the false enemy with REPLACE, remove comma and space to make sure it's organized
const actualEnemies = enemies.replace('Scary Terry, ', '');
console.log(`Q6 - Here are the actual enemies of Rick : ${actualEnemies}.\n`);



// Q7 (STRETCH)
// `secret` is an encrypted message! Let's see if we can figure out what it
// says. To decode the message, you'll need to remove any words that are found
// in the "notCode" array.
//
// For example:
//   IF secret was `bluehired`
//   AND notCode was `['blue', 'red']`
//   THEN the answer would be `hi` (bluehired without blue and red).

// new variable to store the modified string
let newSecret = secret;

// loop to go through all the different words in the array 'notCode'
for (let i = 0; i < notCode.length; i++) {
  // initiate this to make sure all the same words are replaced
  let stringPresence = true;
  // replace the words until there is no more in the newSecret string
  while (stringPresence === true) {
    // replaces the word in the old string and saves the new string
    newSecret = newSecret.replace(notCode[i], '');
    // change the status if there is no more occurence of the word
    if (newSecret.includes(notCode[i]) === false) {
      stringPresence = false;
    }
  }
}

console.log(`Q7 - ${newSecret}`);