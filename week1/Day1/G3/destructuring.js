// Topic: Object Destructuring

const student = {
    name: "Abdullah",
    age: 22
};

// Extract properties from the object
const { name, age } = student;

console.log(name); // Output: Abdullah
console.log(age);  // Output: 22


// Nested Object Destructuring

const user = {
    profile: {
        name: "Ali",
        age: 20
    }
};

// Extract values from the nested object
const {
    profile: { name, age }
} = user;

console.log(name); // Output: Ali
console.log(age);  // Output: 20


// Default values in destructuring

const person = {
    name: "Ahmed"
};

const {
    name,
    role = "Viewer"
} = person;

console.log(name); // Output: Ahmed
console.log(role); // Output: Viewer

// Default values in destructuring

const person = {
    name: "Ahmed"
};

const {
    name,
    role = "Viewer"
} = person;

console.log(name); // Output: Ahmed
console.log(role); // Output: Viewer

// Nested destructuring with default values

const payload = {};

const {
    user: {
        name = "Guest",
        role = "Viewer"
    } = {}
} = payload;

console.log(name); // Output: Guest
console.log(role); // Output: Viewer