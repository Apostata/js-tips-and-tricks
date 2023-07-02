function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
    let applesReachHouse = 0
    let oreangesReachHouse = 0;

    apples.forEach((applePos)=>{
        const fallingPos = a + applePos
        if(fallingPos >= s && fallingPos <= t ){
            applesReachHouse++
        }
    })

    oranges.forEach((orangePos)=>{
        const fallingPos = b + orangePos
        if(fallingPos >= s && fallingPos <= t ){
            oreangesReachHouse++
        }
    })

    console.log(`${applesReachHouse}\n${oreangesReachHouse}`) 

}

const houseRange = [7, 11] //7 start end at 11
const trees={
    apple: 5,
    orange: 15
}
const fallingFruitsPosition={
    apple:[-2, 2, 1],
    orange:[5, -6]
}

countApplesAndOranges(houseRange[0], houseRange[1], trees.apple, trees.orange, fallingFruitsPosition.apple, fallingFruitsPosition.orange )