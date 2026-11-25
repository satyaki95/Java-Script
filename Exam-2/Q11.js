/*
Q11. Product Price Table: Generate a multiplication table for a given product price from 1 to 10.
*/

const productPriceTable = (product) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${product} x ${i} = ${product * i}`);
  }
};

productPriceTable(5);
