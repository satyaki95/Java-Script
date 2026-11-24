/*
Q6. Login Validation System: Check a predefined username and password and display appropriate success or
error messages.
*/

const loginValidator = (userName, password) => {
  let loginUserName = "satyaki95";
  let loginPassword = "Abc.1234";
  let display = "";

  if (!userName || !password) {
    display = `User Name & Password Required`;
  } else if (userName !== loginUserName) {
    display = `Invalid User Name`;
  } else if (password !== loginPassword) {
    display = `Invalid Password`;
  } else {
    display = `Login SuccessFull!`;
  }
  return display;
};

console.log(loginValidator("satyaki95", "Abc.1234"));
