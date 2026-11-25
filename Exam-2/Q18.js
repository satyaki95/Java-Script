/*
Q18. Number Pattern: Print the pattern 1 / 12 / 123 / 1234 / 12345 using nested loops.
*/

const pattern = (number) => {
  for (let i = 1; i <= number; i++) {
    let result = "";
    for (let j = 1; j <= i; j++) {
      result += j;
    }
    console.log(result);
  }
};

pattern(5);
