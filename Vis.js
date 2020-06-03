// What is the output?
x();
function x() {
  return 8;
}
function x() {
  return 10;
}

// What is the output?
y();
var y = function () {
  return 10;
};
y();

// pass an array to a function and extract duplicate numbers

const duplicateElements = (arr) => {
  let newArr = arr.slice().sort();
  let results = [];
  for (let i = 0; i < newArr.length - 1; i++) {
    if (newArr[i + 1] == newArr[i]) {
      results.push(newArr[i]);
    }
  }
  return results;
};

let arr = [-1, 1, 4, -1, 4, 5];
console.log("Duplicated elements are : ", duplicateElements(arr));
