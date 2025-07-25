//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll(".question");
const plusIcon = document.querySelector(".plus-icon");
const minusIcon = document.querySelector(".minus-icon");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    question.classList.toggle("show-text");
  });
  plusIcon.addEventListener("click", () => {
    question.classList.add("show-text");
  });
  minusIcon.addEventListener("click", () => {
    question.classList.remove("show-text");
  });
});
