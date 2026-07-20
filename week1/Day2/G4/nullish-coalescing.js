// ===== Nullish Coalescing (??) =====

// Uses fallback only for null or undefined

const userName = null;
console.log(userName ?? "Guest");
// Output: Guest

const city = undefined;
console.log(city ?? "Unknown");
// Output: Unknown

const country = "Pakistan";
console.log(country ?? "Unknown");
// Output: Pakistan



// ===== Difference between ?? and || =====

// || uses fallback for any falsy value

const age = 0;

console.log(age || 18);
// Output: 18

// ?? uses fallback only for null or undefined

console.log(age ?? 18);
// Output: 0



const name = "";

console.log(name || "Guest");
// Output: Guest

console.log(name ?? "Guest");
// Output: ""



// ?? -> Checks only null and undefined
// || -> Checks all falsy values (0, "", false, null, undefined, NaN)
