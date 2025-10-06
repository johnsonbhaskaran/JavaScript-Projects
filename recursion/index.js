/* -----------------------------------------------------------------/
                    * Find Factorial *
/------------------------------------------------------------------*/

// 5 * 4 * 3 * 2 * 1 = 120

const factorial = function (num) {
  if (num === 1) return 1; // Base function or Terminating function
  return num * factorial(num - 1);
};

console.log(factorial(5));

// using arrow functions

const factorialArrow = (num) => (num === 1 ? 1 : num * factorial(num - 1));

console.log(factorialArrow(5));

/* -----------------------------------------------------------------/
                    * Asynchronous JS *
/------------------------------------------------------------------*/

const test = () => {
  setTimeout(() => {
    console.log("Start of code");

    // alert("Notice me!");

    console.log("End of code");
  });
};

const test2 = () => {
  console.log("second function call");
};

test();
test2();
