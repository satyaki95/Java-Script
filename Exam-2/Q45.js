/*
Q45. Extract Domain from Email: Extract the domain from an email address. Example: admin@gmail.com fi
gmail.com.
*/
function extractDomain(email) {
  // Split the email address at the '@' symbol and return the domain part
  return email.split("@")[1];
}

// Example usage:
const email = "admin@gmail.com";
const domain = extractDomain(email);
console.log(`Extracted Domain: ${domain}`);
