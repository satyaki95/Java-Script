/*
Q37. Email Validation: Perform basic email checks using string methods, including an @ symbol and a domain.
*/

function validateEmail(email) {
  // Check for the presence of '@' and a domain
  const atIndex = email.indexOf("@");
  if (atIndex === -1) {
    return false; // No '@' symbol found
  }
  const domain = email.slice(atIndex + 1);
  if (domain.indexOf(".") === -1) {
    return false; // No valid domain found
  }
  return true;
}

console.log(validateEmail("user@example.com"));
console.log(validateEmail("invalid.email"));
