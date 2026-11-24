// Q6. Variable Scope
// Create a program demonstrating the differences between var, let, and const. Show block
// scope and function scope with suitable examples.

//! var is a global scope.

var a = 10;
var a = 20;

console.log(a);

//! let is a block scope & not be redeclared

let b = 20;
let b = 30;

console.log(b); // that gives a error.

//! const is constant can't change the value

const c = 20;
c = 30;

console.log(c); // that gives a error.

// block scope example

if (true) {
  var d = 10;
  let e = 20;
  const f = 30;
}

console.log(d);
console.log(e);
console.log(f);
