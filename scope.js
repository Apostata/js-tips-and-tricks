/**
 * Scope
 * in the sample below, the variable x is declared outside of the function, 
 * and can be used both in the function and outside the function, but 
 * when function print() the function gets the block scope of the function,
 * so the value of x is 5, but when the console.log(x+y) is called, the value 
 * of x is 3, because the value of x is declared outside of the function is 3
 */

function print(){
	var x = 5; 
	console.log(x+y)
} 
var x = 3; 
var y = 2;
print(); 
console.log(x+y);
 