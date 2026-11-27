/*
Q36. Username Validation: Require 5–15 characters, no spaces, and allow only letters, numbers and underscores.
*/

function validateUsername(username) {
  const usernameRegex = /^[a-zA-Z0-9_]{5,15}$/;
  return usernameRegex.test(username);
}

console.log(validateUsername("user_name"));
console.log(validateUsername("invalid username"));
