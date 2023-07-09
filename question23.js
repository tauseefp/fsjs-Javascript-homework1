// Write a program which tells the number of days in a month, now consider leap year.

function leapyear(year){
    return(year%4==100&&year%100!=0||year%400===0)
}

function getDaysInMonth(month,year){
    
    var daysInMonth = 0;

  switch (month) {
    case 1: // January
    case 3: // March
    case 5: // May
    case 7: // July
    case 8: // August
    case 10: // October
    case 12: // December
      daysInMonth = 31;
      break;
    case 4: // April
    case 6: // June
    case 9: // September
    case 11: // November
      daysInMonth = 30;
      break;
    case 2: // February
      daysInMonth = isLeapYear(year) ? 29 : 28;
      break;
    default:
      daysInMonth = -1; // Invalid month
  }

  return daysInMonth;
}

// Get user input for month and year
var monthInput = prompt("Enter the month (1-12):");
var yearInput = prompt("Enter the year:");

// Convert the user input to numbers
var month = parseInt(monthInput);
var year = parseInt(yearInput);

// Check if the input is valid
if (isNaN(month) || isNaN(year) || month < 1 || month > 12 || year < 1) {
  console.log("Invalid input!");
} else {
  // Call the function and display the result
  var daysInMonth = getDaysInMonth(month, year);
  if (daysInMonth === -1) {
    console.log("Invalid month!");
  } else {
    console.log("Number of days in the month: " + daysInMonth);
  }
}