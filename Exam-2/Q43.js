/*
Q43. Replace Text in Product Description: Replace an old product name with a new name using replace().
*/
function replaceProductName(description, oldName, newName) {
  // Use the replace() method to replace the old product name with the new name
  const updatedDescription = description.replace(oldName, newName);
  return updatedDescription;
}

// Example usage:
const productDescription = "This is a high-quality leather wallet.";
const oldProductName = "leather wallet";
const newProductName = "synthetic wallet";
const updatedDescription = replaceProductName(
  productDescription,
  oldProductName,
  newProductName,
);
console.log(`Updated Product Description: ${updatedDescription}`);
