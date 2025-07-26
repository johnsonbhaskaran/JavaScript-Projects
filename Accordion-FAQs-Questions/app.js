//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll(".questions");
const QBtns = document.querySelectorAll(".question-btn");

QBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const question = e.currentTarget.parentNode.parentNode;

    question.classList.toggle("show-text");
  });
});
