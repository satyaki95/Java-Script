/*
Q39. Character Counter: Count total characters, vowels, consonants, digits and spaces in a string.
*/

function countCharacters(inputString) {
  // Initialize counters
  let totalCharacters = inputString.length;
  let vowelsCount = 0;
  let consonantsCount = 0;
  let digitsCount = 0;
  let spacesCount = 0;

  // Define regex patterns for vowels, consonants, digits, and spaces
  const vowelsRegex = /[aeiouAEIOU]/;
  const consonantsRegex = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/;
  const digitsRegex = /[0-9]/;
  const spacesRegex = /\s/;

  // Iterate through each character in the string
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (vowelsRegex.test(char)) {
      vowelsCount++;
    } else if (consonantsRegex.test(char)) {
      consonantsCount++;
    } else if (digitsRegex.test(char)) {
      digitsCount++;
    } else if (spacesRegex.test(char)) {
      spacesCount++;
    }
  }

  // Return an object with all the counts
  return {
    totalCharacters,
    vowelsCount,
    consonantsCount,
    digitsCount,
    spacesCount,
  };
}

// Example usage:
const inputString = "Hello World! 123";
const characterCounts = countCharacters(inputString);
console.log("Character Counts:", characterCounts);
