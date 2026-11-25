/*
Q19. Password Retry System: Allow a maximum of three password attempts. Stop when the password is correct
or attempts are exhausted.
*/

const passwordSystem = (password) => {
  let confirmPassword = "Abc123";
  let attempts = 3;
  let i = 1;
  let display = "";

  while (i <= attempts) {
    if (password[i] === confirmPassword) {
      display = `Login Successful!`;
      return display;
    } else {
      display = `Incorrect Password!`;
    }
    i++;
  }

  if (password.length !== attempts) {
    display = `Account Locked! Maximum attempts exceeded.`;
    return display;
  } else {
    return display;
  }
};

console.log(passwordSystem(["abc987", "Abc.123", "abc652"]));
