//using selectors inside the element
// traversing the dom

const question = document.querySelector(".question");
const plusIcon = document.querySelector(".plus-icon");
const minusIcon = document.querySelector(".minus-icon");

question.addEventListener("click", () => {
  question.classList.toggle("show-text");
});

plusIcon.addEventListener("click", () => {
  question.classList.add(".show-text");
});

question.addEventListener("click", () => {
  question.classList.remove(".show-text");
});
