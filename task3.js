// Task-3: Find the remainder when divided by 5

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate the remainder
function findRemainder() {
    rl.question('Enter a number: ', (input) => {
        // Converting input to integer
        const number = parseInt(input.trim());

        // Validating input (Ensuring it's a number)
        if (isNaN(number)) {
            console.log("❌ Invalid input! Please enter a valid number.");
            rl.close();
            return;
        }

        // Calculating remainder
        const remainder = number % 5;

        // Printing the result
        console.log("✅ Remainder:", remainder);

        rl.close();
    });
}

// Calling the function
findRemainder();
