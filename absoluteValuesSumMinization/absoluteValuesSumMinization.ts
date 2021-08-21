export function absoluteValuesSumMinimization(a: number[]): number {
    let middleArr= 0;
    middleArr= Math.floor((a.length- 1)/2);
    return a[middleArr];
}

// console.log(absoluteValuesSumMinimization([2, 4, 7]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));