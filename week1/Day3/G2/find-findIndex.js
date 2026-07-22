// Array of users
const users = [
  { id: 1, name: "Ali", age: 20 },
  { id: 2, name: "Ahmed", age: 22 },
  { id: 3, name: "Usman", age: 25 },
];

// find() → Returns the first matching object
const user = users.find((user) => {
  return user.id === 2;
});

console.log(user);

// findIndex() → Returns the index of the matching object
const index = users.findIndex((user) => {
  return user.id === 2;
});

console.log(index);

// Immutable update using map()
const updatedUsers = users.map((user) => {
  if (user.id === 2) {
    return {
      ...user,
      age: 23,
    };
  }

  return user;
});

console.log(updatedUsers);

// Original array remains unchanged
console.log(users);