/*
Q29. Calculate Total Cart Price: Use reduce() to calculate total price from product objects containing price and
quantity.
*/
const cart = [
  { item: "Laptop", price: 50000 },
  { item: "Mouse", price: 1000 },
  { item: "Keyboard", price: 2000 },
];

const total = cart.reduce((sum, product) => sum + product.price, 0);

console.log("Total Price:", total);
