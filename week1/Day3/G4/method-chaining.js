// Original array
const numbers = [10, 15, 20, 25, 30];

// Method Chaining
const result = numbers
  .filter((num) => {
    return num > 15;
  })
  .map((num) => {
    return num * 2;
  })
  .reduce((sum, current) => {
    return sum + current;
  }, 0);

console.log(result);

// Single reduce() (Optimized)
const optimizedResult = numbers.reduce((sum, num) => {
  if (num > 15) {
    return sum + num * 2;
  }

  return sum;
}, 0);

console.log(optimizedResult);


//output 1 150 
//output 2 150 