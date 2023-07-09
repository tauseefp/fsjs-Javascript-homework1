// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3
//     - 4 >= 3
//     - 4 < 3
//     - 4 <= 3
//     - 4 == 4
//     - 4 === 4
//     - 4 != 4
//     - 4 !== 4
//     - 4 != '4'
//     - 4 == '4'
//     - 4 === '4'
//     - Find the length of python and jargon and make a falsy comparison statement.
// Assigning the expressions to variables
let expression1 = 4 > 3;
let expression2 = 4 >= 3;
let expression3 = 4 < 3;
let expression4 = 4 <= 3;
let expression5 = 4 == 4;
let expression6 = 4 === 4;
let expression7 = 4 != 4;
let expression8 = 4 !== 4;
let expression9 = 4 != '4';
let expression10 = 4 == '4';
let expression11 = 4 === '4';

// Confirming the results using console.log()
console.log(expression1);  // true
console.log(expression2);  // true
console.log(expression3);  // false
console.log(expression4);  // false
console.log(expression5);  // true
console.log(expression6);  // true
console.log(expression7);  // false
console.log(expression8);  // false
console.log(expression9);  // false
console.log(expression10); // true
console.log(expression11); // false

let pythonLength = "python".length;
let jargonLength = "jargon".length;

let falsyComparison = pythonLength === jargonLength;

console.log(falsyComparison); // false
