const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const CountLabel = document.getElementById("CountLabel");
let count = 0;

decreaseBtn.onclick = function () {
  count--;
  CountLabel.textContent = count;
};

resetBtn.onclick = function () {
  count = 0;
  CountLabel.textContent = count;
};

increaseBtn.onclick = function () {
  count++;
  CountLabel.textContent = count;
};
