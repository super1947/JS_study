"use strict";

// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Fuction declaration
// fuction name(param1, param2) { body ... return; }
// one fuction === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint

function printHello() {
  console.log("Hello");
}
printHello();

function A(message) {
  console.log(message);
}

A(1234);
console.log(typeof A(1234));

// 2. Parameters
// premitive parameters : passed by value
// object parameters: passed by reference

function changeName(obj) {
  obj.name = "coder";
}

const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)

function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

// 4. Rest parameters (added in ES6)

function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "ellie");

// 5. Local scope

let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);
}
printMessage();
// console.log(message); // message is not defined.

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad case //
function upgradeUser(user) {
  if (user.point > 10) {
    //long upgrade logic...
  }
}

// good case //
function upgradeUser(user) {
  if (user.point <= 10) {
    return; // 조건이 맞지 않을 때 먼저 빠르게 return
  }
  //long upgrade logic...
}

// First-class function
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other function
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.

const print = function () {
  // anonymous function 이름없는 함수
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log("Yes!");
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log("No!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// ★ Arrow function
// always anonymous
const simplePrint = () => console.log("simplePrint");
const sumNumber = (a, b) => a + b;
console.log(sumNumber(1, 6));

// IIFE : Immediately Invoked Function Expression
(function hello() {
  console.log("IIFE");
})();
