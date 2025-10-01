/* -----------------------------------------------------------------/
                    * 1. Scope *
/------------------------------------------------------------------*/

//* A variable that is accessible everywhere has global scope
//* and a variable that can only be accessed in a particular place has local scope

//? var is function scoped
//? let and const is block scoped

var variableInGlobalScope = "I am global";

function functionWithLocalScope() {
  var variableInLocalScope = "I am local";

  console.log(variableInGlobalScope);
  console.log(variableInLocalScope);
}

functionWithLocalScope();

console.log(variableInGlobalScope);
console.log(variableInLocalScope);

let letVariableInGlobalScope = "I'm in Global";

function letFunctionWithLocalScope() {
  let letVariableInLocalScope = "I'm in Local";

  console.log(letVariableInGlobalScope);
  console.log(letVariableInLocalScope);
}

letFunctionWithLocalScope();

console.log(letVariableInGlobalScope);
console.log(letVariableInLocalScope);

/* -----------------------------------------------------------------/
                    * 2. Hoisting *
/------------------------------------------------------------------*/

//* Hoisting is JavaScript's default behavior of moving variable and function declarations to the top

//? Eg: Variable hoisting

console.log(x); // Error
console.log(y); // undefined
let y;

//? Eg: Function hoisting - Function declaration

hoistedFunctionDeclaration(); // true

function hoistedFunctionDeclaration() {
  return true;
}

//? Eg: Function hoisting - Function expression - NOT hoisted

unHoistedFunctionDeclaration(); // undefined

let unHoistedFunctionDeclaration = () => {
  return true;
};

/* -----------------------------------------------------------------/
                    * 3. Closure *
/------------------------------------------------------------------*/

//* A Closure is an inner function that has access to outer or enclosing , function's variables.

//? Used to write clean and concise code

function sayHelloCreator(name) {
  let greeting = "Hello!";

  function sayHelloFunction() {
    console.log(`${greeting} ${name}`);
  }

  return sayHelloFunction;
}

let sayHelloToJohn = sayHelloCreator("John");
let sayHelloToSam = sayHelloCreator("Sam");

sayHelloToJohn();
sayHelloToSam();

/* -----------------------------------------------------------------/
                    * 4. Functional Programming *
/------------------------------------------------------------------*/

//* Fuctional programming involves using pure functions that avoid shared state, mutating data and side effects.
//* It is Declarative, rather than Imperative

//? Eg 1:

let obj = {
  x: 5,
};

let addOneByMutatingSharedStateAndProducingSideEffect = function () {
  obj.x = obj.x + 3;
};

//? Eg 2:

let object = {
  xy: 5,
};

let addOneFunctionality = function (object) {
  let newObject = {
    xy: object.xy,
  };

  newObject = newObject + 5;

  return newObject;
};

/* -----------------------------------------------------------------/
                    * 5. Synchronous Vs Asynchronous code *
/------------------------------------------------------------------*/

//* Synchronous code is blocking
//* Asynchronous code is NON blocking

//? Eg: Asynchronous code

console.log("one");
console.log("two");
setTimeout(() => {
  console.log("three");
}, 100);
console.log("four");

/* -----------------------------------------------------------------/
                    * 6. Determine something an Array or not *
/------------------------------------------------------------------*/

[].constructor; // Array
console.log([].constructor === Array); // true

/* -----------------------------------------------------------------/
                    * 7. Higher Order Function *
/------------------------------------------------------------------*/

//* Higher order function can take another function as an argument or returns function as a result

//? Closure is a higher order funciton

let forEach = function (array, iterator) {
  for (let i = 0; i < array.length; i++) {
    iterator(array[i], i);
  }
};

forEach(["sam", "tom", "chan"], (arrayItem, index) => {
  console.log(arrayItem, index);
});

/* -----------------------------------------------------------------/
                    * 8. Difference b/w Array and Array-like Object *
/------------------------------------------------------------------*/

//* arguments variable is array-like object
//* when we create with Array.from(arguments) -> NOW it is actual array

function arrayLikeExample(firstArgument, secondArgument) {
  //? arguments.forEach((argument) => console.log(argument)); // Error

  let arrayFromArguments = Array.from(arguments);

  arrayFromArguments.forEach((argument) => console.log(argument));
  return arrayFromArguments;
}

arrayLikeExample("hi", 23, { id: 2390 });

console.log(typeof arrayLikeExample("hi", 23, { id: 2390 }));

/* -----------------------------------------------------------------/
                    * 9. Type Coercion *
/------------------------------------------------------------------*/

//* changing data type of variable
//* JavaScript sometimes allows particular type to be coerced to another type

//? Eg:

console.log("Hello " + 8); // Hello 8
console.log("8" == 8); // true

/* -----------------------------------------------------------------/
                    * 10. Difference b/w Two-way data binding and One-way data flow *
/------------------------------------------------------------------*/

//? Two-way data binding
//* means the inputs in the UI are bound to the data model. Either of them changes the data and then it updates the other one with it.
//* which causes side effects and unpredictablity
//* that are difficult to debug

//? One-way data flow
//* Eg: React and Redux - Implements pattern
//* Single source of truth
//* changes to the data can - Only flow in one direction
