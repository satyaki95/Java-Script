/*
Q21. Student List Management: Create an array of student names and implement add, remove, update and
display operations.
*/

let student = ["Rahul", "Priya", "Amit"];

// Add
student.push("Sourav");
console.log(student);

// update
student[1] = "Kusal";
console.log(student);

// delete
student.splice(0, 1);

console.log(student);
