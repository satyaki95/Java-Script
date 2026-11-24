// Q13. Basic Calculator Using Switch
// Create a calculator that accepts two numbers and an operator. Use switch case to
// perform addition, subtraction, multiplication, and division.

let firstNumber = 10;
let secondNumber = 20;
let operator = "*";

switch (operator) {
  case "+":
    console.log(firstNumber + secondNumber);
    break;

  case "-":
    console.log(firstNumber - secondNumber);
    break;

  case "*":
    console.log(firstNumber * secondNumber);
    break;

  case "/":
    console.log(firstNumber / secondNumber);
    break;

  default:
    console.log("Invalid operator!");
}
