/*
Q34. Inventory Management: Display products with stock below 10, zero stock and stock above 50.
*/

const inventory = [
  { id: 1, name: "Laptop", stock: 5 },
  { id: 2, name: "Shirt", stock: 0 },
  { id: 3, name: "Smartphone", stock: 15 },
  { id: 4, name: "Jeans", stock: 8 },
  { id: 5, name: "Blender", stock: 60 },
];

const lowStockProducts = inventory.filter((product) => product.stock < 10);
const zeroStockProducts = inventory.filter((product) => product.stock === 0);
const highStockProducts = inventory.filter((product) => product.stock > 50);

console.log("Products with Stock Below 10:", lowStockProducts);
console.log("Products with Zero Stock:", zeroStockProducts);
console.log("Products with Stock Above 50:", highStockProducts);
