export function alphabetSubsequence(s: string): boolean {
    var sortedAlphas;
    let alphaSet;

    sortedAlphas= s;
    
    sortedAlphas= sortedAlphas.split('').sort();

    alphaSet= [...new Set(sortedAlphas)].join('').toString();

    if(s === alphaSet) {
        return true;
    }
    return false;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
