/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

//Divisão fatorial o numero em comum entro os arrays e suas quantidades

function getTotalX(a: number[], b: number[]): number {
    const nums:number[] = []
    for(let i=0; i <=Math.max(...b); i++){
        const someNumberIsDivisibleByA = a.every((num) => i % num === 0);
        const someBisDivisibleByNumber = b.every((num) => num % i === 0);
        if (someNumberIsDivisibleByA && someBisDivisibleByNumber) {
            nums.push(i)
        }
    }
    return nums.length
}

console.log(getTotalX([2, 4], [16, 32, 96]));
