"use strict";

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 20 };
print(ellie);

// with JavaScript magic (dynamically typed language)
// can be properties later

ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie["name"]);
ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[prompt(key)]);
}
//printValue(ellie, "");
//printValue(ellie, "");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = makePerson("park", 4);
const person5 = new Person("ellie", 5);
console.log(person4.name);

function makePerson(name, age) {
  return {
    name: name,
    age: age,
  };
}

// 4. Constructor function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator : property existence check (key in obj)
console.log("name" in ellie);
console.log("age" in person3);
console.log("random" in person5);
console.log(person5.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (const key in ellie) {
  console.log(key);
}

// 7. for (value of iterable)
const array = [1, 2, 4, 5];
for (const value of array) {
  console.log(value);
}

// 8. Fun cloning

const user = { name: "ellie", age: 20 };
const user2 = user;
user2.name = "coder";
console.log(user);

// old way
const user3 = {};
for (const key in user) {
  user3[key] = user[key];
}
console.log(user3);

// Object.assign(dest, [obj1, obj2 ...])

const user4 = {};
Object.assign(user4, user);
const user5 = Object.assign({}, user);

console.log(user4);
console.log(user5);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에있는 프로퍼티 우선
console.log(mixed.color);
console.log(mixed.size);
