console.log("Responsive Number Counting Animation");

let valueDisplay = document.querySelectorAll(".num");
let interval = 4000;

valueDisplay.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));

  let duration = Math.floor(interval / endValue);

  let counter = setInterval(() => {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue === endValue) clearInterval(counter);
  }, duration);
});
