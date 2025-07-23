const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btnEl = document.getElementById("btn");
const colorEl = document.querySelector(".color");

const randomIndex = () => {
  return Math.floor(Math.random() * hex.length);
};

btnEl.addEventListener("click", () => {
  let j = "#";
  for (let i = 0; i < 6; i++) {
    let random = randomIndex();
    j += hex[random];
  }
  colorEl.textContent = j;
  document.body.style.backgroundColor = j;
});
