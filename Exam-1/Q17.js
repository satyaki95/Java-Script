// Q17. Remove Duplicate Values
// Create an array containing duplicate numbers. Generate a new array containing only
// unique values.
// Example:
// Input: [10, 20, 10, 30, 20, 40]
// Output: [10, 20, 30, 40]

let numbers = [10, 20, 10, 30, 20, 40];
let uniqueValue = [];

for (let i = 0; i < numbers.length; i++) {
  if (!uniqueValue.includes(numbers[i])) {
    uniqueValue.push(numbers[i]);
  }
}

console.log(uniqueValue);
