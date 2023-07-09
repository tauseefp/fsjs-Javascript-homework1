// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// Prompt the user to enter the radius
const radius = prompt("Enter the radius of the circle:");

// Calculate the area
const area = Math.PI * radius * radius;

// Calculate the circumference
const circumference = 2 * Math.PI * radius;

// Display the results
document.write("<h2>Circle Calculation Results:</h2>");
document.write("<p>Radius: " + radius + "</p>");
document.write("<p>Area: " + area.toFixed(2) + "</p>");
document.write("<p>Circumference: " + circumference.toFixed(2) + "</p>");
