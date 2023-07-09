// Write a program which tells the number of days in a month.

function getDaysInMonths(month,year) {
    var date=new date(year,month-1,1)
    date.setmonth(date.getMonth()+1);
    date.setDate(date.getdate()-1);
    return date.getday();
    
}
var monthInput=prompt("Enter the month (1-12):");
var YearInput=prompt("Enter the Year");

var month = parseInt(monthInput);
var year = parseInt(yearInput);

if (isNaN(month) || isNaN(year) || month < 1 || month > 12 || year < 1) {
    console.log("Invalid input!");
  } else {
    // Call the function and display the result
    var daysInMonth = getDaysInMonth(month, year);
    console.log("Number of days in the month: " + daysInMonth);
  }