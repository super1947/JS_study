"use strict";

// 1. String concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

console.log("ellie's \n\tbook");

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder
console.log(1 ** 1); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(preIncrement); // 3
console.log(counter); // 3

const postIncrement = counter++;
console.log(preIncrement); // 3
console.log(counter); // 4

// 4. Assignment operators
let x = 3;
let y = 6;

x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;

// 5. Comparison operator
console.log(10 < 5);
console.log(10 >= 8);

// 6. Logical operators: || (or), $$ (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    console.log("HELL!");
  }
  return true;
}

// && (and), finds the first falsy value

console.log(`and: ${value1 && value2 && check()}`);

// &&, often used to compress long if-statement
// nullableOjbect && nullableObject.something

// if (nullableObject != null) {
//  nullableObject.something;
// }

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// (==) loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// (===) strict equality, no type conversion (recommanded)

console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference

const ellie1 = { name: "ellie" }; // key = name / value = ellie
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log("" === false); // false ★ ('' is not boolean)
console.log(null == undefined); // true ★ (specially case)
console.log(null === undefined); // false

// 8. Conditional operators : if
// if. else if, else
const name = "coder";
if (name === "ellie") {
  console.log("Welcome, Ellie!");
} else if (name === "coder") {
  console.log("You are amazing coder!");
} else {
  console.log("unknown");
}

// 9. Ternary operator : ?
// condition ? value1 : value2
const name2 = "park";
console.log(name2 === "Park" ? "Yes" : "No");

// 10. Switch statement
// use for multiple if checks
// use for enum-like(열거형태) value check
// use for multiple type checks in TS
const browser = "Chrome";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

// 11. Loops
// while loop, while the condition is truty,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed *first*,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 0; i < 5; i++) {
  console.log(`for: ${i}`);
}

for (let i = 0; i < 3; i++) {
  console.log(`for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i:${i}, j:${j}`);
  }
}

// Quiz!
// Q1. iterate from 0 to 10 and print only even numbers (use continue)

for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(i);
}
