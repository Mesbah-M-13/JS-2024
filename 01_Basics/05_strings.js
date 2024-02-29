const name = "himel"
const repoCount = 50

// console.log(name + repoCount + " Value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('himel-hm-com')
//console.log(gameName.length);

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);                //1. length
// console.log(gameName.toUpperCase());         //2. toUpperCase
//console.log(gameName.charAt(2));              //3. charAt
console.log(gameName.indexOf('l'));             //4. indexOf

const newString = gameName.substring(0, 3)      //5. substring ( -ve not allowed,if put - it changes to 0)
//console.log(newString);

const anotherString = gameName.slice(-12, 5)     //6. slice
console.log(anotherString);

const newStringOne = "   himel    "
// console.log(newStringOne);
// console.log(newStringOne.trim());            //7. trim

const url = "https://himel.com/himel%20mesbah"

console.log(url.replace('%20', '-'))            //8. replace

console.log(url.includes('bah'))                //9. includes

console.log(gameName.split('-'));               //10. split