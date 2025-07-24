// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const toggleButton = document.querySelector(".nav-toggle");
const linksClass = document.querySelector(".links");

// console.log(toggleButton);

toggleButton.addEventListener("click", () => {
  linksClass.classList.contains("active")
    ? linksClass.classList.remove("active")
    : linksClass.classList.add("active");
});
