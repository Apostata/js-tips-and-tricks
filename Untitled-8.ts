function divisibleSumPairs(n: number, k: number, ar: number[]): number {
    // n = length of array
    // k = divisor
    // ar = array of integers
    let count = 0;
    const newAr = [...ar]
    for(let i=0; i <ar.length; i++){
        let currValue = newAr.splice(0, 1)
        let idx = 0
        
        for(let num of newAr){
            idx++
            if(idx <= newAr.length){
                const sum = currValue[0] + num
                if(sum % k === 0){
                    count++
                }
            }
        }
        
    }
    return count
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])) // 5
console.log(divisibleSumPairs(5, 2, [5, 9, 10, 7, 4])) // 4

// 5 + 9 = 14 /2 = 7 OK
// 5 + 10 = 10 /2 = 7.5 NO 
// 5 + 7 = 12/2 = 6 OK 
// 5 + 4 = 9/2 = 4.5 NO 
// 9 + 10 = 19 /2 = 9.5 NO 
// 9 + 7 = 16/2 = 8 OK 
// 9 + 4  = 13/2 = 6.5 NO 
// 10 + 7 = 17/2 = 8.5 NO 
// 10 + 4 = 14/2 = 7 OK 
// 7 + 4 = 13/2 = 6.5 NO 
// res = 4

// [5, 9, 10, 7, 4]
// [5] + [9, 10, 7, 4]
// [9] + [10, 7, 4]
// [10] + [7, 4]
// [7] + [4]
