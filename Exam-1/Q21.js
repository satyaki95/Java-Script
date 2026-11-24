// Q21. Factorial Calculator
// Take a number and calculate its factorial using a loop.
// Example:
// Input: 5
// Output: 120

let num = 5;
let factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial *= i;
}

console.log(factorial);
