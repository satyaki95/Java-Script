// Q22. Prime Number Checker
// Take a number and check whether it is a prime number using a loop.

let number = 10;

let primeNumber = true;

if (number <= 1) {
  primeNumber = false;
}

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    primeNumber = false;
    break;
  }
}

if (primeNumber) {
  console.log("Prime Number");
} else {
  console.log("Not Prime Number");
}
