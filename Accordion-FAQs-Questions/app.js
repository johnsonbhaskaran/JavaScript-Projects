//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll(".question");
// const plusIcon = document.querySelector(".plus-icon");
// const minusIcon = document.querySelector(".minus-icon");

questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    let plusIcon = e.currentTarget.querySelector(".plus-icon");
    let minusIcon = e.currentTarget.querySelector(".minus-icon");

    plusIcon.addEventListener("click", (e) => {
      e.currentTarget.parentNode.parentNode.parentNode.parentNode.classList.add("show-text");
      console.log(e.currentTarget);
    });

    minusIcon.addEventListener("click", (e) => {
      e.currentTarget.parentNode.parentNode.parentNode.parentNode.classList.remove("show-text");
      console.log(e.currentTarget);
    });
  });
});
