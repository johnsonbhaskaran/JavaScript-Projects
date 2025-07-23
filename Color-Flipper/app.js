const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const colorEl = document.querySelector(".color");
const btnEl = document.getElementById("btn");
const bodyEl = document.body;

// let i = 0;
// btnEl.addEventListener("click", () => {
//   colorEl.textContent = colors[i++];
//   bodyEl.style.background = colorEl.textContent;
//   if (i >= colors.length) {
//     i = 0;
//   }
// });

btnEl.addEventListener("click", () => {
  // * Get random number between 0 - 3
  const random = Math.floor(Math.random() * colors.length);
  bodyEl.style.backgroundColor = colors[random];
});
