/*
Q16. Palindrome Number: Check whether a number reads the same forward and backward. Example: 121.
*/

const palindromeNumber = (number) => {
  let reverse = 0;
  let num = number;
  while (num > 0) {
    let store = num % 10;
    reverse = reverse * 10 + store;
    num = Math.floor(num / 10);
  }

  if (number === reverse) {
    return `Palindrome Number`;
  } else {
    return `Not Palindrome Number`;
  }
};

console.log(palindromeNumber(121));
