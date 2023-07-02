
/**
 * Sum between different types
 * When we use + operator between different types, it does type conversion
 * and converts all the types to string and then concatenates them
 * But when we use + operator between same types, it does not do type conversion
 * and if it is a number, it adds them otherwise it concatenates them
 */
console.log('1' + 2 + 3);
console.log(1 + 2 + 3);
console.log('1' + '2' + '3');