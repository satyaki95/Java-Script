// Q25. Array Iterator
// Create an array containing five city names. Use for...of to display each city. Also
// calculate the total number of characters across all city names.

let cities = ["Kolkata", "Delhi", "Mumbai", "Chennai", "Pune"];

let totalNumberOfCharacters = 0;

for (let city of cities) {
  console.log(city);
  totalNumberOfCharacters += city.length;
}

console.log("total number of characters - ", totalNumberOfCharacters);
