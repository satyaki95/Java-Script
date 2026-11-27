/*
Q27. Sort Student Records: Sort student objects by marks in descending order.
*/

const students = [
  { name: "Rahul", marks: 78 },
  { name: "Priya", marks: 92 },
  { name: "Amit", marks: 65 },
];

students.sort((a, b) => b.marks - a.marks);

console.log(students);
