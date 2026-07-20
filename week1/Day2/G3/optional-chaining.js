// ===== Optional Chaining =====

const user1 = {
  name: "Ali",
  address: {
    city: "Lahore",
  },
};

// Access nested property safely
console.log(user1?.address?.city);

const user2 = {
  name: "Ahmed",
};

// Returns undefined if property doesn't exist
console.log(user2?.address?.city);

const user3 = null;

// Prevents TypeError
console.log(user3?.address?.city);

// Without optional chaining -> 
// TypeError e.g  console.log(user2.address.city);