// Import the required functions from index.js
const { generateUniqueID, addAccount } = require('./index');

// Test the generateUniqueID function
// This function takes a first name and last name as input and returns a unique identifier
console.log("Generated ID:", generateUniqueID("Alan", "Turing")); 
// Expected output: A unique ID in the format "aturingXXXXXXXX", where "XXXXXXXX" is an 8-character alphanumeric string

// Define a test user with valid input data
const testUser = ["Alan", "Turing", "aturing@w3c.com", 58];

// Test the addAccount function
// This function takes an array containing first name, last name, email, and age
// If all conditions are met (valid email, age >= 18, etc.), the user is saved to users.txt, and the function returns true
const result = addAccount(testUser);

// Log the result to verify if the account was successfully added
console.log("Account Added:", result); // Expected output: true if the account was successfully added, false otherwise