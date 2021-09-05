export function alternatingSums(a: number[]): number[] {
    let teamOne= 0;
    let teamTwo= 0;
    let resultNum= [];

    for(let i=0; i< a.length; i++){
        if(i % 2 == 0) {
            teamOne += a[i];
        } else {
            teamTwo += a[i];
        }
    }

    resultNum.push(teamOne, teamTwo);
    
    return resultNum;
}

console.log(alternatingSums([50, 60, 60, 45, 70]))