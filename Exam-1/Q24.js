// Q24. Object Property Iterator
// Create an employee object containing name, age, department, and salary. Use for...in to
// display all keys and their corresponding values.

let employee = {
  name: "Satyaki",
  age: 31,
  department: "IT",
  salary: 15000,
};

for (let key in employee) {
  console.log(key + " " + employee[key]);
}
