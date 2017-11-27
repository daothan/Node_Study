let a = 10;
console.log(a);

if (true) {
  let b = 5;
}

console.log("b = ", b);
// It will throw error because b can only use in if scope
// It will be true if change let b to var b