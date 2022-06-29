const navMenu = document.getElementById("nav-menu"),
  tooggleMenu = document.getElementById("toggle-menu"),
  closeMenu = document.getElementById("close-menu");

tooggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

closeMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
