// Variable Practice

// 1. Your name (string)
let myName = "Grace Macharia";
console.log("My name is: " + myName);

// 2. Your age (number)
let myAge = 19;
console.log("My age is: " + myAge);

// 3. Whether you're a student (boolean)
let isStudent = true;
console.log("Am I a student? " + isStudent);

// 4. Your favorite colors (array)
let favoriteColors = ["pink", "purple", "black"];
console.log("My favorite colors are: " + favoriteColors);

// 5. Today's date (Date object)
let today = new Date(20-3-2026);
console.log("Today's date is: " + today);

// Basic math
let a = 10;
let b = 3;

console.log(a + b);   // Addition
console.log(a - b);   // Subtraction
console.log(a * b);   // Multiplication
console.log(a / b);   // Division
console.log(a % b);   // Modulus (remainder)
console.log(a ** b);  // Exponentiation

// Increment/Decrement
let count = 0;
count++;  // count is now 1
count--;  // count is now 0

let firstName = "Grace";
let lastName = "Macharia";

// Concatenation
let fullName = firstName + " " + lastName;

// Template literals (preferred)
let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} characters.`;

// String methods
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(firstName.charAt(0));
console.log(fullName.includes("Grace"));

// Comparison
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 === 5);  // true (strict equality)
console.log(5 == "5"); // true (loose equality - avoid!)
console.log(5 !== 3);  // true

// Logical
console.log(true && true);   // AND
console.log(true || false);  // OR
console.log(!true);          // NOT

let Age = 19;

// Age in days (approx, ignoring leap years)
let ageInDays = myAge * 365;
console.log("My age in days: " + ageInDays);

// Age in hours
let ageInHours = ageInDays * 24;
console.log("My age in hours: " + ageInHours);

// Year you'll turn 100
let currentYear = new Date().getFullYear();
let yearTurn100 = currentYear + (100 - myAge);
console.log("I will turn 100 in the year: " + yearTurn100);

