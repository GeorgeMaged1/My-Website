// Scroll up button
const scrollBtn = document.querySelector(".scroll-up");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const bars = document.querySelector(".fa-bars");
const xMark = document.querySelector(".fa-xmark");
const navList = document.querySelectorAll(".nav-list");

// Scroll up button
window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    scrollBtn.classList.add("top");
  } else {
    scrollBtn.classList.remove("top");
  }
};

// show menu
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  bars.classList.toggle("active");
  xMark.classList.toggle("active");
});

// hide menu
navList.forEach((item) => {
  item.addEventListener("click", () => {
    navMenu.classList.remove("active");
    bars.classList.toggle("active");
    xMark.classList.toggle("active");
  });
});

// disable right click
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});