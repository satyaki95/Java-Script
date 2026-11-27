/*
Q40. Reverse String: Reverse a string without using the built-in reverse() method.
*/
function reverseString(inputString) {
  let reversedString = "";

  // Iterate through the string from the end to the beginning
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }

  return reversedString;
}

// Example usage:
const inputString = "Hello World!";
const reversed = reverseString(inputString);
console.log(`Reversed String: ${reversed}`);
