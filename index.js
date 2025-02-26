// Import required modules
const fs = require('fs'); // File system module for writing data to a file
const { v4: uuidv4 } = require('uuid'); // UUID package for generating unique identifiers
const validator = require('validator'); // Validator package for validating email format

// Function to generate a unique ID
function generateUniqueID(firstName, lastName) {
    // Generate a unique alphanumeric string, remove dashes, and take the first 8 characters
    const uniqueString = uuidv4().replace(/-/g, '').substring(0, 8);
    // Concatenate first letter of first name (lowercase), last name (lowercase), and unique string
    return firstName[0].toLowerCase() + lastName.toLowerCase() + uniqueString;
}

/* Function to add a new account */
function addAccount(userArray) {
    // Check if the user array contains exactly 4 elements
    if (userArray.length !== 4) return false;
    
    // Destructure the array into individual variables
    const [firstName, lastName, email, age] = userArray;
    
    // Validate input: Ensure all fields are present and valid
    if (!firstName || !lastName || !email || typeof age !== 'number') return false; // makes sure non-empty values
    if (!validator.isEmail(email)) return false; // Validate email format
    if (age < 18) return false; // Ensure the user is at least 18 years old
    
    // Generate a unique ID using the generateUniqueID function
    const uniqueID = generateUniqueID(firstName, lastName);
    
    // Format the user data as a CSV line
    const userData = `${firstName},${lastName},${email},${age},${uniqueID}\n`;
    
    try {
        // Append the user data to 'users.txt', creating the file if it does not exist
        fs.appendFileSync('users.txt', userData);
        return true; // Return true to indicate successful account creation
    } catch (error) {
        console.error('Error writing to file:', error); // Log any errors encountered
        return false; // Return false if writing to the file fails
    }
}

/* Export functions for external use */
module.exports = { generateUniqueID, addAccount };
