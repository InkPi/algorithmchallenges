export function alphabeticShift(inputString: string): string {
    let newArr= [];

    for(let i=0; i< inputString.length; i++) {
        newArr.push(String.fromCharCode(inputString.charCodeAt(i)+1));
    }

    for(let j=0; j< newArr.length; j++) {
        if (newArr[j] == '{'){
            newArr[j] = 'a';
        }
    }

    return newArr.join('');

}

console.log(alphabeticShift('crazy'));