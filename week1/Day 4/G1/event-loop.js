console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// output
//Start
//End
//Promise
//Timeout

//Second example 

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

Promise.resolve().then(() => {
  console.log("4");
});

console.log("5");

//output
//1
//5
//3
//4
//2