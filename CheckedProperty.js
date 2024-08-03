let subscribeBtn = document.getElementById("subscribeBtn");
let visaBtn = document.getElementById("visaBtn");
let masterCardBtn = document.getElementById("masterCardBtn");
let payPalBtn = document.getElementById("payPalBtn");
let mySubmit = document.getElementById("mySubmit");
let subResult = document.getElementById("subResult");
let paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (subscribeBtn.checked) {
    subResult.textContent = `You're subscribed!`;
  } else {
    subResult.textContent = `You're not subscribed!`;
  }

  if (visaBtn.checked) {
    paymentResult.textContent = `You're paying with Visa`;
  }
  else if (masterCardBtn.checked) {
    paymentResult.textContent = `You're paying with MasterCard`;
  }
  else if (payPalBtn.checked) {
    paymentResult.textContent = `You're paying with Paypal`;
  }
  else {
    paymentResult.textContent = `Yus must select a payment type`;
  }
};
