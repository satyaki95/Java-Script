/*
Q15. Reverse Number: Reverse the digits of an entered number using a loop. Example: 12345 fi 54321.
*/

const reverseNumber = (num) => {
  let reverse = 0;

  while (num > 0) {
    let store = num % 10;
    reverse = reverse * 10 + store;
    num = Math.floor(num / 10);
  }
  return reverse;
};

console.log(reverseNumber(12345));
