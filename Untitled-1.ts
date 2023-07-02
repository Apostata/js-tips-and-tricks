function minimumBribes(q: number[]): void {
    let bribesCount = 0;
    const maxNonChaoticBribes = 2;
    for(let idx = 0; idx < q.length; idx++){
        const currPos = q[idx];
        const index = idx+1;

        if(currPos - index > maxNonChaoticBribes){
          console.log('Too chaotic');
          return;
        }
        const possibleBribes = currPos - maxNonChaoticBribes < 0 ? 0 : currPos-maxNonChaoticBribes;
        for(let pbIdx =possibleBribes; pbIdx < idx; pbIdx++){
            if(q[pbIdx] > currPos){
                bribesCount++;
            }
        }
    }
    console.log(bribesCount);
}
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])


const testCases ={
initial:[1, 2, 3, 4, 5, 6, 7, 8],
move1:[1, 2, 5, 3, 4, 6, 7, 8], //2 => index 5 para index 3 => 5-3 = 2
move2:[1, 2, 5, 3, 7, 4, 6, 8], //2 => index 7 para index 5 => 7-5 = 2
move3:[1, 2, 5, 3, 7, 8, 4, 6], //2 => index 8 para index 6 => 8-6 = 2
move4:[1, 2, 5, 3, 7, 8, 6, 4], //1 => index 8 para index 7 => 8-7 = 1
}