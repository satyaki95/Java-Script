/*
22. Product Price Management: Find the maximum, minimum, total and average price in an array.
*/

const prices = [1200, 850, 650, 2000, 1500, 950];

// Maximum number
const maxPrice = Math.max(...prices);

// Minimum number
const minPrice = Math.min(...prices);

// Total
const totalPrice = prices.reduce((sum, price) => sum + price, 0);

// Average
const averagePrice = totalPrice / prices.length;

console.log("Max", maxPrice);
console.log("Min", minPrice);
console.log("Total", totalPrice);
console.log("Average", averagePrice);
