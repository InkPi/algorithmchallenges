export function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
    let newArr= inputArray;

    for(let i=0; i < inputArray.length; i++){
        if (inputArray[i] === elemToReplace) {
            newArr.splice(i, 1, substitutionElem);
        }
    }
    return newArr;
}

// console.log(arrayReplace([1, 2, 1], 1, 3));