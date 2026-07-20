// ===== Spread Operator (Copy & Override) =====

const user = {
  name: "Ali",
  age: 20,
  city: "Lahore",
};

// Copy the object and update age
const updatedUser = {
  ...user, // Copy all properties
  age: 21, // Override only this property
};

console.log(updatedUser);
console.log(user); // Original object remains unchanged


// ===== Shallow Copy =====

const user = {
  name: "Ali",
  address: {
    city: "Lahore",
    country: "Pakistan",
  },
};

// Spread creates only a first-level copy
const copyUser = {
  ...user,
};

// Changing nested object
copyUser.address.city = "Karachi";

console.log(copyUser.address.city); // Karachi
console.log(user.address.city); // Karachi (Original also changed)

// Reason:
// Nested objects are copied by reference, not by value.


// ===== Deep Copy =====

const user = {
  name: "Ali",
  address: {
    city: "Lahore",
    country: "Pakistan",
  },
};

// Copy nested object separately
const copyUser = {
  ...user, // Copy first level
  address: {
    ...user.address, // Copy nested object
  },
};

// Change copied object's nested value
copyUser.address.city = "Karachi";

console.log(copyUser.address.city); // Karachi
console.log(user.address.city); // Lahore

// Reason:
// Both objects now have different address objects.=