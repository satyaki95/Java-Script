/*
Q25. Product Price Update: Use map() to increase every product's price by 10%.
*/

const prices = [1000, 2000, 3000, 4000];

const updatedPrices = prices.map((price) => price * 0.1 + price);

console.log(updatedPrices);
