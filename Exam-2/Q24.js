/*
Q24. Search Product by Name: Use find() to locate a product in an array of product objects.
*/

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 25000 },
  { id: 3, name: "Tablet", price: 15000 },
];

const product = products.find((p) => p.name === "Mobile");

console.log(product);
