// 'var' can be accessed before declaration.

console.log(a);   // undefined

var a = 10;

console.log(a);   // 10

// 'let' cannot be accessed before declaration (TDZ).

console.log(b);   // ReferenceError

let b = 20;

console.log(b);   // 20

// 'const' cannot be accessed before declaration (TDZ).

console.log(c);   // ReferenceError

const c = 30;

console.log(c);   // 30

/*
TDZ = Temporal Dead Zone

- var is hoisted and initialized with undefined.
- let and const are hoisted but remain uninitialized until their declaration.
- Accessing let or const before declaration throws a ReferenceError.
*/
