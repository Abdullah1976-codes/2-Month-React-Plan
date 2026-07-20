// Legacy ES5 Code

var user = {
    name: "Abdullah",
    role: "Developer"
};

var numbers = [1, 2, 3, 4, 5];

var doubled = numbers.map(function (num) {
    return num * 2;
});

var evenNumbers = numbers.filter(function (num) {
    return num % 2 === 0;
});

var message = "Name: " + user.name + ", Role: " + user.role;

console.log(message);

var squares = numbers.map(function (num) {
    return num * num;
});

console.log(doubled);
console.log(evenNumbers);
console.log(squares);