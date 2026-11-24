/*
Q8. Calculator Using Switch Case: Accept two numbers and an operator; support addition, subtraction,
multiplication, division and modulus. Handle division by zero.
*/

const calculator = (num1, num2, operator) => {
  let display;

  switch (operator) {
    case "+":
      display = num1 + num2;
      break;

    case "-":
      display = num1 - num2;
      break;

    case "*":
      display = num1 * num2;
      break;

    case "/":
      if (num2 === 0) {
        display = ` Not devisable by zero`;
        return display;
      }
      display = num1 / num2;
      break;

    case "%":
      if (num2 === 0) {
        display = ` Not devisable by zero`;
        return display;
      }
      display = num1 % num2;
      break;

    default:
      display = `Invalid Operator`;
      break;
  }
  return display;
};

console.log(calculator(5, 0, "/"));
