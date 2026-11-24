// Q8. Largest Among Three Numbers
// Take three numbers and find the largest number using nested if-else statements.

const firstNumber = 5;
const secondNumber = 15;
const thirdNumber = 10;

if (firstNumber > secondNumber) {
  if (firstNumber > thirdNumber) {
    console.log("Largest Number - ", firstNumber);
  } else {
    console.log("Largest Number - ", thirdNumber);
  }
} else {
  console.log("Largest Number - ", secondNumber);
}
