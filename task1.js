// Task-1: Calculate the change after purchasing oranges and apples

// Function to calculate the change
function calculateChange() {
    // Taking input from the user using readline module for Node.js
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Asking user for the money they have
    rl.question('Enter the total money you have: ', (takaYouHave) => {
        // Asking user for the cost of fruits
        rl.question('Enter the total cost of 1kg oranges + 1kg apples: ', (costOfFruits) => {
            // Converting the inputs to integers
            takaYouHave = parseInt(takaYouHave);
            costOfFruits = parseInt(costOfFruits);

            // Checking if the inputs are valid numbers
            if (isNaN(takaYouHave) || isNaN(costOfFruits)) {
                console.log("Invalid input! Please enter valid numbers.");
                rl.close();
                return;
            }

            // Calculating the money returned by subtracting the cost from the money you have
            const moneyReturned = takaYouHave - costOfFruits;

            // Printing the result
            console.log("Money returned:", moneyReturned);

            // Closing the readline interface
            rl.close();
        });
    });
}

// Calling the function to execute
calculateChange();
