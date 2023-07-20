// const users = [
//   {
//     _id: "ab12ex",
//     username: "Alex",
//     email: "alex@alex.com",
//     password: "123123",
//     createdAt: "08/01/2020 9:00 AM",
//     isLoggedIn: false,
//   },
//   {
//     _id: "fg12cy",
//     username: "Asab",
//     email: "asab@asab.com",
//     password: "123456",
//     createdAt: "08/01/2020 9:30 AM",
//     isLoggedIn: true,
//   },
//   {
//     _id: "zwf8md",
//     username: "Brook",
//     email: "brook@brook.com",
//     password: "123111",
//     createdAt: "08/01/2020 9:45 AM",
//     isLoggedIn: true,
//   },
//   {
//     _id: "eefamr",
//     username: "Martha",
//     email: "martha@martha.com",
//     password: "123222",
//     createdAt: "08/01/2020 9:50 AM",
//     isLoggedIn: false,
//   },
//   {
//     _id: "ghderc",
//     username: "Thomas",
//     email: "thomas@thomas.com",
//     password: "123333",
//     createdAt: "08/01/2020 10:00 AM",
//     isLoggedIn: false,
//   },
// ];

//a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

// function signUp(userData) {
//   var isUserExist = false;
//   users.forEach((e) => {
//     if (e._id == userData._id) {
//       isUserExist = true;
//     }
//   });
//   if (isUserExist) {
//     console.log("User already existed");
//   } else {
//     users.push(userData);
//   }
// }

//b. Create a function called signIn which allows user to sign in to the application
// function signIn(userData) {
//   var isUserExist = false;
//   users.forEach((e) => {
//     if (e._id == userData._id) {
//       isUserExist = true;
//     }
//   });
//   if (isUserExist) {
//     console.log("Logged in Sucessful");
//   } else {
//     console.log("Please Signup first");
//   }
// }

// const products = [
//   {
//     _id: "eedfcf",
//     name: "mobile phone",
//     description: "Huawei Honor",
//     price: 200,
//     ratings: [
//       { userId: "fg12cy", rate: 5 },
//       { userId: "zwf8md", rate: 4.5 },
//     ],
//     likes: [],
//   },
//   {
//     _id: "aegfal",
//     name: "Laptop",
//     description: "MacPro: System Darwin",
//     price: 2500,
//     ratings: [],
//     likes: ["fg12cy"],
//   },
//   {
//     _id: "hedfcg",
//     name: "TV",
//     description: "Smart TV:Procaster",
//     price: 400,
//     ratings: [{ userId: "fg12cy", rate: 5 }],
//     likes: ["fg12cy"],
//   },
// ];

//3. The products array has three elements and each of them has six properties.

//  a. Create a function called rateProduct which rates the product

// function rateProduct(id, ratingDetail) {
//   products.forEach((e) => {
//     if (e._id == id) {
//       e.ratings.push(ratingDetail);
//     }
//   });
// }

// rateProduct("hedfcg", { userId: "ddbjsds", rate: 10 });
// products.forEach((e) => {
//   if (e._id == "hedfcg") {
//     console.log(e.ratings);
//   }
// });

//  b. Create a function called averageRating which calculate the average rating of a product

// function averageRating(id) {
//   var avg = 0;
//   var prod;
//   products.forEach((e) => {
//     if (e._id == id) {
//       prod = e;
//     }
//   });
//   prod.ratings.forEach((e) => {
//     avg = avg + e.rate;
//   });
//   avg = avg / prod.ratings.length;
//   console.log(avg);
// }

// averageRating("eedfcf");

// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

// function likeProduct(userId, productId) {
//   products.forEach((e) => {
//     if (e._id == productId) {
//       e.likes.forEach((u) => {
//         if (u == userId) {
//           e.likes.filter((l) => l == userId);
//           console.log(e.likes);
//         } else {
//           e.likes.push(userId);
//           console.log(e.likes + " pushed");
//         }
//       });
//     }
//   });
// }

// likeProduct("abc", "hedfcg");

// const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const products = [
//   { product: "banana", price: 3 },
//   { product: "mango", price: 6 },
//   { product: "potato", price: " " },
//   { product: "avocado", price: 8 },
//   { product: "coffee", price: 10 },
//   { product: "tea", price: "" },
// ];

//- Use forEach to console.log each name in the names array.

// names.forEach((e) => {
//   console.log(e);
// });

//- Use forEach to console.log each country in the countries array.

// countries.forEach((e) => {
//   console.log(e);
// });

//- Use forEach to console.log each number in the numbers array.

// numbers.forEach((e) => {
//   console.log(e);
// });

//- Use map to create a new array by changing each country to uppercase in the countries array.

// var uArray = countries.map((e) => e.toUpperCase());
// console.log(uArray);

//- Use map to create an array of countries length from countries array.

// var cLArray = countries.map((e) => e.length);
// console.log(cLArray);

// - Use map to create a new array by changing each number to square in the numbers array

// var sqNumber = numbers.map((e) => e * e);
// console.log(sqNumber);

//- Use map to change to each name to uppercase in the names array

// var capsName = names.map((e) => e.toUpperCase());
// console.log(capsName);

// TODO  //- Use map to map the products array to its corresponding prices.

// - Use filter to filter out countries containing land.

// var landArray = countries.filter((e) => e.includes("land"));
// console.log(landArray);

//- Use filter to filter out countries having six character.

// var sixCharacterArray = countries.filter((e) => e.length == 6);

// console.log(sixCharacterArray);

//- Use filter to filter out countries containing six letters and more in the country array.

// var sixCharacterArray = countries.filter((e) => e.length >= 6);
// console.log(sixCharacterArray);

// - Use filter to filter out country start with 'E';

// var Ecountries = countries.filter((e) => e.startsWith("E"));
// console.log(Ecountries);

//- Use filter to filter out only prices with values.

// var numArray = products.filter((e) => typeof e.price == "number");

// console.log(numArray);

//- Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

// function getStringsList(list) {
//   var stringList = list.filter((e) => typeof e == "string");
//   console.log(stringList);
// }

// getStringsList(["hello", "yolo", 1, 2, 3]);

//- Use reduce to sum all the numbers in the numbers array.

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var sumArr = arr.reduce((p, c) =>  p + c);
// console.log(sumArr);

//- Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
// var sentence = countries.reduce((p, c) => {
//   if (c == countries[countries.length - 1]) {
//     return p + " and " + c + " are north European countries ";
//   }

//   return p + " " + c;
// });

// console.log(sentence);

// function isGreaterThenSeven(e) {
//   return e > 7 == 0;
// }

// console.log(names.some(isGreaterThenSeven));

//- Use every to check if all the countries contain the word land

// const isContainLand = (e) => e.includes("Land");
// console.log(countries.every(isContainLand));

// Use find to find the first country containing only six letters in the countries array

// console.log(countries.find((e) => e.length == 6));

//- Use findIndex to find the position of the first country containing only six letters in the countries array

// console.log(countries.findIndex((e) => e.length == 6));

//- Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

// console.log(countries.findIndex((e) => e == "Norway"));

//- Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

// console.log(countries.findIndex((e) => e == "Russia"));

// const a = [4, 5, 8, 9];
// const b = [3, 4, 5, 7];
// const countries = ["Finland", "Sweden", "Norway"];

// - create an empty set
// var newSet = new Set();

//- Create a set containing 0 to 10 using loop

// for (let i = 0; i <= 10; i++) {
// newSet.add(i);
// }

//- Remove an element from a set

// newSet.delete(3);

//Clear a set
// newSet.clear();

//Create a set of 5 string elements from array

// var ar = ["Hello", "Hola", "Am", "YOLO", "HO"];
// var setFromString = new Set(ar);

// Create a map of countries and number of characters of a country
// var countriesMap = new Map();
// countries.forEach((e) => {
// countriesMap.set(e, e.length);
// });

const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTMl", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTMl", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTMl"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTMl", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTMl", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTMl", "CSS", "JS"],
    age: 20,
  },
];

//- Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

// var [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

// Destructure and assign the elements of countries array to fin, est, sw, den, nor

// var [fin, est, sw, den, nor] = countries;
// console.log(fin);

//- Destructure the rectangle object by its properties or keys.
// var { width, height, area, perimeter } = rectangle;
// console.log(width, height, area, perimeter);

//  TODO:  //- Iterate through the users array and get all the keys of the object using destructuring

// users.forEach((e) => {
//   var { name, scores, skills, age } = e;
//   console.log(name, scores, skills, age);
// });

//Find the persons who have less than two skills

// users.forEach((e) => {
//   var { _, _, skills, _ } = e;
//   if (skills.length < 2) {
//     console.log(e.name);
//   }
// });

// Create a closure which has one inner function

// function sayHello() {
//   var name = "tauseef";
//   function sayName() {
//     console.log(name);
//   }
//   sayName();
// }

// console.log(sayHello());

// Create a closure which has three inner functions

// function sayHello() {
//   var name = "Mohd";
//   function sayFistName() {
//     var fname = " tauseef";
//     function sayLastName() {
//       var lname = " patel";
//       function sayName() {
//         console.log(name + fname + lname);
//       }
//       sayName();
//     }
//     sayLastName();
//   }
//   sayFistName();
// }
