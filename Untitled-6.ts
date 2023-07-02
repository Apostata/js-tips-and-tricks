function breakingRecords(scores: number[]): number[] {
    const records=[scores[0], scores[0]]
    const count = [0,0]
    
    for(let i = 1; i<=scores.length; i++){
        if(scores[i] < records[1]){
            count[1]++
            records[1] = scores[i]
        }
        if(scores[i] > records[0]){
            count[0]++
            records[0] = scores[i]
        }
    }
    return count
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]))