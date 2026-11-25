/*
Q14. Shopping Cart Total: Calculate the total of an array of product prices using a loop.
*/

const shoppingCartTotal = (price) => {
  let total = 0;

  let i = 0;
  while (i < price.length) {
    total += price[i];
    i++;
  }

  return total;
};

console.log(shoppingCartTotal([10, 20, 30, 50, 90]));
