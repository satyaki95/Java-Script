// Q26. JSON Conversion
// Create a JavaScript object containing user information. Convert it into a JSON string
// using JSON.stringify(). Then convert the JSON string back into an object using
// JSON.parse().
// Display both results.

let employee = {
  name: "Satyaki",
  age: 31,
  department: "IT",
  salary: 15000,
};

let jsonString = JSON.stringify(employee);

let object = JSON.parse(jsonString);

console.log(jsonString);
console.log(object);
