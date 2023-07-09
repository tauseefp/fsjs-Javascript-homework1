// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEven = 0;
let sumOdd = 0;

for (let number = 0; number <= 100; number++) {
  if (number % 2 === 0) {
    sumEven += number;
  } else {
    sumOdd += number;
  }
}

console.log("Sum of even numbers:", sumEven);
console.log("Sum of odd numbers:", sumOdd);
