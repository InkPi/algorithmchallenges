export function allLongestStrings(inputArray: string[]): string[] {
    let longestLength= 0;
    let longestStr= [];

    for(let i=0; i< inputArray.length; i++){
        if(inputArray[i].length > longestLength) {
            longestLength= inputArray[i].length;
        }
    }

    for(let j=0; j< inputArray.length; j++){
        if(inputArray[j].length == longestLength) {
            longestStr.push(inputArray[j]);
        }
    }

    return longestStr;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));