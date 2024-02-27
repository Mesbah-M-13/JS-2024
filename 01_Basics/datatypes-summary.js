//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

/* ✅✅✅ What does it mean that Javascript is a dynamic and weakly typed programming language? 
▶️▶️▶️It means that Javascript can hold values with different data types in the same variable during runtime [dynamic],

var x = 10; // x is initially a number
x = "Hello"; // Now, x holds a string value

console.log(x + 5); // Outputs: "Hello5"

and it can perform operations between different data types without explicitly converting them before [weakly].*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["batman", "sonic", "spiderman"];
let myObj = {
    name: "himel",
    age: 25,
}

const myFunction = function(){
   // console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/* 
✅ console.log(typeof Datatypes);

| Primitive Datatypes | JavaScript Type |
|---------------------|-----------------|
| Number              | number          |
| String              | string          |
| Boolean             | boolean         |
| null                | object          |
| undefined           | undefined       |
| Symbol              | symbol          |
| BigInt              | bigint          |

| Non-primitive Datatypes |                 |
|       (Reference)       | JavaScript Type |         
|-------------------------|-----------------|
| Arrays                  | object          |
| Function                | function object |
| Object                  | object          |
*/