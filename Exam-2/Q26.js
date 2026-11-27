/*
Q26. Remove Duplicate Values: Remove duplicate numbers from an array using JavaScript array methods.
*/

const numbers = [1, 2, 3, 2, 4, 5, 1, 6];

const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);
