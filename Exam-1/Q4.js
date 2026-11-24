// Q4. Employee Salary Calculator
// Declare an employee's basic salary. Calculate:
//  HRA = 20% of basic salary
//  DA = 10% of basic salary
//  Bonus = 5% of basic salary
//  Final salary = Basic + HRA + DA + Bonus
// Display the complete salary breakdown.

let basicSalary = 50000;

let hra = basicSalary * 0.20;
let da = basicSalary * 0.10;
let bonus = basicSalary * 0.05;
let finalSalary = basicSalary + hra + da + bonus;

console.log(
  `Basic Salary: ${basicSalary}
HRA (20%): ${hra}
DA (10%): ${da}
Bonus (5%): ${bonus}
Final Salary: ${finalSalary}`,
);
