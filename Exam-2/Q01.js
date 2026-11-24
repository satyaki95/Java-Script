/* Q1. Student Result Management: Accept marks from 0–100 and assign grades: 90–100 A+, 80–89 A, 70–79 B,
60–69 C, 40–59 D, below 40 Fail. Validate the input. */

const gradeManagement = (num) => {
  let grade = "";
  switch (true) {
    case num < 40:
      grade = "Fail";
      break;

    case num < 60:
      grade = "D";
      break;

    case num < 70:
      grade = "C";
      break;

    case num < 80:
      grade = "B";
      break;

    case num < 90:
      grade = "A";
      break;

    case num <= 100:
      grade = "A+";
      break;

    default:
      grade = "Enter Valid Number 1 to 100";
  }
  return grade;
};

console.log(gradeManagement(94));
