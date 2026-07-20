// ======================================================
// Topic 1: Rest Parameters
// ======================================================

// Rest parameter collects multiple values into a REAL ARRAY.
// It must always be the LAST parameter.

function student(name, ...marks) {
  console.log("Name:", name);
  console.log("Marks:", marks);
}

student("Ali", 80, 90, 95);

// Output:
// Name: Ali
// Marks: [80, 90, 95]



// ======================================================
// Topic 2: Rest Parameters vs arguments
// ======================================================

// ---------- Rest Parameter ----------
// Rest creates a REAL ARRAY.
// Array methods like push(), pop(), map(), filter() work.

function restExample(...numbers) {
  numbers.push(100); // Works because numbers is a real array
  console.log(numbers);
}

restExample(10, 20, 30);

// Output:
// [10, 20, 30, 100]



// ---------- arguments Object ----------
// arguments is an ARRAY-LIKE OBJECT.
// It is NOT a real array.

function argumentsExample() {
  console.log(arguments);

  console.log(arguments[0]); // 10
  console.log(arguments[1]); // 20
  console.log(arguments[2]); // 30

  // arguments.push(100);
  // TypeError: arguments.push is not a function
}

argumentsExample(10, 20, 30);



// Rest Parameters:
// ✔ ES6 Feature
// ✔ Collects values into a REAL ARRAY
// ✔ Supports push(), pop(), map(), filter(), reduce()
// ✔ Must be the last parameter

// arguments:
// ✔ Old ES5 Feature
// ✔ Automatically available inside normal functions
// ✔ Stores all passed arguments
// ✔ Array-like Object (NOT a real array)
// ✔ Does NOT support array methods directly