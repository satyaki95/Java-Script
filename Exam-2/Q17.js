/*
Q17. Prime Number Checker: Accept a number and determine whether it is prime.
*/

const primeNumberChecker = (number) => {
  let isPrime = true;

  if (number <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
      }
    }
  }
  return isPrime ? `Prime Number` : `Not Prime Number`;
};

console.log(primeNumberChecker(6));
