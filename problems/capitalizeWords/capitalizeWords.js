// Write a function that takes a string argument and return the same string
//with capitalized words.
//Examples:
//capitalizeWords('a program'); return 'A Program'
//capitalizeWords('city of angels'); return 'City Of Angels'

const capitalizeWords = (str) => {
  strArr = str.split(" ");
  capitalizedStr = strArr
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  console.log(capitalizedStr);
  return capitalizedStr;
};
