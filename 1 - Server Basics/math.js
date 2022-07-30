/*
In this module I'm defining a bunch of anonymous functions assigned to constant variables.
Each of these variable names will exported at the end of this module so that they can
be imported/required in other modules either via dot notation or via destructuring
*/

const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

/*
Exporting the above variables to be used in other scripts
*/

module.exports = {
    add,
    subtract,
    multiply,
    divide
}

/* 

Can also export by using the following shortcut. Unsure if best or common practice.
Probably easier to read the module.exports method of exporting

exports.add = (a,b) => a+b;
exports.subtract = (a,b) => a-b;
exports.multiply = (a,b) => a*b;
exports.divide = (a,b) => a/b;

*/