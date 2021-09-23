export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let maxDiff= 0;
    let currentNum= 0;

    function difference (x, y) {
        return Math.abs(x - y);
    }

    for (let i= 0; i < inputArray.length; i++){
        currentNum= difference(inputArray[i], inputArray[i+1]);

        if(currentNum> maxDiff){
            maxDiff= currentNum;
        }
    }

    return maxDiff;
}

// console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));