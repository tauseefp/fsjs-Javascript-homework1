// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

// Create a new Date object
const now = new Date();

// Get the year, month, day, hours, and minutes
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');

// Format: YYYY-MM-DD HH:mm
const format1 = `${year}-${month}-${day} ${hours}:${minutes}`;

// Format: DD-MM-YYYY HH:mm
const format2 = `${day}-${month}-${year} ${hours}:${minutes}`;

// Format: DD/MM/YYYY HH:mm
const format3 = `${day}/${month}/${year} ${hours}:${minutes}`;

// Output the results
console.log("Format 1 (YYYY-MM-DD HH:mm):", format1);
console.log("Format 2 (DD-MM-YYYY HH:mm):", format2);
console.log("Format 3 (DD/MM/YYYY HH:mm):", format3);
