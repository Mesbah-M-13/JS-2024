let score = "33"

// 2 ways to write typeof
// console.log(typeof(score));
// console.log(typeof score);

 let valueInNumber = Number(score)
// console.log(typeof valueInNumber);


let score1 = "44abc" // string with number and word 
// console.log(typeof score1);
let valueInNumber1 = Number(score1)
// console.log(valueInNumber1); // NaN

 let score2 = null // null to number conversion
// console.log(typeof score2);
 let valueInNumber2 = Number(score2)
// console.log(typeof valueInNumber2); 
// console.log(valueInNumber2); // 🍂 0 

 let score3 = undefined // undefined to number conversion
// console.log(typeof score3);
 let valueInNumber3 = Number(score3)
// console.log(typeof valueInNumber3); 
// console.log(valueInNumber3); // 🍃 NaN

 let score4 = false // boolean to number conversion
// console.log(typeof score4);
 let valueInNumber4 = Number(score4)
// console.log(typeof valueInNumber4); 
// console.log(valueInNumber4); // 🍂 true -> 1  false -> 0

 let score5 = 'Himel' // string to number conversion
// console.log(typeof score5);
let valueInNumber5 = Number(score5)
// console.log(typeof valueInNumber5); 
// console.log(valueInNumber5); // 🍃 NaN

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn);

let isLoggedIn1 = "" // ✅ empty string
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
//console.log(booleanIsLoggedIn1); // false

let isLoggedIn2 = "himel" // ✅ string
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
//console.log(booleanIsLoggedIn2); // true

// 1 => true; 0 => false
// "" => false
// "himel" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);