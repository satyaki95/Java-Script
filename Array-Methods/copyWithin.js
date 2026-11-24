// Syntax
copyWithin(target, start);
copyWithin(target, start, end);

const array = ["a", "b", "c", "d", "e"];

// Copy to index 0 the element at index 3
console.log(array.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]

/*
0   1   2   3   4   5
| a | b | c | d | e |   (0,3,4)



0   1   2   3   4   5
| d | b | c | d | e |

*/
