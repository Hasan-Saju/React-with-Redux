// class

class Vehicle {
    // myVar = "YES";
    // can added property outside constructor
    constructor(param, param2) {
        this.color = param;
        this.passenger = param2;
    }

    saySomething() {
        console.log("Hello from class");
        console.log(this.color);
    }
}

/*
let obj1 = new Vehicle("Red", 11);
let obj2 = new Vehicle("Blue", 13);

console.log(obj1);
console.log(obj2);

obj1.saySomething();
*/

// Inheritance
class Car extends Vehicle {
    constructor(color, passenger, numWheel) {
        super(color, passenger);        //have to bring the attributes of parents class using super
        this.wheel = numWheel;
    }
}

let objCar = new Car("Purple", 24, 4);
console.log(objCar);