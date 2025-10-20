let input = document.querySelector("input");

function addToInput(val) {
  input.value += val;
}

function clearInput() {
  input.value = "";
}

function backspace() {
  input.value = input.value.slice(0, -1);
}

function evaluateVal() {
  input.value = eval(input.value);
}
