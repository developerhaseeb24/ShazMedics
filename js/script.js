// const hamburger = document.getElementById("hamburger");
// const navLinks = document.getElementById("navLinks");

// hamburger.addEventListener("click", () => {
//     navLinks.classList.toggle("active");
// });

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const closeMenu = document.getElementById("closeMenu");

hamburger.addEventListener("click", () => {
    navLinks.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    navLinks.classList.remove("active");
});