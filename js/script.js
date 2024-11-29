console.log("Hello world!");

// Set the current year

const yearEl = document.querySelector(".currentYear");
console.log(yearEl, "log at 6");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;
