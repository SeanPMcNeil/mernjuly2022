// Arrow Functions

function sayHello(name) {
    console.log("Hello " + name);
}
sayHello("Sean");

// Can also store functions inside of a variable
var sayHello2 = function(name) {
    console.log("Hello #2 " + name);
}
sayHello2("Sean");

//      Arrow Function/Fat Arrow/Lambda
const greet = (name) => {
    console.log("Greetings " + name);
};
greet("Sean");
// you don't have to include parentheses for a single argument
const greet2 = name => console.log("Greetings #2 " + name)
greet2("Sean");