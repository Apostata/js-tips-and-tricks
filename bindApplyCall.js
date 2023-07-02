const numbers = {
	one: 1,
	two: 2,
  };
  
  function print() {
	console.log(this,`${arguments}, ${arguments.length}`)
	console.log(`${this.one} + ${this.two}, ${typeof arguments[0]}, ${typeof arguments[1]}`);
  }

// execute the function print without any context
print();
/* Result:
Object [global] {...} [Arguments] {} 0
undefined + undefined, undefined, undefined
*/
  
/**
* Call: Calls the function, substituting the specified object for the this value of the function, 
and the specified list for the arguments of the function.

*/
  print.call(numbers, ['call', 'method']);
/* Result:
  	{ one: 1, two: 2 } [Arguments] { '0': [ 'call', 'function' ] }
	1 + 2, object, undefined
*/


/**
 * Apply: Calls the function, substituting the specified object for the this value of the function, 
 * and the specified set of arguments of the function.
 */

print.apply(numbers, ['apply', 'method']);
/* Result:
	{ one: 1, two: 2 } [Arguments] { '0': 'apply', '1': 'function' }
	1 + 2, string, string
*/


/**
 * For a given function, creates a bound function that has the same body as the original function.
 * The this object of the bound function is associated with the specified object, 
 * and has the specified initial parameters and a list of arguments to be passed to the new function.
 */
const bindedPrint = print.bind(numbers, ['bind', 'method']);
bindedPrint();
/* Result:
	{ one: 1, two: 2 } [Arguments] { '0': [ 'bind', 'function' ] }
	1 + 2, object, undefined
*/

const blockScope = {
	one: 11,
	two: 22,
	print: function() {
		console.log(this,arguments, arguments.length)
		console.log(`${this.one} + ${this.two}, ${typeof arguments[0]}, ${typeof arguments[1]}`);
	}
}

console.log('--- Block scope ---');
/**
 * in the sample below, the method print() is declared inside the object blockScope,
 * and then the method is called with different context with call, apply and bind
 * the results bellows shows that we achieve the same result with call, apply and bind
 * in the sample above cause we are passing the same context (numbers) to the method print()
 * even though the method print() is declared inside the object blockScope 
 */
blockScope.print(['objectScoped', 'objectScoped method']);
blockScope.print.call(numbers, ['call', 'objectScoped method']);
blockScope.print.apply(numbers, ['apply', 'objectScoped method']);
const blockScopedBind =  blockScope.print.bind(numbers, ['bind', 'objectScoped method']);
blockScopedBind();