/*Write a function that takes an argument of string and returns
 *true, or false according to the string being palindrome or not.
 *Take into consideration that spaces count, while punctuation doesn't.
 *For example: palindrome("Dad") return true
 * palindrome("code") return false
 */

//First solution
const palindrome = (str) => {
  let reversed = [...str].reverse().join("");
  return str.toLowerCase() === reversed.toLowerCase();
};

/*********************************************************/

//Second solution
const palindrome = (str) => {
  const strArr = [...str];
  return strArr.every(function (char, i) {
    return char.toLowerCase() === strArr[strArr.length - i - 1].toLowerCase();
  });
};

/*********************************************************/

//Third solution
const palindrome = (str) => {
  let reversed = [...str].reduce(function (acc, cur) {
    return cur + acc;
  });
  return str.toLowerCase() === reversed.toLowerCase();
};
