/* Ternary operator = a shortcut to if{} else{} statements help to assign a variable based on a condition 
condition? codeIfTrue : codeIfFalse */

/* let age = 25;
let message = age >= 18 ? "You're an adult" : "You're minor"
console.log(message); */

/* let time = 9;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!"
console.log(greeting) */

/* let isStudent = false;
let message = isStudent ? "You're student" : "You're NOT a student"
console.log(message) */

let purchaseAmount = 110;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is ${purchaseAmount - purchaseAmount * (discount/100)}`) 
// Logic purchaseAmount - (purchaseAmount * (discount/100))