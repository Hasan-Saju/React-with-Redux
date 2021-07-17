// Spread and Rest operator

let numbers = [1, 2, 3, 7];
console.log(numbers);
console.log(...numbers);
// spread operator alada alada value hishebe count korbe

let numbers2 = [4, 8, 9];

let arr = [...numbers, ...numbers2, 99, 11]
console.log(arr);


let person = {
    name: "x",
    age: 45
}

let another = {
    ...person,
    nationality: "Bangladeshi"
}
console.log(another);

// spread split kore, rest merge kore

// shob gula argument merge kore niye nibe
let something = (...numArr) => console.log(numArr);
something(5, 7, 8, 9);