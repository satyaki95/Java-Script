/*
Q2. Employee Salary Calculator: Calculate net salary using HRA = 20% of basic, DA = 10%, PF = 12%, and Net
Salary = Basic + HRA + DA - PF.
*/

const salaryCalculator = (basic) => {
  if (basic > 0) {
    let hra = basic * 0.2;
    let da = basic * 0.1;
    let pf = basic * 0.12;

    return basic + hra + da - pf;
  } else {
    return "Invalid Salary";
  }
};

console.log(salaryCalculator(0));
