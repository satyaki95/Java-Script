const priceMonitoringSystem = (price) => {
  let discount = 0;
  let finalAmount = 0;

  if (price < 0) {
    return "Invalid Price";
  } else if (price <= 2000) {
    finalAmount = price;
  } else if (price <= 5000) {
    discount = price * 0.1;
    finalAmount = price - discount;
  } else if (price <= 10000) {
    discount = price * 0.15;
    finalAmount = price - discount;
  } else {
    discount = price * 0.2;
    finalAmount = price - discount;
  }

  return `Original Price: ${price}
Discount: ${discount}
Final Amount: ${finalAmount}`;
};

console.log(priceMonitoringSystem(5000));
