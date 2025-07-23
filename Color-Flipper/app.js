const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const colorEl = document.querySelector(".color");
const btnEl = document.getElementById("btn");
const bodyEl = document.querySelector("body");

let i = 0;
btnEl.addEventListener("click", () => {
  colorEl.textContent = colors[i++];
  bodyEl.style.background = colorEl.textContent;
  console.log(i);
  console.log(colorEl.textContent);
  if (i >= colors.length) {
    i = 0;
  }
});
