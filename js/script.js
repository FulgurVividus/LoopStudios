//# Selecting elements
const button = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

//# Event listener
const navToggle = function () {
  button.classList.toggle("open");
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
};

button.addEventListener("click", navToggle);
