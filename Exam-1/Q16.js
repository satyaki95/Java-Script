// Q16. Search an Element
// Create an array of student names. Search for a particular student name and display
// whether the student exists.

let students = ["Rahul", "Priya", "Amit", "Sneha", "Rohan"];

let searchName = "Amit";
let present = false;

for (let i = 0; i < students.length; i++) {
  if (searchName === students[i]) {
    present = true;
  }
}

if (present) {
  console.log("Student Exists");
} else {
  console.log("Student Not Exists");
}
