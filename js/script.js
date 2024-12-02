const yearEl = document.querySelector(".currentYear");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".hidden-header-nav-wrk");
const closeEl = document.querySelector(".close-btn");
const bodyEl = document.querySelector(".non-hidden");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

closeEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

btnNavEl.addEventListener("click", function () {
  bodyEl.classList.toggle("owerflow-hidden");
});

closeEl.addEventListener("click", function () {
  bodyEl.classList.toggle("owerflow-hidden");
});
