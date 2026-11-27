/*
Q30. Pagination Data: Given 50 products, use slice() to display the first 10, next 10 and last 10 products.
*/
const products = [
  "Product 1",
  "Product 2",
  "Product 3",
  "Product 4",
  "Product 5",
  "Product 6",
  "Product 7",
  "Product 8",
  "Product 9",
  "Product 10",
  "Product 11",
  "Product 12",
  "Product 13",
  "Product 14",
  "Product 15",
  "Product 16",
  "Product 17",
  "Product 18",
  "Product 19",
  "Product 20",
  "Product 21",
  "Product 22",
  "Product 23",
  "Product 24",
  "Product 25",
  "Product 26",
  "Product 27",
  "Product 28",
  "Product 29",
  "Product 30",
  "Product 31",
  "Product 32",
  "Product 33",
  "Product 34",
  "Product 35",
  "Product 36",
  "Product 37",
  "Product 38",
  "Product 39",
  "Product 40",
  "Product 41",
  "Product 42",
  "Product 43",
  "Product 44",
  "Product 45",
  "Product 46",
  "Product 47",
  "Product 48",
  "Product 49",
  "Product 50",
];

// First 10 products
const first10 = products.slice(0, 10);

// Next 10 products
const next10 = products.slice(10, 20);

// Last 10 products
const last10 = products.slice(40, 50);

console.log("First 10 Products:", first10);
console.log("Next 10 Products:", next10);
console.log("Last 10 Products:", last10);
