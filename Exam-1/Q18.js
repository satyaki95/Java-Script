// Q18. Student Object Management
// Create an object containing student details:
//  Name
//  Roll Number
//  Course
//  Marks
// Display all object properties. Update the student's marks and add a new property called
// grade.

const student = {
  name: "Satyaki Saha",
  rollNumber: 07,
  course: "MERN",
  marks: 50,
};

console.log("Name - ", student.name);
console.log("Roll Number - ", student.rollNumber);
console.log("Course - ", student.course);
console.log("Marks - ", student.marks);

student.marks = 60;
student.grade = "A";

console.log(student);
