// * set initial count
let count = 0;

// * select value and buttons
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.currentTarget.classList[1] === "decrease") {
      count--;
    } else if (e.currentTarget.classList[1] === "increase") {
      count++;
    } else count = 0;

    value.textContent = count;
  });
});
