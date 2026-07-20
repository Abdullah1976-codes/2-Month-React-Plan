// ===== Base Profile =====

const baseProfile = {
  name: "Abdullah",
  age: 20,
  email: undefined,
  phone: null,

  address: {
    city: "Lahore",
    country: "Pakistan",
  },

  preferences: {
    theme: "Dark",
    language: "English",
  },
};

// ===== Merge User Profile =====

function mergeUserProfile(base, overrides) {
  return {
    ...base,

    name: overrides.name ?? base.name,
    age: overrides.age ?? base.age,
    email: overrides.email ?? base.email,
    phone: overrides.phone ?? base.phone,

    // Merge nested address
    address: {
      ...base.address,
      ...overrides.address,
    },

    // Merge nested preferences
    preferences: {
      ...base.preferences,
      ...overrides.preferences,
    },
  };
}

// ===== Get City =====

function getCity(profile) {
  return profile?.address?.city ?? "Unknown";
}

// ===== Merge Multiple Profiles =====

function mergeAll(...profiles) {
  return profiles.reduce((result, current) => {
    return mergeUserProfile(result, current);
  });
}

// ===== Test 1 =====

const update1 = {
  age: 21,
  address: {
    city: "Karachi",
  },
};

const user1 = mergeUserProfile(baseProfile, update1);

console.log(user1);
console.log(baseProfile);

// ===== Test 2 =====

const update2 = {
  email: "abdullah@gmail.com",
  preferences: {
    language: "Urdu",
  },
};

const user2 = mergeUserProfile(baseProfile, update2);

console.log(user2);

// ===== Test 3 =====

const update3 = {
  phone: null,
  address: {},
};

const user3 = mergeUserProfile(baseProfile, update3);

console.log(user3);

// ===== Optional Chaining Test =====

console.log(getCity(user1));
console.log(getCity({}));

// ===== ?? vs || Test =====

const age = 0;

console.log(age || 18); // 18
console.log(age ?? 18); // 0

// ===== Named Exports =====

export { mergeUserProfile, mergeAll };