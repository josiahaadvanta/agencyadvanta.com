const burger = document.querySelector(".burger");
const navp = document.querySelector(".nav_points");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navp.classList.toggle("active");
});
