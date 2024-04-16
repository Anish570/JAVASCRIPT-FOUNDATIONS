// JavaScript Data Types and Values

// 1. Number
// - Represents numeric values
// - Ranges from -(2^53 - 1) to 2^53 - 1
// - Examples: 42, 3.14, -10

// 2. String
// - Represents text
// - Enclosed in single ('') or double ("") quotes
// - Examples: "Hello", 'JavaScript', "123"

// 3. Boolean
// - Represents true or false values
// - Used for logical operations and conditions
// - Examples: true, false

// 4. Null
// - Represents the intentional absence of any value
// - Often used to reset or clear a variable value
// - Example: let result = null;

// 5. Undefined
// - Represents a variable that has been declared but not assigned a value
// - Initial value of variables when they are declared
// - Example: let age;

// 6. Object
// - Represents a collection of key-value pairs
// - Used to store complex data structures
// - Example: let person = { name: "John", age: 30 };

// 7. Array
// - Represents a list of elements
// - Ordered collection of values, indexed by numerical indices
// - Example: let numbers = [1, 2, 3, 4, 5];

// 8. Function
// - Represents reusable blocks of code
// - Used for defining actions or computations
// - Examples:
//   function greet(name) {
//     return "Hello, " + name + "!";
//   }

// Note: JavaScript is a loosely typed language, allowing variables to hold values of any data type.

// 1. Number
const age = 25; // Age of the person

// 2. String
let name = "John"; // Name of the person

// 3. Boolean
let isStudent = true; // Whether the person is a student or not

// 4. Null
let car = null; // Represents absence of value (Note: It is an intentional absence of any value)

// 5. Undefined
let height; // Undefined variable (Note: Variable declared but not assigned a value)

// 6. Object
const person = {
  name: "Alice",
  age: 30,
}; // Object containing person's details

// 7. Array
const fruits = ["apple", "banana", "orange"]; // Array of fruits

// 8. Function
function greet(name) {
  return "Hello, " + name + "!";
} // Function to greet a person

// Display Data Types
console.log("Age:", age); // Log Number
console.log("Name:", name); // Log String
console.log("Is Student:", isStudent); // Log Boolean
console.log("Car:", car); // Log Null
console.log("Height:", height); // Log Undefined
console.log("Person:", person); // Log Object
console.log("Fruits:", fruits); // Log Array

// Call Function
console.log(greet("Emma")); // Log Function Output

//  Tips to Check the data type of variable or value
console.log("Type of fruits is:", typeof fruits); // Logs "object"
// - fruits is assumed to be an object, likely an array or an object literal

console.log("Type of person is:", typeof person); // Logs "object"
// - person is assumed to be an object, possibly containing properties like name, age, etc.

console.log("Type of 'Anish' is:", typeof "Anish"); // Logs "string"
// - "Anish" is a string literal, representing text

console.log("Type of 1234 is:", typeof 1234); // Logs "number"
// - 1234 is a numeric literal, representing a numerical value

console.log("Type of null is:", typeof null); // Logs "object"
// - typeof null returns "object", which is a known quirk in JavaScript

console.log("Type of undefined is:", typeof undefined); // Logs "undefined"
// - undefined represents a variable that has been declared but not assigned a value

/*
Note: JavaScript is a loosely typed language, meaning variables can hold values of any data type.
Information: 'null' represents an intentional absence of any value, whereas 'undefined' indicates a variable declared but not assigned a value.
*/

// Uncomment the following lines to modify data types
// age = 30; // Error: Cannot reassign a constant variable
// name = "Emily";
// isStudent = false;
// height = 180;

// Display Modified Data Types
// console.log(age);
// console.log(name);
// console.log(isStudent);
// console.log(height);
