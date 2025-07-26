//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", () => {
    question.classList.toggle("show-text");
  });
});

// traversing the dom

// const questions = document.querySelectorAll(".questions");
// const QBtns = document.querySelectorAll(".question-btn");

// QBtns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const question = e.currentTarget.parentNode.parentNode;

//     question.classList.toggle("show-text");
//   });
// });
