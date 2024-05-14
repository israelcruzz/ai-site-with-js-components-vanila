const exitButton = document.querySelector(".exit-event");
const menu = document.querySelector(".menu");
const openMenuButton = document.querySelector(".open-menu");

openMenuButton.addEventListener("click", () => {
  menu.classList.remove("hidden");

});

exitButton.addEventListener("click", () => {
  menu.classList.add("hidden");
});
