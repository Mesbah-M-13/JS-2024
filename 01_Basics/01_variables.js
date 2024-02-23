const accountId = 1212
let accountEmail ="himel@gmail.com"
var accountPassword="12345"
accountCity = "Dhaka"
let accountState;  // declaring variable without any assigned value

// accountId = 202 // not allowed , TypeError: Assignment to constant variable.
// console.log(accountId);
accountEmail ="himel@fb.com"
accountPassword="0076"
accountCity ="Khulna"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);