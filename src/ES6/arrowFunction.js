const array = [1, 2, 3, 4, 5, 6];

array.forEach((value) => {
  console.log("value ", value);
});

array.forEach((value) => {
  /*
    Instead of function, and if you just have one parameter, you can use
    `array.forEach(value => console.log("value arrow function", value);)`
  */
  console.log("value arrow function", value);
});

// Create new array based on other array
const arrayNew = array.map(function(value){
  return value * 2;
});
console.log("new array ", arrayNew);

// Create new array based one other array use arrow function
const arrayNewArrow = array.map(value => value * 2);
// Remove return because `=>` means returning something
console.log("new array arrow ", arrayNewArrow);


// Example for addition
function add(a, b) {
  return a + b;
}

console.log("add function", add(4, 5));

const addArrow = (a, b) => a + b;
console.log("arrow add", addArrow(4, 5));


// Example function return function
const functionNum = (num) => {
  if (num < 0) {
    return () => console.log("negative number");
  }
  return () => console.log("positive number");
};

functionNum(1)();
// `functionNum(1)` just will return a function
