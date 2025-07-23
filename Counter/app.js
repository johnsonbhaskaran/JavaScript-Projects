// * set initial count
let count = 0;

// * select value and buttons
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("decrease")) {
      count--;
    } else if (e.currentTarget.classList.contains("increase")) {
      count++;
    } else count = 0;

    if (count > 0) value.style.color = "green";
    if (count < 0) value.style.color = "red";
    if (count === 0) value.style.color = "#222";

    value.textContent = count;
  });
});
