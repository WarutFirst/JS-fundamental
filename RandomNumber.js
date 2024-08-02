/* const min = 50;
const max = 100;

//random 50-100
let randomNum = Math.round(Math.random() * (min - max)) + min;

console.log(randomNum);
 */

const myButton = document.getElementById("myButton");
const myLabel_1 = document.getElementById("myLabel_1");
const myLabel_2 = document.getElementById("myLabel_2");
const myLabel_3 = document.getElementById("myLabel_3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function () {
  randomNum1 = Math.round(Math.random() * max) + min;
  randomNum2 = Math.round(Math.random() * max) + min;
  randomNum3 = Math.round(Math.random() * max) + min;

  myLabel_1.textContent = randomNum1;
  myLabel_2.textContent = randomNum2;
  myLabel_3.textContent = randomNum3;
};
