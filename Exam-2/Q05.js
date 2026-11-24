/*
Q5. ATM Withdrawal System: Check account balance, validate the amount, require multiples of n100, prevent
insufficient-balance withdrawals and display the remaining balance.
*/

const atmWithdrawSystem = (balance, amount) => {
  let display = "";
  if (balance <= 0 || amount > balance) {
    display = `Insufficient Balance`;
  } else if (amount % 100 !== 0) {
    display = `Amount must be a multiple of 100`;
  } else {
    balance -= amount;
    display = `Withdrawal Successful!
Withdrawal Amount: ₹${amount}
Remaining Balance: ₹${balance}`;
  }
  return display;
};

console.log(atmWithdrawSystem(1575, 106));
