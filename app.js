// app.js
import { add, subtract } from './mathmodule.js';
import { toUpperCase, toLowerCase } from './stringmodule.js';
 
// Call the functions and log results (your choice of arguments)
console.log('Add: ', add(5, 3));  
// Math test
console.log('Subtract: ', subtract(10, 4));
console.log(add(7, 2));  // Additional math test
console.log(subtract(20, 5));  // Additional math test
console.log(multiply(3, 4));  // Test multiplication
console.log(divide(15, 3));  // Test division
console.log(multiply(6, 7));  // Extra math test
console.log(divide(100, 4));  // Extra math test

console.log('Lowercase: ', toLowerCase('HELLO'));  // Test string manipulation
console.log('Uppercase: ', toUpperCase('hello'));  // Test string manipulation
console.log(toUpperCase('test string'));  // Additional string test
console.log(toLowerCase('ANOTHER TEST STRING'));  // Additional string test
console.log(toUpperCase('JavaScript Modules'));  // Extra string test
console.log(toLowerCase('MODULE SYSTEM'));  // Extra string test
console.log(toUpperCase('path example'));  // Extra string test
console.log(toLowerCase('EXAMPLE PATH'));  // Extra string test

