/*
Q32. Array Comparison: Given two arrays of student IDs, find common IDs and IDs unique to each array.
*/
const studentIDs1 = [101, 102, 103, 104, 105];
const studentIDs2 = [104, 105, 106, 107, 108];

const commonIDs = studentIDs1.filter((id) => studentIDs2.includes(id));
const uniqueToFirstArray = studentIDs1.filter(
  (id) => !studentIDs2.includes(id),
);
const uniqueToSecondArray = studentIDs2.filter(
  (id) => !studentIDs1.includes(id),
);

console.log("Common Student IDs:", commonIDs);
console.log("Unique to First Array:", uniqueToFirstArray);
console.log("Unique to Second Array:", uniqueToSecondArray);
