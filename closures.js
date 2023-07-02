/**
 * Closure is a function that has access to its outer function scope even after 
 * the outer function has returned.
 */
function add(x) {
	var y = 2;
   return (function() {
	const z = 3;
	return x + y + z;
  })()
}

var x = 1;
console.log(add(x))