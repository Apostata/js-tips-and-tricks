/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
    let response = 'NO'
    let x1Point = x1
    let x2Point = x2
    // Write your code here
        let count = 100000
        while( count > 0){
            if(x1Point === x2Point) {
                response = 'YES'
                break
            }
            x1Point +=v1
            x2Point +=v2
            count--
        }
    
    return response
}
console.log(kangaroo(0, 3, 4, 2))
console.log(kangaroo(0, 2, 5, 3))
console.log(kangaroo(21, 6, 47, 3))
