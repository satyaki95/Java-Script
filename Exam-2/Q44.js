/*
Q44. Generate Product SKU: Create a SKU from the first three letters of a product name, current year and a
unique number. Example: MOB-2026-101.
*/
function generateSKU(productName, uniqueNumber) {
  // Get the first three letters of the product name and convert to uppercase
  const firstThreeLetters = productName.substring(0, 3).toUpperCase();
  // Get the current year
  const currentYear = new Date().getFullYear();
  // Generate the SKU
  return `${firstThreeLetters}-${currentYear}-${uniqueNumber}`;
}

// Example usage:
const productName = "Mobile";
const uniqueNumber = 101;
const sku = generateSKU(productName, uniqueNumber);
console.log(`Generated SKU: ${sku}`);
