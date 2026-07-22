// Array of students
const students = [
  { name: "Ali", passed: true },
  { name: "Ahmed", passed: true },
  { name: "Usman", passed: false },
];

// some() → Checks if at least one student failed
const hasFailedStudent = students.some((student) => {
  return student.passed === false;
});

console.log(hasFailedStudent);

// every() → Checks if all students passed
const allPassed = students.every((student) => {
  return student.passed === true;
});

console.log(allPassed);

//output
//1 true
//2 false
