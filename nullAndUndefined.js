/**
 * null and undefined are two different things
 * null is an object
 * undefined is a type
 * So null and undefined are not equal, but when we use loose equality operator (==) they are equal
 * cause loose equality operator does type conversion and null and undefined are converted 
 * to same type (undefined)
 * But when we use strict equality operator (===) they are not equal cause strict equality operator
 * does not do type conversion and null and undefined are not of same type, cause null is an object and
 * undefined is a type
 */
console.log(typeof null)
console.log(typeof undefined)
console.log(null == undefined)
console.log(null === undefined)