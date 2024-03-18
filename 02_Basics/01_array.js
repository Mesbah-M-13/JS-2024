
// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["waterman", "hulk"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

//console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

//console.log(myn1);
//console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
//console.log("C ", myArr);
//console.log(myn2);


/* ✅ NOTE:

▶️ The Array object,enables storing a collection of multiple items under a single variable name
▶️ JavaScript arrays are resizable and can contain a mix of different data types.

▶️ JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes. myArr2[1]

▶️ JavaScript arrays are zero-indexed: the first element of an array is at index 0

▶️ JavaScript array-copy operations create shallow copies.


✅ A shallow copy of an object is a copy whose properties share the same references // any changes will also change the original array 

✅ A deep copy of an object is a copy whose properties do not share the same references
*/


const arrOne = [10,11,12,14,15]
arrOne.push(16)
console.log(arrOne);

arrOne.shift()
console.log(arrOne);

arrOne.pop()
console.log(arrOne);



