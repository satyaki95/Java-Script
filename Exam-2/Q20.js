/*
Q20. Inventory Stock Counter: Start with 100 products, repeatedly accept sold quantities, update stock, and
prevent sales beyond available stock.
*/

const inventoryChecker = (quantities) => {
  let stock = 100;

  for (let i = 0; i < quantities.length; i++) {
    if (quantities[i] < stock) {
      console.log(`Sale Stock ${quantities[i]}`);
      stock -= quantities[i];
    } else {
      console.log(`failed`);
    }
  }
  console.log(`Current Stock = ${stock}`);
};

inventoryChecker([20, 15, 30, 10, 40]);
