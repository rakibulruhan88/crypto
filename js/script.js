let menuBtn = document.querySelector(".menu-btn");
let resNav = document.querySelector("nav");
let activeClass = document.querySelector(".active");

function openMenu() {
  resNav.classList.toggle("active");
  
}

menuBtn.addEventListener("click", openMenu);
