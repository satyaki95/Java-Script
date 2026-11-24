// Q9. Student Grade Calculator
// Take a student's marks and calculate the grade:
//  90–100: Grade A+
//  80–89: Grade A
//  70–79: Grade B
//  60–69: Grade C
//  40–59: Grade D
//  Below 40: Fail
// Validate marks between 0 and 100.

const student_marks = 900;

if (student_marks > 0 && student_marks < 40) {
  console.log("Fail");
} else if (student_marks >= 40 && student_marks <= 59) {
  console.log("Grade D");
} else if (student_marks >= 60 && student_marks <= 69) {
  console.log("Grade C");
} else if (student_marks >= 70 && student_marks <= 79) {
  console.log("Grade B");
} else if (student_marks >= 80 && student_marks <= 89) {
  console.log("Grade A");
} else if (student_marks >= 90 && student_marks <= 100) {
  console.log("Grade A+");
} else {
  console.log("Enter valid number between 0 to 100");
}
