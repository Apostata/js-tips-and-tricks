/**
 * Currying is a technique of evaluating function with multiple arguments, 
 * into sequence of function with single argument.
 */
function add(x) {
	return function(y) {
		return function(z) {
			return x + y + z;
		}
	}
}
console.log(add(1)(2)(3));

function add2(x) {
	return function(y) {
		return x + y + 2;
	}
}
// console.log(add2(1)(2));

console.log('--- Dynamic currying ---');

function sum(a, b, c) {
	return a + b + c;
}

function curry(func) {
	// console.log('func: ', func, func.length);
	// func is the function to transform
	return function curried(...args) {
		if (args.length >= func.length) { // (1)
			return func.apply(this, args);
		} else {
			return function(...args2) { // (2)
				return curried.apply(this, args.concat(args2));
			}
		}
	};
}

let curriedSum = curry(sum);

console.log( curriedSum(1, 2, 3) ); // 6, still callable normally
console.log( curriedSum(1)(2,3) ); // 6, currying of 1st arg
console.log( curriedSum(1,2),(3) ); // 6, currying of 2st arg
console.log( curriedSum(1)(2)(3) ); // 6, full currying
