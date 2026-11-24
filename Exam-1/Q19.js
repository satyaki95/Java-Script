// Q19. Product Management
// Create an array of five product objects. Each product should contain:
//  Product ID
//  Product Name
//  Price
//  Stock
// Find all products whose price is greater than 1000 and display their details.

let products = [
  { productId: 1, productName: "Laptop", price: 55000, stock: 10 },
  { productId: 2, productName: "Mouse", price: 500, stock: 50 },
  { productId: 3, productName: "Keyboard", price: 1200, stock: 30 },
  { productId: 4, productName: "Monitor", price: 15000, stock: 15 },
  { productId: 5, productName: "USB Drive", price: 800, stock: 40 },
];

for (let i = 0; i < products.length; i++) {
  if (products[i].price > 1000) {
    console.log(products[i]);
  }
}
