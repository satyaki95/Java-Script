/*
Q38. Word Counter: Accept a paragraph and count the total number of words.
*/

function countWords(paragraph) {
  // Split the paragraph into words using space as a delimiter
  const words = paragraph.trim().split(/\s+/);

  // Filter out any empty strings and count the number of words
  const wordCount = words.filter((word) => word.length > 0).length;
  return wordCount;
}

// Example usage:
const paragraph =
  "This is an example paragraph to count the total number of words.";
const totalWords = countWords(paragraph);
console.log(`Total number of words: ${totalWords}`);
