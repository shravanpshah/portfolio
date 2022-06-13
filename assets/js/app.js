// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

var i = 0;
var txt =
  "Hey there! I help businesses grow by enabling them to create and enhance products through technology. \n I do this by having a strong sense of ownership, go-getter attitude and team-first mentality. \n Let us grow together?";
var speed = 20;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typeWriterSpace").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 75);
  }
}
