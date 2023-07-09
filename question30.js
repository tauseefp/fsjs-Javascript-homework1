// 30. Write a script which generates a random hexadecimal number.
// Generate a random hexadecimal number
function generateRandomHexNumber() {
    const length = 6; // Specify the desired length of the hexadecimal number
  
    let hexNumber = "";
    const characters = "0123456789ABCDEF"; // All possible characters in hexadecimal
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      const randomChar = characters.charAt(randomIndex);
      hexNumber += randomChar;
    }
  
    return hexNumber;
  }
  
  // Usage example
  const randomHexNumber = generateRandomHexNumber();
  console.log(randomHexNumber);
  