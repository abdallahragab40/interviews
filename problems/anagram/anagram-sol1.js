/*Write a function that takes 2 string arguments and check if
 *the 2 strings are anagrams to each other (have the same characters
 * with the same quantity). Consider only characters not spaces, or
 * punctuations.*/

//Example: anagram('Ab bc', 'cbab'); // return true
//Example: anagram('abbc', 'cba'); // return false
//Example: anagram('abbc?!', 'cbab'); // return true

//The first solution
const anagram = (stringA, stringB) =>
  cleanString(stringA) === cleanString(stringB);

const cleanString = (str) =>
  str
    .replace(/[^\w]|_/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
