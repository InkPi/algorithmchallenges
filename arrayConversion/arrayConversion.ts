export function arrayConversion(inputArray: number[]): number {
    let i= 0;
    let j= 0;
    let oddNum= [];
    let evenNum= [];

    do {
        oddNum.push(inputArray[i] + inputArray[i+1]);
        i += 2;
    } while (i < inputArray.length);

    i= 0;

    function repeatArr() {
        if(i < oddNum.length){
            evenNum.push(oddNum[i] * oddNum[i+1]);
            i += 2;
            repeatArr();
        } 

        if(j < evenNum.length){
            oddNum= [];
            oddNum.push(evenNum[j] + evenNum[j+1]);
            j += 2;
            repeatArr();
        } 
    }

    repeatArr();

    if (oddNum.length === 1) {
        return +oddNum;
    } 
    
    if (evenNum.length === 1) {
        return +evenNum;
    }
}

// console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
