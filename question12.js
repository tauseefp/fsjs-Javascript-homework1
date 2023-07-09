
// 12. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.
// // 

const now = new Date();

const year=now.getFullYear();

const month=now.getMonth();

const date=now.getDate();

const day=now.getDay();

const hours=now.getHours();

const minutes=now.getMinutes();

const secondelapsed=Math.floor(now.getTime()/1000)


console.log("Year:", year);
console.log("Month (as a number):", month);
console.log("Date:", date);
console.log("Day (as a number):", day);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds elapsed from January 1, 1970 to now:", secondelapsed);