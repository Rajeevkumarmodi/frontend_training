const manuBar = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".closeIcon");
const navLinks = document.querySelector("#links");
const contactForm = document.querySelector(".contactInputBox");

manuBar.addEventListener("click", function () {
  navLinks.classList.add("active");
  navLinks.classList.remove("navLinks");
});

closeIcon.addEventListener("click", function () {
  navLinks.classList.remove("active");
  navLinks.classList.add("navLinks");
});

contactForm.addEventListener("submit", function (e) {
  alert("message successfully send");
});
