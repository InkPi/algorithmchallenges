export function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let maxArr= 0;
    let currentVal= 0;
    let i= 0;

    do {
        currentVal= inputArray[i] + inputArray[i + 1];
        if(currentVal > maxArr){
            maxArr= currentVal;
        }
        i ++;
    } while (i < inputArray.length - 1);

    return maxArr;
}

// console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));