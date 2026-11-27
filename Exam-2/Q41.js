/*
Q41. Palindrome String: Check whether a string is a palindrome, ignoring uppercase/lowercase differences.
*/
function isPalindrome(inputString) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const cleanedString = inputString.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Initialize pointers for the start and end of the string

  let left = 0;
  let right = cleanedString.length - 1;

  // Check characters from both ends towards the center
  while (left < right) {
    if (cleanedString[left] !== cleanedString[right]) {
      return false; // Not a palindrome
    }
    left++;
    right--;
  }
  return true; // Is a palindrome
}

// Example usage:
const inputString = "A man, a plan, a canal: Panama";
const result = isPalindrome(inputString);
console.log(`Is the string a palindrome? ${result}`);
