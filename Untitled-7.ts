function birthday(s: number[], d: number, m: number): number {
    let count= 0;
    let sum = 0;
    for(let i = 0; i < s.length; i++) {
        sum += s[i];
        if(i >= m) {
            sum -= s[i - m];
        }
        if(i >= m - 1 && sum === d) {
            count++;
        }
    }
    return count;
}
// birthday function explanation:   