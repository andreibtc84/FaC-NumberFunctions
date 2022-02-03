// == NUMBER FUNCTIONS ==
// Sum of two numbers function
// Write a function which accepts two numbers as arguments.
// The function should return the sum of the two numbers.

const addTwoNumbers = (x, y) => x + y;

console.log(addTwoNumbers(4, 5));
console.log("---------------------------------------");

// Add and multiply function
/*Write a function that accepts four arguments, each will be a number. 
The function should add the first two numbers together; 
add the third and fourth numbers; 
and return the result of multiplying both sums together.
*/

const addAndMultiply = (x, y, z, q) => (x + y) * (z + q);

console.log(addAndMultiply(1, 1, 1, 1));
console.log("---------------------------------------");

// Return larger fuction
// Write a function which accepts two numbers. The function should return the larger number.

const checkLarger = (x, y) => (x > y ? x : y);

console.log(checkLarger(5, 2));
console.log("---------------------------------------");

// Sum of elements  function
/*
Write a function which accepts an array as an argument. 
Each item in the array will be a number. 
The function should add all the numbers in the array and return the result.
*/

const addArrNums = (arr) =>
  arr.reduce((previous, current) => previous + current);

console.log(addArrNums([4, 5, 6, 7, 8, 9]));
console.log("---------------------------------------");

// Squaring a number function
/*
Write a function which accepts one input, a number.
*/
const numSquare = (num) => num * num;

console.log(numSquare(2));
console.log("-------------------------------------");

// Odd or Even
/* Write a function which accepts a number as an argument.
The function should determine whether the number is even or odd.
Return ‘Even’ or ‘Odd’ based on the parity of the number.
*/
const oddOrEven = (num) => (num % 2 === 0 ? "Even" : "Odd");

console.log(oddOrEven(2));
console.log("---------------------------------------");

// Sum of positive
/*
Write a function which accepts an array as an argument.
The function should add up all the positive numbers from the array and return the sum.
If there are no positive numbers to sum, return zero.
*/
let posArr = [];
const positiveSum = (arr) => {
  posArr = arr.filter((e) => e > 0);
  return posArr.reduce((prev, curr) => prev + curr);
};

console.log(positiveSum([-25, -5, 4, 5, 6, 7, 8, 9]));
console.log("---------------------------------------");
