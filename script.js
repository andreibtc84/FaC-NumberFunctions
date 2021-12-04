// == NUMBER FUNCTIONS ==
// Sum of two numbers function

const addTwoNumbers = (x, y) => x + y;

console.log(addTwoNumbers(4, 5));
console.log("---------------------------------------");

// Add and multiply function

const addAndMultiply = (x, y, z, q) => (x + y) * (z + q);

console.log(addAndMultiply(1, 1, 1, 1));
console.log("---------------------------------------");

// Return larger fuction

const checkLarger = (x, y) => (x > y ? x : y);

console.log(checkLarger(5, 2));
console.log("---------------------------------------");

// Sum of elements  function

const addArrNums = (arr) =>
  arr.reduce((previous, current) => previous + current);

console.log(addArrNums([4, 5, 6, 7, 8, 9]));
console.log("---------------------------------------");

// Squaring a number function
const numSquare = (num) => num * num;

console.log(numSquare(2));
console.log("-------------------------------------");

// Odd or Even
const oddOrEven = (num) => (num % 2 === 0 ? "Even" : "Odd");

console.log(oddOrEven(2));
console.log("---------------------------------------");

// Sum of positive
let posArr = [];
const positiveSum = (arr) => {
  posArr = arr.filter((e) => e > 0);
  return posArr.reduce((prev, curr) => prev + curr);
};

console.log(positiveSum([-25, -5, 4, 5, 6, 7, 8, 9]));
console.log("---------------------------------------");
