'use strict'

// array

//1. Declaration

const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position

const fruits = ['apple', 'banana', 'durian'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an Array

// a. for

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruits, index) => console.log(fruits, index));

// 4. Addtion. deletion, copy
// push: add an item to the end
fruits.push('strawberry', 'peach');
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
console.log(fruits);

fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning 
// shift : remove an item from the beginning 

fruits.unshift('grape');
console.log(fruits);
fruits.shift();
console.log(fruits);

// shift, unshift are slower than pop, push
// shift, unshift 는 전체를 움직여야 해서 느리다. 
// push, pop을 추천
fruits.push('grape','melon');
console.log(fruits);
fruits.splice(2,1);
console.log(fruits);
fruits.splice(1, 1, 'watermelon', 'lemon')
console.log(fruits);

// combine two arrays

const fruits2 = ['avocado', 'blueberries'];
const newFruits = fruits2.concat(fruits);
console.log(newFruits);

// 5. Searching ( find the index )

console.log(fruits);
console.log(fruits.indexOf('melon')); // 3
console.log(fruits.indexOf('coconut')); // -1
console.log(fruits.includes('melon')); // True
console.log(fruits.includes('coconut')); // False
console.log(fruits.lastIndexOf('lemon')); // 2
// indexOf는 처음부터 , lastIndexOf는 끝부터





