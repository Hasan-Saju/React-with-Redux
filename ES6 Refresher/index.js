// var, let, const

// var
var a = 13
console.log(a)
var a = "Saju"
console.log(a)

// let
let b = 11
console.log(b)
// let b = "IUT"
b = "IUT"
console.log(b)
// let use korle oi variable ar declare kora jabe na, can reassign
// we should use let

// const
const pi = 3.1415
console.log(pi)
// pi=2
//even cant reassign const




// Arrow Function

// normal
function sayHello() {
    console.log("Hello World");
}
sayHello();

let saySomething = () => {
    console.log("Arrow Function");
}
saySomething();

let say = () => console.log("Arrow Function without curly brace");
say();

let square = num => num ** 2;
console.log(square(7));