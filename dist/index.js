"use strict";
// Basic types
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hi!';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple, Order must be respected
let person = [1, 'John', true];
// Tuple Array
let employees;
employees = [
    [1, 'John'],
    [2, 'Jane'],
    [3, 'Chloé']
];
// Union
let pid = 22;
pid = '22';
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
const user = {
    id: 1,
    name: 'John'
};
// Type assertion
let cid = 1;
let customerId = cid;
// let customerId = cid as number
// Functions
function addition(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const car = {
    id: 1,
    brand: 'Kia'
};
const add = (x, y) => x + y;
const substract = (x, y) => x - y;
// Typescript OOP (Other course)
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const john = new Person(1, 'John');
const mike = new Person(2, 'Mike');
console.log(john.register());
