// Q15. Array Statistics
// Create an array containing 10 numbers. Find:
//  Sum of all numbers
//  Average
//  Largest number
//  Smallest number

let numbers = [12, 25, 8, 45, 30, 18, 50, 7, 22, 15];

let sum = 0;
let largest = numbers[0];
let smallest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];

  if (numbers[i] > largest) {
    largest = numbers[i];
  }

  if (numbers[i] < smallest) {
    smallest = numbers[i];
  }
}

let average = sum / numbers.length;

console.log("Sum -", sum);
console.log("Average -", average);
console.log("Largest Number -", largest);
console.log("Smallest Number -", smallest);
