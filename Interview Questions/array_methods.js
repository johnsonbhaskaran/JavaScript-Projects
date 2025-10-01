/* -----------------------------------------------------------------/
                    * Array *
/------------------------------------------------------------------*/

//* Used to group things
//? Iterable - items have an index number & length property
//* It can include all primitive data types

const array1 = [1, 2, 3];
const array2 = [11, 12, 13];

/* -----------------------------------------------------------------/
                    * 1. push() *
/------------------------------------------------------------------*/

//* adds item to the END
//? returns the length of the current array

console.log(array1.push("apple"));
array1;

/* -----------------------------------------------------------------/
                    * 2. pop() *
/------------------------------------------------------------------*/

//* Removes item from the END
//? returns the item removed

console.log(array2.pop());
array2;

/* -----------------------------------------------------------------/
                    * 3. unshift() and shift() *
/------------------------------------------------------------------*/

//* same as push/pop
//* But at the BEGINNING of the array
//! More expensive. Try to avoid

//* unshift() => add item to the START
//? returns current length of the array

array1.unshift("orange");
array1;

//* shift() => removes item from the START
//? returns the removed item

array1.shift();
array1;

/* -----------------------------------------------------------------/
                    * 4. sort() *
/------------------------------------------------------------------*/

//* sorts the array
//* default is alphabetical
//* customize order by -> defining expression (a-b) Ascending sort

array2.reverse();
array2.sort();

/* -----------------------------------------------------------------/
                    * 5. reverse() *
/------------------------------------------------------------------*/

//* reverses the array

array1.reverse();

/* -----------------------------------------------------------------/
                    * 6. forEach() *
/------------------------------------------------------------------*/

//* Iterates over each item

array1.forEach((item) => "nothing");

/* -----------------------------------------------------------------/
                    * 7. map() *
/------------------------------------------------------------------*/

//* returns new array (copy)
//? returns something customized for each item

const newArr = array1.map((item) => "nothing");
newArr;
array1;
/* -----------------------------------------------------------------/
                    * 8. filter() *
/------------------------------------------------------------------*/

//* creates copy
//? returns an array with the items that passes the test expression

const fruitArr = array1.filter((item) => item === "apple");
fruitArr;
array1;

/* -----------------------------------------------------------------/
                    * 9. join() *
/------------------------------------------------------------------*/

//* Joins together items in the array
//? returns new modified array

const joinArrItems = array1.join(array2);
joinArrItems;
array1;
array2;

/* -----------------------------------------------------------------/
                    * 10. concat() *
/------------------------------------------------------------------*/

//* Joins together two arrays
//? returns new modified array

const concatArr = array1.concat(array2);
concatArr;
array1;
array2;

/* -----------------------------------------------------------------/
                    * 11. slice() *
/------------------------------------------------------------------*/

//* used to slice arrays
//? creates new copy
//* choose beginning and ending cut off points
//* 1st number included
//* 2nd doesn't include
//! if string -> returns string

const str = "Hello World!";

str.length;
str[0];
str.slice(1, 5); // ello

/* -----------------------------------------------------------------/
                    * 12. splice() *
/------------------------------------------------------------------*/

//* remove or insert items in arrays
//* 1st number is starting item
//* 2nd number is how many to delete/replace
//* 3rd number is what to insert

array1;
array1.splice(2, 1);
array1;
array1.splice(2, 1, 8);
array1;
