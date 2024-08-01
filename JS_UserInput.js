let username;

document.getElementById("submit").onclick = function () {
  username = document.getElementById("username").value;
  document.getElementById("SayHi").textContent = `What's up ${username}`;
};
