// Task-2: Calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla

// Function to calculate average marks
function calculateAverageMarks() {
    // Taking input from the user using readline module for Node.js
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Asking user for the marks of the five subjects
    rl.question('Enter the marks for Mathematics, Biology, Chemistry, Physics, and Bangla (comma-separated): ', (input) => {
        // Splitting the input string into an array of strings
        const marksArray = input.split(',').map(mark => parseFloat(mark.trim()));

        // Checking if all marks are valid numbers
        if (marksArray.some(mark => isNaN(mark))) {
            console.log("Invalid input! Please enter valid numbers.");
            rl.close();
            return;
        }

        // Calculating the total marks
        const totalMarks = marksArray.reduce((sum, mark) => sum + mark, 0);

        // Calculating the average marks
        const averageMarks = totalMarks / marksArray.length;

        // Printing the result with 2 decimal places
        console.log("Average marks: " + averageMarks.toFixed(2));

        // Closing the readline interface
        rl.close();
    });
}

// Calling the function to execute
calculateAverageMarks();
