const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your age: ", (age) => {
    // Parse the age as a number
    age = parseInt(age);

    if (age >= 18) {
        console.log("You are old enough to drive.");
      } else {
        const yearsToWait = 18 - age;
        console.log("You are not yet 18. Please wait for", yearsToWait, "more years to drive.");
      }
    
      // Close the interface
      rl.close();
    });