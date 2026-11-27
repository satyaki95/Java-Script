/*
Q42. Search Keyword in Description: Check whether a product description contains a supplied keyword using
string methods.
*/
function searchKeyword(description, keyword) {
  // Convert both description and keyword to lowercase for case-insensitive search
  const lowerDescription = description.toLowerCase();
  const lowerKeyword = keyword.toLowerCase();

  // Check if the keyword exists in the description
  return lowerDescription.includes(lowerKeyword);
}

// Example usage:
const productDescription = "This is a high-quality leather wallet.";
const keywordToSearch = "leather";
const isKeywordPresent = searchKeyword(productDescription, keywordToSearch);
console.log(
  `Is the keyword "${keywordToSearch}" present in the description? ${isKeywordPresent}`,
);
