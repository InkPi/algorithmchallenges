export function arrayChange(inputArray: number[]): number {
    let numbersNeeded= 0;

    for (let i= 0; i < inputArray.length; i++){
        if (inputArray[i] < i + 1){
            numbersNeeded += (i+1) - inputArray[i];
        }
    }
    return numbersNeeded;
}

// console.log(arrayChange([1, 1, 1]));