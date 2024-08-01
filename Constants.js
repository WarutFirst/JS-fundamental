// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

/* PI = 40; */

radius = Number(radius);

circumference = 2 * PI * radius;

document.getElementById("mysubmit").onclick = function () {
  radius = document.getElementById("MyText").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("Result").textContent = circumference + " CM";
};
