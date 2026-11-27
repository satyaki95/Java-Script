/*
Q35. Student Ranking System: Sort students by marks and generate their rankings.
*/
const students = [
  { id: 1, name: "Rahul", marks: 85 },
  { id: 2, name: "Priya", marks: 92 },
  { id: 3, name: "Amit", marks: 78 },
  { id: 4, name: "Sneha", marks: 95 },
  { id: 5, name: "Arjun", marks: 88 },
];

const sortedStudents = students.sort((a, b) => b.marks - a.marks);

const rankedStudents = sortedStudents.map((student, index) => ({
  ...student,
  rank: index + 1,
}));

console.log("Student Rankings:");
console.log(rankedStudents);
