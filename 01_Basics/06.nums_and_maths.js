const score = 400;
//console.log(score);

const balance = new Number(350)
//console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length); // now I can use string methods
// console.log(typeof balance);

//console.log(balance.toFixed(2));             // 1.toFixed()

const otherNumber = 2250.60405
//console.log(otherNumber.toPrecision(2));      // 2.toPrecision()
//console.log(otherNumber.toString());

const hundreds = 20000000
console.log(hundreds.toLocaleString('en-IN'));// 3.toLocaleString()
                                              // 4.toString()


const myNum = new Number(100)
const tokenNumber = myNum.valueOf()           // 5.valueOf()

console.log(tokenNumber);


//++++++++++++++++++++ Math ++++++++++++++++++++

// console.log(Math);                       
// console.log(Math.abs(-4));                 //1.Math.abs()
// console.log(Math.round(4.6));              //2.Math.round()
// console.log(Math.ceil(4.2));               //3.Math.ceil()
// console.log(Math.floor(4.9));              //4.Math.floor()
// console.log(Math.min(4, 3, 6, 8));         //5.Math.min()
// console.log(Math.max(4, 3, 6, 8));         //6.Math.max()

// console.log(Math.random());                   //7.Math.random()
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

//console.log(Math.floor(Math.random() * (max - min + 1)) + min) // ✅✅✅
console.log( Math.floor((max - min + 1)*Math.random()+ min))  // ✅✅✅