import { preProcessFile } from "typescript";

export function adjacentElementsProduct(inputArray: number[]): number {
    let max_product= Number.MIN_SAFE_INTEGER;
    let nextVals= 0;

    for (let i=0; i < inputArray.length - 1; i++) {
        nextVals= inputArray[i] * inputArray[i+1];
        if(nextVals > max_product){
            max_product= nextVals;
        }
    }

    return nextVals;
}

/*export function adjacentElementsProduct(inputArray: number[]): number {
 const reducer= (accumulator, currentValue) => accumulator * currentValue;

 //let i= 0; 
 let currentSum= 0;
 let highestSum= 0;

 for (let i=0; i < inputArray.length; i++) {
     if (inputArray[i] > 0) { 
        currentSum += inputArray[i];
     }
     else if (inputArray[i] < 0 && highestSum == 0) {
         continue;
     }
     // do nothing!:
     if (inputArray[i] > 0 && currentSum > 0) {
        highestSum += inputArray[i];
    }
    if (currentSum > highestSum) {
        highestSum = currentSum;
    }
    
 }
 return highestSum;

 /* do {
    sum += inputArray[i]; 
    i++;
 } while (inputArray[i] > 0);  
    console.log("sum", sum);
} */

//console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));