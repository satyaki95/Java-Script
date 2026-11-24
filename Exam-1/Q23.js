// Q23. Reverse a Number
// Take a number and reverse its digits without converting it into a string.
// Example:
// Input: 12345
// Output: 54321

let num = 12345;

let reverse = 0;

while (num > 0) {
  let store = num % 10;
  reverse = reverse * 10 + store;
  num = Math.floor(num / 10);
}

console.log(reverse);
