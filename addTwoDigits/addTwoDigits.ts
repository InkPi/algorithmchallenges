export function addTwoDigits(n: any): number {
    let digits= [];
    let sumDigit= 0;

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    digits= n.toString().split("");

    for(let i=0; i< digits.length; i++){
        digits[i]= parseInt(digits[i]);
    }

    console.log(digits);

    //digits.forEach(num => +num);

    sumDigit= digits.reduce(reducer);

    return sumDigit;
}

// console.log(addTwoDigits(29));