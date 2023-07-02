function migratoryBirds(arr: number[]): number {
    const mapBirdTypes = arr.reduce((acc, birdType)=>{
        if(acc[`${birdType}`]){
            acc[`${birdType}`]++;
        }
        else{
            acc[`${birdType}`]=1
        }
        return acc;
    },({} as {[key:string]:number}))

    const itemsWitMaxValue:number[]=[]

    const maxValue = Math.max(...Object.values(mapBirdTypes))
    const itemsWithMax = Object.keys(mapBirdTypes).filter((key)=>Number(mapBirdTypes[key]) === maxValue).sort()
    return Number(itemsWithMax[0])
}

// function migratoryBirds(arr: number[]): number {
//     const mapBirdTypes = arr.reduce((acc, birdType)=>{
//         if(acc[`${birdType}`]){
//             acc[`${birdType}`]++;
//         }
//         else{
//             acc[`${birdType}`]=1
//         }
//         return acc;
//     },({} as {[key:string]:number}))

//     const itemsWitMaxValue:number[]=[]

//     const maxValue = Math.max(...Object.values(mapBirdTypes))
//     const itemsWithMax = Object.keys(mapBirdTypes).filter((key)=>Number(mapBirdTypes[key]) === maxValue).sort()
//     return Number(itemsWithMax[0])
// }

console.log(migratoryBirds([1, 4, 4, 4, 5, 3])) // 4
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])) // 3
