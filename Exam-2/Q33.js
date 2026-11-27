/*
Q33. Product Category Management: Extract all unique product categories from a product array.
*/
const products = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "Shirt", category: "Clothing" },
  { id: 3, name: "Smartphone", category: "Electronics" },
  { id: 4, name: "Jeans", category: "Clothing" },
  { id: 5, name: "Blender", category: "Home Appliances" },
];

const uniqueCategories = [
  ...new Set(products.map((product) => product.category)),
];

console.log("Unique Product Categories:", uniqueCategories);
