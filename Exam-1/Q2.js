// Q2. Swap Two Variables
// Write a program to swap two numbers without using a third variable.

let firstNumber = 10;
let secondNumber = 20;

firstNumber = firstNumber + secondNumber;
secondNumber = firstNumber - secondNumber;
firstNumber = firstNumber - secondNumber;

console.log(firstNumber, " ", secondNumber);
