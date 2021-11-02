// Hoisting

x = "Ahmed"; // will run

const func = () => {
  let y = "Ola";
  console.log(x, y);
  w = "Test";
};

func();
console.log(x, z);
console.log(w); // will run because it is defined as global

var x;
var z = "ASAS"; // will return undefined

////////////////////////////////////////
