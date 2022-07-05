console.log("Welcome to MERN");

// How to declare variables
var varname = "something";

// Let and Const
// Let
let var2 = 7;
// Let is a function scoped variable
// for (let i = 0; i < 4; i++){
//     console.log("i = " + i);
// }

// console.log(i);

// for (let i = 0; i < 8; i++){
//     console.log("i = " + i);
// }

// console.log(i); <-- because we left the function j was defined in, the variavle no longer exists

// Const
const var3 = "some value";
// const variables are unchanging
// var3 = "something else"; <-- get an error attempting to change a const
// useful for something like a base case

const arr = [1,2,3,4];
arr[2] = 7;
// console.log(arr);
// you can't change the entire variable
// but you can modify things inside an array/object that are const values
// you can always rely on it being a specific type of variable (arr/obj) when using it

// Rest/Spread
var myArray = [1,2,3,4,5];
var copyArray = [...myArray];

myArray[2] = 20;
console.log(myArray);
console.log(copyArray);
// you just create a pointer to the data, not as new information
// using ... actually duplicates the values in the original variables and stores it
// can now make modifications to the original array without changing the copy

var mystring = "Hello";
var copyString = mystring;
// mystring = "Goodbye";
// console.log(copyString);
// the same doesn't apply to simple data types like strings

// Ternary Operator
if (mystring == "Hello") {
    console.log("Hello there!");
} else {
    console.log("See you later!");
}

// Question                 True                            False
mystring == "Hello" ? console.log("Hello there!") : console.log("See you later!");