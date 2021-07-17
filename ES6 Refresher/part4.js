// Destructing
let arr = [1, 2, 3];
let [a, b, c] = arr;

console.log(a, b, c);

let [d, , e] = arr;
console.log(d, e);

// array mapping
let numbers = [1, 2, 3, 4, 5]

let squares = numbers.map(item => {
    return item * item;
});

console.log(squares);