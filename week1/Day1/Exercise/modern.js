// Modern ES6+ Code

// 'user' is never reassigned, so use const.
const user = {
    name: "Abdullah",
    role: "Developer"
};

// 'numbers' is never reassigned, so use const.
const numbers = [1, 2, 3, 4, 5];

// Using object destructuring.
const { name, role } = user;

// Converted callback to arrow function.
const doubled = numbers.map(num => num * 2);

// Converted callback to arrow function.
const evenNumbers = numbers.filter(num => num % 2 === 0);

// Replaced string concatenation with a template literal.
const message = `Name: ${name}, Role: ${role}`;

console.log(message);

// Converted callback to arrow function.
const squares = numbers.map(num => num * num);

console.log(doubled);
console.log(evenNumbers);
console.log(squares);

/*
SUMMARY

- Replaced all var declarations with const.
- Converted function callbacks to arrow functions.
- Used object destructuring.
- Replaced string concatenation with template literals.
- Lines saved: Approximately 6.
- Surprise: Arrow functions and destructuring made the code much cleaner.
*/