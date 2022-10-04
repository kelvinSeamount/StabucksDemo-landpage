const hamburger = document.querySelector(".hamburger");
const mainNavlist = document.querySelector(".main-nav-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mainNavlist.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mainNavlist.classList.remove("active");
  })
);
