// Original array
const numbers = [10, 15, 20, 25, 30];

// Step 1: Keep only even numbers
const result = numbers
  .filter((num) => {
    return num % 2 === 0;
  })

  // Step 2: Double each number
  .map((num) => {
    return num * 2;
  })

  // Step 3: Add all numbers
  .reduce((sum, current) => {
    return sum + current;
  });

console.log(result);


// same as above code just simplified

const numbers = [10, 15, 20, 25, 30];

const result = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2)
  .reduce((sum, current) => sum + current);

console.log(result);

//output 120


