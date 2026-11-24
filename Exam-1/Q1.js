//Q1. Student Information
// Create variables to store a student's name, age, course name, and marks in three
// subjects. Calculate the total marks and average marks. Display all information.

let studentName = "Satyaki Saha";
let studentAge = 31;
let courseName = "MERN";

let math = 50;
let physics = 60;
let chemistry = 50;

let totalMarks = math + physics + chemistry;

let averageMarks = totalMarks / 3;

console.log(
  `Name - ${studentName}
Age - ${studentAge} 
Marks in Math - ${math}, Physics - ${physics}, Chemistry - ${chemistry}
Total Marks - ${totalMarks}
Average Marks - ${averageMarks}`,
);
