/*
nQ4. Electricity Bill Calculator: Calculate progressively: first 100 units at n5/unit, next 100 at n7/unit, and units
above 200 at n10/unit.
*/

const eBillCalculator = (unit) => {
  let price = 0;

  if (unit <= 100) {
    price = unit * 5;
  } else if (unit <= 200) {
    price = 100 * 5 + (unit - 100) * 7;
  } else if (unit > 200) {
    price = 100 * 5 + 100 * 7 + (unit - 200) * 10;
  } else {
    price = 0;
  }
  return price;
};

console.log(eBillCalculator(200));
