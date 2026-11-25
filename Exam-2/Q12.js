/*
Q12. Student Marks Calculation: Accept marks for 10 students using a loop. Calculate total, average, highest,
lowest and number of passes.
*/

const marksCalculator = (students) => {
  if (students.length === 10) {
    let total = 0;
    let average = 0;
    let passCount = 0;
    let highest = 0;
    let lowest = 100;
    let i = 0;

    while (i < students.length) {
      total += students[i];
      highest = Math.max(highest, students[i]);
      lowest = Math.min(lowest, students[i]);

      if (students[i] >= 40) {
        passCount++;
      }
      i++;
    }
    average = total / students.length;

    return `
Total = ${total}
Average = ${average}
Highest = ${highest}
Lowest = ${lowest}
Number of passes = ${passCount}
    `;
  } else {
    return `10 student marks only`;
  }
};

console.log(marksCalculator([50, 60, 70, 80, 90, 54, 45, 35, 62, 99]));
