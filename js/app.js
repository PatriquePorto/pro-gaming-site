// Navbar Sticky Fixed

const mainNav = document.querySelector(".header");

window.addEventListener("scroll", () => {
   if (document.documentElement.scrollTop > 2) {
      mainNav.classList.add("sticky");
   } else {
      mainNav.classList.remove("sticky");
   }
})