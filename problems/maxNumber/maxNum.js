/*Write a function to return the maximum number in an array of numbers.
 *For example: findMaxNum([100, 2, 3, 2, 50]) should return 100
 */

//First solution
const findMaxNum = (arr) => {
  let len = arr.length;
  let maxNum = 0;
  while (len--) {
    if (arr[len] > maxNum) {
      maxNum = arr[len];
    }
  }
  console.log(maxNum);
  return maxNum;
};

/*********************************************************/

//Second solution
const findMaxNum = (arr) => {
  console.log(Math.max.apply(null, arr));
  return Math.max.apply(null, arr);
};

//Third solution
const findMaxNum = (arr) => {
  console.log(Math.max(...arr));
  return Math.max(...arr);
};

findMaxNum([100, 200, 5]);
