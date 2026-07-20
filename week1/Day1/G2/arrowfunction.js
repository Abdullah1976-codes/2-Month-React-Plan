// Topic: Arrow Functions

// Function Declaration

function add(a, b) {
    return a + b;
}

console.log(add(10, 20)); // Output: 30

// Arrow Function

const addArrow = (a, b) => {
    return a + b;
};

console.log(addArrow(10, 20)); // Output: 30

// Short Arrow Function

const sum = (a, b) => a + b;

console.log(sum(10, 20)); // Output: 30


// Function Expression

const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(5, 4)); // Output: 20

// Arrow Function

const multiplyArrow = (a, b) => a * b;

console.log(multiplyArrow(5, 4)); // Output: 20

// Array callback using function ES5

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function (num) {
    return num * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Array callback using arrow function  ES6

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Do NOT use an arrow function when you need 'this'
const person = {
    name: "Ali",

    greet: function () {
        console.log(this.name);
    }
};

person.greet(); // Output: Ali