/*
Q31. Employee Search System: Search an employee array by department and display matching records.
*/
const employees = [
  { id: 1, name: "Rahul", department: "HR" },
  { id: 2, name: "Priya", department: "IT" },
  { id: 3, name: "Amit", department: "Finance" },
  { id: 4, name: "Sneha", department: "IT" },
  { id: 5, name: "Arjun", department: "HR" },
];

const searchDepartment = "IT";

const matchingEmployees = employees.filter(
  (employee) => employee.department === searchDepartment,
);

console.log(`Employees in ${searchDepartment} Department:`);
console.log(matchingEmployees);
