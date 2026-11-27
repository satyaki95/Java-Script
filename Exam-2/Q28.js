/*
Q28. Find Passed Students: Use filter() to return students who scored 40 or above.
*/

const students = [
  { name: "Rahul", marks: 78 },
  { name: "Priya", marks: 32 },
  { name: "Amit", marks: 65 },
  { name: "Sneha", marks: 25 },
];

const passedStudents = students.filter((student) => student.marks >= 40);

console.log(passedStudents);
