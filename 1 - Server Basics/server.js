/*
My NodeJS Notes
================
CommonJS instead of ES6 modules
use require instead of import

npm = node package manager

Global Object instead of Window Object
console.log(global);

Node does not have fetch and other JS APIs -> Use packages

*/

const os = require('os')
const path = require('path')

// Not a Common core module so need ./ but do not need .js extension
// const math = require('./math') <- Traditional way to require
//console.log(math.multiply(5,7)) <- Returns 35 obviously

//Destructure way to pull functions from a module which would allow us to not require dot notation like math.add or math.subtract
//We can now just do add(x,y) without needing to write math.add(x,y)
const {add,subtract,multiply,divide} = require('./math')

console.log("I am dividing 28 by 4 and the result is " + divide(28,4) + ".")
console.log("I am adding 12 to 9 and the result is " + add(12,9) + ".")





// //os
// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

/*
console.log(__dirname)
console.log(__filename)

//path
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
*/

/* Parsing will return an object that has all of the above values from path */
// console.log(path.parse(__filename))

