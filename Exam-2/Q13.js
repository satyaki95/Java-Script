/*
Q13. Employee Attendance System: Accept attendance for 30 employees (1 = present, 0 = absent) and count
present and absent employees.
*/

const employeeAttendanceSystem = (employees) => {
  if (employees.length === 30) {
    let present = 0;
    let absent = 0;
    let i = 0;

    do {
      if (employees[i] === 1) {
        present++;
      } else {
        absent++;
      }
      i++;
    } while (i < employees.length);

    return `
        Present = ${present}
        Absent = ${absent}`;
  } else {
    return `Accept only 30 employees`;
  }
};

console.log(
  employeeAttendanceSystem([
    1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1,
    0, 1, 1, 0, 1,
  ]),
);
